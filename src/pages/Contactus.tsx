import React from 'react';
import Layout from '../components/Layout';
import FuturisticCard from '../components/FuturisticCard';

const ContactUs: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Let&apos;s Talk
          </h1>
          <p className="text-white/80 text-lg">
            Schedule a demo or reach out to learn how GrofleX can help your business thrive.
          </p>
        </div>

        <FuturisticCard variant="neon" className="p-8 max-w-4xl mx-auto">
          <iframe
            src="https://sibforms.com/serve/MUIFAAKayAu5X2pGgP6oFM-sUgP1mZMYaQqiAVUS39zY8bDJNjnT1ArRNIzt21QdCoz3gdKbyiyvYP7q9VKclwSvNI-yKjNZGm_sSyJWbAg2298SfqQ1JWH5wI7Pmm6DJfS5_TFUdnGoiVflgwr2DCTcTD1dHxXX-qkpmxp_fEzVot7GqFH9-4hOFqkED-PokcoO7dlDhVulWHoy"
            width="100%"
            height="1350rem"
            title="Schedule Demo Form"
            className="rounded-xl shadow-lg w-full"
          />
        </FuturisticCard>
      </div>
    </Layout>
  );
};

export default ContactUs;
