import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | SimuPanel',
  description: 'Privacy Policy for SimuPanel - How we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="max-w-none">
            <p className="text-sm text-gray-600 mb-8">
              <strong>Effective Date:</strong> {new Date().toLocaleDateString()}<br />
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              SearchWell Labs LLC (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) operates the SimuPanel website and service. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you visit our website or use our services.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.1 Information You Provide</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Email Address:</strong> When you join our waitlist, we collect your email address to send you updates about SimuPanel&apos;s launch and development progress.</li>
              <li><strong>Communication:</strong> Any information you provide when contacting us directly.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.2 Information We Collect Automatically</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and click patterns.</li>
              <li><strong>Device Information:</strong> Your IP address, browser type, operating system, and device identifiers.</li>
              <li><strong>Cookies and Tracking:</strong> We use cookies and similar technologies to enhance your experience and analyze website performance.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Send you updates about SimuPanel&apos;s development and launch</li>
              <li>Provide customer support and respond to your inquiries</li>
              <li>Improve our website and services</li>
              <li>Analyze usage patterns and optimize user experience</li>
              <li>Comply with legal obligations</li>
              <li>Protect our rights and prevent fraud</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Information Sharing and Disclosure</h2>
            <p className="text-gray-700 leading-relaxed">We do not sell, trade, or otherwise transfer your personal information to third parties, except:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and conducting our business (e.g., Resend for email services).</li>
              <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights, property, or safety.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
              over the internet or electronic storage is 100% secure.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Your Rights</h2>
            <p className="text-gray-700 leading-relaxed">Depending on your location, you may have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong>Opt-out:</strong> Unsubscribe from our communications at any time</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed">Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Children&apos;s Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our services are not directed to children under 13 years of age. We do not knowingly collect 
              personal information from children under 13. If you are a parent or guardian and believe your 
              child has provided us with personal information, please contact us.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed">
              Your information may be transferred to and processed in countries other than your own. 
              We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page and updating the &ldquo;Last Updated&rdquo; date. Your continued use of our 
              services after any modifications constitutes acceptance of the updated Privacy Policy.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <p className="text-gray-700"><strong>SearchWell Labs LLC</strong></p>
              <p className="text-gray-700">17350 State Hwy 249 Ste 220</p>
              <p className="text-gray-700">Houston, TX 77064</p>
              <p className="text-gray-700">Email: <a href="mailto:jameson@searchwell.io" className="text-blue-600 hover:underline">jameson@searchwell.io</a></p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">12. California Privacy Rights</h2>
            <p className="text-gray-700 leading-relaxed">
              If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), 
              including the right to know what personal information we collect, how we use it, and with whom we share it. 
              You also have the right to request deletion of your personal information and to opt-out of the sale of personal information.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">13. European Union (GDPR) Rights</h2>
            <p className="text-gray-700 leading-relaxed">
              If you are in the European Union, you have additional rights under the General Data Protection Regulation (GDPR), 
              including the right to access, rectify, erase, restrict processing, data portability, and object to processing 
              of your personal information. You also have the right to lodge a complaint with a supervisory authority.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
