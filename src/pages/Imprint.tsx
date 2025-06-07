
import Layout from '../components/Layout';

const Imprint = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Imprint</h1>
            
            <div className="prose prose-invert max-w-none text-white/80 space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Company Information</h2>
                <div className="space-y-2">
                  <p><strong>Company Name:</strong> Talent Worldwide Inc.</p>
                  <p><strong>Address:</strong> 2261 Market Street STE 5943, San Francisco, CA, USA</p>
                  <p><strong>Email:</strong> hello@groflexerp.com</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Legal Representation</h2>
                <p>
                  The company is legally represented by its management board in accordance with applicable corporate law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Regulatory Information</h2>
                <p>
                  This website and its contents are subject to the laws of the United States and the state of California.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Disclaimer</h2>
                <p>
                  The information contained on this website is for general information purposes only. While we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind about the completeness, accuracy, reliability, suitability, or availability of the website or the information contained on the website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Contact</h2>
                <p>
                  For any questions regarding this imprint or our services, please contact us at hello@groflexerp.com.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Imprint;
