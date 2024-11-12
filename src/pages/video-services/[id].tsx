import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ArrowLeft } from 'lucide-react';
import { videoServices } from '../../data/videoServices';
import ServiceBackground from '../../components/ServiceBackground';
import ServiceFeatureCard from '../../components/ServiceFeatureCard';
import ProcessTimeline from '../../components/ProcessTimeline';

const VideoServiceDetail = () => {
  const { id } = useParams();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const service = videoServices.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Service Not Found</h1>
          <Link to="/video-services" className="text-purple-400 hover:text-purple-300">
            Return to Video Services
          </Link>
        </div>
      </div>
    );
  }

  const ServiceIcon = service.icon;

  const getEnhancedDescription = (service: any) => {
    switch (service.id) {
      case 'ai-presenter':
        return `Transform your corporate communications with our cutting-edge AI presenter technology, delivering professional, lifelike presentations that captivate your audience. Our advanced AI-powered presenters offer unmatched consistency and quality, available 24/7 for all your video content needs. With support for multiple languages and perfect synchronization, reach global audiences while maintaining your brand's voice and personality. Leverage the power of AI to create engaging, professional-grade presentations at a fraction of the cost of traditional video production. Whether it's for training materials, product demonstrations, or corporate announcements, our AI presenters deliver flawless performances every time.`;
      case 'video-translation':
        return `Break down language barriers and reach global audiences with our state-of-the-art AI video translation services, featuring perfect lip-sync technology. Our advanced neural networks ensure natural-sounding translations that maintain the emotional impact and cultural nuances of your original content. Transform your existing videos into multilingual assets that resonate with viewers worldwide, while preserving the authenticity of your message. With support for over 50 languages and dialects, scale your content globally without the need for costly re-shoots or multiple presenters. Experience rapid turnaround times and consistent quality across all your translated content.`;
      case 'content-repurposing':
        return `Maximize the impact of your video content with our intelligent AI-powered repurposing technology, transforming long-form content into engaging short-form pieces perfect for social media. Our advanced algorithms identify key moments and compelling segments, automatically generating optimized clips for different platforms and audiences. Increase your content's reach and engagement while maintaining consistent brand messaging across all channels. Save countless hours of manual editing while ensuring each piece of content is perfectly formatted and optimized for its intended platform. Turn one piece of content into dozens of engaging social media assets, maximizing your return on investment.`;
      case 'explainer-videos':
        return `Create compelling, professional explainer videos that simplify complex ideas using our advanced AI animation technology. Our platform combines sophisticated visual storytelling with clear, engaging narratives to ensure your message resonates with viewers. Whether you're launching a new product, explaining a service, or training employees, our AI-powered explainer videos deliver consistent, high-quality results every time. Benefit from rapid production times and unlimited revisions, all while maintaining complete creative control over your content. Transform technical concepts into accessible, engaging stories that drive understanding and action.`;
      case 'interactive-avatars':
        return `Revolutionize customer engagement with our AI-powered interactive avatars, creating personalized, real-time interactions that feel natural and engaging. Our advanced neural networks enable fluid conversations, emotional intelligence, and dynamic responses that adapt to each user's needs. Create memorable brand experiences with avatars that maintain consistent personality traits while handling multiple interactions simultaneously. Perfect for virtual events, customer service, and interactive marketing campaigns, our avatars provide 24/7 availability with human-like interaction capabilities. Scale your customer engagement efforts while maintaining personal connections through cutting-edge AI technology.`;
      case 'motion-graphics':
        return `Elevate your video content with our AI-powered motion graphics and special effects suite, creating stunning visual elements that enhance your storytelling and brand impact. Our advanced algorithms generate professional-grade animations and effects that seamlessly integrate with your video content, ensuring a polished and cohesive final product. From dynamic logos and title sequences to complex visual effects, our system delivers high-quality results in a fraction of the time of traditional methods. Create engaging, branded motion graphics that capture attention and drive engagement across all your video content. Experience the perfect blend of creativity and efficiency with our AI-enhanced motion graphics technology.`;
      case 'b-roll-footage':
        return `Transform your video productions with our AI-generated custom B-roll footage service, creating contextually perfect supporting visuals for any story or message. Our advanced AI technology generates high-quality, relevant footage that enhances your narrative without the need for expensive location shoots or stock footage licenses. Create unlimited unique scenes and scenarios that perfectly match your content's tone and style. Whether you need cityscapes, nature scenes, or specific business environments, our system delivers professional-quality footage on demand. Save time and resources while maintaining complete creative control over your supporting visuals.`;
      case 'product-demos':
        return `Create compelling product demonstrations with our AI-powered video production platform, showcasing your products in their best light through dynamic, interactive presentations. Our advanced visualization technology generates professional-quality demonstrations that highlight key features and benefits while maintaining perfect consistency across all your product content. From software walkthroughs to physical product showcases, our system creates engaging demonstrations that drive understanding and sales. Experience rapid production capabilities that allow you to quickly update and adapt your product demos as features evolve. Deliver consistent, high-quality product demonstrations that convert viewers into customers.`;
      case 'training-videos':
        return `Revolutionize your training content with our AI-powered video production system, creating engaging, effective educational materials that drive learning outcomes. Our advanced platform combines clear instruction with interactive elements to ensure maximum knowledge retention and engagement. Generate consistent, professional-quality training videos that maintain perfect accuracy while adapting to different learning styles and needs. From employee onboarding to complex technical training, our system delivers scalable solutions that reduce training costs while improving effectiveness. Create comprehensive training programs that maintain quality and consistency across all your educational content.`;
      case 'social-optimization':
        return `Maximize your video content's impact across social media platforms with our AI-powered optimization service, automatically adapting and enhancing your videos for each specific platform. Our sophisticated algorithms analyze platform requirements and audience behavior patterns to create perfectly formatted versions of your content that drive engagement and sharing. From aspect ratio adjustments to attention-grabbing intros, our system ensures your videos perform optimally on every platform. Experience automated optimization that saves hours of manual editing while improving your content's reach and effectiveness. Create platform-perfect videos that capture attention and drive engagement across all your social media channels.`;
      default:
        return service.description;
    }
  };

  return (
    <>
      <Helmet>
        <title>{`${service.title} | Professional AI Video Solutions`}</title>
        <meta name="description" content={`${service.description} Professional AI-powered video production services tailored for your business needs.`} />
        <meta name="keywords" content={`${service.features.join(', ')}, ${service.benefits.join(', ')}, AI video production, professional video services`} />
        <meta property="og:title" content={`${service.title} | Professional AI Video Solutions`} />
        <meta property="og:description" content={service.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://mediamentorai.com/video-services/${service.id}`} />
        <meta property="og:image" content="https://mediamentorai.com/video-services-og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={service.title} />
        <meta name="twitter:description" content={service.description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://mediamentorai.com/video-services/${service.id}`} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] pt-32 pb-20 bg-black overflow-hidden">
        <ServiceBackground type="video" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/video-services"
            className="inline-flex items-center text-gray-400 hover:text-white mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Video Services
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-2xl mr-4">
                <ServiceIcon className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white">{service.title}</h1>
            </div>
            <p className="text-xl text-gray-300 leading-relaxed">
              {getEnhancedDescription(service)}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section ref={ref} className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ServiceFeatureCard
              title="Key Features"
              items={service.features}
              delay={0.2}
            />
            <ServiceFeatureCard
              title="Benefits"
              items={service.benefits}
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Use Cases & Process */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ServiceFeatureCard
              title="Use Cases"
              items={service.useCases}
              delay={0.6}
            />
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Our Process</h2>
              <ProcessTimeline steps={service.process} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoServiceDetail;