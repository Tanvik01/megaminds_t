import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SubjectsOffered from '@/components/SubjectsOffered';
import { MessageSquare } from 'lucide-react';

const features = [
  {
    icon: "🎯",
    title: "Practical Focus",
    description: "Interactive sessions with real-world communication scenarios."
  },
  {
    icon: "👥",
    title: "Small Batches",
    description: "Limited group size for personalized attention and practice."
  },
  {
    icon: "🎤",
    title: "Regular Practice",
    description: "Extensive speaking and presentation opportunities in every session."
  },
  {
    icon: "📊",
    title: "Progress Tracking",
    description: "Regular assessments and feedback on your communication skills."
  },
  {
    icon: "🌟",
    title: "Confidence Building",
    description: "Structured approach to overcome communication barriers."
  },
  {
    icon: "🤝",
    title: "Interview Ready",
    description: "Special focus on professional communication and interviews."
  }
];

const CommunicationCourses = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-rose-100 to-rose-50/50 pt-32 pb-20">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 text-rose-600 bg-rose-100/50 px-4 py-2 rounded-full">
                  <MessageSquare className="h-5 w-5" />
                  <span className="font-medium">Communication Courses</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-darkBlue">
                  Speak, Present & Lead
                </h1>
                <p className="text-lg text-charcoal/70">
                  Transform your communication skills with our comprehensive programs. 
                  Whether you're a student, professional, or anyone looking to express with confidence, 
                  we have the right course for you.
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <img 
                  src="/communication.jpg" 
                  alt="Communication Courses" 
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
              <h2 className="heading-lg mb-4">Course <span className="text-rose-600">Structure</span></h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                Our communication courses are designed to enhance your speaking, presentation, 
                and interpersonal skills through practical training and regular practice.
              </p>
            </div>
            <SubjectsOffered category="communication" />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-rose-50/50 rounded-xl p-6 hover:bg-rose-50 transition-colors duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-darkBlue mb-2">{feature.title}</h3>
                  <p className="text-charcoal/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-rose-600 to-rose-700 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Communication Skills?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join our communication courses and develop the confidence to express yourself effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary bg-white text-rose-600 hover:bg-rose-50">
                Schedule a Free Demo Class
              </a>
              <a href="/contact" className="btn-secondary border-white text-white hover:bg-white/10">
                Learn More
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CommunicationCourses; 