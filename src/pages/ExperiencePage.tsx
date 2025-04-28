import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

interface TimelineItemProps {
  year: string;
  title: string;
  company: string;
  description: string;
  isLeft: boolean;
  icon: 'work' | 'education';
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  year, title, company, description, isLeft, icon 
}) => {
  return (
    <div className={`flex flex-col md:flex-row items-center mb-16`}>
      {/* Content */}
      <div 
        className={`md:w-5/12 ${isLeft ? 'md:text-right md:order-1' : 'md:order-3'}`}
      >
        <div className={`bg-white rounded-lg shadow-lg p-6 border-t-4 ${icon === 'work' ? 'border-cyan' : 'border-magenta'}`}>
          <span className="inline-block px-3 py-1 bg-light-cyan text-navy text-sm font-medium rounded-full mb-2">
            {year}
          </span>
          <h3 className="text-xl font-bold text-navy mb-1">{title}</h3>
          <h4 className={`text-md mb-4 ${icon === 'work' ? 'text-cyan' : 'text-magenta'} font-medium`}>
            {company}
          </h4>
          <p className="text-gray-600">
            {description}
          </p>
        </div>
      </div>

      {/* Icon */}
      <div className="md:w-2/12 flex justify-center md:order-2 my-4 md:my-0">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center z-10 
          ${icon === 'work' ? 'bg-cyan' : 'bg-magenta'} text-white`}>
          {icon === 'work' ? <Briefcase size={20} /> : <GraduationCap size={20} />}
        </div>
      </div>
      
      {/* Empty space for alignment */}
      <div className="md:w-5/12 hidden md:block md:order-3"></div>
    </div>
  );
};

const ExperiencePage = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">My Experience</h1>
          <div className="w-24 h-1 bg-magenta mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey through my professional experiences and education.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 hidden md:block"></div>
          
          <TimelineItem 
            year=" Nov 2019 - Aug 2020"
            title="Examination Assistant"
            company="StartUp Innovations"
            description="Quality assuring
                        Batch controlling of examination scripts.
                        Receive, Quality assure and distribute scripts to marking teams.
                        Ensure the correspondence of number of scripts and mark sheet per batch from
                        DHET headquarters during marking.
                        Assist with controlling, distribution, and scanning of scripts.
                        Ensure all questions are marked, marks added correctly, and correctly transferred
                        to the front cover of the script."
            isLeft={true}
            icon="work"
          />
          
          <TimelineItem 
            year="Aug 2023 - Nov 2023"
            title="Software Development Student Assistant"
            company="Univerasity of Johannesburg"
            description="Developed responsive websites and web applications to showcase to students.
                          Tutoring students programming in languages such as JavaScript, HTML & CSS, MySQL, C# etc.
                          Middle man betwent Students and Lecturer.
                          Assisting Lecturer with Marks.
                          Tutoring Students about Software Development and IT in the workplace."
            isLeft={false}
            icon="work"
          />
          
          <TimelineItem 
          year="March 2025"
          title="IT Intern"
          company="SynergyWellness & Natural Medicines"
          description="Performing data cleaning on CSV files of products using Pandas.
                      Showcasing how I develop web apps by integrating API keys from AI agents, such as Google AI Studio and Gemini, in VS Code using plugins like Cline.
                      Creating JSON files and FastAPIs to retrieve data from the Odoo database and display it on the website.
                      Designing and editing landing pages to be displayed on the website."
            
            isLeft={true}
            icon="work"
          />
          
          <TimelineItem 
            year="2020 - 2023"
            title="Diploma in Business Information Technology"
            company="University of Johannesburg"
            description="Studied BIT with a focus on building my skillset in various programming languages from HTML all the way to C++. Participated in various hackathons and coding competitions which I won medals for them such as the BRICS Skills Challenge Cyber Security 2022 BRICS Skills Challenge Internet Of Things 2023."
            isLeft={false}
            icon="education"
          />

          <TimelineItem 
            year="2025"
            title="AdvDip in Business Information Technology"
            company="University of Johannesburg"
            description="I am advancing my skillset in Human-Computer Interaction (HCI), designing intuitive and user-friendly interfaces. I am deepening my understanding of Software Requirements, effectively gathering and analyzing user needs. I am refining my skills in Software Testing to ensure the quality and reliability of software. I am strengthening my proficiency in Advanced Databases, enhancing my ability to manage complex data systems. I am also mastering Advanced Programming techniques to write efficient and scalable code."
            isLeft={true}
            icon="education"
          />
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
