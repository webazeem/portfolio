import React from 'react';
import { Hero } from '../components/Hero';
import { PortfolioGrid } from '../components/portfolio/PortfolioGrid';
import { ServicesGrid } from '../components/services/ServicesGrid';
import { ContactForm } from '../components/contact/ContactForm';

export function Home() {
  return (
    <>
      <Hero />
      <PortfolioGrid />
      <ServicesGrid />
      <ContactForm />
    </>
  );
}