 "use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import { cn } from '@/lib/utils';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }
    
    setStatus('loading');
    
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      setStatus('success');
      setMessage("Thanks for subscribing! We'll keep you updated.");
      setEmail('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        if (status === 'success') {
          setStatus('idle');
          setMessage('');
        }
      }, 5000);
      
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="w-full max-w-md">      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-grow">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className={cn(
              "w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-royalBlue/20 focus:border-royalBlue transition-all",
              status === 'error' ? "border-red-300" : "border-gray-300"
            )}
            disabled={status === 'loading' || status === 'success'}
          />
        </div>
        
        <Button 
          type="submit" 
          className="bg-royalBlue hover:bg-royalBlue/90 text-white rounded-lg py-3 px-6"
          disabled={status === 'loading' || status === 'success'}
        >
          {status === 'loading' ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing
            </span>
          ) : (
            <>
              Subscribe <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </form>
      
      {message && (
        <p className={cn(
          "text-sm mt-2", 
          status === 'error' ? "text-red-500" : "text-green-600"
        )}>
          {message}
        </p>
      )}
    </div>
  );
};

export default Subscribe;