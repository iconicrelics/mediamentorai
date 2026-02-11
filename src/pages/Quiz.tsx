import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle2, Mail, Phone } from 'lucide-react';
import GradientText from '../components/GradientText';
import GlassCard from '../components/GlassCard';
import ParticleBackground from '../components/ParticleBackground';
import MagneticButton from '../components/MagneticButton';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState('');

  const questions = [
    {
      id: 0,
      question: "What's your industry?",
      options: [
        { label: 'Technology & Software', value: 'tech', icon: '💻' },
        { label: 'Healthcare & Medical', value: 'healthcare', icon: '🏥' },
        { label: 'Finance & Banking', value: 'finance', icon: '💰' },
        { label: 'Marketing & Advertising', value: 'marketing', icon: '📢' },
        { label: 'E-commerce & Retail', value: 'ecommerce', icon: '🛒' },
        { label: 'Manufacturing', value: 'manufacturing', icon: '🏭' }
      ]
    },
    {
      id: 1,
      question: "What's your biggest business challenge?",
      options: [
        { label: 'Creating content at scale', value: 'content', icon: '✍️' },
        { label: 'Time-consuming manual tasks', value: 'automation', icon: '⏰' },
        { label: 'Understanding customer data', value: 'analytics', icon: '📊' },
        { label: 'Video production costs', value: 'video', icon: '🎥' },
        { label: 'Marketing effectiveness', value: 'marketing', icon: '📈' }
      ]
    },
    {
      id: 2,
      question: "How many employees do you have?",
      options: [
        { label: '1-10 (Startup)', value: '1-10', icon: '🚀' },
        { label: '11-50 (Small)', value: '11-50', icon: '🌱' },
        { label: '51-200 (Medium)', value: '51-200', icon: '🏢' },
        { label: '201+ (Enterprise)', value: '201+', icon: '🏛️' }
      ]
    },
    {
      id: 3,
      question: "What's your timeline?",
      options: [
        { label: 'Urgent - Need it now', value: 'urgent', icon: '⚡' },
        { label: 'This month', value: 'month', icon: '📅' },
        { label: 'This quarter', value: 'quarter', icon: '📆' }
      ]
    },
    {
      id: 4,
      question: "What's your budget range?",
      options: [
        { label: 'Under $5,000/month', value: 'under5k', icon: '💵' },
        { label: '$5,000 - $15,000/month', value: '5k-15k', icon: '💴' },
        { label: '$15,000 - $50,000/month', value: '15k-50k', icon: '💶' },
        { label: '$50,000+/month', value: '50k+', icon: '💷' }
      ]
    }
  ];

  const getRecommendation = () => {
    const challenge = answers[1];
    
    const recommendations: { [key: string]: any } = {
      content: {
        service: 'AI Content Creation Suite',
        description: 'Perfect for scaling your content production with AI-powered writing, ideation, and optimization.',
        features: [
          'SEO-optimized content generation',
          'Social media automation',
          'Blog and article writing',
          'Content calendar planning'
        ],
        benefit: 'Produce 5x more content in the same time',
        icon: '✍️'
      },
      automation: {
        service: 'AI Workflow Automation',
        description: 'Eliminate repetitive tasks and streamline your operations with intelligent automation.',
        features: [
          'Process automation',
          'Data entry elimination',
          'Automated reporting',
          'System integrations'
        ],
        benefit: 'Save 30+ hours per week on manual tasks',
        icon: '⚙️'
      },
      analytics: {
        service: 'AI Analytics & Insights',
        description: 'Transform your data into actionable insights with AI-driven analytics and forecasting.',
        features: [
          'Predictive analytics',
          'Custom dashboards',
          'Customer behavior analysis',
          'ROI tracking'
        ],
        benefit: 'Make data-driven decisions with confidence',
        icon: '📊'
      },
      video: {
        service: 'AI Video Production Suite',
        description: 'Professional video content creation with AI-powered editing and generation.',
        features: [
          'Automated video editing',
          'AI video generation',
          'Subtitle automation',
          'Video enhancement'
        ],
        benefit: 'Reduce video production costs by 60%',
        icon: '🎥'
      },
      marketing: {
        service: 'Complete AI Marketing Stack',
        description: 'End-to-end AI solutions for content, analytics, and automation to supercharge your marketing.',
        features: [
          'Multi-channel content creation',
          'Campaign analytics',
          'Automated workflows',
          'Performance optimization'
        ],
        benefit: 'Triple your marketing output',
        icon: '📢'
      }
    };

    return recommendations[challenge] || recommendations.content;
  };

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value });
    
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 300);
    } else {
      setTimeout(() => {
        setShowResults(true);
      }, 300);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you! We'll send your detailed AI roadmap to ${email}`);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const recommendation = showResults ? getRecommendation() : null;

  return (
    <>
      <Helmet>
        <title>AI Service Quiz | Find Your Perfect Solution | Media Mentor AI</title>
        <meta name="description" content="Take our 5-question quiz to discover which AI services are perfect for your business. Get personalized recommendations in under 2 minutes." />
        <link rel="canonical" href="https://mediamentorai.com/quiz" />
      </Helmet>

      <div className="min-h-screen relative">
        <ParticleBackground />
        
        <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {!showResults ? (
              <>
                {/* Progress Bar */}
                <div className="mb-12">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">
                      Question {currentQuestion + 1} of {questions.length}
                    </span>
                    <span className="text-sm font-semibold">
                      <GradientText>{Math.round(progress)}% Complete</GradientText>
                    </span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-electric-purple to-electric-cyan"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>

                {/* Question Card */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentQuestion}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                  >
                    <GlassCard className="p-8 md:p-12">
                      <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-white text-center">
                        {questions[currentQuestion].question}
                      </h2>

                      <div className={`grid grid-cols-1 ${
                        questions[currentQuestion].options.length <= 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'
                      } gap-4`}>
                        {questions[currentQuestion].options.map((option) => (
                          <motion.button
                            key={option.value}
                            onClick={() => handleAnswer(option.value)}
                            className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                              answers[currentQuestion] === option.value
                                ? 'border-electric-cyan bg-electric-cyan/10'
                                : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10'
                            }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="text-4xl mb-3">{option.icon}</div>
                            <div className="text-lg font-semibold text-white">
                              {option.label}
                            </div>
                          </motion.button>
                        ))}
                      </div>

                      {/* Navigation */}
                      {currentQuestion > 0 && (
                        <div className="mt-8 flex justify-start">
                          <button
                            onClick={handleBack}
                            className="flex items-center gap-2 px-6 py-3 text-gray-400 hover:text-white transition-colors"
                          >
                            <ArrowLeft className="h-5 w-5" />
                            Back
                          </button>
                        </div>
                      )}
                    </GlassCard>
                  </motion.div>
                </AnimatePresence>
              </>
            ) : (
              /* Results */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-electric-purple to-electric-cyan mb-6 text-5xl"
                  >
                    {recommendation?.icon}
                  </motion.div>
                  
                  <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                    <GradientText>Perfect Match Found!</GradientText>
                  </h2>
                  <p className="text-xl text-gray-300">
                    Based on your answers, here's our recommendation
                  </p>
                </div>

                <GlassCard className="p-8 md:p-12 mb-6">
                  <h3 className="text-3xl font-heading font-bold mb-4 text-white">
                    {recommendation?.service}
                  </h3>
                  <p className="text-xl text-gray-300 mb-8">
                    {recommendation?.description}
                  </p>

                  <div className="mb-8 p-6 rounded-xl bg-gradient-to-r from-electric-purple/10 to-electric-cyan/10 border border-electric-cyan/20">
                    <p className="text-2xl font-bold text-center">
                      <GradientText>🎯 {recommendation?.benefit}</GradientText>
                    </p>
                  </div>

                  <h4 className="text-xl font-heading font-bold mb-4 text-white">
                    What's Included:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {recommendation?.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-electric-cyan flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-white/10 pt-8">
                    <h4 className="text-xl font-heading font-bold mb-4 text-white">
                      Next Steps:
                    </h4>
                    <ol className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-electric-purple to-electric-cyan flex items-center justify-center text-sm font-bold">
                          1
                        </span>
                        <span>Schedule a free consultation with our AI experts</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-electric-purple to-electric-cyan flex items-center justify-center text-sm font-bold">
                          2
                        </span>
                        <span>Receive a custom implementation plan for your business</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-electric-purple to-electric-cyan flex items-center justify-center text-sm font-bold">
                          3
                        </span>
                        <span>Start seeing results within weeks</span>
                      </li>
                    </ol>
                  </div>
                </GlassCard>

                {/* Email Capture */}
                <GlassCard className="p-8 bg-gradient-to-br from-electric-purple/10 to-electric-cyan/10">
                  <h4 className="text-2xl font-heading font-bold mb-4 text-white text-center">
                    Get Your Detailed AI Roadmap
                  </h4>
                  <p className="text-gray-300 text-center mb-6">
                    We'll send you a comprehensive guide tailored to your needs
                  </p>
                  <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:border-electric-cyan focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="px-8 py-4 bg-gradient-to-r from-electric-purple to-electric-cyan text-white font-semibold rounded-xl hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
                    >
                      <Mail className="h-5 w-5" />
                      Send Roadmap
                    </button>
                  </form>
                </GlassCard>

                {/* CTA Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <MagneticButton>
                    <a
                      href="/contact"
                      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-electric-purple to-electric-cyan text-white text-lg font-semibold rounded-full hover:shadow-[0_0_40px_rgba(139,92,246,0.6)] transition-all duration-300"
                    >
                      Schedule Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </MagneticButton>
                  
                  <MagneticButton>
                    <a
                      href="tel:+17325977375"
                      className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-xl border-2 border-white text-white text-lg font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now
                    </a>
                  </MagneticButton>
                </div>

                <div className="mt-6 text-center">
                  <button
                    onClick={() => {
                      setShowResults(false);
                      setCurrentQuestion(0);
                      setAnswers({});
                    }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Retake Quiz
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
