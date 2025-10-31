import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | SimuPanel',
  description: 'Terms of Service for SimuPanel - User agreement and service terms.',
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="max-w-none">
            <p className="text-sm text-gray-600 mb-8">
              <strong>Effective Date:</strong> {new Date().toLocaleDateString()}<br />
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using SimuPanel (&ldquo;Service&rdquo;), operated by SearchWell Labs LLC (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), 
              you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms, 
              please do not use our Service.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Description of Service</h2>
            <p className="text-gray-700 leading-relaxed">
              SimuPanel is a customer simulation platform powered by Semantic Similarity Rating (SSR) that enables businesses 
              to test campaigns, messaging, and product ideas with digital twins of their customers. The Service uses 
              artificial intelligence and peer-reviewed science to simulate real customer reactions and provide purchase intent 
              insights. The Service is currently in development and available through our waitlist program.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. User Accounts and Registration</h2>
            <p className="text-gray-700 leading-relaxed">
              To access certain features of our Service, you may be required to provide personal information, 
              including your email address. You agree to provide accurate, current, and complete information 
              and to update such information to keep it accurate, current, and complete.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Acceptable Use</h2>
            <p className="text-gray-700 leading-relaxed">You agree not to use the Service to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Transmit any harmful, threatening, or offensive content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use the Service for any commercial purpose without our express written consent</li>
              <li>Interfere with or disrupt the Service or servers connected to the Service</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Intellectual Property Rights</h2>
            <p className="text-gray-700 leading-relaxed">
              The Service and its original content, features, and functionality are owned by SearchWell Labs LLC 
              and are protected by international copyright, trademark, patent, trade secret, and other intellectual 
              property laws. You may not reproduce, distribute, modify, or create derivative works without our 
              express written permission.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use 
              of the Service, to understand our practices. By using our Service, you consent to the collection 
              and use of information in accordance with our Privacy Policy.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Disclaimers and Limitations of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS 
              OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A 
              PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, SEARCHWELL LABS LLC SHALL NOT BE LIABLE FOR ANY INDIRECT, 
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF 
              PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF THE SERVICE.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to defend, indemnify, and hold harmless SearchWell Labs LLC and its officers, directors, 
              employees, and agents from and against any claims, damages, obligations, losses, liabilities, costs, 
              or debt, and expenses (including attorney&apos;s fees) arising from your use of the Service or violation 
              of these Terms.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Termination</h2>
            <p className="text-gray-700 leading-relaxed">
              We may terminate or suspend your access to the Service immediately, without prior notice or liability, 
              for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, 
              your right to use the Service will cease immediately.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Governing Law and Dispute Resolution</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the State of Texas, 
              without regard to its conflict of law provisions. Any disputes arising from these Terms or your 
              use of the Service shall be resolved through binding arbitration in Houston, Texas.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify or replace these Terms at any time. If a revision is material, 
              we will try to provide at least 30 days notice prior to any new terms taking effect. Your 
              continued use of the Service after any such changes constitutes your acceptance of the new Terms.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">12. Severability</h2>
            <p className="text-gray-700 leading-relaxed">
              If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining 
              provisions of these Terms will remain in effect.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">13. Entire Agreement</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms, together with our Privacy Policy, constitute the sole and entire agreement between 
              you and SearchWell Labs LLC with respect to the Service and supersede all prior and contemporaneous 
              understandings, agreements, representations, and warranties.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">14. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <p className="text-gray-700"><strong>SearchWell Labs LLC</strong></p>
              <p className="text-gray-700">17350 State Hwy 249 Ste 220</p>
              <p className="text-gray-700">Houston, TX 77064</p>
              <p className="text-gray-700">Email: <a href="mailto:jameson@searchwell.io" className="text-blue-600 hover:underline">jameson@searchwell.io</a></p>
            </div>

            {/* Future Analytics Section - Commented Out */}
            {/* 
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">15. Analytics and Tracking</h2>
            <p className="text-gray-700 leading-relaxed">
              We use analytics tools to understand how our Service is used and to improve user experience. 
              These tools may collect information about your device, browsing behavior, and usage patterns. 
              For more information about our data collection practices, please see our Privacy Policy.
            </p>
            */}

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">15. Waiver</h2>
            <p className="text-gray-700 leading-relaxed">
              No waiver by SearchWell Labs LLC of any term or condition set forth in these Terms shall be 
              deemed a further or continuing waiver of such term or condition or a waiver of any other term 
              or condition, and any failure of SearchWell Labs LLC to assert a right or provision under these 
              Terms shall not constitute a waiver of such right or provision.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
