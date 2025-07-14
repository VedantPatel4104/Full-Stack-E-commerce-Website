<h1>Electronics eCommerce Shop With Admin Dashboard in Next.js and Node.js</h1>

<p><b>Electronics eCommerce shop with admin dashboard in Next.js and Node.js</b> is a <b>free eCommerce store</b> developed using Next.js, Node.js and MySQL. The application is completely built from scratch (custom design) and is fully responsive.</p>

<h2>Singitronic – Key features</h2>
<p>Singitronic is a full-stack e-commerce application built using Next.js and Node.js. It features a <b>fully functional admin dashboard</b>, is <b>completely open-source</b>, and can be used as a <b>template or boilerplate</b> for your future projects. The app is responsive, manually tested, and available for <b>free download</b>.</p>

<h3>Is Next.js good for eCommerce?</h3>
<p>Yes, Next.js is highly suitable for building eCommerce applications. It offers great performance, SEO optimization, developer experience, and scalability—making it an ideal choice for custom eCommerce solutions.</p>

<h2>Installation & Setup</h2>

<h3>Prerequisites</h3>
<ol>
  <li>Install Node.js and npm: <a href="https://nodejs.org/en" target="_blank">https://nodejs.org/en</a></li>
  <li>Install MySQL: <a href="https://dev.mysql.com/downloads/installer/" target="_blank">https://dev.mysql.com/downloads/installer/</a></li>
  <li>Optional but recommended: Install HeidiSQL: <a href="https://www.heidisql.com" target="_blank">https://www.heidisql.com</a></li>
</ol>

<h3>Steps</h3>
<ol>
  <li>Download and extract the project files.</li>
  <li>Open the project folder in your code editor and create a file named <code>.env</code> in the root folder with the following content:</li>
</ol>

<pre>
# ✅ DATABASE CONNECTION
DATABASE_URL="mysql://your_mysql_user:your_password@localhost:3306/your_database_name"

# ✅ AUTH SETTINGS
NEXTAUTH_SECRET="your_nextauth_secret_here"
NEXTAUTH_URL=http://localhost:3000

# ✅ STRIPE KEYS
STRIPE_SECRET_KEY="your_stripe_secret_key_here"
STRIPE_PUBLISHABLE_KEY="your_stripe_publishable_key_here"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="your_stripe_publishable_key_here"

# ✅ SITE CONFIG
NEXT_PUBLIC_SITE_URL=http://localhost:3000
</pre>

<ol start="3">
  <li>Create another <code>.env</code> file inside the <code>server</code> folder with this line:</li>
</ol>

<pre>
DATABASE_URL="mysql://your_mysql_user:your_password@localhost:3306/your_database_name"
</pre>

<ol start="4">
  <li>Open your terminal in the root directory and run:</li>
</ol>

<pre>npm install</pre>

<ol start="5">
  <li>Navigate to the server folder and install backend dependencies:</li>
</ol>

<pre>
cd server
npm install
</pre>

<ol start="6">
  <li>Run the Prisma migration:</li>
</ol>

<pre>npx prisma migrate dev</pre>

<ol start="7">
  <li>Insert demo data by running the following from the <code>server/utils</code> folder:</li>
</ol>

<pre>
cd utils
node insertDemoData.js
</pre>

<ol start="8">
  <li>Start the backend server from the <code>server</code> folder:</li>
</ol>

<pre>
cd ..
node app.js
</pre>

<ol start="9">
  <li>Open a new terminal (while backend is running) and run the frontend:</li>
</ol>

<pre>
cd ..
npm run dev
</pre>

<ol start="10">
  <li>Visit <a href="http://localhost:3000" target="_blank">http://localhost:3000</a> to see the app live!</li>
</ol>
