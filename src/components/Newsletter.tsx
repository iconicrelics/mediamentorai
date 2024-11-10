import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles } from 'lucide-react';
import { subscribeToNewsletter } from '../utils/newsletter';

const Newsletter = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    const result = await subscribeToNewsletter(email);
    
    if (result.success) {
      setEmail('');
    }
    
    setStatus(result.message);
    setIsLoading(false);

    if (result.success) {
      setTimeout(() => setStatus(''), 10000);
    } else {
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-3xl p-12 text-center"
    >
      <div className="flex justify-center mb-6">
        <Sparkles className="h-8 w-8 text-purple-400" />
      </div>
      <h2 className="text-3xl font-bold text-white mb-4">
        AI Business Newsletter
      </h2>
      <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
        Join industry leaders and innovators. Get weekly insights on AI trends, case studies, and strategic recommendations.
      </p>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
              disabled={isLoading}
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>
          {status && (
            <p className={`text-sm ${status.includes('error') || status.includes('failed') ? 'text-red-400' : 'text-green-400'} mt-2`}>
              {status}
            </p>
          )}
        </div>
      </form>
    </motion.div>
  );
};

export default Newsletter;