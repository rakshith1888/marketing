
import Layout from '../components/Layout';

const Imprint = () => {
  return (
    <Layout>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Imprint</span>
            </h1>
            <p className="text-xl text-white/80">
              Last modified: June 01, 2024
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <div className="text-white/80 space-y-6">
              <p>
                Imprint content will be available soon. For immediate assistance, please contact us at hello@groflexerp.com.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Imprint;
