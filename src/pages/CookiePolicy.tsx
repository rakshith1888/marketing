
import Layout from '../components/Layout';

const CookiePolicy = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Cookie Policy</h1>
            
            <div className="prose prose-invert max-w-none text-white/80 space-y-6">
              <p className="text-lg">
                This Cookie Policy explains how GrofleX uses cookies and similar technologies when you visit our website.
              </p>
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">What Are Cookies</h2>
                <p>
                  Cookies are small text files that are stored on your computer or mobile device when you visit a website. They allow the website to recognize your device and store some information about your preferences or past actions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">How We Use Cookies</h2>
                <p>
                  We use cookies to enhance your browsing experience, analyze website traffic, personalize content, and provide social media features.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Types of Cookies We Use</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Essential Cookies:</strong> Necessary for the website to function properly</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                  <li><strong>Functional Cookies:</strong> Enable enhanced functionality and personalization</li>
                  <li><strong>Marketing Cookies:</strong> Used to track visitors across websites</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Managing Cookies</h2>
                <p>
                  You can control and manage cookies in various ways. Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
                <p>
                  If you have any questions about this Cookie Policy, please contact us at hello@groflexerp.com.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CookiePolicy;
