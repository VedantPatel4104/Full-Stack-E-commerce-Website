"use client";

import { SectionTitle } from "@/components";
import { useProductStore } from "../_zustand/store";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { isValidCardNumber, isValidCreditCardCVVOrCVC, isValidCreditCardExpirationDate, isValidEmailAddressFormat, isValidNameOrLastname } from "@/lib/utils";
import CustomButton from "@/components/CustomButton";
import StripePaymentButton from "../../components/StripePaymentButton"; // Importing StripePaymentButton

const CheckoutPage = () => {
  const [checkoutForm, setCheckoutForm] = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
    cardName: "",
    cardNumber: "",
    expirationDate: "",
    cvc: "",
    company: "",
    adress: "",
    apartment: "",
    city: "",
    country: "",
    postalCode: "",
    orderNotice: "",
  });

  const { products, total, clearCart } = useProductStore();
  const router = useRouter();
  const amount = total * 100; // Set the amount for Stripe payment (in cents)

  const makePurchase = async () => {
    if (
      checkoutForm.name.length > 0 &&
      checkoutForm.lastname.length > 0 &&
      checkoutForm.phone.length > 0 &&
      checkoutForm.email.length > 0 &&
      checkoutForm.cardName.length > 0 &&
      checkoutForm.expirationDate.length > 0 &&
      checkoutForm.cvc.length > 0 &&
      checkoutForm.company.length > 0 &&
      checkoutForm.adress.length > 0 &&
      checkoutForm.apartment.length > 0 &&
      checkoutForm.city.length > 0 &&
      checkoutForm.country.length > 0 &&
      checkoutForm.postalCode.length > 0
    ) {
      if (!isValidNameOrLastname(checkoutForm.name)) {
        toast.error("You entered invalid format for name");
        return;
      }

      if (!isValidNameOrLastname(checkoutForm.lastname)) {
        toast.error("You entered invalid format for lastname");
        return;
      }

      if (!isValidEmailAddressFormat(checkoutForm.email)) {
        toast.error("You entered invalid format for email address");
        return;
      }

      if (!isValidNameOrLastname(checkoutForm.cardName)) {
        toast.error("You entered invalid format for card name");
        return;
      }

      if (!isValidCardNumber(checkoutForm.cardNumber)) {
        toast.error("You entered invalid format for credit card number");
        return;
      }

      if (!isValidCreditCardExpirationDate(checkoutForm.expirationDate)) {
        toast.error("You entered invalid format for credit card expiration date");
        return;
      }

      if (!isValidCreditCardCVVOrCVC(checkoutForm.cvc)) {
        toast.error("You entered invalid format for credit card CVC or CVV");
        return;
      }

      // sending API request for creating an order
      const response = await fetch("http://localhost:3001/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: checkoutForm.name,
          lastname: checkoutForm.lastname,
          phone: checkoutForm.phone,
          email: checkoutForm.email,
          company: checkoutForm.company,
          adress: checkoutForm.adress,
          apartment: checkoutForm.apartment,
          postalCode: checkoutForm.postalCode,
          status: "processing",
          total: total,
          city: checkoutForm.city,
          country: checkoutForm.country,
          orderNotice: checkoutForm.orderNotice,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          const orderId: string = data.id;
          // for every product in the order we are calling addOrderProduct function that adds fields to the customer_order_product table
          for (let i = 0; i < products.length; i++) {
            let productId: string = products[i].id;
            addOrderProduct(orderId, products[i].id, products[i].amount);
          }
        })
        .then(() => {
          setCheckoutForm({
            name: "",
            lastname: "",
            phone: "",
            email: "",
            cardName: "",
            cardNumber: "",
            expirationDate: "",
            cvc: "",
            company: "",
            adress: "",
            apartment: "",
            city: "",
            country: "",
            postalCode: "",
            orderNotice: "",
          });
          clearCart();
          toast.success("Order created successfully");
          setTimeout(() => {
            router.push("/confirmation");
          }, 1000);
        });
    } else {
      toast.error("You need to enter values in the input fields");
    }
  };

  const addOrderProduct = async (
    orderId: string,
    productId: string,
    productQuantity: number
  ) => {
    // sending API POST request for the table customer_order_product that does many to many relationship for order and product
    const response = await fetch("http://localhost:3001/api/order-product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customerOrderId: orderId,
        productId: productId,
        quantity: productQuantity,
      }),
    });
  };

  useEffect(() => {
    if (products.length === 0) {
      toast.error("You don't have items in your cart");
      router.push("/cart");
    }
  }, [products]);

  return (
    <div className="bg-white">
      <SectionTitle title="Checkout" path="Home | Cart | Checkout" />

      <main className="relative mx-auto grid max-w-screen-2xl grid-cols-1 gap-x-16 lg:grid-cols-2 lg:px-8 xl:gap-x-48">
        <h1 className="sr-only">Order information</h1>

        <section aria-labelledby="summary-heading" className="bg-gray-50 px-4 pb-10 pt-16 sm:px-6 lg:col-start-2 lg:row-start-1 lg:bg-transparent lg:px-0 lg:pb-16">
          <div className="mx-auto max-w-lg lg:max-w-none">
            <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
              Order summary
            </h2>

            <ul role="list" className="divide-y divide-gray-200 text-sm font-medium text-gray-900">
              {products.map((product) => (
                <li key={product?.id} className="flex items-start space-x-4 py-6">
                  <Image
                    src={product?.image ? `/${product?.image}` : "/product_placeholder.jpg"}
                    alt={product?.title}
                    width={80}
                    height={80}
                    className="h-20 w-20 flex-none rounded-md object-cover object-center"
                  />
                  <div className="flex-auto space-y-1">
                    <h3>{product?.title}</h3>
                    <p className="text-gray-500">x{product?.amount}</p>
                  </div>
                  <p className="flex-none text-base font-medium">${product?.price}</p>
                </li>
              ))}
            </ul>

            <dl className="hidden space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-gray-900 lg:block">
              <div className="flex items-center justify-between">
                <dt className="text-gray-600">Subtotal</dt>
                <dd>${total}</dd>
              </div>

              <div className="flex items-center justify-between">
                <dt className="text-gray-600">Shipping</dt>
                <dd>$5</dd>
              </div>

              <div className="flex items-center justify-between">
                <dt className="text-gray-600">Taxes</dt>
                <dd>${total / 5}</dd>
              </div>

              <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                <dt className="text-base">Total</dt>
                <dd className="text-base">${total === 0 ? 0 : Math.round(total + total / 5 + 5)}</dd>
              </div>
            </dl>
          </div>
        </section>

        <form className="px-4 pt-16 sm:px-6 lg:col-start-1 lg:row-start-1 lg:px-0">
          <div className="mx-auto max-w-lg lg:max-w-none">
            <section aria-labelledby="contact-info-heading">
              <h2 id="contact-info-heading" className="text-lg font-medium text-gray-900">
                Contact information
              </h2>

              <div className="mt-6">
                <label htmlFor="name-input" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <div className="mt-1">
                  <input
                    value={checkoutForm.name}
                    onChange={(e) => setCheckoutForm({ ...checkoutForm, name: e.target.value })}
                    type="text"
                    id="name-input"
                    name="name-input"
                    autoComplete="text"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="lastname-input" className="block text-sm font-medium text-gray-700">
                  Lastname
                </label>
                <div className="mt-1">
                  <input
                    value={checkoutForm.lastname}
                    onChange={(e) => setCheckoutForm({ ...checkoutForm, lastname: e.target.value })}
                    type="text"
                    id="lastname-input"
                    name="lastname-input"
                    autoComplete="text"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* Add remaining fields like phone, email, address, etc. */}

              <CustomButton
                paddingX={4}
                paddingY={3}
                text="Complete Purchase"
                buttonType="button"
                customWidth="full"
                textSize="lg"
                onClick={makePurchase}
              />
              {/* Stripe Payment Button */}
              <StripePaymentButton amount={amount} />
            </section>
          </div>
        </form>
      </main>
    </div>
  );
};

export default CheckoutPage;
