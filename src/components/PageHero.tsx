import React from 'react';

interface PageHeroProps {
  title: string;
  description?: string;
  backgroundImage?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({ 
  title, 
  description, 
  backgroundImage = '/images/hero-bg.jpg' 
}) => {
  return (
    <section className="bg-darkBlue text-white pt-32 pb-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[55%] h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-darkBlue from-0% via-darkBlue/50 via-15% to-transparent to-30% z-10"></div>
        <img 
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container-custom relative z-20">
        <div className="max-w-[60%]">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          {description && (
            <p className="text-xl text-white/90 mb-8">{description}</p>
          )}
        </div>
      </div>
    </section>
  );
}; 