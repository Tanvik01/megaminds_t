import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingIcons from '@/components/FloatingIcons';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface Course {
  title: string;
  description: string;
  link?: string;
}

interface CoursePageTemplateProps {
  pageTitle: string;
  pageDescription: string;
  longDescription?: string;
  backgroundImage: string;
  courses: Course[];
  features: Feature[];
  ctaTitle?: string;
  ctaDescription?: string;
  customContent?: React.ReactNode;
}

const CoursePageTemplate: React.FC<CoursePageTemplateProps> = ({
  pageTitle,
  pageDescription,
  longDescription,
  backgroundImage,
  courses,
  features,
  ctaTitle,
  ctaDescription,
  customContent,
}) => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-darkBlue text-white pt-32 pb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[55%] h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-darkBlue from-0% via-darkBlue/50 via-15% to-transparent to-30% z-10"></div>
            <img 
              src={backgroundImage}
              alt={pageTitle}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container-custom relative z-20">
            <div className="max-w-[60%]">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{pageTitle}</h1>
              <p className="text-xl text-white/90 mb-8">{pageDescription}</p>
              {longDescription && (
                <p className="text-lg max-w-3xl">{longDescription}</p>
              )}
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-darkBlue mb-12 text-center">Courses Available</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <div key={index} className="bg-cream p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-darkBlue/70 mb-4">{course.description}</p>
                  {course.link && (
                    <Link to={course.link} className="text-darkBlue hover:text-yellow font-medium">
                      Learn more →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Content Section */}
        {customContent && (
          <section className="py-16 bg-white">
            <div className="container-custom">
              {customContent}
            </div>
          </section>
        )}

        {/* Features Section */}
        <section className="py-16 bg-cream">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-darkBlue mb-12 text-center">Why Choose Us?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 bg-yellow/10 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-darkBlue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-darkBlue/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-darkBlue to-darkBlue/90 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-6">
              {ctaTitle || "Start Your Journey Today"}
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              {ctaDescription || "Join MegaMinds Academy and take the first step towards your success."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center justify-center"
              >
                Book a Free Trial Class
              </Link>
              <Link
                to="/contact"
                className="btn-secondary inline-flex items-center justify-center"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingIcons />
    </div>
  );
};

export default CoursePageTemplate; 