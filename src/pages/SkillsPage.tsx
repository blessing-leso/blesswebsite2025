
import React from 'react';

interface SkillBarProps {
  name: string;
  percentage: number;
  color: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, percentage, color }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-navy font-medium">{name}</span>
        <span className="text-gray-600 font-medium">{percentage}%</span>
      </div>
      <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full ${color}`} 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const SkillsPage = () => {
  const technicalSkills = [
    { name: "HTML/CSS", percentage: 90, color: "bg-cyan" },
    { name: "JavaScript", percentage: 85, color: "bg-magenta" },
    { name: "React", percentage: 80, color: "bg-cyan" },
    { name: "C#", percentage: 75, color: "bg-magenta" },
    { name: "C++", percentage: 70, color: "bg-cyan" },
    { name: "TypeScript", percentage: 65, color: "bg-magenta" },
    { name: "Linux", percentage: 70, color: "bg-cyan" },
  ];

  const softSkills = [
    { name: "Communication", percentage: 95, color: "bg-magenta" },
    { name: "Teamwork", percentage: 90, color: "bg-cyan" },
    { name: "Problem Solving", percentage: 85, color: "bg-magenta" },
    { name: "Time Management", percentage: 80, color: "bg-cyan" },
    { name: "Interpersonal Skills", percentage: 88, color: "bg-magenta" },
    { name: "Presentation Skills", percentage: 92, color: "bg-cyan" },
    { name: "Design Thinking", percentage: 85, color: "bg-magenta" },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">My Skills</h1>
          <div className="w-24 h-1 bg-cyan mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are the skills I've acquired throughout my journey as a developer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <div>
            <h2 className="text-3xl font-bold text-navy mb-8 flex items-center">
              <span className="w-3 h-8 bg-cyan mr-3 rounded-sm"></span>
              Technical Skills
            </h2>
            
            <div>
              {technicalSkills.map((skill) => (
                <SkillBar 
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  color={skill.color}
                />
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div>
            <h2 className="text-3xl font-bold text-navy mb-8 flex items-center">
              <span className="w-3 h-8 bg-magenta mr-3 rounded-sm"></span>
              Soft Skills
            </h2>
            
            <div>
              {softSkills.map((skill) => (
                <SkillBar 
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  color={skill.color}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Tools & Technologies */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">
            Tools & Technologies
          </h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <img src="src/pictures/c.228x256.png"></img>
          <img src="src/pictures/file-type-python.256x254.png"></img>
          <img src="src/pictures/microsoft-365.218x256.png"></img> 
          <img src="src/pictures/trio.png"></img>
          <img src="src/pictures/delphi.256x256.png"></img>
          <img src="src/pictures/openai (1).png"></img>
          
         
                      
          <img src="src/pictures/figma.171x256.png"></img>
          <img src="src/pictures/mysql-original-wordmark.256x133.png"></img>
          <img src="src/pictures/linux-tux.222x256.png"></img>
          <img src="src/pictures/programming-language-aspnet.256x169.png"></img>
          <img src="src/pictures/firebase (2).png"></img>
          <img src="src/pictures/aws (2).png"></img>
          <img src="src/pictures/react (1).png"></img>
          <img src="src/pictures/php (1).png"></img>
          <img src="src/pictures/azure (1).png"></img>

  
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
