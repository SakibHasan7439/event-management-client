import { MapPin, Mail, Phone, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Company Info & Contact */}
          <div className="lg:col-span-2 space-y-8">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                </div>
              </div>
              <div>
                <h2 className="text-white text-2xl font-bold">HARMONI</h2>
                <p className="text-orange-400 text-sm font-medium tracking-wider">EVENT MANAGEMENT</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">100 highland ave.</p>
                  <p className="text-orange-400 font-medium">California, United State</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">contact@pantero.com</p>
                  <p className="text-orange-400 font-medium">Info@Harmoni.Com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Phone className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">100 800 1234 5555</p>
                  <p className="text-orange-400 font-medium">100 800 1234 5555</p>
                </div>
              </div>
            </div>

            {/* Social Network */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Network</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-8 h-8 bg-gray-700 hover:bg-orange-500 rounded flex items-center justify-center transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-700 hover:bg-orange-500 rounded flex items-center justify-center transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-700 hover:bg-orange-500 rounded flex items-center justify-center transition-colors">
                  <Youtube className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-700 hover:bg-orange-500 rounded flex items-center justify-center transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Useful Links Column 1 */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Useful Links</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center"><span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>Birthday Party</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center"><span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>Business meeting</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center"><span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>Conference</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center"><span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>Food Event</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center"><span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>Musical Event</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center"><span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>Wedding Party</a></li>
            </ul>
          </div>

          {/* Useful Links Column 2 */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Useful Links</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center"><span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>About Harmoni</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center"><span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>Disclaimer</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center"><span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>Contact us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center"><span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>Events Schedule</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center"><span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>Sponsors</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center"><span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>Venues</a></li>
            </ul>
          </div>

          {/* Instagram Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Harmoni Instagram</h3>
            
            {/* Instagram Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="aspect-square bg-gray-700 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=150&h=150&fit=crop&crop=face" 
                  alt="Event photo" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square bg-gray-700 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=150&h=150&fit=crop" 
                  alt="Event photo" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square bg-gray-700 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=150&h=150&fit=crop&crop=face" 
                  alt="Event photo" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square bg-gray-700 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=150&h=150&fit=crop" 
                  alt="Event photo" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Follow Instagram */}
            <p className="text-gray-400">
              Follow Our Instagram <span className="text-orange-400 font-medium">#Harmoni</span>
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <span className="text-orange-400 font-medium">Harmoni.com</span>
              <div className="w-4 h-4 bg-red-500 rounded flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="text-gray-400">JThemes Studio</span>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Contact Us</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">About Us</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Site Map</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-lg shadow-lg transition-colors flex items-center justify-center group"
      >
        <svg className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;