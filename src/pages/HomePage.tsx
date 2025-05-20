
import React from 'react';
import { ArrowDownCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-40 h-40 bg-cyan opacity-20 rounded-full -translate-x-20 -translate-y-20"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-magenta opacity-20 rounded-full translate-x-20 translate-y-20"></div>
        
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center z-10">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-navy mb-4">
              Hi, I'm <span className="text-magenta">Blessing</span> <span className="text-cyan">Leso</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              FullStack Developer & UI/UX Designer creating beautiful digital experiences
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="px-6 py-3 bg-magenta text-white rounded-md font-medium hover:bg-opacity-90 transition-all">
                Contact Me
              </Link>
              <Link to="/portfolio" className="px-6 py-3 border-2 border-cyan text-navy rounded-md font-medium hover:bg-cyan hover:bg-opacity-10 transition-all">
                View My Work
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 animate-slide-up">
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              {/* Decorative circle behind the image */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan to-magenta rounded-full opacity-20"></div>
              
              {/* Image placeholder - replace with your own image */}
              <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-white">
                <div className="w-full h-full bg-light-cyan flex items-center justify-center">
                  <p className="text-navy"><img src="\pictures\blueDress.jpg"></img></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Link to="/about">
            <ArrowDownCircle className="text-navy opacity-70 hover:opacity-100 transition-opacity" size={36} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
