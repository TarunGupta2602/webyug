import React from 'react';

export default function Footer({ darkMode, toggleDarkMode }) {
  return (
    <div>
      <footer className={darkMode ? "bg-gray-700 text-white" : "bg-gray-300 text-black"} >
        
        {/* Centering the top part */}
        <div className="text-center py-4">
          <span className="text-4xl font-extrabold text-gradient bg-clip-text">gzb</span>
          <span className="text-2xl font-semibold text-black-400">.ae</span>
        </div>

        <hr className="my-2 w-1/2 mx-auto border-gray-500" />

        {/* Footer Links Section */}
        <div className="max-w-7xl mt-5 mx-auto px-6">
          <div className="">
            {/* Column 1: Company Info */}
            <div>
              <h2 className="text-2xl font-bold mb-2 text-center">Company</h2>
              <ul className="flex justify-center space-x-8 text-center"> {/* Flex layout here */}
                <li><a href="#" className="hover:text-blue-400">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400">Careers</a></li>
                <li><a href="#" className="hover:text-blue-400">Contact</a></li>
                <li><a href="#" className="hover:text-blue-400">Press</a></li>
              </ul>
            </div>
            <hr className="my-2 w-1/2 mx-auto border-gray-500" />


            {/* Column 2: Services */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-center">Services</h2>
              <ul className="flex justify-center space-x-8 text-center"> {/* Flex layout here */}
                <li><a href="#" className="hover:text-blue-400">Web Design</a></li>
                <li><a href="#" className="hover:text-blue-400">Development</a></li>
                <li><a href="#" className="hover:text-blue-400">SEO</a></li>
                <li><a href="#" className="hover:text-blue-400">Consulting</a></li>
              </ul>
            </div>
            <hr className="my-2 w-1/2 mx-auto border-gray-500" />

            {/* Column 3: Social Media */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-center">Follow Us</h2>
              <div className="flex justify-center space-x-8"> {/* Flex layout here */}
                <a href="#" className="hover:text-blue-400">Facebook</a>
                <a href="#" className="hover:text-blue-400">Twitter</a>
                <a href="#" className="hover:text-blue-400">Instagram</a>
                <a href="#" className="hover:text-blue-400">LinkedIn</a>
              </div>
            </div>
            <hr className="my-2 w-1/2 mx-auto border-gray-500" />

            {/* Column 4: Newsletter */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-center">Newsletter</h2>
              <p className="mb-4 text-center">Subscribe to our newsletter for the latest updates.</p>
              <div className="flex justify-center items-center space-x-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-2 rounded-lg border border-gray-300 bg-gray-700 text-white"
                />
                <button className="bg-blue-500 px-4 py-2 rounded-lg text-white hover:bg-blue-400">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: Copyright and Links */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
          <p>&copy; 2024 White Lion General Trading LLC. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:text-blue-400">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400">Terms of Service</a>
            <a href="#" className="hover:text-blue-400">Cookie Policy</a>
          </div>
        </div>

        <br/>
      </footer>
    </div>
  );
}
