/**
 * imageMap.ts — resolves the string `heroImage` keys used in services.ts and
 * cities.ts to imported ImageMetadata, so those data files stay plain/portable
 * while pages still get the full Astro/Sharp optimization pipeline.
 */
import type { ImageMetadata } from 'astro';

import receptionLogo from '@assets/images/photos/reception-logo.jpg';
import microscope from '@assets/images/photos/microscope.jpg';
import welcomeHall from '@assets/images/photos/welcome-hall.jpg';
import operatory1 from '@assets/images/photos/operatory-1.jpg';
import operatory2 from '@assets/images/photos/operatory-2.jpg';
import receptionWide from '@assets/images/photos/reception-wide.jpg';
import receptionDesk from '@assets/images/photos/reception-desk.jpg';
import detailOrchid from '@assets/images/photos/detail-orchid.jpg';
import detailChair from '@assets/images/photos/detail-chair.jpg';
import detailInstruments from '@assets/images/photos/detail-instruments.jpg';
import detailWide from '@assets/images/photos/detail-wide.jpg';
import detailTools from '@assets/images/photos/detail-tools.jpg';
import officeHall from '@assets/images/photos/office-hall.jpg';
import officeRoom from '@assets/images/photos/office-room.jpg';

export const photos: Record<string, ImageMetadata> = {
  'reception-logo': receptionLogo,
  microscope,
  'welcome-hall': welcomeHall,
  'operatory-1': operatory1,
  'operatory-2': operatory2,
  'reception-wide': receptionWide,
  'reception-desk': receptionDesk,
  'detail-orchid': detailOrchid,
  'detail-chair': detailChair,
  'detail-instruments': detailInstruments,
  'detail-wide': detailWide,
  'detail-tools': detailTools,
  'office-hall': officeHall,
  'office-room': officeRoom,
};

export const resolvePhoto = (key: string): ImageMetadata => photos[key] ?? receptionLogo;
