
import React from 'react';
import { Briefcase, Smile, Book } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">About Me</h1>
          <div className="w-24 h-1 bg-magenta mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get to know me better - my background, what drives me, and what I'm passionate about.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Profile Image */}
          <div className="md:w-1/3">
            <div className="relative">
              {/* Decorative element */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-cyan rounded-lg"></div>
              
              {/* Image placeholder - replace with your own image */}
              <div className="relative w-full h-80 bg-light-cyan rounded-lg overflow-hidden border border-gray-200">
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-navy"><img src="src\pictures\blessieCorporate.jpg"></img></p>
                </div>
              </div>
            </div>
          </div>
          
          {/* About Text */}
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-navy mb-6">Who I Am</h2>
            <p className="text-gray-700 mb-6">
            An optimistic dream chaser, aspiring to be the best version of myself. I am continuously aiming to develop my skill set so that I can be an effective and dynamic programmer. I am a self-motivated individual with strong interpersonal skills. Excellent communication skills and a professional, frank demeanour. I have an active personality and I'm passionate about the quality of my work. I'm enthusiastic about being a peer ambassador and expanding my circle of connections, especially in the IT industry. I hope to sharpen my developing skills daily for the best experience in my new job.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-6 hover:border-cyan transition-colors">
                <div className="bg-light-cyan w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Briefcase className="text-cyan" size={24} />
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">Business Analyst</h3>
                <p className="text-gray-600">Dedicated to delivering high-quality work that exceeds expectations.</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6 hover:border-magenta transition-colors">
                <div className="bg-light-cyan w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Smile className="text-magenta" size={24} />
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">Frontend Developer</h3>
                <p className="text-gray-600">Continuously expanding my knowledge and improving my skills in UI/UX Design.</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6 hover:border-cyan transition-colors">
                <div className="bg-light-cyan w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Book className="text-cyan" size={24} />
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">Backend Developer</h3>
                <p className="text-gray-600">Always looking for innovative solutions and approaches to problems.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
