import React from 'react';
import { BookOpen, Users, BarChart, Clock, Laptop, MessageSquare, Brain, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingIcons from '@/components/FloatingIcons';
import SubjectsOffered from '@/components/SubjectsOffered';

const features = [
  {
    icon: "👩‍🏫",
    title: "Expert Faculty",
    description: "Experienced teachers with proven track records in academic excellence."
  },
  {
    icon: "📚",
    title: "Comprehensive Coverage",
    description: "Complete syllabus coverage with regular assessments and progress tracking."
  },
  {
    icon: "🎯",
    title: "Personalized Attention",
    description: "Individual attention to address specific learning needs and challenges."
  },
  {
    icon: "📝",
    title: "Regular Assessments",
    description: "Periodic tests and assignments to track progress and identify areas for improvement."
  },
  {
    icon: "🏆",
    title: "Result-Oriented",
    description: "Proven methodology focused on achieving academic excellence."
  },
  {
    icon: "💡",
    title: "Doubt Clearing",
    description: "Dedicated sessions for clearing doubts and reinforcing concepts."
  }
];

const specialAddOns = [
  {
    icon: MessageSquare,
    title: "Weekly Communication Workshops",
    description: "Improve vocabulary, confidence, and public speaking."
  },
  {
    icon: Brain,
    title: "Doubt-Clearing Clinics",
    description: "Dedicated sessions to resolve tough problems and exam confusion."
  },
  {
    icon: Star,
    title: "Exam Strategy Seminars",
    description: "Tips and techniques for time management and top scores."
  }
];

const testimonials = [
  {
    quote: "I used to struggle with math, but after just two months at MegaMinds, I'm scoring above 90% in class tests!",
    author: "Mansi T., Class 8"
  },
  {
    quote: "The teachers explain with so much clarity and patience. My son is much more confident before exams now.",
    author: "Meenakshi Rao, Parent"
  }
];

const SchoolTuitions = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-amber-100 to-amber-50/50 pt-32 pb-20">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 text-amber-600 bg-amber-100/50 px-4 py-2 rounded-full">
                  <BookOpen className="h-5 w-5" />
                  <span className="font-medium">School Tuitions</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-darkBlue">
                  Expert Guidance for Academic Excellence
                </h1>
                <p className="text-lg text-charcoal/70">
                  Comprehensive tutoring for all school subjects from grades 1 to 12. Our experienced faculty ensures 
                  personalized attention and proven teaching methodologies for optimal learning outcomes.
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <img 
                  src="/tuitions.jpg" 
                  alt="School Tuitions" 
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
              <h2 className="heading-lg mb-4">Subjects We <span className="text-amber-600">Offer</span></h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                Explore our comprehensive range of subjects across different grade levels, designed to build strong foundations and ensure academic success.
              </p>
            </div>
            <SubjectsOffered category="school" />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-amber-50/50 rounded-xl p-6 hover:bg-amber-50 transition-colors duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-darkBlue mb-2">{feature.title}</h3>
                  <p className="text-charcoal/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Special Add-Ons */}
        <section className="py-16 bg-cream">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-darkBlue mb-12 text-center">Special Add-Ons (Free with Enrolment)</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {specialAddOns.map((addon, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 bg-yellow/10 rounded-full flex items-center justify-center mb-4">
                    <addon.icon className="h-6 w-6 text-darkBlue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{addon.title}</h3>
                  <p className="text-darkBlue/70">{addon.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-darkBlue mb-12 text-center">What Our Students Say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <p className="text-lg text-darkBlue/80 mb-4">"{testimonial.quote}"</p>
                  <p className="font-medium text-darkBlue">— {testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-darkBlue to-darkBlue/90 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-6">🎓 Enroll Today & Start Scoring Higher</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Whether your goal is to build a strong foundation, catch up on schoolwork, or top your class, MegaMinds Academy's Tuition Programs are here to support you every step of the way.
            </p>
            <p className="text-lg mb-8">📅 Batches Starting Soon | 📍 Limited Seats per Class</p>
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

export default SchoolTuitions; 