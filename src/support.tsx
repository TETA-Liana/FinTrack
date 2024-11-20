import React from "react";

const Support: React.FC = () => {
  return (
    <div className="bg-gray-50">
     
      <div className="bg-blue-950 text-white py-16 px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-center">
        
          <div className="mb-8 md:mb-0 md:max-w-md lg:max-w-lg">
            <h1 className="text-3xl font-bold mb-4">
              Ready to simplify your financial transactions?
            </h1>
            <p className="text-gray-300 mb-6">
              Join thousands of satisfied users and experience the difference.
            </p>
            <button className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-400">
              Open an Account
            </button>
          </div>

          
          <div>
            <img
              src="/FinTrack.jpg"
              alt="FinTrack Card"
              className="w-full max-w-sm rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

    
      <footer className="bg-white py-12 px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
       
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">FinTrack</h2>
            <p className="text-gray-600">
              Empowering you to reach your financial goals with expert guidance,
              innovative tools, and secure solutions.
            </p>
          </div>

         
          <div>
            <h3 className="text-gray-800 font-medium mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:underline">Our Story</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-800 font-medium mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:underline">Personal Accounts</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Business Accounts</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Payment Solutions</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-800 font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:underline">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">API Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Community</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Partners</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-800 font-medium mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:underline">Customer Support</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Help</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Report a Problem</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Security & Privacy</a></li>
            </ul>
          </div>
        </div>

      
        <div className="border-t mt-8 pt-6 flex flex-col md:flex-row justify-between text-gray-600 text-sm">
          <p>&copy; 2024 FinTrack Financial Services</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Cookie Policy</a>
            <a href="#" className="hover:underline">Legal</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Support;
