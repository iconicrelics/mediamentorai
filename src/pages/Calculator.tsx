import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { TrendingUp, DollarSign, Clock, Mail, ArrowRight } from 'lucide-react';
import GradientText from '../components/GradientText';
import GlassCard from '../components/GlassCard';
import ScrollReveal from '../components/ScrollReveal';
import ParticleBackground from '../components/ParticleBackground';
import MagneticButton from '../components/MagneticButton';

const Calculator = () => {
  const [employees, setEmployees] = useState(50);
  const [hoursPerWeek, setHoursPerWeek] = useState(20);
  const [hourlyCost, setHourlyCost] = useState(50);
  const [industry, setIndustry] = useState('technology');
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const industries = [
    'Technology',
    'Healthcare',
    'Finance',
    'Marketing',
    'E-commerce',
    'Manufacturing'
  ];

  // Calculate ROI metrics
  const weeksPerYear = 52;
  const aiEfficiencyGain = 0.35; // 35% time saved on average
  
  const hoursBackPerWeek = hoursPerWeek * aiEfficiencyGain;
  const monthlySavings = (hoursBackPerWeek * hourlyCost * 4.33).toFixed(0);
  const annualSavings = (hoursBackPerWeek * hourlyCost * weeksPerYear).toFixed(0);
  const roi = ((parseFloat(annualSavings) / (parseFloat(annualSavings) * 0.2)) * 100).toFixed(0);

  useEffect(() => {
    if (showResults) {
      // Confetti animation
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const confetti: any[] = [];
      const confettiCount = 100;
      const colors = ['#8b5cf6', '#06b6d4', '#ec4899', '#3b82f6'];

      for (let i = 0; i < confettiCount; i++) {
        confetti.push({
          x: Math.random() * canvas.width,
          y: -10,
          vx: Math.random() * 4 - 2,
          vy: Math.random() * 3 + 2,
          rotation: Math.random() * 360,
          rotationSpeed: Math.random() * 10 - 5,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 8 + 4
        });
      }

      let animationFrameId: number;
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        confetti.forEach((c, i) => {
          c.x += c.vx;
          c.y += c.vy;
          c.rotation += c.rotationSpeed;
          c.vy += 0.1; // gravity

          ctx.save();
          ctx.translate(c.x, c.y);
          ctx.rotate((c.rotation * Math.PI) / 180);
          ctx.fillStyle = c.color;
          ctx.fillRect(-c.size / 2, -c.size / 2, c.size, c.size / 2);
          ctx.restore();

          if (c.y > canvas.height) {
            confetti.splice(i, 1);
          }
        });

        if (confetti.length > 0) {
          animationFrameId = requestAnimationFrame(animate);
        }
      };

      animate();

      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, [showResults]);

  const handleCalculate = () => {
    setShowResults(true);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you! We'll send a detailed report to ${email}`);
    setEmail('');
  };

  return (
    <>
      <Helmet>
        <title>AI ROI Calculator | Calculate Your Savings | Media Mentor AI</title>
        <meta name="description" content="Calculate how much time and money your business can save with AI automation. Get a personalized ROI estimate in seconds. Free AI ROI calculator." />
        <meta property="og:title" content="AI ROI Calculator | Media Mentor AI" />
        <meta property="og:description" content="Calculate your potential AI savings and ROI in seconds." />
        <link rel="canonical" href="https://mediamentorai.com/calculator" />
      </Helmet>

      {/* Confetti Canvas */}
      {showResults && (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 pointer-events-none z-50"
        />
      )}

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <ParticleBackground />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/50 to-[#0a0a0f]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-electric-purple to-electric-cyan mb-6 glow-purple">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
              
              <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
                <GradientText>AI ROI Calculator</GradientText>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Discover how much time and money your business can save with AI automation
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <GlassCard className="p-8 md:p-12">
              <h2 className="text-3xl font-heading font-bold mb-8 text-white text-center">
                Calculate Your Potential Savings
              </h2>

              <div className="space-y-8">
                {/* Employees Slider */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-white font-semibold">
                      Number of Employees
                    </label>
                    <span className="text-2xl font-bold">
                      <GradientText>{employees}</GradientText>
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="500"
                    value={employees}
                    onChange={(e) => setEmployees(parseInt(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right, #8b5cf6 0%, #06b6d4 ${(employees / 500) * 100}%, rgba(255,255,255,0.1) ${(employees / 500) * 100}%, rgba(255,255,255,0.1) 100%)`
                    }}
                  />
                  <div className="flex justify-between text-sm text-gray-400 mt-2">
                    <span>1</span>
                    <span>500</span>
                  </div>
                </div>

                {/* Hours Slider */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-white font-semibold">
                      Hours on Manual Tasks per Week
                    </label>
                    <span className="text-2xl font-bold">
                      <GradientText>{hoursPerWeek} hrs</GradientText>
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="80"
                    value={hoursPerWeek}
                    onChange={(e) => setHoursPerWeek(parseInt(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #8b5cf6 0%, #06b6d4 ${(hoursPerWeek / 80) * 100}%, rgba(255,255,255,0.1) ${(hoursPerWeek / 80) * 100}%, rgba(255,255,255,0.1) 100%)`
                    }}
                  />
                  <div className="flex justify-between text-sm text-gray-400 mt-2">
                    <span>1 hr</span>
                    <span>80 hrs</span>
                  </div>
                </div>

                {/* Hourly Cost Slider */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-white font-semibold">
                      Average Hourly Cost
                    </label>
                    <span className="text-2xl font-bold">
                      <GradientText>${hourlyCost}</GradientText>
                    </span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="200"
                    value={hourlyCost}
                    onChange={(e) => setHourlyCost(parseInt(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #8b5cf6 0%, #06b6d4 ${((hourlyCost - 15) / 185) * 100}%, rgba(255,255,255,0.1) ${((hourlyCost - 15) / 185) * 100}%, rgba(255,255,255,0.1) 100%)`
                    }}
                  />
                  <div className="flex justify-between text-sm text-gray-400 mt-2">
                    <span>$15</span>
                    <span>$200</span>
                  </div>
                </div>

                {/* Industry Dropdown */}
                <div>
                  <label className="block text-white font-semibold mb-4">
                    Industry
                  </label>
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:border-electric-cyan focus:outline-none appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%238b5cf6' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center',
                      backgroundSize: '1.5rem'
                    }}
                  >
                    {industries.map((ind) => (
                      <option key={ind} value={ind.toLowerCase()} className="bg-[#0d0d1a]">
                        {ind}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Calculate Button */}
                <MagneticButton>
                  <button
                    onClick={handleCalculate}
                    className="w-full px-8 py-4 bg-gradient-to-r from-electric-purple to-electric-cyan text-white text-lg font-semibold rounded-xl hover:shadow-[0_0_40px_rgba(139,92,246,0.6)] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Calculate My Savings
                    <TrendingUp className="h-5 w-5" />
                  </button>
                </MagneticButton>
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* Results Section */}
          {showResults && (
            <ScrollReveal delay={0.2}>
              <div className="mt-8 space-y-6">
                <h3 className="text-3xl font-heading font-bold text-center mb-8">
                  <GradientText>Your AI Savings Projection</GradientText>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <GlassCard className="p-6 text-center">
                    <Clock className="h-12 w-12 mx-auto mb-4 text-electric-cyan" />
                    <div className="text-4xl font-bold mb-2">
                      <GradientText>{hoursBackPerWeek.toFixed(1)} hrs</GradientText>
                    </div>
                    <p className="text-gray-400">Time Saved Per Week</p>
                  </GlassCard>

                  <GlassCard className="p-6 text-center">
                    <DollarSign className="h-12 w-12 mx-auto mb-4 text-electric-cyan" />
                    <div className="text-4xl font-bold mb-2">
                      <GradientText>${monthlySavings}</GradientText>
                    </div>
                    <p className="text-gray-400">Monthly Savings</p>
                  </GlassCard>

                  <GlassCard className="p-6 text-center">
                    <TrendingUp className="h-12 w-12 mx-auto mb-4 text-electric-cyan" />
                    <div className="text-4xl font-bold mb-2">
                      <GradientText>${annualSavings}</GradientText>
                    </div>
                    <p className="text-gray-400">Annual Savings</p>
                  </GlassCard>
                </div>

                {/* Bar Chart */}
                <GlassCard className="p-8">
                  <h4 className="text-xl font-heading font-bold mb-6 text-white text-center">
                    Before vs After AI Implementation
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-400">Before AI</span>
                        <span className="text-white font-bold">{hoursPerWeek} hrs/week</span>
                      </div>
                      <div className="w-full h-8 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-gray-600 to-gray-500 rounded-full"
                          style={{ width: '100%' }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-400">After AI</span>
                        <span className="text-white font-bold">{(hoursPerWeek - hoursBackPerWeek).toFixed(1)} hrs/week</span>
                      </div>
                      <div className="w-full h-8 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-electric-purple to-electric-cyan rounded-full glow-purple"
                          style={{ width: `${((hoursPerWeek - hoursBackPerWeek) / hoursPerWeek) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-2xl font-bold">
                      <GradientText>{roi}% ROI</GradientText>
                    </p>
                    <p className="text-gray-400 text-sm mt-2">Estimated Return on Investment</p>
                  </div>
                </GlassCard>

                {/* Email Capture */}
                <GlassCard className="p-8 bg-gradient-to-br from-electric-purple/10 to-electric-cyan/10">
                  <h4 className="text-2xl font-heading font-bold mb-4 text-white text-center">
                    Get Your Full AI Savings Report
                  </h4>
                  <p className="text-gray-300 text-center mb-6">
                    Receive a detailed breakdown and personalized recommendations via email
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
                      className="px-8 py-4 bg-gradient-to-r from-electric-purple to-electric-cyan text-white font-semibold rounded-xl hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Mail className="h-5 w-5" />
                      Send Report
                    </button>
                  </form>
                </GlassCard>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <ScrollReveal>
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-electric-purple to-electric-cyan opacity-10" />
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              <GradientText>Ready to Make It Reality?</GradientText>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help you achieve these savings with AI
            </p>
            <MagneticButton>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-electric-purple text-lg font-semibold rounded-full hover:shadow-xl transition-all duration-300"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </MagneticButton>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
};

export default Calculator;
