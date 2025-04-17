
import React from 'react';
import { ArrowRight, BookOpen, CodeIcon, GraduationCap, Languages, PenTool } from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = [
  {
    icon: BookOpen,
    title: "School Tuitions",
    description: "Expert guidance for all school subjects from grades 6-12",
    color: "bg-[#FFF1D0] text-[#FF8A00]",
    link: "#",
  },
  {
    icon: GraduationCap,
    title: "Entrance Exams",
    description: "Specialized coaching for JEE, NEET, and other entrance exams",
    color: "bg-[#E1F0FF] text-[#0066CC]",
    link: "#",
  },
  {
    icon: Languages,
    title: "Communication Skills",
    description: "English proficiency, public speaking, and personality development",
    color: "bg-[#E5F8E5] text-[#2D8E2D]",
    link: "#",
  },
  {
    icon: CodeIcon,
    title: "Tech Courses",
    description: "Programming, web development, and computer applications",
    color: "bg-[#F6E5FF] text-[#8E2DCC]",
    link: "#",
  },
  {
    icon: PenTool,
    title: "Competitive Exams",
    description: "Preparation for banking, SSC, UPSC, and other government exams",
    color: "bg-[#FFE5E5] text-[#CC2D2D]",
    link: "#",
  },
];

const CourseCategories = () => {
  return (
    <section id="courses" className="py-16 md:py-24 bg-cream">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Explore Our <span className="text-navy">Course Categories</span></h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Discover a wide range of courses designed to help you excel in academics, competitive exams, and professional skills.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <a 
              key={index} 
              href={category.link} 
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 card-hover"
            >
              <div className="flex flex-col h-full">
                <div className={cn("p-3 rounded-full w-fit mb-4", category.color)}>
                  <category.icon className="h-6 w-6" />
                </div>
                
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-charcoal/70 mb-4 flex-grow">{category.description}</p>
                
                <div className="flex items-center text-navy font-medium">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </a>
          ))}
          
          <div className="bg-gradient-to-br from-darkBlue to-darkBlue/80 rounded-xl p-6 text-yellow md:col-span-2 lg:col-span-1 flex flex-col justify-between card-hover">
            <div>
              <h3 className="text-xl font-bold mb-3">Need guidance in choosing the right course?</h3>
              <p className="mb-6 text-yellow">Our counselors are here to help you select the perfect course based on your goals and aptitude.</p>
            </div>
            <a href="#enquiry" className="inline-flex items-center bg-darkBlue text-yellow px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition w-fit">
              Get Free Counseling <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCategories;
