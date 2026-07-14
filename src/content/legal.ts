import { company } from "@/content/company";

export type LegalSection = { heading: string; body: string[] };

export type LegalDoc = {
  title: string;
  updated: string;
  sections: LegalSection[];
};

/**
 * DRAFT — accurately describes the site as built (RFQ data is emailed to
 * staff via Resend; there is no database — see src/lib/email.ts) but has
 * not had real legal review. Rendered with a visible draft notice rather
 * than presented as finished legal copy (Law 3 / Section 3.8).
 */
export const privacyPolicy: LegalDoc = {
  title: "Privacy Policy",
  updated: "Draft — pending legal review",
  sections: [
    {
      heading: "Information We Collect",
      body: [
        `When you submit a Request for Quote through ${company.brandName}'s Contact page, we collect the information you provide: your name, company, email address, phone number (optional), country, product interest, quantity, and message.`,
      ],
    },
    {
      heading: "How We Use It",
      body: [
        "We use this information solely to respond to your enquiry, prepare a quotation, and coordinate the transaction if it proceeds. We do not sell or rent your information to third parties.",
      ],
    },
    {
      heading: "How It's Stored",
      body: [
        `Submitted enquiries are delivered by email to ${company.brandName} staff and are not stored in a database on this site. Retention follows our email provider's standard mailbox retention.`,
      ],
    },
    {
      heading: "Third-Party Services",
      body: [
        "We use a transactional email provider to deliver enquiry notifications and auto-acknowledgements. That provider processes your submitted data only to deliver those emails.",
      ],
    },
    {
      heading: "Cookies",
      body: [
        "This site does not use tracking or advertising cookies. Any cookies in use are strictly functional.",
      ],
    },
    {
      heading: "Contact",
      body: [`Questions about this policy can be sent to ${company.generalEmail}.`],
    },
  ],
};

export const termsOfUse: LegalDoc = {
  title: "Terms of Use",
  updated: "Draft — pending legal review",
  sections: [
    {
      heading: "Acceptance of Terms",
      body: [
        `By using this website, you agree to these Terms of Use. If you don't agree, please don't use the site.`,
      ],
    },
    {
      heading: "Informational Content, Not a Binding Offer",
      body: [
        "Product descriptions, specifications, and any pricing context shown on this site are informational. Nothing on this site constitutes a binding offer to sell — commercial terms are only binding once agreed in a signed contract between SoilAgri and the customer.",
      ],
    },
    {
      heading: "Intellectual Property",
      body: [
        `All content on this site — text, graphics, and logos — is the property of ${company.tradeName} unless otherwise noted, and may not be reproduced without permission.`,
      ],
    },
    {
      heading: "Limitation of Liability",
      body: [
        `${company.tradeName} is not liable for any indirect or consequential loss arising from use of this website. This does not limit any liability that cannot be excluded under applicable law.`,
      ],
    },
    {
      heading: "Governing Law",
      body: [
        "These terms are governed by the laws of the Province of Québec, Canada. [Confirm governing jurisdiction with legal counsel before publication.]",
      ],
    },
    {
      heading: "Changes to These Terms",
      body: ["We may update these terms from time to time. Continued use of the site after a change constitutes acceptance."],
    },
    {
      heading: "Contact",
      body: [`Questions about these terms can be sent to ${company.generalEmail}.`],
    },
  ],
};
