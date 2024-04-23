import React from 'react';

function Home() {
  return (
    <div>
      <header>
        <h1>Welcome to Our Website!</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h2>Featured Products</h2>
          {/* Display featured products */}
        </section>
        <section>
          <h2>About Us</h2>
          {/* Brief information about the company */}
        </section>
        <section>
          <h2>Contact Us</h2>
          {/* Contact form or contact information */}
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Our Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
