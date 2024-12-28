import { Palette, Layers, Wand2 } from 'lucide-react';
import { createElement } from 'react';
import type { Service } from '../types';

export const services: Service[] = [
  {
    id: '1',
    title: 'AI Art Direction',
    description: 'Cutting-edge AI-powered art direction for your brand.',
    icon: createElement(Palette),
    features: [
      'Custom AI model training',
      'Style transfer',
      'Concept development',
      'Visual identity',
    ],
    pricing: 'From $2,000',
  },
  {
    id: '2',
    title: 'UI/UX Design',
    description: 'Human-centered design enhanced by AI capabilities.',
    icon: createElement(Layers),
    features: [
      'User research',
      'Wireframing',
      'Prototyping',
      'Usability testing',
    ],
    pricing: 'From $5,000',
  },
  {
    id: '3',
    title: 'Generative Design',
    description: 'AI-powered generative design solutions.',
    icon: createElement(Wand2),
    features: [
      'Pattern generation',
      'Layout optimization',
      'Color exploration',
      'Design variations',
    ],
    pricing: 'From $3,000',
  },
];