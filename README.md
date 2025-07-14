<h1>Electronics eCommerce Shop With Admin Dashboard in Next.js and Node.js</h1>

<p><b>Electronics eCommerce shop with admin dashboard in Next.js and Node.js</b> is a <b>free eCommerce store</b> developed using Next.js, Node.js and MySQL. The application is completely built from scratch (custom design) and is fully responsive.</p>

<p>The project is called <b>Singitronic</b>, a modern online store specializing in electronics. It was created as part of a college project made by <b>Vedant Patel</b>. Along with the app, we also developed a <b>40-page software engineering document</b>, which is summarized in the project repository. The documentation is based on the book „Razvoj aplikativnog softvera“ by Singidunum University professor Violeta Tomašević. Also, college lectures by Violeta Tomašević and Petar Kresoja helped a lot with the implementation of the application.</p>

<h2>2. Software engineering process</h2>
<p>During the design and modeling of the software, we decided to use the cascade model (waterfall model). We chose it for its simplicity, ease of project monitoring, and clear structure. The model was first introduced in 1970 and features sequential phases where the next stage begins only after the previous one is completed.</p>

<h3>2.1. Defining milestones</h3>
<p>Milestones are key project events that help us track deadlines. We defined milestones for every phase of our software engineering process.</p>

<h3>2.2. Plaky - Project management application</h3>
<p>We used Plaky for project management and tracking. It's a free collaboration tool that makes it easy to generate reports and keep the project organized.</p>

<h2>3. Requirements analysis</h2>

<h3>3.1. Software requirements specification</h3>
<p>We defined all functional and non-functional requirements for the application. This included system-environment interaction and performance expectations.</p>

<h3>3.2. Modeling the system with a use case diagram</h3>
<p>The use case diagram illustrates system functionality across different use scenarios, outlining actors, steps, and both success and alternative paths.</p>

<h2>4. System design</h2>
<p>In this phase, we converted ideas and requirements into a working software structure. We defined system architecture, frontend and backend design, data structures, and database schema.</p>

<h2>5. Software implementation</h2>
<p>This is the phase where programming begins. Internal documentation such as comments and structured code headers were emphasized to improve code maintainability and understanding during and after development.</p>

<h2>6. Testing</h2>
<p>Testing was conducted manually, following a structured process that involved test scripts, test IDs, input/output, components, methods, and test techniques. Over 350 test cases were created and executed. Errors were logged with detailed records including IDs, severity, file names, and phases.</p>

<h3>6.1. Ad hoc testing</h3>
<p>We performed informal code reviews and discussions after every new functionality was added to detect potential issues early.</p>

<h3>6.2. Component system hierarchy</h3>
<p>A full component hierarchy was created in Figma. This was essential for understanding the testing flow and relationships between UI components.</p>

<h3>6.3. Unit testing</h3>
<p>Individual functionalities were tested using both black-box and white-box testing techniques. Unit testing accounted for the majority of detected issues and helped catch errors early.</p>
<p>The black box methods used:</p>
<ol>
  <li>Equivalence partitioning</li>
  <li>Boundary Value Analysis – BVA</li>
</ol>
<p>The white box methods used:</p>
<ol>
  <li>Statement coverage</li>
  <li>Decision coverage</li>
  <li>Condition coverage</li>
</ol>

<h3>6.4. Integration testing</h3>
<p>We followed the bottom-up integration approach. Lower-level components were tested first, then gradually integrated into higher-level modules.</p>

<h3>6.5. End-to-end testing</h3>
<p>The final level of testing checked the full system against non-functional requirements like performance and reliability, ensuring the complete application worked as specified.</p>

<h3>6.6. Error records at a specified time interval</h3>
<p>We tracked the number of bugs found per day, which helped evaluate the effectiveness of the testing process and plan further steps.</p>

<h3>6.7. Analysis of errors found</h3>
<p>An error report form was used to classify and document common types of bugs. This provided insights into recurring issues and improved our understanding of where the system needed improvements.</p>

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
