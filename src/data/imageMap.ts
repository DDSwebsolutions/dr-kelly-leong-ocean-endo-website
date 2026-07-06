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
};

export const resolvePhoto = (key: string): ImageMetadata => photos[key] ?? receptionLogo;

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
