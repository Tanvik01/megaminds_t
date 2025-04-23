import React from 'react';
import { Target, Users, Trophy, Clock, BookOpen } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Target,
      title: "Personalized Approach",
      description: "Customized learning plans tailored to each student's strengths, weaknesses, and learning style."
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Learn from experienced educators with proven track records of student success."
    },
    {
      icon: Trophy,
      title: "Consistent Results",
      description: "Our students consistently achieve top ranks in various exams and competitions."
    },
    {
      icon: Clock,
      title: "Flexible Schedules",
      description: "Multiple batches and timing options to accommodate your other commitments."
    },
    {
      icon: BookOpen,
      title: "Comprehensive Resources",
      description: "Access to extensive study materials, practice tests, and digital learning tools."
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-beige/20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Why Choose <span className="text-navy">MegaMinds</span></h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            We combine proven teaching methodologies with a supportive learning environment to help you achieve academic excellence.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-beige/50 p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 group"
              >
                <div className="p-2 rounded-lg bg-navy/10">
                  <feature.icon className="h-6 w-6 text-navy" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-navy group-hover:text-navy/80 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-charcoal/70 leading-relaxed text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
