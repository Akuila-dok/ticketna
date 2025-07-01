// app/privacy-policy/page.tsx
// This is a Server Component by default in the App Router,
// which is fine as it's static content.

import React from "react";
import Navbar from "@/components/Navbar"; // Assuming you have a Navbar component
import Footer from "@/components/Footer"; // Assuming you have a Footer component

// You can add a dynamic date similar to your TermsOfServicePage if you wish
// import { useState, useEffect } from "react"; // Uncomment if you want to use state for date

function PrivacyPolicyPage() {
  // Uncomment and use if you want a dynamic "Last Updated" date
  // const [lastUpdatedDate, setLastUpdatedDate] = useState(``);
  // useEffect(() => {
  //   const today = new Date();
  //   const options: Intl.DateTimeFormatOptions = { year: `numeric`, month: `long`, day: `numeric` };
  //   setLastUpdatedDate(today.toLocaleDateString(`en-US`, options));
  // }, []);
  // // Then use {lastUpdatedDate} in the last updated paragraph

  return (
    <div className="text-teal-900 font-inter bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-teal-600 to-teal-900 text-white py-20 text-center px-4 rounded-b-lg ">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="max-w-2xl mx-auto text-lg text-teal-100">
          Your privacy matters to us. Learn how we collect, use, and protect your information.
        </p>
      </section>

      {/* Main Content Section */}
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <div className="bg-white p-6 md:p-10 rounded-xl shadow-lg space-y-8">
          {/* Last Updated Date */}
          <p className="text-sm text-gray-500 text-right mb-8">
            <strong className="text-teal-700">Last Updated:</strong> July 2, 2025{" "}
            {/* Replace with dynamic date if using useState/useEffect */}
          </p>

          {/* Section 1: Introduction */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-teal-800 mb-3">1. Introduction</h2>
            <p className="text-lg leading-relaxed text-gray-800">
              Welcome to <strong className="text-teal-700">Tiketna</strong> (Tiketna, we, us, or our). We are
              committed to protecting your privacy and personal data. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our website{" "}
              <a href="https://www.tiketna.com" className="text-orange-600 hover:underline">
                www.tiketna.com
              </a>{" "}
              and use our services (collectively, the Platform). Please read this Privacy Policy carefully. If you do
              not agree with the terms of this Privacy Policy, please do not access the Platform.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              By using the Tiketna Platform, you consent to the data practices described in this policy.
            </p>
          </section>

          <hr className="border-t-2 border-teal-200 my-8" />

          {/* Section 2: Information We Collect */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-teal-800 mb-3">2. Information We Collect</h2>
            <p className="text-lg leading-relaxed text-gray-800">
              We may collect personal information from you in a variety of ways, including when you register on the
              Platform, purchase tickets, create an event, subscribe to our newsletter, respond to a survey, fill out a
              form, or interact with other activities, services, features, or resources we make available on our
              Platform.
            </p>
            <h3 className="text-xl font-semibold text-teal-700 mt-4 mb-2">2.1 Personal Data You Provide:</h3>
            <ul className="list-none text-lg leading-relaxed text-gray-800 space-y-2 pl-4">
              <li>
                <strong className="text-teal-700">Account Registration:</strong> Name, email address, phone number,
                password, and user type (e.g., Event Organizer, Ticket Buyer).
              </li>
              <li>
                <strong className="text-teal-700">Profile Information:</strong> Profile picture, bio, website link, and
                social media handles (if you choose to provide them).
              </li>
              <li>
                <strong className="text-teal-700">Transaction Data:</strong> Payment information (e.g., credit card
                details, mobile money numbers – though we use secure third-party processors, so we don&apos;t store raw card
                details), billing address, and transaction history.
              </li>
              <li>
                <strong className="text-teal-700">Communication Data:</strong> Content of your communications with us,
                such as support inquiries, feedback, or survey responses.
              </li>
              <li>
                <strong className="text-teal-700">Event Creation Data (Organizers):</strong> Event names, descriptions,
                dates, times, locations, ticket types, pricing, and any other content you upload related to your events.
              </li>
              <li>
                <strong className="text-teal-700">Newsletter Subscription:</strong> Your email address for marketing
                communications.
              </li>
            </ul>
            <h3 className="text-xl font-semibold text-teal-700 mt-4 mb-2">2.2 Data Collected Automatically:</h3>
            <ul className="list-none text-lg leading-relaxed text-gray-800 space-y-2 pl-4">
              <li>
                <strong className="text-teal-700">Usage Data:</strong> Information about how you access and use the
                Platform, including your IP address, browser type, operating system, pages viewed, time spent on pages,
                referring URLs, and clickstream data.
              </li>
              <li>
                <strong className="text-teal-700">Device Data:</strong> Information about the device you use to access
                the Platform, such as device type, unique device identifiers, and mobile network information.
              </li>
              <li>
                <strong className="text-teal-700">Location Data:</strong> Approximate location derived from your IP
                address or, with your consent, precise location data from your mobile device.
              </li>
            </ul>
            <h3 className="text-xl font-semibold text-teal-700 mt-4 mb-2">2.3 Information from Third Parties:</h3>
            <p className="text-lg leading-relaxed text-gray-800">
              We may receive information about you from third parties, such as social media platforms (if you link your
              account) or payment processors, in accordance with their privacy policies.
            </p>
          </section>

          <hr className="border-t-2 border-teal-200 my-8" />

          {/* Section 3: How We Use Your Information */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-teal-800 mb-3">3. How We Use Your Information</h2>
            <p className="text-lg leading-relaxed text-gray-800">
              We use the information we collect for various purposes, including to:
            </p>
            <ul className="list-none text-lg leading-relaxed text-gray-800 space-y-2 pl-4">
              <li><strong className="text-teal-700">Provide, operate, and maintain:</strong> our Platform and services.</li>
              <li><strong className="text-teal-700">Process:</strong> your transactions and manage your orders.</li>
              <li><strong className="text-teal-700">Manage:</strong> your account and provide you with access to its features.</li>
              <li><strong className="text-teal-700">Communicate:</strong> with you, including sending transaction confirmations, service updates, and support messages.</li>
              <li><strong className="text-teal-700">Send:</strong> you newsletters, marketing, and promotional communications (if you have opted in).</li>
              <li><strong className="text-teal-700">Improve and personalize:</strong> your experience on the Platform.</li>
              <li><strong className="text-teal-700">Analyze:</strong> usage trends and monitor the effectiveness of our marketing campaigns.</li>
              <li><strong className="text-teal-700">Detect, prevent, and address:</strong> technical issues or fraudulent activities.</li>
              <li><strong className="text-teal-700">Comply:</strong> with legal obligations and enforce our Terms of Service.</li>
              <li><strong className="text-teal-700">Develop:</strong> new products, services, features, and functionality.</li>
            </ul>
          </section>

          <hr className="border-t-2 border-teal-200 my-8" />

          {/* Section 4: How We Share Your Information */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-teal-800 mb-3">4. How We Share Your Information</h2>
            <p className="text-lg leading-relaxed text-gray-800">
              We may share your information with third parties in the following situations:
            </p>
            <ul className="list-none text-lg leading-relaxed text-gray-800 space-y-2 pl-4">
              <li>
                <strong className="text-teal-700">With Event Organizers:</strong> If you purchase tickets for an event,
                we will share necessary information (e.g., your name, email) with the Event Organizer to facilitate
                event access and communication.
              </li>
              <li>
                <strong className="text-teal-700">Service Providers:</strong> We may share your information with
                third-party vendors, consultants, and other service providers who perform services on our behalf, such
                as payment processing, data analysis, email delivery, hosting services, customer service, and marketing
                assistance.
              </li>
              <li>
                <strong className="text-teal-700">Legal Requirements:</strong> We may disclose your information if
                required to do so by law or in response to valid requests by public authorities (e.g., a court order or
                government agency).
              </li>
              <li>
                <strong className="text-teal-700">Business Transfers:</strong> In connection with any merger, sale of
                company assets, financing, or acquisition of all or a portion of our business by another company.
              </li>
              <li>
                <strong className="text-teal-700">With Your Consent:</strong> We may disclose your personal information
                for any other purpose with your consent.
              </li>
              <li>
                <strong className="text-teal-700">Aggregated/Anonymized Data:</strong> We may share aggregated or
                anonymized information that cannot reasonably be used to identify you.
              </li>
            </ul>
          </section>

          <hr className="border-t-2 border-teal-200 my-8" />

          {/* Section 5: Cookies and Tracking Technologies */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-teal-800 mb-3">5. Cookies and Other Tracking Technologies</h2>
            <p className="text-lg leading-relaxed text-gray-800">
              We use cookies and similar tracking technologies (like web beacons and pixels) to access or store
              information. This section explains how we use these technologies and your choices regarding them.
            </p>
            <h3 className="text-xl font-semibold text-teal-700 mt-4 mb-2">5.1 What are Cookies?</h3>
            <p className="text-lg leading-relaxed text-gray-800">
              Cookies are small data files that are placed on your computer or mobile device when you visit a website.
              Cookies are widely used by website owners to make their websites work, or to work more efficiently, as
              well as to provide reporting information.
            </p>
            <h3 className="text-xl font-semibold text-teal-700 mt-4 mb-2">5.2 How We Use Cookies:</h3>
            <ul className="list-none text-lg leading-relaxed text-gray-800 space-y-2 pl-4">
              <li>
                <strong className="text-teal-700">Essential Cookies:</strong> These cookies are strictly necessary to
                provide you with services available through our Platform and to enable you to use some of its features,
                such as accessing secure areas. Without these cookies, services like logging in or purchasing tickets
                cannot be provided.
              </li>
              <li>
                <strong className="text-teal-700">Performance and Functionality Cookies:</strong> These cookies are
                used to enhance the performance and functionality of our Platform but are non-essential to its use.
                However, without these cookies, certain functionality may become unavailable.
              </li>
              <li>
                <strong className="text-teal-700">Analytics and Customization Cookies:</strong> These cookies collect
                information that is used either in aggregate form to help us understand how our Platform is being used
                or how effective our marketing campaigns are, or to help us customize our Platform for you.
              </li>
              <li>
                <strong className="text-teal-700">Advertising Cookies:</strong> These cookies are used to make
                advertising messages more relevant to you. They perform functions like preventing the same ad from
                continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases,
                selecting advertisements that are based on your interests.
              </li>
            </ul>
            <h3 className="text-xl font-semibold text-teal-700 mt-4 mb-2">5.3 Your Cookie Choices:</h3>
            <p className="text-lg leading-relaxed text-gray-800">
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences
              by:
            </p>
            <ul className="list-none text-lg leading-relaxed text-gray-800 space-y-2 pl-4">
              <li>
                <strong className="text-teal-700">Cookie Consent Banner:</strong> When you first visit our website, you
                are presented with a cookie consent banner, allowing you to accept or decline the use of non-essential
                cookies.
              </li>
              <li>
                <strong className="text-teal-700">Browser Controls:</strong> Most web browsers allow some control of
                most cookies through the browser settings. To find out more about cookies, including how to see what
                cookies have been set and how to manage and delete them, visit{" "}
                <a href="http://www.allaboutcookies.org" className="text-orange-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  www.allaboutcookies.org
                </a>
                .
              </li>
              <li>
                <strong className="text-teal-700">Opt-out Tools:</strong> Some third parties provide opt-out tools to
                stop receiving personalized ads. For example, you can visit{" "}
                <a href="http://www.aboutads.info/choices/" className="text-orange-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  www.aboutads.info/choices/
                </a>{" "}
                or{" "}
                <a href="http://www.youronlinechoices.eu/" className="text-orange-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  www.youronlinechoices.eu/
                </a>{" "}
                for more information.
              </li>
            </ul>
            <p className="text-lg leading-relaxed text-gray-800">
              Please note that if you choose to set your browser to remove or reject cookies, this could affect the
              availability and functionality of our Platform.
            </p>
          </section>

          <hr className="border-t-2 border-teal-200 my-8" />

          {/* Section 6: Data Security */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-teal-800 mb-3">6. Data Security</h2>
            <p className="text-lg leading-relaxed text-gray-800">
              We implement reasonable technical and organizational security measures designed to protect the security of
              any personal information we process. However, despite our safeguards and efforts to secure your
              information, no electronic transmission over the Internet or information storage technology can be
              guaranteed to be 100% secure. We cannot promise or guarantee that hackers, cybercriminals, or other
              unauthorized third parties will not be able to defeat our security and improperly collect, access, steal,
              or modify your information.
            </p>
          </section>

          <hr className="border-t-2 border-teal-200 my-8" />

          {/* Section 7: Data Retention */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-teal-800 mb-3">7. Data Retention</h2>
            <p className="text-lg leading-relaxed text-gray-800">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this
              Privacy Policy, unless a longer retention period is required or permitted by law (such as tax, accounting,
              or other legal requirements). When we have no ongoing legitimate business need to process your personal
              information, we will either delete or anonymize it, or, if this is not possible (for example, because your
              personal information has been stored in backup archives), then we will securely store your personal
              information and isolate it from any further processing until deletion is possible.
            </p>
          </section>

          <hr className="border-t-2 border-teal-200 my-8" />

          {/* Section 8: Your Privacy Rights */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-teal-800 mb-3">8. Your Privacy Rights</h2>
            <p className="text-lg leading-relaxed text-gray-800">
              Depending on your location and applicable data protection laws (like GDPR for users in the EU/EEA, or the
              Data Protection Act in Kenya), you may have the following rights regarding your personal data:
            </p>
            <ul className="list-none text-lg leading-relaxed text-gray-800 space-y-2 pl-4">
              <li>
                <strong className="text-teal-700">Right to Access:</strong> The right to request copies of your
                personal data.
              </li>
              <li>
                <strong className="text-teal-700">Right to Rectification:</strong> The right to request that we correct
                any information you believe is inaccurate or complete information you believe is incomplete.
              </li>
              <li>
                <strong className="text-teal-700">Right to Erasure (Right to be Forgotten):</strong> The right to
                request that we erase your personal data under certain conditions.
              </li>
              <li>
                <strong className="text-teal-700">Right to Restrict Processing:</strong> The right to request that we
                restrict the processing of your personal data under certain conditions.
              </li>
              <li>
                <strong className="text-teal-700">Right to Object to Processing:</strong> The right to object to our
                processing of your personal data under certain conditions.
              </li>
              <li>
                <strong className="text-teal-700">Right to Data Portability:</strong> The right to request that we
                transfer the data that we have collected to another organization, or directly to you, under certain
                conditions.
              </li>
              <li>
                <strong className="text-teal-700">Right to Withdraw Consent:</strong> Where we rely on your consent to
                process your personal data, you have the right to withdraw that consent at any time.
              </li>
            </ul>
            <p className="text-lg leading-relaxed text-gray-800">
              To exercise any of these rights, please contact us using the details provided in the Contact Us section
              below. We will respond to your request in accordance with applicable data protection laws.
            </p>
          </section>

          <hr className="border-t-2 border-teal-200 my-8" />

          {/* Section 9: Third-Party Websites */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-teal-800 mb-3">9. Third-Party Websites</h2>
            <p className="text-lg leading-relaxed text-gray-800">
              Our Platform may contain links to third-party websites and services that are not operated by us. This
              Privacy Policy does not apply to the practices of third parties that we do not own or control. We encourage
              you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <hr className="border-t-2 border-teal-200 my-8" />

          {/* Section 10: Children's Privacy */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-teal-800 mb-3">10. Children&apos;s Privacy</h2>
            <p className="text-lg leading-relaxed text-gray-800">
              Our Platform is not intended for use by children under the age of 18. We do not knowingly collect personal
              data from children under 18. If you become aware that a child has provided us with personal information,
              please contact us, and we will take steps to delete such information and terminate the child&apos;s account.
            </p>
          </section>

          <hr className="border-t-2 border-teal-200 my-8" />

          {/* Section 11: Changes to This Privacy Policy */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-teal-800 mb-3">11. Changes to This Privacy Policy</h2>
            <p className="text-lg leading-relaxed text-gray-800">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the Last Updated date. We encourage you to review this Privacy
              Policy periodically for any changes. Your continued use of the Platform after any modifications signifies
              your acceptance of the revised Privacy Policy.
            </p>
          </section>

          <hr className="border-t-2 border-teal-200 my-8" />

          {/* Section 12: Contact Us */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-teal-800 mb-3">12. Contact Us</h2>
            <p className="text-lg leading-relaxed text-gray-800">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us
              at:
            </p>
            <ul className="list-none text-lg leading-relaxed text-gray-800 space-y-2 pl-4">
              <li>
                <strong className="text-teal-700">Email:</strong>{" "}
                <a href="mailto:support@tiketna.com" className="text-orange-600 hover:underline">
                  support@tiketna.com
                </a>
              </li>
              <li>
                <strong className="text-teal-700">Phone:</strong> +254 725-372-528
              </li>
              <li>
                <strong className="text-teal-700">Address:</strong> Juja, Kiambu County, Kenya
              </li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default PrivacyPolicyPage;