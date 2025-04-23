import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: " Bhavesh",
    role: "Class 10th Student",
    image: " man.png",
    content:"Mega Minds helped me improve my confidence in math and science. The teachers are so patient and explain everything clearly. I actually look forward to classes now!"
  },
  {
    name: " Farheen S.",
    role: "NEET Aspirant",
    image: " girl.png",
    content:"Thanks to the Olympiad prep course, I won a silver medal in the national science competition. The trainers motivated me and made learning fun!"
  },
  {
    name: "Sohaib",
    role: "Parent of a class 12 student",
    image: "man.png",
    content: "My daughter used to fear public speaking, but after joining the communication skills course, she hosted her school’s annual day! The transformation is amazing."
  },
  {
    name: "Tahir",
    role: "JEE Aspirant",
    image: "man.png",
    content: "The entrance exam coaching here is excellent. They break down complex concepts and give us lots of practice material. The mock tests gave me the confidence I needed."
  },
  {
    name: " Lakshmi Devi",
    role: "Parent",
    image: "girl.png",
    content: "We tried a few coaching centers before, but Mega Minds stood out for their personal attention to each student. They really care about a child’s overall growth, not just marks."
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(timer);
  }, []);

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
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">What Our <span className="text-navy">Students Say</span></h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Hear from our students who transformed their academic journey with MegaMinds.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm border border-beige/50 p-6 md:p-8 text-center">
            <div className="relative">
              <div className="mb-6">
                <div className="relative inline-block">
                  <div className="w-20 h-20 rounded-full bg-beige/50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-6"></div>
                  <img 
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-20 h-20 object-cover rounded-full border-4 border-white relative z-10"
                  />
                </div>
              </div>

              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-navy text-navy" />
                ))}
              </div>
              
              <blockquote className="text-base md:text-lg italic mb-4 max-w-3xl mx-auto">
                "{testimonials[currentIndex].content}"
              </blockquote>
              
              <div className="mb-6">
                <p className="font-bold text-lg text-navy">{testimonials[currentIndex].name}</p>
                <p className="text-charcoal/70">{testimonials[currentIndex].role}</p>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-1.5 rounded-full transition-all ${
                        currentIndex === index ? "w-6 bg-navy" : "w-1.5 bg-beige"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    ></button>
                  ))}
                </div>
                
                <div className="flex space-x-2">
                  <button 
                    onClick={goToPrevious}
                    className="p-1.5 rounded-full border border-beige hover:bg-beige/20 transition-all"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button 
                    onClick={goToNext}
                    className="p-1.5 rounded-full border border-beige hover:bg-beige/20 transition-all"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Testimonials;
