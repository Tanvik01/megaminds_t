import React from 'react';
import { BookOpen, Target, BarChart } from 'lucide-react';

const CoCurricularApproach = () => {
  const steps = [
    {
      icon: BookOpen,
      title: "Teach",
      description: "Expert instructors deliver clear and engaging lessons."
    },
    {
      icon: Target,
      title: "Practice",
      description: "Continuous practice with exercises, mock exams, and real-world applications."
    },
    {
      icon: BarChart,
      title: "Test",
      description: "Regular assessments to measure progress and identify areas for improvement."
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-beige/20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Our <span className="text-navy">Co-curricular Approach</span></h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            A comprehensive learning methodology designed to maximize student success
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group"
            >
              <div className="bg-white rounded-xl p-6 shadow-sm border border-beige/50 hover:border-navy/30 transition-all duration-300 h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-navy/10 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="h-8 w-8 text-navy" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-navy">{step.title}</h3>
                  <p className="text-charcoal/70 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute left-0 top-1/2 w-1/3 h-1/2 bg-yellow/5 -skew-y-12 transform origin-top-left"></div>
        <div className="absolute right-0 bottom-0 w-1/3 h-1/2 bg-navy/5 skew-y-12 transform origin-bottom-right"></div>
      </div>
    </section>
  );
};

export default CoCurricularApproach; 