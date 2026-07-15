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
import gallery40 from '@assets/images/photos/gallery-40.jpg';
import gallery42 from '@assets/images/photos/gallery-42.jpg';
import gallery43 from '@assets/images/photos/gallery-43.jpg';
import gallery46 from '@assets/images/photos/gallery-46.jpg';
import gallery47 from '@assets/images/photos/gallery-47.jpg';
import gallery48 from '@assets/images/photos/gallery-48.jpg';
import gallery50 from '@assets/images/photos/gallery-50.jpg';
import gallery52 from '@assets/images/photos/gallery-52.jpg';

// Per-service illustrations/photos, matched to the live site (source of truth).
import svcRootCanal from '@assets/images/services/root-canal-therapy.jpg';
import svcRetreatment from '@assets/images/services/retreatment-root-canal-therapy.jpg';
import svcApicoectomy from '@assets/images/services/apicoectomy-endodontic-microsurgery.jpg';
import svcDiagnosis from '@assets/images/services/diagnosis-pain-management.jpg';
import svcCracked from '@assets/images/services/cracked-tooth-treatment.jpg';
import svcEmergency from '@assets/images/services/emergency-endodontic-treatment.jpg';
import svcTrauma from '@assets/images/services/dental-trauma-management.jpg';
import svcNitrous from '@assets/images/services/nitrous-oxide-sedation.jpg';
import svcOral from '@assets/images/services/oral-conscious-sedation-dentistry.jpg';
import svcBleaching from '@assets/images/services/internal-bleaching.jpg';
import svcBotox from '@assets/images/services/botox-for-bruxism.jpg';

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
  'gallery-40': gallery40,
  'gallery-42': gallery42,
  'gallery-43': gallery43,
  'gallery-46': gallery46,
  'gallery-47': gallery47,
  'gallery-48': gallery48,
  'gallery-50': gallery50,
  'gallery-52': gallery52,
};

export const resolvePhoto = (key: string): ImageMetadata => photos[key] ?? receptionLogo;

/**
 * Honest, human alt text per photo (written from the actual images).
 * NOTE for choosing service-page photos: instrument close-ups
 * (detail-chair, detail-instruments, detail-tools, detail-wide) read as
 * intimidating to anxious patients — prefer the bright rooms and reception
 * shots on patient-facing service pages.
 */
export const photoAlts: Record<string, string> = {
  'reception-logo': 'The Ocean Endodontics front desk with the practice logo and fresh orchids',
  microscope: 'Dr. Leong at the operating microscope',
  'welcome-hall': 'The welcome board in the Ocean Endodontics hallway',
  'operatory-1': 'A bright, calm treatment room with large windows',
  'operatory-2': 'A treatment room with the operating microscope and neighborhood views',
  'reception-wide': 'The light-filled reception and waiting area',
  'reception-desk': 'A treatment room with a chairside monitor and window light',
  'detail-orchid': 'The operating microscope beside an orchid in the window light',
  'detail-chair': 'Instruments being prepared before treatment',
  'detail-instruments': 'A clinician preparing instruments',
  'detail-wide': 'Dr. Leong at work under the operating microscope',
  'detail-tools': 'The sterilization area at Ocean Endodontics',
  'office-hall': 'The hallway leading to the treatment rooms',
  'office-room': 'The cone beam 3D imaging suite',
  'gallery-40': 'The reception lounge with orchids and the Ocean Endo logo',
  'gallery-42': 'Comfortable seating in the calm waiting area',
  'gallery-43': 'The front desk with fresh orchids',
  'gallery-46': 'The bright, curved hallway inside the office',
  'gallery-47': 'The front office and check-in area',
  'gallery-48': 'A treatment room with garden views and natural light',
  'gallery-50': 'An airy treatment room with warm wood accents',
  'gallery-52': 'A treatment room looking out over the neighborhood',
};

export const resolvePhotoAlt = (key: string): string =>
  photoAlts[key] ?? 'Inside the Ocean Endodontics office in San Francisco';

// Service-specific imagery keyed by service slug (matches the live site).
export const serviceIllustration: Record<string, ImageMetadata> = {
  'root-canal-therapy': svcRootCanal,
  'retreatment-root-canal-therapy': svcRetreatment,
  'apicoectomy-endodontic-microsurgery': svcApicoectomy,
  'diagnosis-pain-management': svcDiagnosis,
  'cracked-tooth-treatment': svcCracked,
  'emergency-endodontic-treatment': svcEmergency,
  'dental-trauma-management': svcTrauma,
  'nitrous-oxide-sedation': svcNitrous,
  'oral-conscious-sedation-dentistry': svcOral,
  'internal-bleaching': svcBleaching,
  'botox-for-bruxism': svcBotox,
};

export const resolveServiceImage = (slug: string): ImageMetadata =>
  serviceIllustration[slug] ?? receptionLogo;
