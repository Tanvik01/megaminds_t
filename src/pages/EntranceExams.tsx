import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, BookOpen, Users, BarChart, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingIcons from '@/components/FloatingIcons';
import SubjectsOffered from '@/components/SubjectsOffered';
import { GraduationCap } from 'lucide-react';

const features = [
  {
    icon: "🎯",
    title: "Focused Preparation",
    description: "Structured coaching specifically designed for competitive exams."
  },
  {
    icon: "📚",
    title: "Comprehensive Study Material",
    description: "Well-researched study materials and practice papers aligned with the latest exam patterns."
  },
  {
    icon: "👩‍🏫",
    title: "Expert Faculty",
    description: "Learn from experienced teachers who are subject matter experts."
  },
  {
    icon: "✍️",
    title: "Regular Mock Tests",
    description: "Frequent practice tests to build exam temperament and time management skills."
  },
  {
    icon: "📊",
    title: "Performance Analytics",
    description: "Detailed analysis of your performance to identify and improve weak areas."
  },
  {
    icon: "💡",
    title: "Problem Solving Sessions",
    description: "Special sessions focused on advanced problem-solving techniques."
  }
];

const EntranceExams = () => {
  const courses = [
    {
      title: "JEE (Main & Advanced)",
      subjects: ["Physics", "Chemistry", "Math"]
    },
    {
      title: "NEET",
      subjects: ["Physics", "Chemistry", "Biology"]
    },
    {
      title: "CUET",
      subjects: ["Domain subjects", "Aptitude"]
    },
    {
      title: "Polytechnic & Engineering Entrances",
      subjects: ["Comprehensive preparation"]
    },
    {
      title: "EAMCET / KCET / MHT-CET",
      subjects: ["State-level exam preparation"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-100 to-indigo-50/50 pt-32 pb-20">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 text-indigo-600 bg-indigo-100/50 px-4 py-2 rounded-full">
                  <GraduationCap className="h-5 w-5" />
                  <span className="font-medium">Entrance Exam Preparation</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-darkBlue">
                  Your Gateway to Premier Institutions
                </h1>
                <p className="text-lg text-charcoal/70">
                  Comprehensive coaching for JEE (Main & Advanced), NEET, BITSAT, and other engineering entrance exams. 
                  Our proven methodology and experienced faculty ensure optimal preparation for success.
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <img 
                  src="/entrance.jpg" 
                  alt="Entrance Exam Preparation" 
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
              <h2 className="heading-lg mb-4">Course <span className="text-indigo-600">Structure</span></h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                Our comprehensive course structure covers all aspects of entrance exam preparation, ensuring thorough subject knowledge and exam readiness.
              </p>
            </div>
            <SubjectsOffered category="entrance" />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-indigo-50/50 rounded-xl p-6 hover:bg-indigo-50 transition-colors duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-darkBlue mb-2">{feature.title}</h3>
                  <p className="text-charcoal/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-indigo-600 to-indigo-700 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Preparation?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join our entrance exam coaching programs and take the first step towards your dream college.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary bg-white text-indigo-600 hover:bg-darkBlue-50">
                Schedule a Free Demo Class
              </a>
              <a href="/contact" className="btn-secondary border-white text-darkBlue hover:bg-white/10">
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingIcons />
    </div>
  );
};

export default EntranceExams; 