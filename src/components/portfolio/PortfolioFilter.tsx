import React from 'react';

interface PortfolioFilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export function PortfolioFilter({ activeFilter, onFilterChange }: PortfolioFilterProps) {
  const filters = [
    { id: 'all', label: 'All Work' },
    { id: 'ai-art', label: 'AI Art' },
    { id: 'ui-ux', label: 'UI/UX' },
    { id: 'branding', label: 'Branding' },
    { id: 'generative', label: 'Generative' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {filters.map(filter => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={`px-6 py-2 rounded-full transition-all ${
            activeFilter === filter.id
              ? 'bg-purple-600 text-white'
              : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-gray-800'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}