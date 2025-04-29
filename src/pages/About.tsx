import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingIcons from '@/components/FloatingIcons';
import CTA from '@/components/CTA';
import { BookOpen, Users, Award, Target, Clock, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-24 bg-white">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-yellow/10 -skew-x-12 transform origin-top-right"></div>
          <div className="container-custom relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in">
                <h1 className="heading-xl mb-8 text-darkBlue">
                  Empowering Young Minds
                </h1>
                <div className="space-y-4">
                  <p className="text-lg text-black">
                    At MegaMinds Academy, we believe education is more than just academics—it's about unlocking potential, nurturing curiosity, and preparing students to thrive in a rapidly changing world.
                  </p>
                  <p className="text-lg text-black">
                    Founded with a vision to bridge the gap between conventional learning and future-ready skills, MegaMinds Academy offers dynamic, student-centric programs that inspire creativity, critical thinking, and confidence.
                  </p>
                  <p className="text-lg text-black">
                    Whether it's mastering core academic subjects, diving into emerging technologies, or developing essential life skills, our mission is simple: to empower every learner to become a changemaker.
                  </p>
                </div>
              </div>
              <div className="relative animate-fade-in flex items-center justify-center">
                <div className="w-3/4 aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                  <img 
                    src="/mma_logo.png" 
                    alt="MegaMinds Academy Logo" 
                    className="w-full h-full object-contain bg-white p-6"
                    width={300}
                    height={300}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-24 bg-cream">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg animate-slide-in">
                <h2 className="heading-lg mb-4 text-darkBlue">Our Mission</h2>
                <p className="text-black">
                To deliver impactful, immersive, and innovative education that blends academic excellence with real-world relevance.

                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg animate-slide-in [animation-delay:200ms]">
                <h2 className="heading-lg mb-4 text-darkBlue">Our Vision</h2>
                <p className="text-black">
                To create a generation of confident, compassionate, and capable individuals who are not only career-ready but life-ready.

                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom">
            <h2 className="heading-lg text-center mb-12 text-darkBlue">Why Choose MegaMinds?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-cream p-6 rounded-xl shadow-md hover:shadow-xl transition-all animate-slide-in">
                <div className="bg-darkBlue p-3 rounded-full w-fit mb-4">
                  <Target className="h-6 w-6 text-yellow" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-darkBlue">Future-Ready Curriculum</h3>
                <p className="text-lightBlue"> Our programs are designed around 21st-century skills, ensuring students are not just learning, but evolving with the world.
                </p>
              </div>
              <div className="bg-cream p-6 rounded-xl shadow-md hover:shadow-xl transition-all animate-slide-in [animation-delay:200ms]">
                <div className="bg-darkBlue p-3 rounded-full w-fit mb-4">
                  <Clock className="h-6 w-6 text-yellow" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-darkBlue"> Personalized Learning</h3>
                <p className="text-lightBlue">We embrace each student's unique pace and path, offering customized support that brings out the best in every mind.</p>
              </div>
              <div className="bg-cream p-6 rounded-xl shadow-md hover:shadow-xl transition-all animate-slide-in [animation-delay:400ms]">
                <div className="bg-darkBlue p-3 rounded-full w-fit mb-4">
                  <Sparkles className="h-6 w-6 text-yellow" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-darkBlue">Expert Faculty</h3>
                <p className="text-lightBlue"> Passionate mentors and industry professionals who go beyond teaching—they inspire, guide, and grow alongside our students.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section 
        <section className="py-16 md:py-24 bg-black text-white">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="animate-slide-in">
                <div className="bg-yellow/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-yellow" />
                </div>
                <div className="text-3xl font-bold text-yellow mb-2">500+</div>
                <div className="text-white/80">Students Enrolled</div>
              </div>
              <div className="animate-slide-in [animation-delay:200ms]">
                <div className="bg-yellow/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-yellow" />
                </div>
                <div className="text-3xl font-bold text-yellow mb-2">20+</div>
                <div className="text-white/80">Courses Offered</div>
              </div>
              <div className="animate-slide-in [animation-delay:400ms]">
                <div className="bg-yellow/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-yellow" />
                </div>
                <div className="text-3xl font-bold text-yellow mb-2">95%</div>
                <div className="text-white/80">Success Rate</div>
              </div>
              <div className="animate-slide-in [animation-delay:600ms]">
                <div className="bg-yellow/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Target className="h-8 w-8 text-yellow" />
                </div>
                <div className="text-3xl font-bold text-yellow mb-2">8+</div>
                <div className="text-white/80">Years Experience</div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Spacer Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left">
                <h2 className="heading-lg text-darkBlue mb-4">Transform Your Future with MegaMinds</h2>
                <p className="text-lightBlue text-lg">
                  Our comprehensive programs and expert faculty are here to guide you every step of the way.
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <img 
                  src="/mma_logo.png" 
                  alt="MegaMinds Academy" 
                  className="h-24 w-auto"
                  width={96}
                  height={96}
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA />
      </main>
      <Footer />
      <FloatingIcons />
    </div>
  );
};

export default About; 