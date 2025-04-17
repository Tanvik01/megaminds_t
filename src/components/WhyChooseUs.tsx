
import React from 'react';
import { CheckCircle, Target, Users, Trophy, Clock, BookOpen } from 'lucide-react';

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
    <section className="py-16 md:py-24 bg-beige/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Why Choose <span className="text-navy">MegaMinds</span></h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            We combine proven teaching methodologies with a supportive learning environment to help you achieve academic excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm border border-beige/50 hover:border-navy/30 transition-all duration-300"
            >
              <div className="bg-navy/10 p-3 rounded-full w-fit mb-4">
                <feature.icon className="h-6 w-6 text-navy" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-charcoal/70">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-darkBlue to-darkBlue/80 rounded-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-bold text-yellow mb-4">Our Impact in Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl font-bold text-yellow">95%</p>
                  <p className="text-yellow">Success Rate</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-yellow">5+</p>
                  <p className="text-yellow">Years of Excellence</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-yellow">15+</p>
                  <p className="text-yellow">Expert Instructors</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-yellow">1000+</p>
                  <p className="text-yellow">Students Trained</p>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80" 
                alt="Student achievement" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-beige">
            <h3 className="text-xl font-bold mb-4">Modern Infrastructure</h3>
            <ul className="space-y-3">
              {["Smart classrooms with multimedia facilities", "Well-stocked library with latest resources", "Computer labs with high-speed internet", "Comfortable and conducive learning spaces"].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-navy mr-2 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl border border-beige">
            <h3 className="text-xl font-bold mb-4">Student Support Services</h3>
            <ul className="space-y-3">
              {["Regular parent-teacher meetings", "Career counseling and guidance", "Mental health and wellness support", "Scholarship opportunities for deserving students"].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-navy mr-2 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
