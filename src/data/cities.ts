/**
 * cities.ts — service-area neighborhoods. Each entry has UNIQUE local content
 * (real landmarks, transit, honest proximity) so pages are not duplicate-y.
 * Clean slugs live at /areas-we-serve/[slug]; the long legacy WordPress URLs
 * 301-redirect here (see public/_redirects).
 */

export type City = {
  slug: string;
  name: string;
  state: string;
  badge: string;
  proximityNote: string; // honest one-liner used in cards + meta
  intro: string; // paragraphs (blank-line separated); may contain [link](/path) tokens
  landmarks: string[];
  transitNote: string;
  driveNote: string;
  heroImage: string;
  seoTitle: string;
  seoDescription: string;
};

export const cities: City[] = [
  {
    slug: 'ingleside',
    name: 'Ingleside',
    state: 'CA',
    badge: 'Our home neighborhood',
    proximityNote: 'Ocean Endodontics sits right on the Ingleside stretch of Ocean Avenue.',
    intro:
      'Ocean Endodontics is an Ingleside practice through and through. Our office at 2645 Ocean Avenue sits on the neighborhood’s main commercial corridor, a short walk from the Ingleside Branch Library and the shops and cafés that line Ocean Ave. For our Ingleside neighbors, specialist endodontic care is not a trip across town, it is right around the corner.\n\nThat closeness matters most in an emergency. When a toothache flares or a filling fails, Ingleside patients can often be seen the same day, and we coordinate directly with local general dentists so your care is seamless. From routine [root canal therapy](/services/root-canal-therapy) to [emergency treatment](/services/emergency-endodontic-treatment) and [cracked tooth care](/services/cracked-tooth-treatment), everything happens under one roof, minutes from home.\n\nParking is genuinely easy here: a free lot through the building breezeway plus ample street parking, and the K Ingleside line stops nearby. If you have been putting off care because getting to a specialist felt like a hassle, your closest option is likely closer than you think.',
    landmarks: ['Ingleside Branch Library', 'City College of San Francisco', 'Ocean Avenue shops', 'El Rey Theatre'],
    transitNote: 'On the K Ingleside Muni line, with several bus connections along Ocean Avenue.',
    driveNote: 'Central to the neighborhood — most Ingleside addresses are a few minutes away.',
    heroImage: 'reception-logo',
    seoTitle: 'Endodontist in Ingleside, San Francisco | Ocean Endodontics',
    seoDescription:
      'Ocean Endodontics is your Ingleside endodontist on Ocean Avenue. Gentle root canals, retreatment, and same-day emergency care with Dr. Kelly Kimiko Leong. Call (415) 741-3636.',
  },
  {
    slug: 'lake-merced',
    name: 'Lake Merced',
    state: 'CA',
    badge: 'Minutes away',
    proximityNote: 'A short drive east from the lake along Ocean Avenue.',
    intro:
      'For the Lake Merced community, Ocean Endodontics is just up Ocean Avenue. Whether you live near the lake’s walking and biking paths, study or work at nearby San Francisco State University, or golf at Harding Park, our specialist office is only a few minutes from home.\n\nWe make specialist care simple for Lake Merced patients. Cone beam 3D imaging and microscope-guided treatment mean accurate diagnosis and efficient visits, whether you need [root canal therapy](/services/root-canal-therapy), [retreatment](/services/retreatment-root-canal-therapy) of an older root canal, or [microsurgery](/services/apicoectomy-endodontic-microsurgery). When pain strikes unexpectedly, we reserve time each day for [emergencies](/services/emergency-endodontic-treatment).\n\nGetting here is easy. There is a free parking lot through the breezeway plus street parking, and transit connections along 19th Avenue and Junipero Serra put us within easy reach of the whole Lake Merced area.',
    landmarks: ['Lake Merced', 'San Francisco State University', 'TPC Harding Park', 'Stern Grove'],
    transitNote: 'Close to 19th Avenue and Junipero Serra transit connections; the M Ocean View line runs nearby.',
    driveNote: 'Typically a short drive east along Ocean Avenue from the Lake Merced area.',
    heroImage: 'welcome-hall',
    seoTitle: 'Endodontist near Lake Merced, San Francisco | Ocean Endodontics',
    seoDescription:
      'Gentle, precise endodontic care minutes from Lake Merced. Root canals, retreatment, and same-day emergencies with Dr. Kelly Kimiko Leong at Ocean Endodontics. Call (415) 741-3636.',
  },
  {
    slug: 'parkmerced',
    name: 'Parkmerced',
    state: 'CA',
    badge: 'Minutes away',
    proximityNote: 'A quick trip up Ocean Avenue from the Parkmerced community.',
    intro:
      'Parkmerced residents have a board-certified endodontist practically next door. Set between Lake Merced and San Francisco State, Parkmerced is only a short trip up Ocean Avenue to our office, which is a real advantage for students, families, and professionals with full schedules.\n\nWe understand that time is tight, so we run a punctual, efficient practice. Most [root canals](/services/root-canal-therapy) are completed in a single visit, diagnosis is precise thanks to advanced imaging, and comfort options like [nitrous oxide](/services/nitrous-oxide-sedation) help anxious patients relax. If you are dealing with sudden pain or swelling, call us early and we will do our best to see you the same day.\n\nThe M Ocean View Muni line and bus routes along 19th Avenue and Junipero Serra make us easy to reach without a car, and when you do drive, our free lot and nearby street parking keep things simple.',
    landmarks: ['Parkmerced community', 'San Francisco State University', 'Lake Merced', 'Stonestown Galleria'],
    transitNote: 'Served by the M Ocean View Muni line and 19th Avenue bus routes.',
    driveNote: 'Usually just a few minutes up Ocean Avenue from Parkmerced.',
    heroImage: 'reception-wide',
    seoTitle: 'Endodontist near Parkmerced, San Francisco | Ocean Endodontics',
    seoDescription:
      'Endodontic care minutes from Parkmerced with board-certified endodontist Dr. Kelly Kimiko Leong. Single-visit root canals and same-day emergency care. Call (415) 741-3636.',
  },
  {
    slug: 'west-portal',
    name: 'West Portal',
    state: 'CA',
    badge: 'A short ride away',
    proximityNote: 'A quick hop from West Portal via the K, L, or M Muni lines.',
    intro:
      'West Portal’s tree-lined shopping street and easy Muni access make it one of the most connected neighborhoods on the west side, and Ocean Endodontics is only a short ride away. From the West Portal station, the K Ingleside line brings you almost to our door on Ocean Avenue.\n\nWest Portal patients come to us for the full range of specialist care: [precise root canal therapy](/services/root-canal-therapy), [retreatment](/services/retreatment-root-canal-therapy) of teeth that need a second chance, and [endodontic microsurgery](/services/apicoectomy-endodontic-microsurgery) for stubborn infections at the root tip. Every procedure is performed under an operating microscope for accuracy and comfort.\n\nWe coordinate closely with the many excellent general and family dentists around West Portal Avenue, so referrals and follow-up care are smooth. And if you would rather drive, our free breezeway lot and nearby street parking make the visit stress-free.',
    landmarks: ['West Portal Avenue shops', 'West Portal Muni Station', 'Twin Peaks Tunnel', 'Mount Davidson'],
    transitNote: 'Direct connection via the West Portal station on the K, L, and M Muni Metro lines.',
    driveNote: 'A short drive south and west, typically well under ten minutes.',
    heroImage: 'microscope',
    seoTitle: 'Endodontist near West Portal, San Francisco | Ocean Endodontics',
    seoDescription:
      'Microscope-guided root canals, retreatment, and microsurgery a short ride from West Portal. Board-certified endodontist Dr. Kelly Kimiko Leong. Call (415) 741-3636.',
  },
  {
    slug: 'st-francis-wood',
    name: 'St. Francis Wood',
    state: 'CA',
    badge: 'A short drive away',
    proximityNote: 'A few minutes from St. Francis Wood via St. Francis Circle.',
    intro:
      'St. Francis Wood is one of San Francisco’s most gracious residential neighborhoods, and its residents value quality and attention to detail, exactly what a specialty endodontic practice is built to provide. From the fountains and boulevards of St. Francis Wood, our office is only a few minutes away by way of St. Francis Circle and Junipero Serra.\n\nOur patients from St. Francis Wood appreciate an unhurried, meticulous approach. Dr. Leong takes the time to explain every step, works under high magnification, and checks her work carefully, whether the visit is for [root canal therapy](/services/root-canal-therapy), a [cracked tooth](/services/cracked-tooth-treatment), or [diagnosis of hard-to-place pain](/services/diagnosis-pain-management).\n\nComfort options and a calm, modern office round out the experience, and parking could not be easier with a free lot through the breezeway. For neighbors who expect careful, considered care, we are a natural fit just down the hill.',
    landmarks: ['St. Francis Circle', 'St. Francis Wood fountains', 'West Portal Avenue', 'Mount Davidson'],
    transitNote: 'Near St. Francis Circle with K, L, and M Muni connections a short distance away.',
    driveNote: 'Generally a few minutes via St. Francis Circle and Junipero Serra Boulevard.',
    heroImage: 'detail-orchid',
    seoTitle: 'Endodontist near St. Francis Wood, San Francisco | Ocean Endodontics',
    seoDescription:
      'Careful, precise endodontic care minutes from St. Francis Wood with Dr. Kelly Kimiko Leong. Root canals, cracked tooth treatment, and expert diagnosis. Call (415) 741-3636.',
  },
  {
    slug: 'balboa-terrace',
    name: 'Balboa Terrace',
    state: 'CA',
    badge: 'A short drive away',
    proximityNote: 'Just minutes along the K line and Junipero Serra.',
    intro:
      'Balboa Terrace sits between St. Francis Wood and the K Ingleside line, which makes reaching Ocean Endodontics quick and easy for the neighborhood. Whether you drive down Junipero Serra or hop on Muni, you are only minutes from specialist care on Ocean Avenue.\n\nBalboa Terrace patients rely on us for the treatments that keep natural teeth healthy for a lifetime: [root canal therapy](/services/root-canal-therapy), [retreatment](/services/retreatment-root-canal-therapy), and prompt [emergency care](/services/emergency-endodontic-treatment) when a problem cannot wait. Advanced imaging and microscope-guided technique mean your diagnosis is accurate and your treatment is efficient.\n\nWe keep the whole process straightforward, from verifying your insurance in advance to coordinating with your regular dentist for the final restoration. Add easy free parking and a calm, modern office, and specialist care becomes something you can actually look forward to.',
    landmarks: ['Balboa Terrace', 'St. Francis Circle', 'Aptos Middle School', 'Monterey Boulevard'],
    transitNote: 'On and near the K Ingleside Muni line with quick access via Junipero Serra Boulevard.',
    driveNote: 'Typically just a few minutes down Junipero Serra to Ocean Avenue.',
    heroImage: 'reception-desk',
    seoTitle: 'Endodontist near Balboa Terrace, San Francisco | Ocean Endodontics',
    seoDescription:
      'Root canals, retreatment, and same-day emergency endodontics minutes from Balboa Terrace. Board-certified endodontist Dr. Kelly Kimiko Leong. Call (415) 741-3636.',
  },
  {
    slug: 'daly-city',
    name: 'Daly City',
    state: 'CA',
    badge: 'Bordering city',
    proximityNote: 'Just north across the county line via Junipero Serra or I-280.',
    intro:
      'Daly City may be its own city, but for the neighborhoods along its northern edge, Ocean Endodontics is one of the closest specialist offices available. A quick trip up Junipero Serra Boulevard or a short hop off I-280 brings you to our Ocean Avenue office, often faster than heading into the busier parts of San Francisco.\n\nDaly City patients choose us for the same reasons our San Francisco neighbors do: microscope-guided [root canal therapy](/services/root-canal-therapy), expert [retreatment](/services/retreatment-root-canal-therapy) and [microsurgery](/services/apicoectomy-endodontic-microsurgery), and [emergency visits](/services/emergency-endodontic-treatment) with same-day care whenever possible. We coordinate with Daly City general dentists so your treatment and restoration fit together smoothly.\n\nThe BART Daly City station and I-280 make us convenient with or without a car, and once you arrive there is a free parking lot through the building breezeway. Crossing the county line for specialist care has never been simpler.',
    landmarks: ['BART Daly City Station', 'Westlake', 'John Daly Boulevard', 'Junipero Serra Boulevard'],
    transitNote: 'Close to the Daly City BART station with a direct drive via Junipero Serra or I-280.',
    driveNote: 'A short drive north across the county line, often under ten minutes from northern Daly City.',
    heroImage: 'operatory-2',
    seoTitle: 'Endodontist near Daly City | Root Canals & Emergency Care | Ocean Endodontics',
    seoDescription:
      'Board-certified endodontist minutes from Daly City. Gentle root canals, retreatment, microsurgery, and same-day emergency care with Dr. Kelly Kimiko Leong. Call (415) 741-3636.',
  },
];

export const getCity = (slug: string) => cities.find((c) => c.slug === slug);
export const citySlugs = cities.map((c) => c.slug);
