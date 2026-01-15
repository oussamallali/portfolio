import React from 'react';
import { Github, ExternalLink, Smartphone, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { projects } from '../mock';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in frontend development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-slate-800 border-slate-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20 overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent opacity-60"></div>
                {project.featured && (
                  <Badge className="absolute top-4 right-4 bg-blue-600 text-white">
                    Featured
                  </Badge>
                )}
              </div>

              <CardHeader>
                <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                <CardDescription className="text-gray-400">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-slate-700 text-gray-300 hover:bg-slate-600"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Project Links */}
                {project.links ? (
                  // Special layout for Mooshir project with multiple store links
                  <div className="space-y-2">
                    <Button
                      size="sm"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() => window.open(project.links.website, '_blank')}
                    >
                      <Globe size={16} className="mr-2" />
                      Visit Website
                    </Button>
                    <div className="grid grid-cols-3 gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-slate-600 text-gray-300 hover:bg-slate-700 hover:text-white text-xs"
                        onClick={() => window.open(project.links.googlePlay, '_blank')}
                      >
                        <Smartphone size={14} className="mr-1" />
                        Play
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-slate-600 text-gray-300 hover:bg-slate-700 hover:text-white text-xs"
                        onClick={() => window.open(project.links.appStore, '_blank')}
                      >
                        <Smartphone size={14} className="mr-1" />
                        iOS
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-slate-600 text-gray-300 hover:bg-slate-700 hover:text-white text-xs"
                        onClick={() => window.open(project.links.huawei, '_blank')}
                      >
                        <Smartphone size={14} className="mr-1" />
                        Huawei
                      </Button>
                    </div>
                  </div>
                ) : (
                  // Standard layout for other projects
                  <div className="flex gap-3">
                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-slate-600 text-gray-300 hover:bg-slate-700 hover:text-white"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                    )}
                    <Button
                      size="sm"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;