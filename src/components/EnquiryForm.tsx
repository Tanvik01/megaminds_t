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
  const [focusedField, setFocusedField] = useState<string | null>(null);

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

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const getInputClasses = (fieldName: string) => {
    return `w-full pl-10 pr-4 py-3 bg-gray-50 border ${
      focusedField === fieldName ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-300'
    } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`;
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
    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
      <div>
        <form onSubmit={handleSubmit} className="p-6 md:p-8 bg-white rounded-xl shadow-md">
          <div className="mb-5">
            <h3 className="text-xl font-bold text-gray-800 mb-1">Get Started</h3>
            <p className="text-gray-600 text-sm">Fill out the form below to connect with our team</p>
          </div>
          
          <div className="mb-5">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => handleFocus('name')}
                onBlur={handleBlur}
                required
                className={getInputClasses('name')}
                placeholder="Enter your full name"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                  required
                  className={getInputClasses('email')}
                  placeholder="email@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number <span className="text-red-500">*</span></label>
              <div className="relative">
                <DevicePhoneMobileIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => handleFocus('phone')}
                  onBlur={handleBlur}
                  required
                  className={getInputClasses('phone')}
                  placeholder="Your phone number"
                />
              </div>
            </div>
          </div>
          
          <div className="mb-5">
            <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">Interested Course <span className="text-red-500">*</span></label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                onFocus={() => handleFocus('course')}
                onBlur={handleBlur}
                required
                className={getInputClasses('course')}
              >
                <option value="" disabled>Select a course</option>
                {courses.map((course, index) => (
                  <option key={index} value={course}>{course}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="mb-5">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => handleFocus('message')}
                onBlur={handleBlur}
                rows={4}
                className={getInputClasses('message')}
                placeholder="Any specific requirements or questions?"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <p className="text-xs text-gray-500 mt-1">{formData.message.length}/500 characters</p>
            </div>
          </div>
          
          <div className="mt-6">
            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              style={{
                backgroundColor: isSubmitting || isSubmitted ? '#60A5FA' : '#2563EB', // blue-400 or blue-600
                color: '#fff',
                border: '1px solid #1D4ED8', // blue-700
                fontWeight: 'bold',
                fontSize: '1.125rem',
                borderRadius: '0.5rem',
                boxShadow: '0 2px 8px 0 rgba(37,99,235,0.10)',
                opacity: isSubmitting || isSubmitted ? 0.7 : 1,
                cursor: isSubmitting || isSubmitted ? 'not-allowed' : 'pointer',
                width: '100%',
                padding: '1rem 1.5rem',
                transition: 'background 0.2s, box-shadow 0.2s'
              }}
              className="flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Processing...</span>
                </>
              ) : isSubmitted ? (
                <>
                  <Check className="h-5 w-5 mr-2" />
                  <span>Submitted Successfully</span>
                </>
              ) : (
                <span>Submit Enquiry</span>
              )}
            </button>
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-xs text-gray-500 border-t border-gray-200 pt-4 mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <p>Your information is secure and will not be shared with third parties.</p>
          </div>
        </form>
      </div>
      
      <div className="bg-darkBlue/95 text-yellow rounded-xl shadow-lg p-6 md:p-8 h-full">
        <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="bg-darkBlue/95 p-3 rounded-full mr-4 flex-shrink-0">
              <Mail className="h-6 w-6 text-yellow" />
            </div>
            <div className="min-w-0">
              <p className="text-yellow text-sm">Email Us</p>
              <a href="mailto:megamindsacademyhup@gmail.com" className="text-yellow hover:underline break-all">
                megamindsacademyhup@gmail.com
              </a>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-darkBlue/95 p-3 rounded-full mr-4 flex-shrink-0">
              <DevicePhoneMobileIcon className="h-6 w-6 text-yellow" />
            </div>
            <div>
              <p className="text-yellow text-sm">Call Us</p>
              <a href="tel:+918977217554" className="text-yellow hover:underline">+91 89772 17554</a><br/>
              <a href="tel:+917799776119" className="text-yellow hover:underline">+91 77997 76119</a>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-darkBlue/95 p-3 rounded-full mr-4 flex-shrink-0">
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
  );
};

export default EnquiryForm;
