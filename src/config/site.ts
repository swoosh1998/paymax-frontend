// ---------------------------------------------------------------------------
// Plug-and-play configuration. Paste your keys here — no other file needs edits.
// ---------------------------------------------------------------------------

/** Web3Forms access key. Get it free at https://web3forms.com */
export const WEB3FORMS_ACCESS_KEY = "YOUR_KEY_HERE";

/** Sanity headless CMS project id, used later by the Regulatory Updates data layer. */
export const SANITY_PROJECT_ID = "YOUR_ID_HERE";

export const site = {
  name: "Paymax",
  tagline: "Excelling People Practice",
  phone: "+91 9810442861",
  phoneHref: "tel:+919810442861",
  email: "alert@paymaxonline.in",
  emailHref: "mailto:alert@paymaxonline.in",
  address: "New Delhi, India",
  socials: [
    { label: "Facebook", icon: "ph-facebook-logo", href: "#" },
    { label: "Instagram", icon: "ph-instagram-logo", href: "#" },
    { label: "LinkedIn", icon: "ph-linkedin-logo", href: "#" },
    { label: "X", icon: "ph-x-logo", href: "#" },
  ],
} as const;
