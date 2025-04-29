import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, GraduationCap, MessageSquare, CodeIcon, PenTool } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const courseCategories = [
  {
    icon: BookOpen,
    title: "School Tuitions",
    description: "Expert guidance for all school subjects from grades 1-12",
    link: "/courses/school-tuitions",
    bgColor: "bg-gradient-to-br from-amber-100 via-amber-50 to-white",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    hoverEffect: "hover:shadow-amber-200/50"
  },
  {
    icon: GraduationCap,
    title: "Entrance Exams",
    description: "Specialized coaching for JEE, NEET, and other entrance exams",
    link: "/courses/entrance-exams",
    bgColor: "bg-gradient-to-br from-indigo-100 via-indigo-50 to-white",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    hoverEffect: "hover:shadow-indigo-200/50"
  },
  {
    icon: MessageSquare,
    title: "Communication Skills",
    description: "English proficiency, public speaking, and personality development",
    link: "/courses/communication-courses",
    bgColor: "bg-gradient-to-br from-purple-100 via-purple-50 to-white",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    hoverEffect: "hover:shadow-purple-200/50"
  },
  {
    icon: CodeIcon,
    title: "Tech Courses",
    description: "Programming, web development, and computer applications",
    link: "/courses/tech-courses",
    bgColor: "bg-gradient-to-br from-emerald-100 via-emerald-50 to-white",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    hoverEffect: "hover:shadow-emerald-200/50"
  },
  {
    icon: PenTool,
    title: "Competitive Exams",
    description: "Preparation for banking, SSC, UPSC, and other government exams",
    link: "/courses/competitive-exams",
    bgColor: "bg-gradient-to-br from-blue-100 via-blue-50 to-white",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    hoverEffect: "hover:shadow-blue-200/50"
  }
];

const Courses = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-darkBlue text-white pt-32 pb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[55%] h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-darkBlue from-0% via-darkBlue/50 via-15% to-transparent to-30% z-10"></div>
            <img 
              src="/images/courses-hero.jpg"
              alt="Students studying"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container-custom relative z-20">
            <div className="max-w-[60%]">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Academic Excellence Starts Here</h1>
              <p className="text-xl text-white/90 mb-8">
                Comprehensive education across all academic levels with expert faculty and proven teaching methodologies.
              </p>
            </div>
          </div>
        </section>

        {/* Course Categories */}
        <section className="py-16 md:py-24 bg-cream/20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4">Our <span className="text-navy">Courses</span></h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                Discover a wide range of courses designed to help you excel in academics, competitive exams, and professional skills.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courseCategories.map((category, index) => (
                <Link 
                  key={index}
                  to={category.link}
                  className={`group relative overflow-hidden rounded-xl ${category.bgColor} p-8 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${category.hoverEffect}`}
                >
                  <div className="relative z-10">
                    <div className={`inline-flex rounded-xl p-4 ${category.iconBg} ${category.iconColor} transition-transform duration-300 group-hover:scale-110`}>
                      <category.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-semibold text-darkBlue mt-6 mb-3 group-hover:text-darkBlue/80 transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-charcoal/70 group-hover:text-charcoal/80 transition-colors duration-300">
                      {category.description}
                    </p>
                  </div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/50 rounded-tl-[100%] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-darkBlue to-darkBlue/90 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Excel in Your Studies?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join MegaMinds Academy and experience the difference in your academic performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center justify-center"
              >
                Schedule a Free Demo Class
              </Link>
              <Link
                to="/contact"
                className="btn-secondary inline-flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Courses; 