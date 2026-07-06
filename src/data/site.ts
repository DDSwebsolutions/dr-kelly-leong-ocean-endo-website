/**
 * site.ts — single source of truth for practice-wide data.
 * NAP, hours, navigation, CTAs, integration IDs, and legal disclaimers all
 * flow from here so a non-developer can update the site without touching
 * templates. Every claim here must be verifiable (see the build standard).
 */

export type NavChild = {
  label: string;
  href: string;
  external?: boolean;
  note?: string;
  desc?: string; // one-line description shown in the desktop mega menu
  icon?: string; // key resolved to an inline SVG in NavIcon.astro
};
export type NavFeatured = {
  eyebrow?: string;
  title: string;
  desc: string;
  href: string;
  cta: string;
  external?: boolean;
  icon?: string;
  tone?: 'navy' | 'accent' | 'urgent' | 'default';
};
export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
  external?: boolean;
  megaEyebrow?: string; // small label above the mega-menu columns
  columns?: number; // link columns in the mega panel (desktop)
  align?: 'left' | 'right'; // which edge the wide panel anchors to
  featured?: NavFeatured; // promo card on the panel's right
};

export type DayHours = { day: string; short: string; opens?: string; closes?: string; closed?: boolean };

export const site = {
  name: 'Ocean Endodontics',
  legalName: 'The Dental Group of Dr. Kelly Kimiko Leong',
  tagline: 'Comfort first, precision always.',
  shortDescription:
    'Board-certified endodontist in San Francisco providing gentle root canal therapy, retreatment, microsurgery, and same-day emergency care to save your natural teeth.',
  url: 'https://oceanendosf.com',

  doctor: {
    name: 'Dr. Kelly Kimiko Leong',
    firstName: 'Dr. Leong',
    // Tufts University School of Dental Medicine confers the DMD.
    credential: 'DMD',
    honorific: 'Dr.',
    title: 'Board-Certified Endodontist',
    boardStatus: 'Diplomate, American Board of Endodontics (2017)',
  },

  // ---- NAP ----
  address: {
    street: '2645 Ocean Ave, Ste 203',
    streetLine1: '2645 Ocean Ave',
    streetLine2: 'Suite 203',
    city: 'San Francisco',
    state: 'CA',
    stateLong: 'California',
    zip: '94132',
    country: 'US',
    full: '2645 Ocean Ave, Ste 203, San Francisco, CA 94132',
  },

  // Office is in the 2645 Ocean Ave building near Ocean Ave & Junipero Serra.
  // Block-level accurate; drop the exact pin from Google Maps if you want it to
  // the meter (the "Get Directions" button already uses the authoritative pin).
  geo: { lat: 37.72736, lng: -122.45852 },

  phone: { display: '(415) 741-3636', href: 'tel:+14157413636', raw: '+14157413636' },
  fax: { display: '(415) 766-7032', href: 'tel:+14157667032' },
  email: { display: 'info@oceanendosf.com', href: 'mailto:info@oceanendosf.com', raw: 'info@oceanendosf.com' },

  parkingNote:
    'Free parking lot through the building breezeway, plus metered and free street parking. Easy connection to Muni and public transit.',

  neighborhoodNote:
    'Near City College of San Francisco and Lake Merced, serving Ingleside, West Portal, Parkmerced, St. Francis Wood, Balboa Terrace, and Daly City.',

  hours: [
    { day: 'Monday', short: 'Mon', opens: '08:30', closes: '17:00' },
    { day: 'Tuesday', short: 'Tue', opens: '08:30', closes: '17:00' },
    { day: 'Wednesday', short: 'Wed', opens: '08:30', closes: '17:00' },
    { day: 'Thursday', short: 'Thu', closed: true },
    { day: 'Friday', short: 'Fri', opens: '08:30', closes: '17:00' },
    { day: 'Saturday', short: 'Sat', closed: true },
    { day: 'Sunday', short: 'Sun', closed: true },
  ] as DayHours[],

  hoursSummary: 'Mon, Tue, Wed & Fri: 8:30 AM – 5:00 PM · Thu, Sat & Sun: Closed',

  // ---- Integrations ----
  booking: {
    // Answer form provided by the practice.
    jotformId: '252456352678365',
    jotformSrc: 'https://form.jotform.com/252456352678365',
    href: '/book-appointment',
  },
  portals: {
    patient: 'https://securesite1473.tdo4endo.com/PatientsLogin.aspx',
    referringDoctor: 'https://securesite1473.tdo4endo.com/RefDocsLogin.aspx',
  },
  directionsUrl: 'https://maps.app.goo.gl/zWtezBXQNFAosHts7',

  // Video: hero loop is self-hosted; tour + commercial live on the practice's
  // own Cloudflare Stream account (embedded via iframe).
  video: {
    heroSrc: '/videos/hero.mp4',
    heroPoster: '/videos/hero-poster.jpg',
    streamCustomer: 'customer-zhfq6nnwhcqwgupq.cloudflarestream.com',
    officeTourId: '595cc2443e235e6a17defe97501472bc',
    commercialId: '9c6515833df50167691354ef758c1484',
  },

  social: {
    instagram: 'https://instagram.com/oceanendosf',
    google: 'https://share.google/g13NG4OKp0WAEY0YR',
    yelp: 'https://www.yelp.com/biz/ocean-endodontics-san-francisco',
  },

  // sameAs list for Organization schema
  sameAs: [
    'https://instagram.com/oceanendosf',
    'https://share.google/g13NG4OKp0WAEY0YR',
    'https://www.yelp.com/biz/ocean-endodontics-san-francisco',
  ],

  foundingYear: 2025,

  // ---- Primary CTAs ----
  cta: {
    book: { label: 'Book Appointment', href: '/book-appointment' },
    call: { label: 'Call (415) 741-3636', href: 'tel:+14157413636' },
    emergency: { label: 'Dental Emergency?', href: '/services/emergency-endodontic-treatment' },
    refer: { label: 'Refer a Patient', href: 'https://securesite1473.tdo4endo.com/RefDocsLogin.aspx' },
  },

  // ---- Compliance copy ----
  disclaimers: {
    medicalShort:
      'This website is for general educational purposes only and is not a substitute for professional dental or medical advice, diagnosis, or treatment.',
    medicalFull:
      'The content on this website, including text, graphics, and images, is provided for general educational and informational purposes only. It is not a substitute for professional dental or medical advice, diagnosis, or treatment. Always seek the advice of Dr. Leong or another qualified dental or health provider with any questions you may have regarding a dental condition. Viewing this website, or contacting Ocean Endodontics through it, does not create a doctor–patient relationship. Individual results vary; no specific outcome is promised or guaranteed.',
    emergency:
      'If you are experiencing a life-threatening emergency — including difficulty breathing or swallowing, uncontrolled bleeding, or rapidly spreading facial swelling — call 911 or go to your nearest emergency room immediately. Do not wait for a call back.',
    specialty:
      'Ocean Endodontics is a specialty endodontic practice. Dr. Kelly Kimiko Leong is a licensed dentist and board-certified endodontist (Diplomate of the American Board of Endodontics).',
    sedation:
      'In-office comfort options are limited to nitrous oxide (laughing gas) and, for appropriate patients, oral conscious sedation. We do not provide IV sedation or general anesthesia. Suitability is determined after a review of your health history.',
    smsConsent:
      'By providing your mobile phone number to Ocean Endodontics, you consent to receive SMS/text messages from us regarding appointment reminders, scheduling updates, billing notices, and occasional practice-related information. Message frequency may vary. Standard message and data rates may apply based on your mobile carrier. You may opt out at any time by replying STOP to any text message, or by contacting our office at (415) 741-3636 or info@oceanendosf.com.',
    reviews:
      'Testimonials reflect the experience of individual patients. Individual results and experiences vary and are not a guarantee of the outcome of any future care.',
  },
} as const;

// ---- Navigation ----
export const primaryNav: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about',
    megaEyebrow: 'The practice',
    columns: 1,
    align: 'left',
    children: [
      { label: 'Meet Dr. Kelly Kimiko Leong', href: '/meet-dr-kimiko-leong', icon: 'user', desc: 'Your board-certified endodontist' },
      { label: 'Our Office', href: '/our-office', icon: 'building', desc: 'A calm, modern space built for comfort' },
      { label: 'Technology', href: '/technology', icon: 'microscope', desc: 'Microscope-guided, 3D-imaging care' },
      { label: 'Patient Reviews', href: '/reviews', icon: 'star', desc: 'What patients say about their visit' },
    ],
    featured: {
      eyebrow: 'Get to know us',
      title: 'Meet Dr. Leong',
      desc: 'A gentle, precise specialist who treats every patient like family.',
      href: '/meet-dr-kimiko-leong',
      cta: 'Read her story',
      icon: 'user',
      tone: 'navy',
    },
  },
  {
    label: 'Services',
    href: '/services',
    megaEyebrow: 'Endodontic care',
    columns: 2,
    align: 'left',
    children: [
      { label: 'Root Canal Therapy', href: '/services/root-canal-therapy', icon: 'tooth', desc: 'Save your natural tooth, comfortably' },
      { label: 'Root Canal Retreatment', href: '/services/retreatment-root-canal-therapy', icon: 'refresh', desc: 'A second chance for a failing canal' },
      { label: 'Apicoectomy / Microsurgery', href: '/services/apicoectomy-endodontic-microsurgery', icon: 'microscope', desc: 'Microsurgery when a canal is not enough' },
      { label: 'Diagnosis & Pain Management', href: '/services/diagnosis-pain-management', icon: 'search', desc: 'Find the true source of tooth pain' },
      { label: 'Cracked Tooth Treatment', href: '/services/cracked-tooth-treatment', icon: 'crack', desc: 'Diagnose and treat cracked teeth' },
      { label: 'Emergency Endodontics', href: '/services/emergency-endodontic-treatment', icon: 'bolt', desc: 'Same-day relief when it hurts' },
      { label: 'Dental Trauma Management', href: '/services/dental-trauma-management', icon: 'shield', desc: 'Urgent care for injured teeth' },
      { label: 'Nitrous Oxide Sedation', href: '/services/nitrous-oxide-sedation', icon: 'leaf', desc: 'Gentle laughing-gas relaxation' },
      { label: 'Oral Conscious Sedation', href: '/services/oral-conscious-sedation-dentistry', icon: 'moon', desc: 'Ease anxiety with oral sedation' },
      { label: 'Internal Bleaching', href: '/services/internal-bleaching', icon: 'sparkle', desc: 'Brighten a darkened, treated tooth' },
      { label: 'Botox for Bruxism', href: '/services/botox-for-bruxism', icon: 'wave', desc: 'Relief from clenching and grinding' },
    ],
    featured: {
      eyebrow: 'In pain right now?',
      title: 'Same-day emergencies',
      desc: 'Call early and we will do our best to see you today.',
      href: '/services/emergency-endodontic-treatment',
      cta: 'Emergency care',
      icon: 'bolt',
      tone: 'urgent',
    },
  },
  { label: 'Areas We Serve', href: '/areas-we-serve' },
  {
    label: 'For Patients',
    href: '/new-patient',
    megaEyebrow: 'Your visit',
    columns: 1,
    align: 'right',
    children: [
      { label: 'New Patient Guide', href: '/new-patient', icon: 'clipboard', desc: 'What to expect on your first visit' },
      { label: 'Insurance & Financing', href: '/financial', icon: 'card', desc: 'Coverage, payment, and financing' },
      { label: 'Education Center', href: '/education', icon: 'book', desc: 'Plain-language answers, no jargon' },
      { label: 'Patient Portal', href: 'https://securesite1473.tdo4endo.com/PatientsLogin.aspx', external: true, icon: 'portal', desc: 'Access your account securely' },
    ],
    featured: {
      eyebrow: 'Ready when you are',
      title: 'Book an appointment',
      desc: 'Request a visit in about a minute. We confirm by phone.',
      href: '/book-appointment',
      cta: 'Book now',
      icon: 'calendar',
      tone: 'accent',
    },
  },
  {
    label: 'For Doctors',
    href: '/for-doctors',
    megaEyebrow: 'Referring partners',
    columns: 1,
    align: 'right',
    children: [
      { label: 'Partnership & Referrals', href: '/for-doctors', icon: 'link', desc: 'How we support you and your patients' },
      { label: 'Partnership Philosophy', href: '/partnership-philosophy', icon: 'compass', desc: 'Our approach to co-managing care' },
      { label: 'CE Courses', href: '/ce-courses', icon: 'cap', desc: 'Hands-on endodontic education' },
      { label: 'Referral Form (PDF)', href: '/files/ocean-endo-referral-form.pdf', external: true, icon: 'file', desc: 'Download and print our form' },
      { label: 'Staff Resources', href: '/staff-resources', icon: 'lock', desc: 'Tools and info for our team' },
    ],
    featured: {
      eyebrow: 'Refer with confidence',
      title: 'Refer a patient',
      desc: 'Send a secure referral through our online doctor portal.',
      href: 'https://securesite1473.tdo4endo.com/RefDocsLogin.aspx',
      cta: 'Open referral portal',
      external: true,
      icon: 'handshake',
      tone: 'navy',
    },
  },
  { label: 'Contact', href: '/contact' },
];

// Footer service links (kept in sync with services.ts order)
export const footerServiceLinks: NavChild[] = [
  { label: 'Root Canal Therapy', href: '/services/root-canal-therapy' },
  { label: 'Root Canal Retreatment', href: '/services/retreatment-root-canal-therapy' },
  { label: 'Apicoectomy / Microsurgery', href: '/services/apicoectomy-endodontic-microsurgery' },
  { label: 'Cracked Tooth Treatment', href: '/services/cracked-tooth-treatment' },
  { label: 'Emergency Endodontics', href: '/services/emergency-endodontic-treatment' },
  { label: 'Dental Trauma Management', href: '/services/dental-trauma-management' },
  { label: 'Diagnosis & Pain Management', href: '/services/diagnosis-pain-management' },
  { label: 'Internal Bleaching', href: '/services/internal-bleaching' },
];

export const footerQuickLinks: NavChild[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Meet Dr. Leong', href: '/meet-dr-kimiko-leong' },
  { label: 'Our Office', href: '/our-office' },
  { label: 'Technology', href: '/technology' },
  { label: 'Areas We Serve', href: '/areas-we-serve' },
  { label: 'Education Center', href: '/education' },
  { label: 'Contact', href: '/contact' },
];

export const legalNav: NavChild[] = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Use', href: '/terms-of-use' },
  { label: 'Accessibility Statement', href: '/accessibility-statement' },
  { label: 'Your Privacy Choices', href: '/do-not-sell-my-personal-information' },
];

export type Site = typeof site;
