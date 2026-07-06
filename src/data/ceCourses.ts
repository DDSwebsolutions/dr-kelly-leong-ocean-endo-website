/**
 * ceCourses.ts — continuing education courses Ocean Endodontics offers to
 * referring dentists (Ocean Endodontics is a PACE-approved program provider).
 * Each course is a detailed flyer; the flyer image carries the full details.
 * Specific past dates are not surfaced as upcoming — the office is contacted for
 * the current schedule.
 */
import type { ImageMetadata } from 'astro';
import botox from '@assets/images/ce/botox.png';
import ohi from '@assets/images/ce/ohi.png';
import proceduralAccidents from '@assets/images/ce/procedural-accidents.png';
import resorption from '@assets/images/ce/resorption.png';
import survivingNewGrad from '@assets/images/ce/surviving-new-grad.png';

export type CeCourse = {
  slug: string;
  title: string;
  flyer: ImageMetadata;
  topic: string;
  legacyPath: string;
};

export const ceCourses: CeCourse[] = [
  {
    slug: 'botox-use-in-the-dental-setting',
    title: 'Botox Use in the Dental Setting',
    flyer: botox,
    topic:
      'Therapeutic uses of botulinum toxin in dentistry, including management of TMJD, facial pain, and tooth damage, plus injection techniques and patient assessment.',
    legacyPath: '/ce-botox-use-in-the-dental-setting',
  },
  {
    slug: 'surviving-as-a-new-grad',
    title: 'Surviving as a New Grad',
    flyer: survivingNewGrad,
    topic: 'Practical guidance for new dental graduates transitioning into confident clinical practice.',
    legacyPath: '/ce-surviving-as-a-new-grad',
  },
  {
    slug: 'ohi-for-the-endurance-athlete',
    title: 'OHI for the Endurance Athlete',
    flyer: ohi,
    topic: 'Oral hygiene instruction and dental considerations unique to endurance athletes.',
    legacyPath: '/ce-ohi-for-the-endurance-athlete',
  },
  {
    slug: 'resorption-current-treatment-techniques',
    title: 'Resorption: Current Treatment Techniques',
    flyer: resorption,
    topic: 'Diagnosis and current treatment techniques for internal and external root resorption.',
    legacyPath: '/ce-resorption-current-treatment-techniques',
  },
  {
    slug: 'managing-procedural-accidents-in-endodontics',
    title: 'Managing Procedural Accidents in Endodontics',
    flyer: proceduralAccidents,
    topic: 'Preventing, recognizing, and managing procedural accidents during endodontic treatment.',
    legacyPath: '/ce-managing-procedural-accidents-in-endodontics',
  },
];

export const getCeCourse = (slug: string) => ceCourses.find((c) => c.slug === slug);
export const ceSlugs = ceCourses.map((c) => c.slug);
