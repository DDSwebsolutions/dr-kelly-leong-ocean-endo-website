/**
 * schemas.ts — JSON-LD builders (one function per type).
 * Injected from the layout. Strings that come from data-driven prose are run
 * through stripLinks() so [label](/path) tokens never leak into structured data.
 * No aggregateRating is emitted anywhere: there is no verified review total to
 * match, and a mismatched rating is both a rich-result failure and a claim risk.
 */

import { site } from '@data/site';
import { cities } from '@data/cities';
import type { Service } from '@data/services';
import { stripLinks, absoluteUrl } from '@lib/utils';

const ORG_ID = `${site.url}/#organization`;
const WEBSITE_ID = `${site.url}/#website`;
const DOCTOR_ID = `${site.url}/#dentist`;

function postalAddress() {
  return {
    '@type': 'PostalAddress',
    streetAddress: `${site.address.streetLine1}, ${site.address.streetLine2}`,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: site.address.country,
  };
}

function geoCoordinates() {
  return { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng };
}

function openingHours() {
  const dayMap: Record<string, string> = {
    Monday: 'https://schema.org/Monday',
    Tuesday: 'https://schema.org/Tuesday',
    Wednesday: 'https://schema.org/Wednesday',
    Thursday: 'https://schema.org/Thursday',
    Friday: 'https://schema.org/Friday',
    Saturday: 'https://schema.org/Saturday',
    Sunday: 'https://schema.org/Sunday',
  };
  return site.hours
    .filter((h) => !h.closed && h.opens && h.closes)
    .map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: dayMap[h.day],
      opens: h.opens,
      closes: h.closes,
    }));
}

/** Organization: Dentist + MedicalBusiness + LocalBusiness with stable @id. */
export function organizationSchema(logoUrl: string, imageUrl: string) {
  return {
    '@type': ['Dentist', 'MedicalBusiness', 'LocalBusiness'],
    '@id': ORG_ID,
    name: site.name,
    legalName: site.legalName,
    url: `${site.url}/`,
    telephone: site.phone.display,
    faxNumber: site.fax.display,
    email: site.email.raw,
    image: imageUrl,
    logo: logoUrl,
    priceRange: '$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Credit Card, Debit Card, Dental Insurance',
    address: postalAddress(),
    geo: geoCoordinates(),
    hasMap: site.directionsUrl,
    areaServed: [
      { '@type': 'City', name: 'San Francisco' },
      ...cities.map((c) => ({ '@type': 'Place', name: `${c.name}, ${c.state}` })),
    ],
    medicalSpecialty: 'Endodontic',
    knowsAbout: [
      'Root canal therapy',
      'Endodontic retreatment',
      'Apicoectomy',
      'Cracked tooth',
      'Dental trauma',
      'Dental pain diagnosis',
    ],
    openingHoursSpecification: openingHours(),
    founder: { '@id': DOCTOR_ID },
    employee: { '@id': DOCTOR_ID },
    sameAs: site.sameAs,
    slogan: site.tagline,
  };
}

/** WebSite node. */
export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${site.url}/`,
    name: site.name,
    inLanguage: 'en-US',
    publisher: { '@id': ORG_ID },
  };
}

/** Physician / Dentist person node for the doctor. */
export function physicianSchema(imageUrl: string) {
  return {
    '@type': ['Physician', 'Dentist'],
    '@id': DOCTOR_ID,
    name: site.doctor.name,
    honorificSuffix: site.doctor.credential,
    jobTitle: site.doctor.title,
    image: imageUrl,
    url: `${site.url}/meet-dr-kimiko-leong`,
    medicalSpecialty: 'Endodontic',
    worksFor: { '@id': ORG_ID },
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'University of California, Berkeley' },
      { '@type': 'CollegeOrUniversity', name: 'Tufts University School of Dental Medicine' },
    ],
    memberOf: { '@type': 'Organization', name: 'American Board of Endodontics' },
    address: postalAddress(),
  };
}

export type Crumb = { name: string; path: string };

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

export function webPageSchema(opts: {
  path: string;
  title: string;
  description: string;
  primaryImage?: string;
  crumbs?: Crumb[];
}) {
  const url = absoluteUrl(opts.path);
  const node: Record<string, unknown> = {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: opts.title,
    description: stripLinks(opts.description),
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    inLanguage: 'en-US',
  };
  if (opts.primaryImage) node.primaryImageOfPage = opts.primaryImage;
  if (opts.crumbs?.length) node.breadcrumb = breadcrumbSchema(opts.crumbs);
  return node;
}

/** MedicalProcedure for a service page. */
export function serviceSchema(service: Service, imageUrl?: string) {
  const url = absoluteUrl(`/services/${service.slug}`);
  return {
    '@type': 'MedicalProcedure',
    '@id': `${url}#procedure`,
    name: service.title,
    procedureType: `https://schema.org/${service.medicalProcedureType}`,
    description: stripLinks(service.shortDescription),
    howPerformed: service.process ? service.process.map((p) => stripLinks(p.body)).join(' ') : undefined,
    bodyLocation: 'Tooth',
    url,
    ...(imageUrl ? { image: imageUrl } : {}),
    provider: { '@id': ORG_ID },
  };
}

/** FAQPage — answers stripped to plain text to match visible copy. */
export function faqPageSchema(faqs: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: stripLinks(f.q),
      acceptedAnswer: { '@type': 'Answer', text: stripLinks(f.a) },
    })),
  };
}

export function blogPostingSchema(opts: {
  path: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  imageUrl?: string;
  author?: string;
}) {
  const url = absoluteUrl(opts.path);
  return {
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: opts.title,
    description: stripLinks(opts.description),
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: { '@type': 'Person', name: opts.author ?? site.doctor.name, '@id': DOCTOR_ID },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: url,
    ...(opts.imageUrl ? { image: opts.imageUrl } : {}),
    inLanguage: 'en-US',
  };
}

/** Wrap any set of nodes into a single @graph document. */
export function graph(nodes: unknown[]) {
  return { '@context': 'https://schema.org', '@graph': nodes.filter(Boolean) };
}
