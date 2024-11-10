import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ArrowLeft } from 'lucide-react';
import { imageServices } from '../../data/imageServices';
import Newsletter from '../../components/Newsletter';

const ImageServiceDetail = () => {
  const { id } = useParams();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const service = imageServices.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Service Not Found</h1>
          <Link to="/image-services" className="text-purple-400 hover:text-purple-300">
            Return to Image Services
          </Link>
        </div>
      </div>
    );
  }

  const ServiceIcon = service.icon;

  return (
    <>
      <Helmet>
        <title>{`${service.title} | Professional AI Image Solutions`}</title>
        <meta name="description" content={`${service.description} Professional AI-powered image generation services tailored for your business needs.`} />
        <meta name="keywords" content={`${service.features.join(', ')}, ${service.benefits.join(', ')}, AI image generation, professional image services`} />
        <meta property="og:title" content={`${service.title} | Professional AI Image Solutions`} />
        <meta property="og:description" content={service.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://mediamentorai.com/image-services/${service.id}`} />
        <meta property="og:image" content="https://mediamentorai.com/image-services-og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={service.title} />
        <meta name="twitter:description" content={service.description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://mediamentorai.com/image-services/${service.id}`} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-black overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-black to-black" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/image-services"
            className="inline-flex items-center text-gray-400 hover:text-white mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Image Services
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-2xl mr-4">
                <ServiceIcon className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white">{service.title}</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl">{service.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section ref={ref} className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
              <div className="space-y-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Benefits</h2>
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases & Process */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Use Cases */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Use Cases</h2>
              <div className="space-y-4">
                {service.useCases.map((useCase, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{useCase}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Our Process</h2>
              <div className="space-y-6">
                {service.process.map((step, index) => (
                  <div key={index} className="relative pl-8">
                    <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-purple-400 flex items-center justify-center">
                      <span className="text-black font-bold text-sm">{index + 1}</span>
                    </div>
                    <h3 className="text-white font-semibold mb-1">{step.step}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-black pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Newsletter />
        </div>
      </section>
    </>
  );
};

export default ImageServiceDetail;