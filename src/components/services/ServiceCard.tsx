import React from 'react';
import type { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="p-6 rounded-xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-shadow">
      <div className="w-12 h-12 mb-6 text-purple-600 dark:text-purple-400">
        {service.icon}
      </div>
      
      <h3 className="text-xl font-bold mb-4">{service.title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
      
      <ul className="space-y-2 mb-6">
        {service.features.map(feature => (
          <li key={feature} className="flex items-center">
            <span className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      
      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
        {service.pricing}
      </div>
    </div>
  );
}