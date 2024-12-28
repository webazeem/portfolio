import React from 'react';
import { PortfolioItem } from './PortfolioItem';
import { PortfolioFilter } from './PortfolioFilter';
import { projects } from '../../data/projects';

export function PortfolioGrid() {
  const [filter, setFilter] = React.useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Work
        </h2>
        
        <PortfolioFilter activeFilter={filter} onFilterChange={setFilter} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {filteredProjects.map(project => (
            <PortfolioItem key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}