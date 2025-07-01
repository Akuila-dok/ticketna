// ./app/termsofservice/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function TermsOfServicePage() {
  const [lastUpdatedDate, setLastUpdatedDate] = useState(``);

  useEffect(() => {
    // Get the current date and format it
    const today = new Date();
    // Explicitly define options type to satisfy TypeScript compiler
    const options: Intl.DateTimeFormatOptions = {
      year: `numeric`,
      month: `long`,
      day: `numeric`,
    };
    setLastUpdatedDate(today.toLocaleDateString(`en-US`, options));
  }, []);

  return (
    <div className="text-teal-900 font-inter min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      {/* Hero Section - Consistent with About Us */}
      <section className="bg-gradient-to-b from-teal-600 to-teal-900 text-white py-20 text-center px-4 rounded-b-lg ">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
        <p className="max-w-2xl mx-auto text-lg text-teal-100">
          Understanding your rights and responsibilities when using Tiketna.
        </p>
      </section>
      {/* Main Content Section */}
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <div className="bg-white p-6 md:p-10 rounded-xl shadow-lg space-y-8">
          {/* Last Updated Date - Now dynamic */}
          <p className="text-sm text-gray-500 text-right mb-8">
            <strong className="text-teal-700">Last Updated:</strong> {lastUpdatedDate}
          </p>
          {/* Section 1: Welcome to Tiketna! */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-teal-800 mb-3">1. Welcome to Tiketna!</h2>
            <p className="text-lg leading-relaxed text-gray-800">
              Welcome to <strong className="text-teal-700">Tiketna</strong> (&quot;Tiketna,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)! We&apos;re
              thrilled to have you here. We built Tiketna because, like you, we were tired of the hassle, technical
              glitches, and hidden fees that often come with buying or selling event tickets. Our mission is to
              simplify and revolutionize how people plan, manage, and enjoy events by offering a{" "}
              <span className="font-semibold text-orange-600">
                reliable, affordable, and user-friendly ticketing platform
              </span>
              .
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              These Terms of Service (&quot;Terms&quot;) outline the rules and guidelines for using our website, services, and
              applications (collectively, the &quot;Platform&quot;). Whether you&apos;re an <strong className="text-teal-700">Event Organizer</strong>{" "}
              planning your next big hit or a <strong className="text-teal-700">Ticket Buyer</strong> looking for an
              amazing experience, by accessing or using the Tiketna Platform, you agree to be bound by these Terms. If
              you don&apos;t agree with any part of these Terms, please do not use our Platform.
            </p>
          </section>
          <hr className="border-t-2 border-teal-200 my-8" />
          {/* Section 2: Your Agreement to These Terms */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-teal-800 mb-3">2. Your Agreement to These Terms</h2>
            <p className="text-lg leading-relaxed text-gray-800">
              By accessing, Browse, or using the Tiketna Platform, including creating an account, listing an event,
              or purchasing a ticket, you acknowledge that you have read, understood, and agree to be bound by these
              Terms, along with our <strong className="text-orange-600">Privacy Policy</strong> and any other policies
              or guidelines we may post. These Terms apply to all users of the Platform, including without limitation,
              users who are organizers, buyers, merchants, and contributors of content.
            </p>
          </section>
          <hr className="border-t-2 border-teal-200 my-8" />
          {/* Section 3: Account Registration & Security */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-teal-800 mb-3">3. Account Registration & Security</h2>
            <p className="text-lg leading-relaxed text-gray-800">
              To fully utilize Tiketna&apos;s features, you may need to register for an account.
            </p>
            <ol className="list-inside list-[lower-alpha] marker:text-teal-700 text-lg leading-relaxed text-gray-800 space-y-2 pl-4">
              <li>
                <strong className="text-teal-700">Eligibility:</strong> You must be at least 18 years old and capable
                of forming a binding contract to use our services. By creating an account, you represent and warrant
                that you meet this age requirement.
              </li>
              <li>
                <strong className="text-teal-700">Accurate Information:</strong> You agree to provide accurate,
                current, and complete information during the registration process and to update such information to keep
                it accurate, current, and complete.
              </li>
              <li>
                <strong className="text-teal-700">Account Responsibility:</strong> You are solely responsible for
                maintaining the confidentiality of your account login information (username and password) and for all
                activities that occur under your account. You agree to notify Tiketna immediately of any unauthorized
                use of your account or any other breach of security. Tiketna cannot and will not be liable for any loss
                or damage arising from your failure to comply with this security obligation.
              </li>
            </ol>
          </section>
          <hr className="border-t-2 border-teal-200 my-8" />
          {/* Section 4: For Event Organizers (Creators) */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-teal-800 mb-3">4. For Event Organizers (Creators)</h2>
            <p className="text-lg leading-relaxed text-gray-800">
              Tiketna empowers you to bring your events to life with ease.
            </p>
            <ol className="list-inside list-[lower-alpha] marker:text-teal-700 text-lg leading-relaxed text-gray-800 space-y-2 pl-4">
              <li>
                <strong className="text-teal-700"> Event Creation &amp; Content:</strong>
                <ol className="list-inside ml-6 space-y-1">
                  {/* Sub-bullets remain as dots */}
                  <li>
                    You are solely responsible for the accuracy, completeness, and legality of all event information you
                    upload, including event descriptions, dates, times, locations, ticket prices, and availability.
                  </li>
                  <li>
                    You must have all necessary rights, licenses, and permissions for any content (text, images, videos,
                    etc.) you use on your event pages.
                  </li>
                  <li>
                    Tiketna reserves the right to remove any event or content that violates these Terms or our
                    community guidelines.
                  </li>
                </ol>
              </li>
              <li>
                <strong className="text-teal-700"> Ticket Sales &amp; Pricing:</strong> You set your own ticket prices and
                decide on the quantity of tickets available. Tiketna will clearly display any service fees or charges
                added to the ticket price.
              </li>
              <li>
                <strong className="text-teal-700"> Instant Payouts:</strong> We offer{" "}
                <strong className="text-orange-600">instant payouts</strong> for your ticket sales. Funds from your
                sales, minus Tiketna&apos;s service fees, will be transferred to your designated payment account immediately
                upon successful transaction processing. While we aim for &quot;instant,&quot; please be aware that actual transfer
                times may vary slightly based on banking holidays, payment processor schedules, and verification
                processes.
              </li>
              <li>
                <strong className="text-teal-700"> Refunds &amp; Cancellations:</strong>
                <ul className="list-inside ml-6 space-y-1">
                  {/* Sub-bullets remain as dots */}
                  <li>
                    You are responsible for establishing and communicating your own refund policy to ticket buyers for
                    your events. This policy must be clearly stated on your event page.
                  </li>
                  <li>
                    In the event of an event cancellation or significant change (e.g., date, venue), you are responsible
                    for notifying ticket buyers promptly and processing any applicable refunds according to your stated
                    policy and, if applicable, our own refund guidelines.
                  </li>
                  <li>
                    Tiketna may, at its sole discretion, issue refunds to buyers on your behalf if you fail to do so or
                    if there are disputes that warrant a refund.
                  </li>
                </ul>
              </li>
              <li>
                <strong className="text-teal-700"> Compliance:</strong> You agree to comply with all applicable local,
                national, and international laws and regulations related to your events, including but not limited to,
                health and safety regulations, licensing requirements, and tax obligations.
              </li>
              <li>
                <strong className="text-teal-700"> Taxes:</strong> You are solely responsible for calculating,
                collecting, reporting, and remitting any and all taxes required by applicable laws in connection with
                your event sales.
              </li>
            </ol>
          </section>
          <hr className="border-t-2 border-teal-200 my-8" />
          {/* Section 5: For Ticket Buyers (Attendees) */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-teal-800 mb-3">5. For Ticket Buyers (Attendees)</h2>
            <p className="text-lg leading-relaxed text-gray-800">
              Experience events with confidence and ease through Tiketna.
            </p>
            <ol className="list-inside list-[lower-alpha] marker:text-teal-700 text-lg leading-relaxed text-gray-800 space-y-2 pl-4">
              <li>
                <strong className="text-teal-700"> Ticket Purchase:</strong> When you purchase a ticket through
                Tiketna, you are entering into a direct contract with the Event Organizer for that event. Tiketna acts
                solely as a platform facilitator for the transaction.
              </li>
              <li>
                <strong className="text-teal-700"> Pricing &amp; Fees:</strong> The total price for your ticket(s) will
                include the face value set by the Event Organizer plus any applicable Tiketna service fees. All prices
                are displayed clearly before you confirm your purchase.
              </li>
              <li>
                <strong className="text-teal-700"> Refunds:</strong>
                <ol className="list-inside ml-6 space-y-1">
                  <li>
                    Refunds are subject to the specific refund policy established by the individual Event Organizer for
                    each event. You must review the Event Organizer&apos;s refund policy before purchasing tickets.
                  </li>
                  <li>
                    Tiketna will process refunds on behalf of the Event Organizer as per their policy, or in cases
                    where Tiketna determines a refund is warranted based on disputes or platform policies.
                  </li>
                  <li>
                    Service fees charged by Tiketna are generally non-refundable, even if the event is cancelled or you
                    receive a refund for the ticket face value, unless explicitly stated otherwise.
                  </li>
                </ol>
              </li>
              <li>
                <strong className="text-teal-700"> Event Changes &amp; Cancellations:</strong> Event Organizers may change
                event details (date, time, venue) or cancel events. Tiketna will do its best to inform you of such
                changes if we are notified by the organizer. It is the Event Organizer&apos;s responsibility to issue refunds
                for cancelled events.
              </li>
              <li>
                <strong className="text-teal-700"> Prohibited Uses for Buyers:</strong> You agree not to use purchased
                tickets for any illegal or unauthorized purpose, including resale at a price higher than the original
                face value (unless expressly permitted by law or the Event Organizer), or for promotional activities
                without the Event Organizer&apos;s consent.
              </li>
            </ol>
          </section>
          <hr className="border-t-2 border-teal-200 my-8" />
          {/* Section 6: Payments and Fees */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-teal-800 mb-3">6. Payments and Fees</h2>
            <ol className="text-lg list-[lower-alpha] marker:text-teal-700 leading-relaxed text-gray-800 space-y-2 pl-4">
              {/* Removed list-inside for custom numbering */}
              <li>
                <strong className="text-teal-700"> Payment Processing:</strong> Tiketna uses secure third-party payment
                processors to handle all transactions. By using the Platform, you agree to be bound by the terms and
                conditions of these payment processors.
              </li>
              <li>
                <strong className="text-teal-700"> Tiketna Service Fees:</strong> Tiketna charges a service fee,{" "}
                <strong className="text-teal-700">5%</strong>, for each ticket sold through the Platform. These fees
                are clearly displayed during the event creation process for organizers and at checkout for buyers. These
                fees help us maintain and improve our platform, provide 24/7 support, and ensure smooth operations.
              </li>
              <li>
                <strong className="text-teal-700"> Currency:</strong> All transactions on Tiketna are processed in{" "}
                <strong className="text-orange-600">Kenyan Shillings (KES)</strong> unless otherwise explicitly stated
                or agreed upon.
              </li>
              <li>
                <strong className="text-teal-700"> Chargebacks:</strong> If a chargeback or payment dispute occurs for
                a transaction, Tiketna reserves the right to withhold payouts to the Event Organizer until the dispute
                is resolved. Event Organizers are responsible for any chargeback fees incurred.
              </li>
            </ol>
          </section>
          <hr className="border-t-2 border-teal-200 my-8" />
          {/* Section 7: Intellectual Property */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-teal-800 mb-3">7. Intellectual Property</h2>
            <ul className="list-[lower-alpha] marker:text-teal-700 text-lg leading-relaxed text-gray-800 space-y-2 pl-4">
              {/* Removed list-inside for custom numbering */}
              <li>
                <strong className="text-teal-700"> Tiketna Content:</strong> All content on the Tiketna Platform,
                including text, graphics, logos, icons, images, audio clips, digital downloads, and software, is the
                property of Tiketna or its content suppliers and protected by intellectual property laws. You may not
                reproduce, duplicate, copy, sell, resell, or exploit any portion of the Platform without express written
                permission from Tiketna.
              </li>
              <li>
                <strong className="text-teal-700"> User Content:</strong> You retain all ownership rights to the
                content you submit to the Platform (e.g., event descriptions, images). By submitting content, you grant
                Tiketna a worldwide, non-exclusive, royalty-free, transferable license to use, reproduce, distribute,
                prepare derivative works of, display, and perform your content in connection with the Platform and
                Tiketna&apos;s (and its successors&apos; and affiliates&apos;) business, including without limitation for promoting
                and redistributing part or all of the Platform (and derivative works thereof) in any media formats and
                through any media channels.
              </li>
            </ul>
          </section>
          <hr className="border-t-2 border-teal-200 my-8" />
          {/* Section 8: Prohibited Conduct */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-teal-800 mb-3">8. Prohibited Conduct</h2>
            <p className="text-lg leading-relaxed text-gray-800">To ensure a safe and positive environment for everyone, you agree not to:</p>
            <ol className="list-inside list-[lower-alpha] marker:text-teal-700 text-lg leading-relaxed text-gray-800 space-y-2 pl-4">
              <li>
                <strong className="text-teal-700">Use the Platform:</strong> for any illegal purpose or in violation of
                any local, national, or international law.
              </li>
              <li>
                <strong className="text-teal-700">Engage in any activity:</strong> that could damage, disable,
                overburden, or impair the Platform or interfere with any other party&apos;s use of the Platform.
              </li>
              <li>
                <strong className="text-teal-700">Attempt to gain:</strong> unauthorized access to any part of the
                Platform, other user accounts, or computer systems or networks connected to the Platform.
              </li>
              <li>
                <strong className="text-teal-700">Upload or transmit:</strong> any harmful or malicious code, viruses,
                or other destructive files.
              </li>
              <li>
                <strong className="text-teal-700">Harass, abuse, or harm:</strong> another person or group.
              </li>
              <li>
                <strong className="text-teal-700">Impersonate:</strong> any person or entity, or falsely state or
                otherwise misrepresent your affiliation with a person or entity.
              </li>
              <li>
                <strong className="text-teal-700">Collect or store:</strong> personal data about other users without
                their express consent.
              </li>
              <li>
                <strong className="text-teal-700">Engage in any form:</strong> of fraudulent activity, including but
                not limited to, misrepresenting event details, selling fake tickets, or initiating fraudulent
                chargebacks.
              </li>
            </ol>
          </section>
          <hr className="border-t-2 border-teal-200 my-8" />
          {/* Section 9: Disclaimers */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-teal-800 mb-3">9. Disclaimers</h2>
            <p className="text-lg leading-relaxed text-gray-800">
              Tiketna strives to provide a seamless and reliable experience. However:
            </p>
            <ol className="list-inside list-[lower-alpha] marker:text-teal-700 text-lg leading-relaxed text-gray-800 space-y-2 pl-4">
              <li>
                <strong className="text-teal-700"> &quot;As Is&quot; Basis:</strong> The Tiketna Platform is provided on an &quot;as
                is&quot; and &quot;as available&quot; basis, without any warranties of any kind, either express or implied, including
                but not limited to, implied warranties of merchantability, fitness for a particular purpose, or
                non-infringement.
              </li>
              <li>
                <strong className="text-teal-700"> No Guarantees:</strong> Tiketna does not warrant that the Platform
                will be uninterrupted, error-free, secure, or free from viruses or other harmful components. We do not
                guarantee the success of any event or the authenticity of any attendee.
              </li>
              <li>
                <strong className="text-teal-700"> Third-Party Content &amp; Links:</strong> The Platform may contain links
                to third-party websites or services that are not owned or controlled by Tiketna. Tiketna has no
                control over, and assumes no responsibility for, the content, privacy policies, or practices of any
                third-party websites or services.
              </li>
            </ol>
          </section>
          <hr className="border-t-2 border-teal-200 my-8" />
          {/* Section 10: Limitation of Liability */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-teal-800 mb-3">10. Limitation of Liability</h2>
            <p className="text-lg leading-relaxed text-gray-800">
              To the fullest extent permitted by applicable law, in no event shall Tiketna, its affiliates, directors,
              employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages,
              including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting
              from (i) your access to or use of or inability to access or use the Platform; (ii) any conduct or content
              of any third party on the Platform; (iii) any content obtained from the Platform; and (iv) unauthorized
              access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort
              (including negligence), or any other legal theory, whether or not we have been informed of the possibility
              of such damage.
            </p>
          </section>
          <hr className="border-t-2 border-teal-200 my-8" />
          {/* Section 11: Indemnification */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-teal-800 mb-3">11. Indemnification</h2>
            <p className="text-lg leading-relaxed text-gray-800">
              You agree to indemnify and hold harmless Tiketna, its affiliates, officers, directors, employees, and
              agents from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and
              expenses (including but not limited to attorney&apos;s fees) arising from: (i) your use of and access to the
              Platform; (ii) your violation of any term of these Terms; (iii) your violation of any third-party right,
              including without limitation any copyright, property, or privacy right; or (iv) any claim that your
              content caused damage to a third party. This defense and indemnification obligation will survive these
              Terms and your use of the Platform.
            </p>
          </section>
          <hr className="border-t-2 border-teal-200 my-8" />
          {/* Section 12: Termination */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-teal-800 mb-3">12. Termination</h2>
            <ol className="list-inside list-[lower-alpha] marker:text-teal-700 text-lg leading-relaxed text-gray-800 space-y-2 pl-4">
              <li>
                <strong className="text-teal-700"> By You:</strong> You may stop using the Tiketna Platform at any
                time. You can close your account by contacting our support team.
              </li>
              <li>
                <strong className="text-teal-700"> By Tiketna:</strong> We may terminate or suspend your account and
                access to the Platform immediately, without prior notice or liability, for any reason whatsoever,
                including without limitation if you breach these Terms. This could include, but is not limited to,
                fraudulent activity, repeated violations of our policies, or engaging in harmful conduct.
              </li>
              <li>
                <strong className="text-teal-700"> Effect of Termination:</strong> Upon termination, your right to use
                the Platform will immediately cease. All provisions of these Terms which by their nature should survive
                termination shall survive termination, including, without limitation, ownership provisions, warranty
                disclaimers, indemnity, and limitations of liability.
              </li>
            </ol>
          </section>
          <hr className="border-t-2 border-teal-200 my-8" />
          {/* Section 13: Governing Law & Dispute Resolution */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-teal-800 mb-3">13. Governing Law &amp; Dispute Resolution</h2>
            <ol className="list-inside list-[lower-alpha] marker:text-teal-700 text-lg leading-relaxed text-gray-800 space-y-2 pl-4">
              <li>
                <strong className="text-teal-700"> Governing Law:</strong> These Terms shall be governed and construed
                in accordance with the laws of <strong className="text-orange-600">Kenya</strong>, without regard to its
                conflict of law provisions. Given your vision for &quot;Africa&apos;s most trusted ticketing and event engagement
                hub,&quot; this foundational legal jurisdiction is important.
              </li>
              <li>
                <strong className="text-teal-700"> Dispute Resolution:</strong> We encourage users to contact our 24/7
                support team first to resolve any issues. For any disputes arising from or relating to these Terms or
                the Platform that cannot be resolved amicably, you agree to attempt to resolve the dispute through
                mediation facilitated by a mutually agreed-upon mediator in Nairobi, Kenya. If mediation fails, the
                dispute shall be submitted to confidential binding arbitration in Nairobi, Kenya, in accordance with the
                Arbitration Act of Kenya.
              </li>
            </ol>
          </section>
          <hr className="border-t-2 border-teal-200 my-8" />
          {/* Section 14: Changes to These Terms */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-teal-800 mb-3">14. Changes to These Terms</h2>
            <p className="text-lg leading-relaxed text-gray-800">
              We may update our Terms from time to time to reflect changes in our services, technology, or legal
              requirements. We will notify you of any changes by posting the new Terms on this page and updating the
              &quot;Last Updated&quot; date. We encourage you to review this Privacy Policy periodically for any changes. Your continued use of the Platform after any modifications signifies your acceptance of the revised Privacy Policy.
            </p>
          </section>
          <hr className="border-t-2 border-teal-200 my-8" />
          {/* Section 15: Contact Us */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-teal-800 mb-3">15. Contact Us</h2>
            <p className="text-lg leading-relaxed text-gray-800">
              If you have any questions or concerns about these Terms or our practices, please contact us at:
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

export default TermsOfServicePage;