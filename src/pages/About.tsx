import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Target, Users, Lightbulb, Award, Shield, Globe, Sparkles } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';
import GradientText from '../components/GradientText';
import GlassCard from '../components/GlassCard';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedCounter from '../components/AnimatedCounter';
import SchemaMarkup from '../components/SchemaMarkup';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'Pushing the boundaries of AI technology to deliver cutting-edge solutions that drive real results.'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Dedicated to achieving measurable results and exceeding expectations with every project.'
    },
    {
      icon: Lightbulb,
      title: 'Expertise',
      description: 'Deep knowledge and experience in AI and digital transformation across industries.'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Commitment to delivering exceptional quality and attention to detail in every solution.'
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'Building long-term relationships through transparency, reliability, and integrity.'
    },
    {
      icon: Globe,
      title: 'Impact',
      description: 'Making advanced AI technology accessible to businesses of all sizes worldwide.'
    }
  ];

  const timeline = [
    { year: 'Discovery', title: 'Understanding Your Needs', desc: 'We dive deep into your business challenges, goals, and opportunities to create a tailored AI strategy.' },
    { year: 'Strategy', title: 'Custom AI Roadmap', desc: 'Developing a comprehensive plan that aligns AI solutions with your specific business objectives.' },
    { year: 'Implementation', title: 'Seamless Integration', desc: 'Deploying AI tools and systems with minimal disruption to your existing workflows.' },
    { year: 'Optimization', title: 'Continuous Improvement', desc: 'Ongoing monitoring, refinement, and scaling to ensure maximum ROI and long-term success.' }
  ];

  const stats = [
    { number: 25, suffix: '+', label: 'AI Platforms' },
    { number: 150, suffix: '+', label: 'Projects Delivered' },
    { number: 98, suffix: '%', label: 'Client Satisfaction' },
    { number: 5, suffix: 'x', label: 'Average Content Increase' }
  ];

  return (
    <>
      <Helmet>
        <title>About Media Mentor AI | Our Mission & AI Innovation Journey</title>
        <meta name="description" content="Discover how Media Mentor AI is revolutionizing business through AI innovation. Learn about our mission, values, and commitment to delivering cutting-edge AI solutions from Toms River, NJ." />
        <meta property="og:title" content="About Media Mentor AI | Our Mission & AI Innovation Journey" />
        <meta property="og:description" content="Revolutionizing business through AI innovation. Based in Toms River, NJ, serving businesses nationwide." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mediamentorai.com/about" />
        <link rel="canonical" href="https://mediamentorai.com/about" />
      </Helmet>

      <SchemaMarkup type="LocalBusiness" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <ParticleBackground />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/50 to-[#0a0a0f]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-electric-purple to-electric-cyan mb-6 glow-purple">
                <Sparkles className="h-10 w-10 text-white" />
              </div>
              
              <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
                Transforming Business
                <br />
                <GradientText className="inline-block">Through AI Innovation</GradientText>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                We're on a mission to make advanced AI technology accessible and impactful for businesses worldwide
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                <GradientText>Our Story</GradientText>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Media Mentor AI was founded with a simple yet powerful vision: to make cutting-edge AI accessible to businesses of all sizes, empowering them to thrive in a technology-driven world. Based in <strong className="text-white">Toms River, NJ</strong>, we're a team of AI specialists, data analysts, creative minds, and problem-solvers dedicated to transforming how businesses operate and communicate.
              </p>
              
              <p>
                Our journey began with a desire to help small, local businesses in Ocean County and all over New Jersey, especially those challenged by the complexities of today's digital landscape. As we watched the demand for high-quality, engaging content and streamlined processes grow, we recognized the potential of AI to bridge the gap.
              </p>
              
              <p>
                From video and audio production to visual branding, content creation, and advanced analytics, we've built a suite of AI-powered solutions designed to meet the unique needs of modern businesses. But at Media Mentor AI, we're more than just an AI agency—we're your partner in innovation.
              </p>
              
              <p>
                We believe in the power of intelligent automation, data-driven insights, and creative content to transform businesses. Our approach is rooted in understanding your goals and challenges, so we can provide solutions that don't just meet industry standards but elevate your brand, optimize your workflows, and make data meaningful.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-electric-purple/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">
                <GradientText>Our Core Values</GradientText>
              </h2>
              <p className="text-xl text-gray-400">
                The principles that guide everything we do
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1}>
                <GlassCard className="p-8 h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-electric-purple to-electric-cyan flex items-center justify-center mb-6 glow-purple">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-3 text-white">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach - Timeline */}
      <section className="py-20 bg-gradient-to-b from-[#0a0a0f] to-[#0d0d1a]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">
                <GradientText>Our Approach</GradientText>
              </h2>
              <p className="text-xl text-gray-400">
                A proven methodology for AI transformation success
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <ScrollReveal key={item.year} delay={index * 0.1}>
                <div className="relative">
                  <GlassCard className="p-8 ml-0 md:ml-24">
                    <div className="absolute -left-4 md:-left-12 top-8 w-16 h-16 rounded-full bg-gradient-to-r from-electric-purple to-electric-cyan flex items-center justify-center font-bold text-lg glow-purple">
                      {index + 1}
                    </div>
                    
                    <div className="md:ml-4">
                      <div className="text-electric-cyan font-semibold mb-2">{item.year}</div>
                      <h3 className="text-2xl font-heading font-bold mb-3 text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </GlassCard>
                  
                  {/* Connecting line */}
                  {index < timeline.length - 1 && (
                    <div className="hidden md:block absolute left-0 top-24 w-px h-16 bg-gradient-to-b from-electric-purple to-electric-cyan opacity-30 ml-8" />
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section (Placeholder) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">
                <GradientText>Expert Team</GradientText>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our diverse team of AI specialists, developers, and strategists brings decades of combined experience in artificial intelligence, machine learning, and business transformation.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <GlassCard className="p-12 text-center">
              <p className="text-xl text-gray-300 mb-6">
                We're a passionate team dedicated to pushing the boundaries of what's possible with AI technology. Every member brings unique expertise and a shared commitment to your success.
              </p>
              <p className="text-lg text-gray-400">
                Located in Toms River, NJ, serving businesses nationwide.
              </p>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-electric-purple to-electric-cyan opacity-10" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              <GradientText>Join Us on This Journey</GradientText>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's work together to transform your business with the power of AI
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-electric-purple to-electric-cyan text-white text-lg font-semibold rounded-full hover:shadow-[0_0_40px_rgba(139,92,246,0.6)] transition-all duration-300"
            >
              Get Started Today
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default About;
