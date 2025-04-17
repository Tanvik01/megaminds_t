import React, { useEffect, useState } from 'react';
import { ArrowRight, BookOpen, Users, Award } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import useEmblaCarousel from 'embla-carousel-react';

const Hero = () => {
  const [api, setApi] = useState<any>(null);

  useEffect(() => {
    if (!api) return;

    const autoplay = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => {
      clearInterval(autoplay);
    };
  }, [api]);

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-yellow/10 -skew-x-12 transform origin-top-right"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="animate-slide-in">
            <h2 className="heading-xl mb-6 text-darkBlue">
              Admission Open for 2025-2026
            </h2>
            <p className="text-lg md:text-xl mb-8 text-lightBlue max-w-lg">
              Join MegaMinds Academy for expert guidance in school subjects, competitive exams, and professional skills development.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#courses" className="btn-primary">
                Browse Courses <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#about" className="btn-secondary">
                Enroll Now
              </a>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <div className="bg-darkBlue p-3 rounded-full mb-2 shadow-md">
                  <BookOpen className="h-6 w-6 text-yellow" />
                </div>
                <span className="font-bold text-xl text-darkBlue">20+</span>
                <span className="text-sm text-lightBlue text-center">Courses</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-darkBlue p-3 rounded-full mb-2 shadow-md">
                  <Users className="h-6 w-6 text-yellow" />
                </div>
                <span className="font-bold text-xl text-darkBlue">1000+</span>
                <span className="text-sm text-lightBlue text-center">Students</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-darkBlue p-3 rounded-full mb-2 shadow-md">
                  <Award className="h-6 w-6 text-yellow" />
                </div>
                <span className="font-bold text-xl text-darkBlue">80+
                </span>
                <span className="text-sm text-lightBlue text-center">Activities</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <Carousel className="w-full max-w-xl mx-auto" opts={{ loop: true }} setApi={setApi}>
              <CarouselContent>
                <CarouselItem>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-darkBlue">
                    <img 
                      src="/dummy1.jpg" 
                      alt="Students studying" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-darkBlue">
                    <img 
                      src="/dummy2.jpg" 
                      alt="Students collaborating" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-darkBlue">
                    <img 
                      src="/dummy3.jpg" 
                      alt="Students in library" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-2 bg-darkBlue text-yellow hover:bg-darkBlue/90" />
              <CarouselNext className="right-2 bg-darkBlue text-yellow hover:bg-darkBlue/90" />
            </Carousel>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-yellow p-4 rounded-lg shadow-lg max-w-xs">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full bg-darkBlue border-2 border-white flex items-center justify-center overflow-hidden">
                      <span className="text-xs font-bold text-yellow">{i}</span>
                    </div>
                  ))}
                </div>
                <div className="ml-2">
                  <p className="text-sm font-medium text-darkBlue">Join 1000+ students who transformed their future</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
