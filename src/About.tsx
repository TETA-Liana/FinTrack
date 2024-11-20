import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="bg-white py-16 px-6 lg:px-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">
          Empower Your Financial Journey<br></br> with Seamless Solutions
        </h2>
        <p className="text-gray-600 mt-4">
          Explore our powerful features for seamless payments.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-blue-100 rounded-lg p-6 text-center">
          <h3 className="font-bold text-lg">Real-time Transaction</h3>
          <p className="text-gray-600 mt-2">
            Enjoy the convenience of sending and receiving payments instantly.
          </p>
        </div>
        <div className="bg-blue-100 rounded-lg p-6 text-center">
          <h3 className="font-bold text-lg">Seamless Integration</h3>
          <p className="text-gray-600 mt-2">
            Effortlessly integrate with your existing apps and platforms.
          </p>
        </div>
        <div className="bg-blue-100 rounded-lg p-6 text-center">
          <h3 className="font-bold text-lg">Multi-Currency Support</h3>
          <p className="text-gray-600 mt-2">
            Conduct transactions in multiple currencies with ease.
          </p>
        </div>
        <div className="bg-blue-100 rounded-lg p-6 text-center">
          <h3 className="font-bold text-lg">User-Friendly Interface</h3>
          <p className="text-gray-600 mt-2">
            Manage everything in one place with an easy-to-use interface.
          </p>
        </div>
      </div>
      <div className="mt-12">
        <h3 className="text-center text-gray-800 text-2xl font-bold">
          Customer Stories
        </h3>
        <div className="flex-col  space-between">
        <p className="text-gray-600 mt-4 text-center">
          “The best payment solution I’ve ever used. Secure, efficient,<br></br> and integrates perfectly with all my financial tools.”
        </p>
        <p className="text-gray-600 text-center mt-4 font-bold">— A. Atlassian</p>
        <div>
       
    </div>
        </div>
      </div>
    </section>
  );
};

export default About;
