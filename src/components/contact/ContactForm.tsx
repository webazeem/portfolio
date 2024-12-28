import React from 'react';
import { Send } from 'lucide-react';

export function ContactForm() {
  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Add form submission logic here
    setStatus('success');
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12">Let's Connect</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              required
              className="form-input"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              className="form-input"
            />
          </div>
          
          <select className="form-input">
            <option value="">Select Project Type</option>
            <option value="ai-art">AI Art</option>
            <option value="ui-ux">UI/UX Design</option>
            <option value="branding">Branding</option>
            <option value="generative">Generative Design</option>
          </select>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <select className="form-input">
              <option value="">Budget Range</option>
              <option value="small">$1,000 - $5,000</option>
              <option value="medium">$5,000 - $10,000</option>
              <option value="large">$10,000+</option>
            </select>
            
            <input
              type="file"
              className="form-input"
              accept="image/*,.pdf"
            />
          </div>
          
          <textarea
            placeholder="Project Brief"
            required
            rows={6}
            className="form-input"
          />
          
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="btn-primary w-full"
          >
            {status === 'submitting' ? (
              'Sending...'
            ) : (
              <>
                Send Message
                <Send size={20} className="ml-2" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}