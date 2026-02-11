import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Video, Mic, Image as ImageIcon, Cog, PenTool, BarChart3, ArrowRight, CheckCircle2 } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';
import GradientText from '../components/GradientText';
import GlassCard from '../components/GlassCard';
import ScrollReveal from '../components/ScrollReveal';
import SchemaMarkup from '../components/SchemaMarkup';

const Services = () => {
  const services = [
    {
      icon: Video,
      title: 'AI Video Production',
      description: 'Transform your video content with cutting-edge AI technology. From automated editing to enhancement and generation.',
      features: [
        'AI-powered video editing and enhancement',
        'Automated subtitle generation and translation',
        'Video content generation from text',
        'Professional quality upscaling and restoration'
      ],
      color: 'from-purple-500 to-blue-500'
    },
    {
      icon: Mic,
      title: 'AI Audio Solutions',
      description: 'Create professional audio content with natural-sounding AI voices and advanced audio processing.',
      features: [
        'Natural text-to-speech voice synthesis',
        'Multi-language audio content generation',
        'Podcast production and editing',
        'Audio enhancement and noise reduction'
      ],
      color: 'from-blue-500 to-cyan-400'
    },
    {
      icon: ImageIcon,
      title: 'AI Image Generation',
      description: 'Design stunning visuals, enhance photos, and generate custom graphics with state-of-the-art AI.',
      features: [
        'Custom image generation from descriptions',
        'Professional photo enhancement and restoration',
        'Brand-consistent visual asset creation',
        'Background removal and replacement'
      ],
      color: 'from-cyan-400 to-purple-500'
    },
    {
      icon: Cog,
      title: 'AI Automations',
      description: 'Streamline your workflows and eliminate repetitive tasks with intelligent automation that works 24/7.',
      features: [
        'Workflow automation and optimization',
        'Intelligent data processing and routing',
        'Automated report generation',
        'Integration with existing tools and systems'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: PenTool,
      title: 'AI Content Creation',
      description: 'Scale your content production with AI-powered writing, ideation, and optimization for all marketing channels.',
      features: [
        'SEO-optimized content generation',
        'Social media content creation',
        'Blog post and article writing',
        'Content strategy and planning'
      ],
      color: 'from-pink-500 to-blue-500'
    },
    {
      icon: BarChart3,
      title: 'AI Analytics & Insights',
      description: 'Transform data into actionable insights with AI-driven analytics, forecasting, and intelligent reporting.',
      features: [
        'Predictive analytics and forecasting',
        'Automated reporting and dashboards',
        'Customer behavior analysis',
        'ROI tracking and optimization'
      ],
      color: 'from-blue-500 to-purple-500'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services | Media Mentor AI - Transform Your Business</title>
        <meta name="description" content="Comprehensive AI solutions including video production, audio synthesis, image generation, automation, content creation, and analytics. Transform your business with cutting-edge AI technology." />
        <meta property="og:title" content="AI Services | Media Mentor AI" />
        <meta property="og:description" content="Explore our comprehensive AI solutions designed to elevate your business." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mediamentorai.com/services" />
        <link rel="canonical" href="https://mediamentorai.com/services" />
      </Helmet>

      <SchemaMarkup 
        type="Service" 
        data={{
          services: services.map(s => ({
            name: s.title,
            description: s.description
          }))
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <ParticleBackground />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/50 to-[#0a0a0f]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-electric-purple to-electric-cyan mb-6 glow-purple">
                <Cog className="h-10 w-10 text-white animate-spin-slow" />
              </div>
              
              <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
                Transform Your Business with
                <br />
                <GradientText className="inline-block">AI Innovation</GradientText>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive suite of AI-powered solutions designed to elevate every aspect of your business
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-[#0a0a0f] to-[#0d0d1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 0.1}>
                <GlassCard 
                  tilt 
                  className="p-8 h-full flex flex-col group"
                >
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                    style={{ boxShadow: '0 0 30px rgba(139, 92, 246, 0.4)' }}
                  >
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold mb-4 text-white">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-electric-cyan flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-electric-cyan hover:text-electric-purple font-semibold transition-colors group/link"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">
                <GradientText>Why Choose Our AI Services</GradientText>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We combine cutting-edge technology with industry expertise to deliver exceptional results
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Expert Team', desc: 'Skilled professionals with deep AI expertise', emoji: '👥' },
              { title: 'Custom Solutions', desc: 'Tailored to your specific business needs', emoji: '🎯' },
              { title: 'Proven Results', desc: 'Track record of successful implementations', emoji: '📈' },
              { title: '24/7 Support', desc: 'Always here when you need assistance', emoji: '💬' }
            ].map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.1}>
                <GlassCard className="p-6 text-center">
                  <div className="text-5xl mb-4">{item.emoji}</div>
                  <h3 className="text-xl font-heading font-bold mb-2 text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {item.desc}
                  </p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-electric-purple to-electric-cyan opacity-10" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              <GradientText>Ready to Get Started?</GradientText>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI services can transform your business
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-electric-purple to-electric-cyan text-white text-lg font-semibold rounded-full hover:shadow-[0_0_40px_rgba(139,92,246,0.6)] transition-all duration-300"
            >
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Services;
