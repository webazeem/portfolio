import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { personal } from '../config/personal';

export function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                {personal.name}
              </span>
              <br />
              <span className="text-gray-700 dark:text-gray-300">
                {personal.title}
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {personal.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/work"
                className="btn-primary inline-flex items-center justify-center"
              >
                View Work
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/connect"
                className="btn-secondary inline-flex items-center justify-center"
              >
                Let's Connect
                <Sparkles className="ml-2" size={20} />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8">
              {personal.stats.map((stat, index) => (
                <Stat key={index} number={stat.number} label={stat.label} />
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full aspect-square rounded-full overflow-hidden shadow-2xl">
              <img
                src={personal.image.url}
                alt={personal.image.alt}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 w-full h-full top-4 right-4 rounded-full bg-gradient-to-br from-purple-600/20 to-blue-500/20 blur-xl" />
            <div className="absolute -z-10 w-full h-full top-8 -right-4 rounded-full bg-gradient-to-br from-purple-600/10 to-blue-500/10 blur-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
        {number}
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400">{label}</div>
    </div>
  );
}