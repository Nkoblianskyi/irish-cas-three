import { Shield } from "lucide-react"
import { SiteDocumentPage } from "@/components/site-document-page"
import { SITE_DOMAIN, SITE_NAME } from "@/lib/site-brand"
import { termsMetadata } from "@/lib/seo"

export const metadata = termsMetadata

export default function TermsPage() {
  return (
    <SiteDocumentPage
      title="Website terms & conditions"
      showLastUpdated
      headerIcon={<Shield className="h-7 w-7" aria-hidden />}
    >
      <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-casino-forest prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-2xl prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700">
        <h2>1. Agreement</h2>
        <p>
          Accessing {SITE_DOMAIN} confirms that you accept these terms. If you disagree, please stop using the website.
        </p>

        <h2>2. Nature of the service</h2>
        <p>
          {SITE_NAME} publishes editorial comparisons of licensed <strong>online</strong> casino websites aimed at Irish
          adults. We do not run games, hold player balances, or issue gambling licences ourselves. All play happens on
          third-party operators&apos; websites or apps.
        </p>

        <h2>3. Eligibility</h2>
        <p>
          Content assumes readers are at least 18 years old and legally permitted to view online gambling marketing in
          their location. You are responsible for complying with local law before registering with any operator.
        </p>

        <h2>4. Information accuracy</h2>
        <p>
          We aim for careful research, yet online promotional mechanics and payment rules change frequently. Treat our
          summaries as orientation only and verify critical details on the operator&apos;s official website.
        </p>

        <h2>5. Third-party online services</h2>
        <p>
          Outbound links take you to external casino websites. Each operator applies its own terms, bonus engine, and
          compliance workflow. We are not responsible for third-party conduct after you leave {SITE_DOMAIN}.
        </p>

        <h2>6. Responsible gambling</h2>
        <p>We encourage every visitor to:</p>
        <ul>
          <li>Pre-plan spend and session length before playing online</li>
          <li>Avoid borrowing to continue digital play</li>
          <li>Use operator safer-gambling controls in the account proactively</li>
          <li>Seek professional help if habits become compulsive</li>
        </ul>

        <h2>7. Intellectual property</h2>
        <p>
          Layouts, text, charts, and branding elements on {SITE_NAME} belong to the project owners or licensors.
          Unauthorised scraping, republication, or commercial reuse is prohibited.
        </p>

        <h2>8. Limitation of liability</h2>
        <p>
          To the fullest extent permitted by Irish law, we disclaim liability for indirect or consequential losses tied
          to site use, disputes with online operators, or outdated promotional text.
        </p>

        <h2>9. Privacy</h2>
        <p>
          Personal data practices are described separately in our Privacy Policy. Using the site acknowledges that
          processing may occur as outlined there.
        </p>

        <h2>10. Changes</h2>
        <p>
          We may amend these terms to reflect new features or legal guidance. Updates take effect once posted with a
          refreshed effective date.
        </p>

        <h2>11. Governing law</h2>
        <p>These terms are governed by the laws of Ireland, and Irish courts have non-exclusive jurisdiction.</p>
      </div>
    </SiteDocumentPage>
  )
}
