import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-16 md:py-24 bg-darkBlue">
      <div className="container-custom text-center">
        <h2 className="heading-lg text-white mb-6">
          Ready to Begin Your Learning Journey?
        </h2>
        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Join Mega Minds Academy today and take the first step towards academic excellence and a successful future.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link to="/enquiry" className="btn-secondary">
            Contact Us
          </Link>
          <Link to="/courses" className="btn-primary-alt">
            Explore Courses
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA; 