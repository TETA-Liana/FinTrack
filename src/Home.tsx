import React from "react";

const Home: React.FC = () => {
  return (
    <div className="bg-blue-950 text-white min-h-screen">
      {/* Navbar */}
      <header className="flex justify-between items-center p-6">
        <h1 className="text-2xl font-bold">Zenpay</h1>
        <nav className="space-x-6">
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Products</a>
          <a href="#" className="hover:underline">Resources</a>
          <a href="#" className="hover:underline">Support</a>
        </nav>
        <div className="space-x-4">
          <button className="hover:underline">Sign in</button>
          <button className="px-4 py-2 bg-teal-500 rounded-lg hover:bg-teal-400">
            Sign Up
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20">
        <p className="text-teal-300 mb-4 text-sm">
          ⭐ Trusted by Over 1 Million Users Worldwide
        </p>
        <h2 className="text-4xl font-bold mb-6">
          Revolutionize Your <span className="text-gradient">Payments Experience</span>
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto mb-10">
          Unlock seamless, secure, and instant financial transactions. Manage, send, and receive money effortlessly, with the ability to scale and integrate multiple financial services.
        </p>
        <div className="space-x-4">
          <button className="px-6 py-3 bg-teal-500 rounded-lg hover:bg-teal-400">
            Start Now
          </button>
          <button className="px-6 py-3 border border-gray-400 rounded-lg hover:bg-gray-800">
            Explore Zenly
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-20 pb-20">
        <div className="bg-gray-800 p-6 rounded-lg text-center">
          <div className="text-4xl mb-4">🔒</div>
          <h3 className="text-lg font-bold mb-2">Secure Transfer</h3>
          <p className="text-gray-400">
            ZenPay ensures your funds reach their destination instantly, with top-notch security.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg text-center">
          <div className="text-4xl mb-4">⚡</div>
          <h3 className="text-lg font-bold mb-2">Seamless Integration</h3>
          <p className="text-gray-400">
            Enjoy a streamlined financial experience, from business transactions to personal finance.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg text-center">
          <div className="text-4xl mb-4">🌍</div>
          <h3 className="text-lg font-bold mb-2">Multi-Currency Support</h3>
          <p className="text-gray-400">
            Effortlessly transact in multiple currencies. ZenPay simplifies international payments.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
