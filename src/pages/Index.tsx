import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CourseCategories from '@/components/CourseCategories';
import WhyChooseUs from '@/components/WhyChooseUs';
import CoCurricularApproach from '@/components/CoCurricularApproach';
import Testimonials from '@/components/Testimonials';
import EnquiryForm from '@/components/EnquiryForm';
import Footer from '@/components/Footer';
import FloatingIcons from '@/components/FloatingIcons';
import CTA from '@/components/CTA';

const Index = () => {
  // Function to handle animation on scroll
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('is-visible');
        }
      });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on initial load
    
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);
  
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <CourseCategories />
        <WhyChooseUs />
        <CoCurricularApproach />
        <Testimonials />
        <CTA></CTA>
      </main>
      <Footer />
      <FloatingIcons />
    </div>
  );
};

export default Index;
