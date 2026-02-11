import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Video, Mic, Image as ImageIcon, Cog, PenTool, BarChart3,
  Target, Zap, Shield, CheckCircle2, ArrowRight, ChevronDown,
  Star
} from 'lucide-react';

import ParticleBackground from '../components/ParticleBackground';
import GradientText from '../components/GradientText';
import GlassCard from '../components/GlassCard';
import AnimatedCounter from '../components/AnimatedCounter';
import ScrollReveal from '../components/ScrollReveal';
import TypeWriter from '../components/TypeWriter';
import MagneticButton from '../components/MagneticButton';
import SchemaMarkup from '../components/SchemaMarkup';

const Home = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const services = [
    {
      icon: Video,
      title: 'AI Video',
      description: 'Create professional videos with AI-powered editing, enhancement, and generation.',
      link: '/services',
      color: 'from-purple-500 to-blue-500'
    },
    {
      icon: Mic,
      title: 'AI Audio',
      description: 'Generate natural voice-overs, podcasts, and audio content effortlessly.',
      link: '/services',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      icon: ImageIcon,
      title: 'AI Image',
      description: 'Design stunning visuals and generate custom graphics with AI.',
      link: '/services',
      color: 'from-cyan-400 to-purple-500'
    },
    {
      icon: Cog,
      title: 'AI Automations',
      description: 'Streamline workflows and eliminate repetitive tasks with intelligent automation.',
      link: '/services',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: PenTool,
      title: 'AI Content',
      description: 'Scale content production with AI-powered writing and optimization.',
      link: '/services',
      color: 'from-pink-500 to-blue-500'
    },
    {
      icon: BarChart3,
      title: 'AI Analytics',
      description: 'Transform data into actionable insights with AI-driven analytics.',
      link: '/services',
      color: 'from-blue-500 to-purple-500'
    }
  ];

  const stats = [
    { number: 25, suffix: '+', label: 'AI Platforms' },
    { number: 150, suffix: '+', label: 'Projects Completed' },
    { number: 98, suffix: '%', label: 'Client Satisfaction' },
    { number: 3, suffix: 'x', label: 'Average ROI' }
  ];

  const features = [
    {
      icon: Target,
      title: 'Tailored Solutions',
      description: 'Custom AI strategies designed specifically for your business goals and industry challenges.'
    },
    {
      icon: Zap,
      title: 'Rapid Implementation',
      description: 'Get up and running fast with our streamlined onboarding and deployment process.'
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Enterprise-grade security and privacy protection for all your sensitive information.'
    }
  ];

  const testimonials = [
    {
      text: "Media Mentor AI transformed our content production. We're now creating 5x more content in half the time, and the quality is exceptional.",
      author: 'Sarah Johnson',
      role: 'Marketing Director, TechCorp',
      avatar: 'https://i.pravatar.cc/150?img=12'
    },
    {
      text: 'The automation solutions saved our team 30+ hours per week. The ROI was evident within the first month. Highly recommend!',
      author: 'Michael Chen',
      role: 'CEO, Growth Dynamics',
      avatar: 'https://i.pravatar.cc/150?img=33'
    },
    {
      text: 'Their AI video solutions elevated our brand presence. We went from struggling with video content to publishing professional videos daily.',
      author: 'Emily Rodriguez',
      role: 'Founder, Creative Studios',
      avatar: 'https://i.pravatar.cc/150?img=47'
    }
  ];

  const faqs = [
    {
      question: 'What types of businesses do you work with?',
      answer: 'We work with businesses of all sizes across various industries including marketing, e-commerce, healthcare, finance, and more. Our AI solutions are customized to fit your specific needs regardless of your industry or company size.'
    },
    {
      question: 'How long does implementation take?',
      answer: 'Implementation timelines vary based on project scope. Simple solutions can be deployed in 1-2 weeks, while comprehensive enterprise implementations may take 4-8 weeks. We provide a detailed timeline during the discovery phase.'
    },
    {
      question: 'Do I need technical expertise to use your AI solutions?',
      answer: 'Not at all! We design our solutions to be user-friendly and provide comprehensive training. Our support team is always available to help you get the most out of your AI tools.'
    },
    {
      question: 'What kind of ROI can I expect?',
      answer: 'Most clients see significant ROI within 3-6 months. Typical benefits include 30-50% time savings on repetitive tasks, 3-5x increase in content production, and improved decision-making through better analytics. Use our ROI calculator for a personalized estimate.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We employ enterprise-grade security measures including encryption, secure data storage, and compliance with industry standards. Your data privacy and security are our top priorities.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Media Mentor AI | Transform Your Business with AI Innovation</title>
        <meta name="description" content="Leading AI solutions agency in Toms River, NJ. Expert AI services in video production, audio synthesis, image generation, automation, content creation, and analytics. Transform your business today." />
        <meta property="og:title" content="Media Mentor AI | Transform Your Business with AI Innovation" />
        <meta property="og:description" content="Transform your business with cutting-edge AI solutions. Expert AI services delivering measurable results." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mediamentorai.com" />
        <link rel="canonical" href="https://mediamentorai.com" />
      </Helmet>

      <SchemaMarkup type="LocalBusiness" />
      <SchemaMarkup 
        type="FAQPage" 
        data={{
          faqs: faqs.map(faq => ({
            question: faq.question,
            answer: faq.answer
          }))
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <ParticleBackground />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/50 to-[#0a0a0f]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              <TypeWriter 
                text="Transform Your Business with "
                speed={40}
                className="text-white"
              />
              <br />
              <GradientText className="inline-block">AI Innovation</GradientText>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
            >
              Unlock the power of artificial intelligence to streamline operations, create stunning content, and drive unprecedented growth.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <MagneticButton>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-electric-purple to-electric-cyan text-white text-lg font-semibold rounded-full hover:shadow-[0_0_40px_rgba(139,92,246,0.6)] transition-all duration-300"
                >
                  Start Free AI Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </MagneticButton>
              
              <MagneticButton>
                <Link
                  to="/calculator"
                  className="inline-flex items-center px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 text-white text-lg font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  See ROI Calculator
                </Link>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="h-8 w-8 text-gray-400 animate-bounce" />
        </motion.div>
      </section>

      {/* Trusted By Section */}
      <ScrollReveal>
        <section className="py-16 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-500 uppercase tracking-wider text-sm mb-12">
              Trusted by innovative businesses
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-40">
              {['INNOVATE CO', 'FUTURE TECH', 'NEXTGEN MEDIA', 'DIGITAL PROS', 'AI LEADERS'].map((company) => (
                <div key={company} className="text-2xl font-bold text-gray-400">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Services Grid Section */}
      <section className="py-20 bg-gradient-to-b from-[#0a0a0f] to-[#0d0d1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">
                <GradientText>Our AI Services</GradientText>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to transform every aspect of your business
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={ref}>
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 0.1}>
                <GlassCard tilt className="p-8 h-full group cursor-pointer">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 glow-purple`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-4 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Link 
                    to={service.link}
                    className="inline-flex items-center text-electric-cyan hover:text-electric-purple transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Results That Speak Section */}
      <section className="py-20 bg-electric-purple/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">
                <GradientText>Results That Speak</GradientText>
              </h2>
              <p className="text-xl text-gray-400">
                Our AI solutions deliver measurable impact
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-heading font-bold mb-2">
                    <GradientText>
                      <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                    </GradientText>
                  </div>
                  <p className="text-gray-400 text-lg">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">
                <GradientText>Why Choose Us</GradientText>
              </h2>
              <p className="text-xl text-gray-400">
                We're not just consultants — we're your AI transformation partners
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 0.1}>
                <GlassCard className="p-8 text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-electric-purple to-electric-cyan flex items-center justify-center mx-auto mb-6 glow-purple">
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-4 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <ScrollReveal>
        <section className="py-20 bg-gradient-to-b from-[#0a0a0f] to-[#0d0d1a]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">
                <GradientText>Before & After: AI Impact</GradientText>
              </h2>
              <p className="text-xl text-gray-400">
                See the transformation AI brings to content quality
              </p>
            </div>

            <GlassCard className="p-8">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-900">
                <img 
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
                  alt="AI transformation showcase"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-electric-purple/20 to-electric-cyan/20" />
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-gray-500 mb-2">Before AI</p>
                  <div className="text-2xl font-bold text-white">Manual Process</div>
                  <p className="text-gray-400">Hours of work</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-2">After AI</p>
                  <div className="text-2xl font-bold">
                    <GradientText>Automated</GradientText>
                  </div>
                  <p className="text-gray-400">Minutes to complete</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>
      </ScrollReveal>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">
                <GradientText>How It Works</GradientText>
              </h2>
              <p className="text-xl text-gray-400">
                Your journey to AI transformation in three simple steps
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-electric-purple via-electric-blue to-electric-cyan opacity-30" />
            
            {[
              { step: 1, title: 'Discover & Strategy', desc: 'We analyze your business needs and create a customized AI roadmap.' },
              { step: 2, title: 'Implementation', desc: 'Our experts deploy AI solutions seamlessly into your workflows.' },
              { step: 3, title: 'Optimization & Scale', desc: 'Continuous monitoring and refinement to maximize your ROI.' }
            ].map((item, index) => (
              <ScrollReveal key={item.step} delay={index * 0.2}>
                <div className="text-center relative">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-electric-purple to-electric-cyan flex items-center justify-center text-3xl font-bold mx-auto mb-6 glow-purple relative z-10">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-4 text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-[#0a0a0f] to-[#0d0d1a]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">
                <GradientText>What Our Clients Say</GradientText>
              </h2>
              <p className="text-xl text-gray-400">
                Real results from real businesses
              </p>
            </div>
          </ScrollReveal>

          <GlassCard className="p-8 md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start gap-2 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-xl md:text-2xl text-gray-300 mb-8 italic leading-relaxed">
                  "{testimonials[activeTestimonial].text}"
                </p>
                
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[activeTestimonial].avatar}
                    alt={testimonials[activeTestimonial].author}
                    className="w-16 h-16 rounded-full border-2 border-electric-purple"
                  />
                  <div>
                    <div className="font-bold text-white text-lg">
                      {testimonials[activeTestimonial].author}
                    </div>
                    <div className="text-gray-400">
                      {testimonials[activeTestimonial].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? 'bg-electric-purple w-8'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </GlassCard>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">
                <GradientText>Frequently Asked Questions</GradientText>
              </h2>
              <p className="text-xl text-gray-400">
                Everything you need to know about our AI services
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <GlassCard className="overflow-hidden">
                  <button
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                  >
                    <span className="font-heading font-semibold text-lg text-white pr-4">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: activeFaq === index ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-2xl text-electric-cyan flex-shrink-0"
                    >
                      +
                    </motion.span>
                  </button>
                  
                  <AnimatePresence>
                    {activeFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 text-gray-400 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-electric-purple to-electric-cyan opacity-10" />
        <ParticleBackground />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              <GradientText>Ready to Transform Your Business?</GradientText>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Join hundreds of businesses leveraging AI to work smarter, create faster, and grow exponentially.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-electric-purple text-lg font-semibold rounded-full hover:shadow-xl transition-all duration-300"
                >
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </MagneticButton>
              
              <MagneticButton>
                <Link
                  to="/calculator"
                  className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-xl border-2 border-white text-white text-lg font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
                >
                  Calculate Your ROI
                </Link>
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Home;
