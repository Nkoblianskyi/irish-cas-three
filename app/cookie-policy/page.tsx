import { SiteDocumentPage } from "@/components/site-document-page"
import { COOKIE_CONSENT_KEY, SITE_NAME } from "@/lib/site-brand"
import { cookieMetadata } from "@/lib/seo"

export const metadata = cookieMetadata

export default function CookiePolicyPage() {
  return (
    <SiteDocumentPage title="Cookie policy" showLastUpdated>
      <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-casino-forest prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-2xl prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700">
        <h2>What cookies are</h2>
        <p>
          Cookies are small text files stored in your browser when you visit a website. {SITE_NAME} — an online casino
          comparison site — uses them to keep core features secure, remember your consent choice, and — if you allow —
          understand anonymous traffic patterns.
        </p>

        <h2>Categories we use</h2>
        <ul>
          <li>
            <strong>Strictly necessary:</strong> load balancing, basic security, and remembering your cookie-banner
            decision
          </li>
          <li>
            <strong>Performance:</strong> aggregated analytics on popular pages and technical errors
          </li>
          <li>
            <strong>Functional:</strong> optional preferences such as collapsed sections when we introduce them
          </li>
          <li>
            <strong>Attribution:</strong> only with consent — helps measure partner campaigns fairly
          </li>
        </ul>

        <h2>Session vs persistent</h2>
        <p>
          Session cookies disappear when you close the browser. Persistent cookies carry an expiry date or remain until
          you clear them manually; we keep those lifetimes as short as practical.
        </p>

        <h2>Third-party cookies</h2>
        <p>Embedded services (for example analytics or content delivery networks) may set their own cookies. Those providers:</p>
        <ul>
          <li>Process data under their own privacy statements</li>
          <li>Should honour the consent signal we display where EU law requires</li>
        </ul>

        <h2>Changing your mind</h2>
        <p>Most browsers let you:</p>
        <ul>
          <li>Block all cookies or only third-party cookies</li>
          <li>Delete stored files when you exit</li>
          <li>Set exceptions per website</li>
        </ul>
        <p>
          To reset our in-site choice, clear the local storage key &quot;{COOKIE_CONSENT_KEY}&quot; and reload the
          homepage — the banner will appear again.
        </p>

        <h2>Consent options</h2>
        <p>
          Selecting &quot;Accept all&quot; enables optional analytics or measurement cookies described above. Selecting
          &quot;Essential only&quot; keeps the site working but limits insight we use to improve editorial journeys.
        </p>
      </div>
    </SiteDocumentPage>
  )
}
