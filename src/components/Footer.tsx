import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, ArrowRight, Phone } from 'lucide-react';
import { BsWhatsapp } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <a href="/" className="flex items-center">
                <span className="text-yellow font-bold text-2xl">MEGA<span className="text-yellow">MINDS </span><span className='text-yellow'>ACADEMY </span></span>
              </a>
            </div>
            <p className="text-white mb-6">
              Nurturing minds, building futures. MegaMinds Academy is dedicated to providing quality education and guidance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-navy/30 hover:bg-navy p-2 rounded-full transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/mega_minds_academy/?igsh=cWU4aHpjbGI4cDJp#" className="bg-navy/30 hover:bg-navy p-2 rounded-full transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-navy/30 hover:bg-navy p-2 rounded-full transition-all">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="bg-navy/30 hover:bg-navy p-2 rounded-full transition-all">
                <BsWhatsapp className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              
              <li><a href="#" className="text-white/70 hover:text-white transition-all">About Us</a></li>
              <li><a href="#courses" className="text-white/70 hover:text-white transition-all">Courses</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-all">Gallery</a></li>
          
              <li><a href="#enquiry" className="text-white/70 hover:text-white transition-all">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Course Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-all">School Tuitions</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-all">Competitive Exams</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-all">Entrance Exams</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-all">Tech Courses</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-all">Communication Skills</a></li>
            </ul>
          </div>
          
          
            <div className="mt-6">
              <h4 className="font-medium mb-2">Contact Us</h4>
              <p className="flex items-center text-white/70">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@megaminds.in</span>
              </p>
              <p className="flex items-center text-white/70">
              <Phone className="h-4 w-4 mr-2" />
                <span>+91 8977217554</span>
                </p>
                <p className="flex items-center text-white/70">
              <Phone className="h-4 w-4 mr-2" />
                <span>+91 7799776119</span></p>
            </div>
           
          
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} MMA | Powered by <a href="https://krishlabs.in" className="text-beige hover:text-white">Krishlabs</a>
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/70 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-white/70 hover:text-white text-sm">Terms of Service</a>
              <a href="#" className="text-white/70 hover:text-white text-sm">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
