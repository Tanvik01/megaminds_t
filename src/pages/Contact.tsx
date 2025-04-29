import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EnquiryForm from '@/components/EnquiryForm';
import { 
  DevicePhoneMobileIcon as PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ClockIcon 
} from '@heroicons/react/24/outline';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: PhoneIcon,
      title: "Phone",
      details: ["+91 89772 17554", "+91 77997 76119"],
      color: "bg-blue-500"
    },
    {
      icon: EnvelopeIcon,
      title: "Email",
      details: ["megamindsacademyhup@gmail.com"],
      color: "bg-purple-500"
    },
    {
      icon: MapPinIcon,
      title: "Location",
      details: ["123 Education Street", "Hyderabad, Telangana 500081"],
      color: "bg-emerald-500"
    },
    {
      icon: ClockIcon,
      title: "Working Hours",
      details: ["Monday - Saturday", "9:00 AM - 7:00 PM"],
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-darkBlue text-white pt-32 pb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[55%] h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-darkBlue from-0% via-darkBlue/50 via-15% to-transparent to-30% z-10"></div>
            <img 
              src="/images/hero-bg.jpg"
              alt="Contact MegaMinds"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container-custom relative z-20">
            <div className="max-w-[60%]">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Get in Touch
              </motion.h1>
              <motion.p 
                className="text-xl text-white/90 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Have questions? We're here to help and provide you with the best educational guidance.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-32 relative z-30">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`w-12 h-12 ${info.color} rounded-lg flex items-center justify-center mb-4`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-darkBlue mb-2">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enquiry Form Section */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container-custom">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-darkBlue mb-4">Send Us a Message</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <EnquiryForm />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Map Section */}
        <section className="h-[400px] relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.9151391701287!2d78.38819731487856!3d17.427265588055036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb915c9b6a0b0f%3A0x1c2b6b1c6b8b8b8b!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          ></iframe>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact; 