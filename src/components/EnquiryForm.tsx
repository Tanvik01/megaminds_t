import React, { useState } from 'react';
import { Calendar, Mail, Send, Check } from 'lucide-react';
import { DevicePhoneMobileIcon } from '@heroicons/react/24/outline';
import { toast } from 'sonner';

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Enquiry submitted successfully!");
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: '',
      });
      
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  const courses = [
    "School Tuitions (Class 6-10)",
    "School Tuitions (Class 11-12)",
    "JEE Preparation",
    "NEET Preparation",
    "Banking & SSC Exams",
    "Web Development",
    "Programming Courses",
    "English & Communication",
    "Other"
  ];

  return (
    <section id="enquiry" className="py-16 md:py-24 bg-beige/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Get in <span className="text-navy">Touch</span></h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Have questions or ready to enroll? Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          <div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <form onSubmit={handleSubmit} className="p-6 md:p-8">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <div className="relative">
                      <DevicePhoneMobileIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">Interested Course *</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                    >
                      <option value="" disabled>Select a course</option>
                      {courses.map((course, index) => (
                        <option key={index} value={course}>{course}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Any specific requirements or questions?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting || isSubmitted}
                  className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Processing...</span>
                    </>
                  ) : isSubmitted ? (
                    <>
                      <Check className="h-5 w-5" />
                      <span>Submitted</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Submit Enquiry</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
          
          <div>
              <div className="bg-darkBlue/95 text-yellow rounded-xl shadow-lg p-6 md:p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-darkBlue/95 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-yellow" />
                  </div>
                  <div>
                    <p className="text-yellow text-sm">Email Us</p>
                    <a href="mailto:contact@megaminds.edu" className="text-yellow hover:underline">megamindsacademyhup@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-darkBlue/95 p-3 rounded-full mr-4">
                    <DevicePhoneMobileIcon className="h-6 w-6 text-yellow" />
                  </div>
                  <div>
                    <p className="text-yellow text-sm">Call Us</p>
                    <a href="tel:+9189772 17554" className="text-yellow hover:underline">+91 89772 17554</a><br></br>
                    <a href="tel:+9177997 76119" className="text-yellow hover:underline">+91 77997 76119</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-darkBlue/95 p-3 rounded-full mr-4">
                    <Calendar className="h-6 w-6 text-yellow" />
                  </div>
                  <div>
                    <p className="text-yellow text-sm">Working Hours</p>
                    <p className="text-yellow">Mon - Sat: 9:00 AM - 9:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-xl font-medium mb-4">Visit Our Center</h4>
                <address className="not-italic text-yellow">
                  MegaMinds Academy<br />
                  26-4-866, RPGT Road, Balaji Nagar, Hindupur, Sri Sathya Sai District<br />
                  Andhra Pradesh – 515 201
                </address>
              </div>
              
              <div className="mt-8">
                <div className="bg-beige text-navy p-4 rounded-lg">
                  <p className="font-medium">Free Demo Classes Available!</p>
                  <p className="text-sm text-navy/80 mt-1">Book a demo class to experience our teaching methodology firsthand.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
