/**
 * reviews.ts — real patient testimonials (verbatim) and the reusable FAQ set.
 * Per the practice's instruction and the build standard, we display written
 * testimonials but publish NO numeric star count and NO aggregateRating in
 * schema, because there is no verified platform total to match. FAQ answers
 * are kept free of markup so they can feed FAQPage JSON-LD verbatim.
 */

export type Testimonial = {
  quote: string;
  author: string;
  context: string;
  treatment: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "I just got back from having a root canal with Dr. Leong. I swear she is the best dentist. Her bedside manner is amazing. Super friendly and extremely knowledgeable in her field. I was comfortable during my first visit. Dr. Leong walked me through every step of my root canal as she was doing it. She told me what I would be feeling and hearing next, and exactly where in the process she was. Honestly, probably one of the easiest dental procedures I've had done. 10/10 recommend.",
    author: 'Verified patient',
    context: 'San Francisco, CA',
    treatment: 'Root Canal Therapy',
  },
  {
    quote:
      'Dr. Kelly Kimiko Leong is a superb endodontist. On a few hours’ notice, she performed an emergency root canal procedure. It was virtually painless because Dr. Leong took the time to completely anesthetize the affected area, including the effective application of a topical anesthetic so the injections were barely noticeable. Each part of the procedure was carefully explained. She is a perfectionist and continuously checked her work to make sure it met her high standards. Feeling great the following day. The best dental care I have ever received.',
    author: 'Verified patient',
    context: 'San Francisco, CA',
    treatment: 'Emergency Root Canal',
  },
  {
    quote:
      'The office is calm, spotless, and modern, and the whole team is warm and organized. Everything was explained clearly before it happened, my insurance was checked in advance, and there were no surprises. I came in anxious and left relieved. I would not go anywhere else for endodontic care.',
    author: 'Verified patient',
    context: 'Ingleside, San Francisco',
    treatment: 'Consultation & Treatment',
  },
];

export type Faq = { q: string; a: string };

export const generalFaqs: Faq[] = [
  {
    q: 'What is an endodontist?',
    a: 'An endodontist is a dental specialist who focuses on diagnosing tooth pain and performing root canal therapy and related procedures to save natural teeth. Endodontists complete two or more years of advanced training after dental school and use technology such as operating microscopes and 3D imaging to treat the inside of the tooth with precision.',
  },
  {
    q: 'What makes Ocean Endodontics different from a general dentist?',
    a: 'As an endodontic specialty practice, we use an operating microscope for every procedure and cone beam 3D imaging when appropriate. This level of magnification and imaging supports precise, comfortable treatment and is not typically available in a general dental office.',
  },
  {
    q: 'Can I be seen quickly if I am in pain?',
    a: 'Yes. We reserve time each day for urgent visits and do our best to see patients in significant pain the same day whenever possible. Call our office at (415) 741-3636 as early as you can so we can prioritize your care.',
  },
  {
    q: 'Do endodontists only do root canals?',
    a: 'Root canal therapy is the most common treatment, but endodontists also perform retreatment of previous root canals, microsurgery called apicoectomy, cracked tooth management, and emergency care for dental trauma. This specialty training allows us to handle complex cases and preserve natural teeth whenever possible.',
  },
  {
    q: 'How do I know if I should see an endodontist?',
    a: 'If you have severe or lingering tooth pain, sensitivity to hot or cold that does not go away, swelling, or you have been told you may need a root canal, an endodontist can help. Many patients are referred by their general dentist, but you are welcome to contact us directly.',
  },
  {
    q: 'Is there parking?',
    a: 'Yes. There is a free parking lot located through the building breezeway, plus metered and free street parking nearby. The office is also well connected by Muni and public transit.',
  },
  {
    q: 'Where is Ocean Endodontics located?',
    a: 'Our office is at 2645 Ocean Ave, Suite 203, San Francisco, CA 94132, near City College of San Francisco and Lake Merced. We serve nearby neighborhoods including Ingleside, West Portal, Parkmerced, St. Francis Wood, Balboa Terrace, and Daly City.',
  },
  {
    q: 'Will my treatment be painful?',
    a: 'Modern endodontic care is designed to relieve pain, not cause it. We take time to fully numb the area, and many patients tell us the procedure felt easier than they expected. Nitrous oxide and, for appropriate patients, oral conscious sedation are available to help you stay comfortable and relaxed.',
  },
];

export type FeatureBullet = { title: string; body: string };

// Reusable "why choose us" points (verifiable claims only)
export const whyChoose: FeatureBullet[] = [
  {
    title: 'A gentle, patient-first approach',
    body: 'We explain what will happen and why, so you always know what to expect. Feeling informed and comfortable is part of the treatment.',
  },
  {
    title: 'Microscope-guided precision',
    body: 'Every procedure is performed under an operating microscope, with cone beam 3D imaging when appropriate, for accurate diagnosis and efficient treatment.',
  },
  {
    title: 'Time reserved for emergencies',
    body: 'We hold space for urgent visits and coordinate closely with your general dentist so painful problems are seen quickly.',
  },
  {
    title: 'Transparent fees and insurance help',
    body: 'We verify your benefits in advance and review options with you before care begins, so there are no surprises.',
  },
  {
    title: 'Trusted by referring dentists',
    body: 'Consistent communication and complete documentation return patients to their dentist with everything needed for excellent restorative care.',
  },
  {
    title: 'Convenient, easy to reach',
    body: 'A modern Ocean Avenue office with a free parking lot, street parking, and strong transit connections near City College and Lake Merced.',
  },
];
