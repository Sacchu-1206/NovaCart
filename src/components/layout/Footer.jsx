import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Logo */}

          <div>

            <h2 className="text-3xl font-bold text-orange-500">
              NovaCart
            </h2>

            <p className="text-gray-400 mt-4">
              Modern React E-Commerce application with
              responsive design and smooth shopping experience.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <Link to="/" className="hover:text-orange-500">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/products" className="hover:text-orange-500">
                  Products
                </Link>
              </li>

              <li>
                <Link to="/cart" className="hover:text-orange-500">
                  Cart
                </Link>
              </li>

              <li>
                <Link to="/wishlist" className="hover:text-orange-500">
                  Wishlist
                </Link>
              </li>

            </ul>

          </div>

          {/* Customer */}

          <div>

            <h3 className="text-xl font-semibold mb-4">
              Customer
            </h3>

            <ul className="space-y-3">

              <li>Privacy Policy</li>

              <li>Terms & Conditions</li>

              <li>Support</li>

              <li>Help Center</li>

            </ul>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-xl font-semibold mb-4">
              Follow Us
            </h3>

            <div className="flex gap-4 text-2xl">

              <a href="#">
                <FaFacebook />
              </a>

              <a href="#">
                <FaInstagram />
              </a>

              <a href="#">
                <FaLinkedin />
              </a>

              <a href="#">
                <FaGithub />
              </a>

            </div>

          </div>

        </div>

        <hr className="my-8 border-gray-700" />

        <p className="text-center text-gray-400">
          © 2026 NovaCart. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;