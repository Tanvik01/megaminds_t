import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SubjectsOffered from '@/components/SubjectsOffered';
import { Award } from 'lucide-react';

const features = [
  {
    icon: "📚",
    title: "Daily Practice Sets",
    description: "Regular practice with topic-wise questions and mock tests."
  },
  {
    icon: "⏱️",
    title: "Speed & Accuracy",
    description: "Special drills to improve time management and accuracy."
  },
  {
    icon: "🎯",
    title: "Section-wise Strategy",
    description: "Focused preparation for Quantitative, Reasoning, English, and General Awareness."
  },
  {
    icon: "👨‍🏫",
    title: "Expert Guidance",
    description: "Learn from experienced faculty with proven track records."
  },
  {
    icon: "🤝",
    title: "Interview Preparation",
    description: "Comprehensive guidance for personal interviews and group discussions."
  },
  {
    icon: "📊",
    title: "Progress Tracking",
    description: "Regular performance analysis and improvement strategies."
  }
];

const CompetitiveExams = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-100 to-purple-50/50 pt-32 pb-20">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 text-purple-600 bg-purple-100/50 px-4 py-2 rounded-full">
                  <Award className="h-5 w-5" />
                  <span className="font-medium">Competitive Exams</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-darkBlue">
                  Aim High, Achieve More
                </h1>
                <p className="text-lg text-charcoal/70">
                  Comprehensive preparation for Government, Banking & Staff Selection Exams. 
                  Master every section with structured coaching and smart strategies for success.
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <img 
                  src="competitive.jpg" 
                  alt="Competitive Exams" 
                  className="rounded-xl shadow-lg max-w-md w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Subjects Section */}
        <section className="py-16 bg-cream/20">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">Course <span className="text-purple-600">Structure</span></h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                Our comprehensive course structure covers all aspects of competitive exam preparation, 
                ensuring thorough preparation for each section.
              </p>
            </div>
            <SubjectsOffered category="competitive" />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-purple-50/50 rounded-xl p-6 hover:bg-purple-50 transition-colors duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-darkBlue mb-2">{feature.title}</h3>
                  <p className="text-charcoal/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-purple-600 to-purple-700 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Journey?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join our competitive exam coaching programs and take the first step towards your dream career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary bg-white text-purple-600 hover:bg-purple-50">
                Schedule a Free Demo Class
              </a>
              <a href="/contact" className="btn-secondary border-white text-white hover:bg-white/10">
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CompetitiveExams; 