import Link from 'next/link';
import { BarChart2, Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-royalBlue py-12">
      <div className="max-w-7xl mx-auto px-2 md:px-12">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          Company Info
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BarChart2 className="h-7 w-7 text-royalBlue" />
              <span className="font-heading font-bold text-xl text-gray-800">DataPulse</span>
            </div>
            <p className="text-gray-700 max-w-xs">
              Connecting your data tools and delivering key business metrics via smart push notifications.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://twitter.com" className="text-gray-600 hover:text-royalBlue transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://facebook.com" className="text-gray-600 hover:text-royalBlue transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-600 hover:text-royalBlue transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-600 hover:text-royalBlue transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          Quick Links
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg text-gray-800">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#features" className="text-gray-700 hover:text-royalBlue transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-gray-700 hover:text-royalBlue transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-gray-700 hover:text-royalBlue transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-gray-700 hover:text-royalBlue transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/signup" className="text-gray-700 hover:text-royalBlue transition-colors">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
          
          Legal
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg text-gray-800">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-700 hover:text-royalBlue transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-700 hover:text-royalBlue transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-700 hover:text-royalBlue transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-700 hover:text-royalBlue transition-colors">
                  Data Processing
                </Link>
              </li>
            </ul>
          </div>
          
          Contact Info
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg text-gray-800">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-royalBlue min-w-[20px] mt-1" />
                <span className="text-gray-700">123 Innovation Street, Tech Valley, CA 94103</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-royalBlue min-w-[20px]" />
                <a href="mailto:hello@datapulse.io" className="text-gray-700 hover:text-royalBlue transition-colors">
                  hello@datapulse.io
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-royalBlue min-w-[20px]" />
                <a href="tel:+14155550123" className="text-gray-700 hover:text-royalBlue transition-colors">
                  +1 (415) 555-0123
                </a>
              </li>
            </ul>
          </div>
        </div> */}
        
        <div className="text-center text-cream/70">
          <p>&copy; {new Date().getFullYear()} Datlee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;