import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { personalInfo, experience, testimonials, education } from '../mock';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Learn more about my journey and experience
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Bio Section */}
          <div className="mb-16">
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="pt-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  {personalInfo.bio}
                </p>
                <div className="mt-6 flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400 font-medium">Location:</span>
                    <span className="text-gray-400">{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400 font-medium">Status:</span>
                    <span className="text-green-400">
                      {personalInfo.available ? 'Available for Work' : 'Not Available'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400 font-medium">Languages:</span>
                    <span className="text-gray-400">{personalInfo.languages.join(', ')}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Experience Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Briefcase className="text-blue-400" size={32} />
              Experience
            </h3>
            <div className="space-y-6">
              {experience.map((exp) => (
                <Card key={exp.id} className="bg-slate-800 border-slate-700 hover:border-blue-500 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">{exp.role}</CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="text-blue-400 font-medium">{exp.company}</span>
                      <span className="text-gray-400 text-sm">{exp.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <GraduationCap className="text-blue-400" size={32} />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu) => (
                <Card key={edu.id} className="bg-slate-800 border-slate-700 hover:border-blue-500 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">{edu.degree}</CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="text-blue-400 font-medium">{edu.institution}</span>
                      <span className="text-gray-400 text-sm">{edu.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Testimonials Section */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center">What People Say</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="bg-slate-800 border-slate-700">
                  <CardContent className="pt-6">
                    <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-white">{testimonial.name}</p>
                        <p className="text-sm text-gray-400">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;