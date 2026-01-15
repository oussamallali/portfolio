import React from 'react';
import { Badge } from './ui/badge';
import { skills } from '../mock';

const Skills = () => {
  const categories = {
    framework: { label: 'Frameworks & Libraries', color: 'bg-blue-600' },
    language: { label: 'Languages', color: 'bg-green-600' },
    styling: { label: 'Styling', color: 'bg-purple-600' },
    state: { label: 'State Management', color: 'bg-orange-600' },
    tools: { label: 'Tools', color: 'bg-yellow-600' },
    backend: { label: 'Backend & APIs', color: 'bg-red-600' },
    design: { label: 'Design & UX', color: 'bg-pink-600' },
    optimization: { label: 'Optimization', color: 'bg-indigo-600' },
    testing: { label: 'Testing', color: 'bg-teal-600' }
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section id="skills" className="py-20 bg-slate-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category} className="">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-1 h-8 ${categories[category].color} rounded`}></div>
                <h3 className="text-xl font-semibold text-gray-300">
                  {categories[category].label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3 ml-7">
                {categorySkills.map((skill, index) => (
                  <Badge
                    key={index}
                    className="px-4 py-2 text-sm bg-slate-700 text-white hover:bg-slate-600 transition-colors cursor-default"
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 max-w-3xl mx-auto">
            I'm constantly learning and exploring new technologies to stay current with industry trends.
            Currently focusing on advanced React patterns, performance optimization, and accessibility best practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;