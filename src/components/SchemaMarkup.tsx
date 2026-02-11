import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SchemaMarkupProps {
  type: 'LocalBusiness' | 'Service' | 'FAQPage';
  data?: any;
}

const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ type, data }) => {
  const getSchema = () => {
    switch (type) {
      case 'LocalBusiness':
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Media Mentor AI',
          description: 'AI consulting agency specializing in Video, Audio, Image, Automation, Content Creation and Analytics',
          url: 'https://mediamentorai.com',
          telephone: '+1-732-597-7375',
          email: 'MediaMentorAI@gmail.com',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Toms River',
            addressRegion: 'NJ',
            postalCode: '08753',
            addressCountry: 'US'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: '39.9537',
            longitude: '-74.1979'
          },
          sameAs: [
            'https://www.linkedin.com/in/media-mentor-ai-063b41326',
            'https://x.com/MediaMentorAI',
            'https://www.youtube.com/@MediaMentorAI'
          ],
          priceRange: '$$',
          openingHours: 'Mo-Fr 09:00-18:00, Sa 10:00-16:00'
        };

      case 'Service':
        return data?.services?.map((service: any) => ({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: service.name,
          description: service.description,
          provider: {
            '@type': 'LocalBusiness',
            name: 'Media Mentor AI'
          },
          areaServed: {
            '@type': 'State',
            name: 'New Jersey'
          },
          serviceType: service.name
        })) || [];

      case 'FAQPage':
        return {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: data?.faqs?.map((faq: any) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer
            }
          })) || []
        };

      default:
        return null;
    }
  };

  const schema = getSchema();
  if (!schema) return null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(Array.isArray(schema) ? schema : schema)}
      </script>
    </Helmet>
  );
};

export default SchemaMarkup;
