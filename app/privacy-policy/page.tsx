import { SiteDocumentPage } from "@/components/site-document-page"
import { SITE_DOMAIN, SITE_NAME } from "@/lib/site-brand"
import { privacyMetadata } from "@/lib/seo"

export const metadata = privacyMetadata

export default function PrivacyPolicyPage() {
  return (
    <SiteDocumentPage title="Privacy policy" showLastUpdated>
      <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-casino-forest prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-2xl prose-h3:text-xl prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700">
        <h2>1. Who this notice covers</h2>
        <p>
          This privacy policy describes how {SITE_NAME} (&quot;we&quot;, &quot;our&quot;) processes information when you
          visit {SITE_DOMAIN}. We collect only what is needed to run a secure comparison website and respect your choices
          under applicable data-protection law.
        </p>

        <h2>2. Information we may collect</h2>
        <h3>Technical data</h3>
        <ul>
          <li>IP address, approximate region, browser type, and operating system</li>
          <li>Device category, screen size, and error or performance logs</li>
          <li>Referring page and session timestamps</li>
        </ul>

        <h3>Usage data</h3>
        <ul>
          <li>Pages opened, scroll depth, and aggregated interaction patterns</li>
          <li>Outbound clicks to partner casinos (for compliance and commission reporting)</li>
          <li>Cookie and local-storage consent choices</li>
        </ul>

        <h3>Messages you send us</h3>
        <ul>
          <li>Email address and message body if you contact us voluntarily</li>
        </ul>

        <h2>3. Why we use data</h2>
        <p>Processing supports:</p>
        <ul>
          <li>Delivering pages, preventing abuse, and keeping the site secure (legitimate interests / necessity)</li>
          <li>Understanding readership trends and fixing broken journeys (consent where required)</li>
          <li>Answering enquiries you initiate (contract or legitimate interests)</li>
          <li>Meeting legal, tax, or regulatory obligations when they apply</li>
        </ul>

        <h2>4. Service providers and transfers</h2>
        <p>
          Hosting, analytics, or security vendors may process personal data under contract and only for instructed
          purposes. If information leaves the European Economic Area, we rely on approved safeguards such as Standard
          Contractual Clauses.
        </p>

        <h2>5. How long we keep data</h2>
        <p>
          Server logs and analytics summaries follow rolling retention suited to security reviews. Marketing consents
          remain until withdrawn. Emails are kept only as long as needed to close the conversation.
        </p>

        <h2>6. Cookies and similar tech</h2>
        <p>
          Essential cookies keep sessions stable and remember your banner choice. Optional cookies help us study
          anonymous traffic. You may refuse non-essential cookies via our banner or browser settings; some convenience
          features may work less smoothly when everything is blocked.
        </p>

        <h2>7. Your rights</h2>
        <p>Where GDPR applies, you may ask us to:</p>
        <ul>
          <li>Confirm whether we hold your personal data and receive a copy</li>
          <li>Correct inaccurate records</li>
          <li>Delete data when no lawful reason to retain it remains</li>
          <li>Restrict or object to certain processing</li>
          <li>Receive data you supplied in a portable format</li>
        </ul>
        <p>
          Use the contact route published on this domain to exercise rights. You may also lodge a complaint with the
          Data Protection Commission in Ireland.
        </p>

        <h2>8. Minors</h2>
        <p>
          Content discusses real-money gambling and is not aimed at anyone under 18. We do not knowingly collect data from
          minors.
        </p>

        <h2>9. Changes to this policy</h2>
        <p>
          If our practices change materially, we update this page and the &quot;Last updated&quot; date. Continued use
          after publication means you accept the revised notice where the law allows.
        </p>
      </div>
    </SiteDocumentPage>
  )
}
