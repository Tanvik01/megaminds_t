import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SubjectsOffered from '@/components/SubjectsOffered';
import { CodeIcon } from 'lucide-react';

const features = [
  {
    icon: "👨‍💻",
    title: "Industry Experts",
    description: "Learn from trainers with real-world project experience."
  },
  {
    icon: "🔨",
    title: "Hands-on Projects",
    description: "Build real-world applications and strengthen your portfolio."
  },
  {
    icon: "📱",
    title: "Latest Technologies",
    description: "Stay updated with current industry trends and tools."
  },
  {
    icon: "💼",
    title: "Placement Support",
    description: "Get assistance with internships and job placements."
  },
  {
    icon: "📃",
    title: "Certification",
    description: "Receive industry-recognized course completion certificates."
  },
  {
    icon: "🔄",
    title: "Flexible Schedule",
    description: "Weekend batches and fast-track options available."
  }
];

const TechCourses = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sky-100 to-sky-50/50 pt-32 pb-20">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 text-sky-600 bg-sky-100/50 px-4 py-2 rounded-full">
                  <CodeIcon className="h-5 w-5" />
                  <span className="font-medium">Technical Courses</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-darkBlue">
                  Skills That Launch Careers
                </h1>
                <p className="text-lg text-charcoal/70">
                  Industry-aligned technical courses designed for students, job seekers, and professionals. 
                  Master the latest technologies and build a strong foundation for your tech career.
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <img 
                  src="/images/tech-courses.jpg" 
                  alt="Technical Courses" 
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
              <h2 className="heading-lg mb-4">Course <span className="text-sky-600">Structure</span></h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                Our comprehensive technical courses are designed to give you practical skills and 
                industry-ready knowledge for a successful career in technology.
              </p>
            </div>
            <SubjectsOffered category="tech" />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-sky-50/50 rounded-xl p-6 hover:bg-sky-50 transition-colors duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-darkBlue mb-2">{feature.title}</h3>
                  <p className="text-charcoal/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-sky-600 to-sky-700 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-6">Launch Your Tech Career Today</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join our technical courses and transform your passion for technology into a rewarding career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary bg-white text-sky-600 hover:bg-sky-50">
                Schedule a Free Demo Class
              </a>
              <a href="/contact" className="btn-secondary border-white text-white hover:bg-white/10">
                Get Course Details
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TechCourses; 