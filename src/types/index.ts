import { ReactNode } from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  tools: string[];
  demoUrl: string;
  detailsUrl: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  features: string[];
  pricing: string;
}