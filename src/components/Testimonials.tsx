
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Riya Sharma",
    role: "JEE Advanced, AIR 340",
    image: "https://i.pravatar.cc/150?img=32",
    content: "The structured approach at MegaMinds helped me tackle JEE preparation systematically. The faculty's support and guidance were instrumental in my success."
  },
  {
    name: "Arjun Patel",
    role: "Commerce Student, 95% in CBSE",
    image: "https://i.pravatar.cc/150?img=11",
    content: "The accounts and economics faculty at MegaMinds made complex concepts simple. Their teaching methods and practice materials gave me confidence to excel in my board exams."
  },
  {
    name: "Meera Kapoor",
    role: "NEET Qualifier",
    image: "https://i.pravatar.cc/150?img=5",
    content: "The biology and chemistry labs, along with regular mock tests, prepared me well for NEET. The personal attention from teachers helped me overcome my weak areas."
  },
  {
    name: "Vikram Singh",
    role: "Web Development Course Graduate",
    image: "https://i.pravatar.cc/150?img=15",
    content: "I joined the web development course with no prior coding experience. The practical, project-based approach helped me build a strong portfolio, and I secured an internship within a month of completing the course."
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">What Our <span className="text-navy">Students Say</span></h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Hear from our students who transformed their academic journey with MegaMinds.
          </p>
        </div>

        <div className="relative">
          
          <div className="absolute -top-10 left-10 opacity-10">
            <Quote className="h-24 w-24 text-navy" />
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-2 bg-beige">
                <div className="h-full flex items-center justify-center p-8">
                  <img 
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-32 h-32 object-cover rounded-full border-4 border-white"
                  />
                </div>
              </div>
              
              <div className="md:col-span-3 p-8 md:p-10">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-navy text-navy" />
                  ))}
                </div>
                
                <blockquote className="text-lg md:text-xl italic mb-6">
                  "{testimonials[currentIndex].content}"
                </blockquote>
                
                <div>
                  <p className="font-bold text-lg">{testimonials[currentIndex].name}</p>
                  <p className="text-charcoal/70">{testimonials[currentIndex].role}</p>
                </div>
                
                <div className="mt-8 flex items-center justify-between">
                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-2 rounded-full transition-all ${
                          currentIndex === index ? "w-8 bg-navy" : "w-2 bg-beige"
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      ></button>
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    <button 
                      onClick={goToPrevious}
                      className="p-2 rounded-full border border-beige hover:bg-beige/20 transition-all"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button 
                      onClick={goToNext}
                      className="p-2 rounded-full border border-beige hover:bg-beige/20 transition-all"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-beige text-center">
            <div className="bg-navy/10 p-3 rounded-full mx-auto w-fit mb-4">
              <Star className="h-6 w-6 text-navy" />
            </div>
            <h3 className="text-xl font-bold mb-2">500+</h3>
            <p className="text-charcoal/70">5-Star Reviews</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-beige text-center">
            <div className="bg-navy/10 p-3 rounded-full mx-auto w-fit mb-4">
              <Star className="h-6 w-6 text-navy" />
            </div>
            <h3 className="text-xl font-bold mb-2">90%</h3>
            <p className="text-charcoal/70">Success Rate</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-beige text-center">
            <div className="bg-navy/10 p-3 rounded-full mx-auto w-fit mb-4">
              <Star className="h-6 w-6 text-navy" />
            </div>
            <h3 className="text-xl font-bold mb-2">95%</h3>
            <p className="text-charcoal/70">Recommend Us</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
