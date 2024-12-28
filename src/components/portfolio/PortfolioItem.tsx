import React from 'react';
import { ExternalLink, Eye } from 'lucide-react';
import type { Project } from '../../types';

interface PortfolioItemProps {
  project: Project;
}

export function PortfolioItem({ project }: PortfolioItemProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-900 shadow-lg">
      <div className="aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
        
        <div className="flex gap-2 mb-4">
          {project.tools.map(tool => (
            <span 
              key={tool} 
              className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full"
            >
              {tool}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <a href={project.demoUrl} className="btn-secondary text-sm py-2">
            <Eye size={16} className="mr-2" />
            View Demo
          </a>
          <a href={project.detailsUrl} className="btn-primary text-sm py-2">
            <ExternalLink size={16} className="mr-2" />
            Case Study
          </a>
        </div>
      </div>
    </div>
  );
}