import React from 'react';
import { BookOpen, Calculator, GraduationCap, MessageSquare, PenTool, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingIcons from '@/components/FloatingIcons';

const NonTechCourses = () => {
  const courses = [
    {
      title: "School Tuitions (Class 6-10)",
      description: "Comprehensive coaching for Mathematics, Science, and English",
      icon: <BookOpen className="h-8 w-8 text-lightBlue" />,
      duration: "Ongoing",
      level: "All Levels"
    },
    {
      title: "School Tuitions (Class 11-12)",
      description: "Specialized coaching for PCM and PCB streams",
      icon: <GraduationCap className="h-8 w-8 text-lightBlue" />,
      duration: "Ongoing",
      level: "All Levels"
    },
    {
      title: "JEE Preparation",
      description: "Intensive coaching for JEE Main and Advanced",
      icon: <Calculator className="h-8 w-8 text-lightBlue" />,
      duration: "2 years",
      level: "Advanced"
    },
    {
      title: "NEET Preparation",
      description: "Comprehensive coaching for NEET entrance exam",
      icon: <Users className="h-8 w-8 text-lightBlue" />,
      duration: "2 years",
      level: "Advanced"
    },
    {
      title: "Banking & SSC Exams",
      description: "Preparation for various government competitive exams",
      icon: <PenTool className="h-8 w-8 text-lightBlue" />,
      duration: "6 months",
      level: "All Levels"
    },
    {
      title: "English & Communication",
      description: "Improve your English language and communication skills",
      icon: <MessageSquare className="h-8 w-8 text-lightBlue" />,
      duration: "3 months",
      level: "All Levels"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-16 md:py-24 bg-beige/20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4">Non-Technical <span className="text-navy">Courses</span></h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                Our non-technical courses focus on academic excellence and competitive exam preparation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      {course.icon}
                      <h3 className="text-xl font-semibold ml-3 text-darkBlue">{course.title}</h3>
                    </div>
                    <p className="text-charcoal/70 mb-4">{course.description}</p>
                    <div className="flex justify-between text-sm text-charcoal/60">
                      <span>Duration: {course.duration}</span>
                      <span>Level: {course.level}</span>
                    </div>
                  </div>
                  <div className="bg-navy/5 px-6 py-4">
                    <button className="w-full py-2 px-4 bg-navy hover:bg-navy/90 text-white font-medium rounded-lg transition-colors duration-200">
                      Enroll Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingIcons />
    </div>
  );
};

export default NonTechCourses; 