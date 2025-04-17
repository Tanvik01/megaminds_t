
import React, { useState } from 'react';
import { Calendar, Mail, Phone, Send, Check } from 'lucide-react';
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
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Enquiry submitted successfully!");
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: '',
      });
      
      // Reset submission status after a while
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
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-beige rounded-md focus:outline-none focus:ring-1 focus:ring-navy"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-beige rounded-md focus:outline-none focus:ring-1 focus:ring-navy"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-beige rounded-md focus:outline-none focus:ring-1 focus:ring-navy"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="course" className="block text-sm font-medium mb-1">Interested Course *</label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-beige rounded-md focus:outline-none focus:ring-1 focus:ring-navy"
                  >
                    <option value="" disabled>Select a course</option>
                    {courses.map((course, index) => (
                      <option key={index} value={course}>{course}</option>
                    ))}
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message (Optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-beige rounded-md focus:outline-none focus:ring-1 focus:ring-navy"
                    placeholder="Any specific requirements or questions?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting || isSubmitted}
                  className="w-full btn-primary"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : isSubmitted ? (
                    <span className="flex items-center justify-center">
                      <Check className="mr-2 h-4 w-4" />
                      Submitted
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Send className="mr-2 h-4 w-4" />
                      Submit Enquiry
                    </span>
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
                    <a href="mailto:contact@megaminds.edu" className="text-yellow hover:underline">ingo@megaminds.in</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-darkBlue/95 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-yellow" />
                  </div>
                  <div>
                    <p className="text-yellow text-sm">Call Us</p>
                    <a href="tel:+919876543210" className="text-yellow hover:underline">+91 98765 43210</a>
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
