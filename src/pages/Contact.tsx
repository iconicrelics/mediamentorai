import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import GradientText from '../components/GradientText';
import GlassCard from '../components/GlassCard';
import ScrollReveal from '../components/ScrollReveal';
import ParticleBackground from '../components/ParticleBackground';
import SchemaMarkup from '../components/SchemaMarkup';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    services: [] as string[],
    message: ''
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const serviceOptions = [
    'AI Video',
    'AI Audio',
    'AI Image',
    'AI Automations',
    'AI Content',
    'AI Analytics'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We\'ll be in touch soon.');
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  return (
    <>
      <Helmet>
        <title>Contact Media Mentor AI | Book Your Free AI Consultation</title>
        <meta name="description" content="Get in touch with Media Mentor AI for a free consultation. Located in Toms River, NJ. Call (732) 597-7375 or email MediaMentorAI@gmail.com. Let's discuss how our AI solutions can transform your business." />
        <meta property="og:title" content="Contact Media Mentor AI | Book Your Free AI Consultation" />
        <meta property="og:description" content="Get in touch for a free consultation. Let's discuss how AI can transform your business." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mediamentorai.com/contact" />
        <link rel="canonical" href="https://mediamentorai.com/contact" />
      </Helmet>

      <SchemaMarkup type="LocalBusiness" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <ParticleBackground />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/50 to-[#0a0a0f]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
                <GradientText>Let's Talk</GradientText>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Ready to transform your business with AI? Let's discuss how we can help you achieve your goals.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Form - Left Side */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <GlassCard className="p-8 md:p-10">
                  <h2 className="text-3xl font-heading font-bold mb-2 text-white">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-400 mb-8">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div className="relative">
                      <label 
                        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                          focusedField === 'name' || formData.name
                            ? '-top-2 text-xs text-electric-cyan bg-[#0d0d1a] px-2'
                            : 'top-4 text-base text-gray-400'
                        }`}
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:border-electric-cyan focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                      <label 
                        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                          focusedField === 'email' || formData.email
                            ? '-top-2 text-xs text-electric-cyan bg-[#0d0d1a] px-2'
                            : 'top-4 text-base text-gray-400'
                        }`}
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:border-electric-cyan focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Phone & Company */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <label 
                          className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                            focusedField === 'phone' || formData.phone
                              ? '-top-2 text-xs text-electric-cyan bg-[#0d0d1a] px-2'
                              : 'top-4 text-base text-gray-400'
                          }`}
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:border-electric-cyan focus:outline-none transition-colors"
                        />
                      </div>

                      <div className="relative">
                        <label 
                          className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                            focusedField === 'company' || formData.company
                              ? '-top-2 text-xs text-electric-cyan bg-[#0d0d1a] px-2'
                              : 'top-4 text-base text-gray-400'
                          }`}
                        >
                          Company Name
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                          onFocus={() => setFocusedField('company')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:border-electric-cyan focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Services Checkboxes */}
                    <div>
                      <label className="block text-white font-semibold mb-4">
                        Services Interested In
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {serviceOptions.map((service) => (
                          <button
                            key={service}
                            type="button"
                            onClick={() => handleServiceToggle(service)}
                            className={`px-4 py-3 rounded-xl border-2 transition-all duration-300 text-sm font-medium ${
                              formData.services.includes(service)
                                ? 'border-electric-cyan bg-electric-cyan/10 text-electric-cyan'
                                : 'border-white/10 bg-white/5 text-gray-400 hover:border-white/20'
                            }`}
                          >
                            {service}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message Field */}
                    <div className="relative">
                      <label 
                        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                          focusedField === 'message' || formData.message
                            ? '-top-2 text-xs text-electric-cyan bg-[#0d0d1a] px-2'
                            : 'top-4 text-base text-gray-400'
                        }`}
                      >
                        Message *
                      </label>
                      <textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        rows={6}
                        className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:border-electric-cyan focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-gradient-to-r from-electric-purple to-electric-cyan text-white text-lg font-semibold rounded-xl hover:shadow-[0_0_40px_rgba(139,92,246,0.6)] transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Send Message
                      <Send className="h-5 w-5" />
                    </button>
                  </form>
                </GlassCard>
              </ScrollReveal>
            </div>

            {/* Contact Info - Right Side */}
            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal delay={0.2}>
                <GlassCard className="p-8">
                  <h3 className="text-2xl font-heading font-bold mb-6 text-white">
                    Contact Information
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-electric-purple/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-electric-cyan" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-1">Email</p>
                        <a 
                          href="mailto:MediaMentorAI@gmail.com"
                          className="text-white hover:text-electric-cyan transition-colors font-medium"
                        >
                          MediaMentorAI@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-electric-purple/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-electric-cyan" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-1">Phone</p>
                        <a 
                          href="tel:+17325977375"
                          className="text-white hover:text-electric-cyan transition-colors font-medium"
                        >
                          (732) 597-7375
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-electric-purple/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-electric-cyan" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-1">Location</p>
                        <p className="text-white font-medium">
                          Toms River, New Jersey
                        </p>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <GlassCard className="p-8">
                  <h3 className="text-2xl font-heading font-bold mb-6 text-white flex items-center gap-2">
                    <Clock className="h-6 w-6 text-electric-cyan" />
                    Office Hours
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Monday - Friday</span>
                      <span className="text-white font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Saturday</span>
                      <span className="text-white font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Sunday</span>
                      <span className="text-white font-medium">Closed</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-sm text-gray-400">
                      All times are in Eastern Standard Time (EST)
                    </p>
                  </div>
                </GlassCard>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <GlassCard className="p-8 bg-gradient-to-br from-electric-purple/10 to-electric-cyan/10">
                  <h3 className="text-xl font-heading font-bold mb-3 text-white">
                    Ready to Get Started?
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Book a free consultation and let's discuss how we can help transform your business with AI solutions.
                  </p>
                  <a
                    href="tel:+17325977375"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-electric-purple to-electric-cyan text-white rounded-xl font-semibold hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300"
                  >
                    <Phone className="h-5 w-5" />
                    Call Now
                  </a>
                </GlassCard>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
