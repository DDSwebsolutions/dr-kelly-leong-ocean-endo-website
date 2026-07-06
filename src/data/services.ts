/**
 * services.ts — full endodontic service catalog (typed).
 * Content is written for E-E-A-T and local intent, and every claim reflects a
 * board-certified endodontist's real scope of practice. Prose may contain
 * [label](/path) link tokens; RichText renders them and lib/utils strips them
 * before any string feeds JSON-LD or a meta description.
 *
 * heroImage is a KEY resolved to an imported asset in services/[slug].astro.
 */

export type ServiceCategory =
  | 'endodontic'
  | 'surgical'
  | 'diagnostic'
  | 'trauma'
  | 'sedation'
  | 'cosmetic'
  | 'emergency';

export type Service = {
  slug: string;
  title: string;
  navTitle: string;
  category: ServiceCategory;
  icon: string; // key resolved to an inline SVG in ServiceIcon.astro
  heroImage: string; // key resolved to an imported asset
  heroEyebrow: string;
  shortDescription: string; // card + meta
  longDescription: string; // 300-500 words, paragraphs split on blank lines
  benefits: string[];
  process?: { title: string; body: string }[];
  idealCandidate?: string;
  whatToExpect?: string;
  whyChoose?: string;
  aftercare?: string;
  considerations?: string;
  faqs?: { q: string; a: string }[];
  related?: string[]; // slugs
  seoTitle: string;
  seoDescription: string;
  medicalProcedureType: 'Therapeutic' | 'Surgical' | 'Diagnostic' | 'PreventiveCare';
  deliveredInHouse: boolean;
  sameDay?: boolean;
};

export const services: Service[] = [
  {
    slug: 'root-canal-therapy',
    title: 'Root Canal Therapy',
    navTitle: 'Root Canal Therapy',
    category: 'endodontic',
    icon: 'tooth',
    heroImage: 'microscope',
    heroEyebrow: 'Save your natural tooth',
    shortDescription:
      'Save a natural tooth by gently removing inflamed or infected pulp, cleaning and shaping the canals under high magnification, and sealing the space to protect its future.',
    longDescription:
      'A root canal has an outdated reputation. In a modern specialty practice it is a comfortable, predictable way to relieve pain and keep a tooth you would otherwise lose. Inside every tooth is a soft core called the pulp. When decay, a deep filling, a crack, or trauma lets bacteria reach the pulp, it becomes inflamed or infected, and the result is often throbbing pain, lingering sensitivity to hot and cold, or swelling.\n\nRoot canal therapy treats the problem at its source. After you are fully numb, Dr. Leong creates a small opening in the tooth and, working under an operating microscope, removes the damaged pulp, disinfects the narrow canal system, and shapes it so it can be sealed. The tooth is then filled with a biocompatible material and closed with a temporary or permanent restoration. In most cases you will return to your general dentist for a final crown that protects the tooth for the long term.\n\nBecause endodontists focus on this treatment every day and use magnification and [cone beam 3D imaging](/technology) when appropriate, we can find and treat canals a general office may not see, which is one of the biggest factors in a lasting result. Saving the natural tooth keeps your bite, your jawbone, and your smile intact, and it is almost always faster and less costly over time than removing the tooth and replacing it with an implant or bridge.\n\nMost single-visit root canals are completed in about 60 to 90 minutes, and many patients are surprised to find the appointment feels similar to having a filling. If anxiety is a concern, ask us about [nitrous oxide](/services/nitrous-oxide-sedation) or [oral conscious sedation](/services/oral-conscious-sedation-dentistry) to help you relax.',
    benefits: [
      'Relieves the pain caused by inflamed or infected pulp',
      'Preserves your natural tooth, bite, and jawbone',
      'Microscope-guided precision finds and treats hidden canals',
      'Usually completed in a single visit for most teeth',
      'A predictable, well-studied alternative to extraction',
    ],
    process: [
      { title: 'Diagnosis & imaging', body: 'We confirm the source of pain with focused testing and digital or 3D imaging, then explain the findings on screen.' },
      { title: 'Complete numbing', body: 'We take the time to fully anesthetize the tooth, using topical anesthetic first so injections are barely noticeable.' },
      { title: 'Cleaning & shaping', body: 'Under the microscope, the damaged pulp is removed and the canal system is disinfected and shaped.' },
      { title: 'Sealing', body: 'The canals are sealed with a biocompatible material and the tooth is closed with a secure temporary or permanent filling.' },
      { title: 'Restore with your dentist', body: 'You return to your general dentist for a final crown or restoration so the tooth is protected for years to come.' },
    ],
    idealCandidate:
      'You may be a candidate for root canal therapy if you have a persistent toothache, prolonged sensitivity to hot or cold, pain when chewing, a pimple-like bump on the gum, or your dentist has found deep decay or infection near the nerve. A focused exam and imaging confirm whether the pulp is involved.',
    whatToExpect:
      'From the moment you arrive, our goal is a calm, unhurried visit. We review your history, answer questions, and make sure you are numb before we begin. During treatment we tell you what you will feel or hear next, so nothing is a surprise. Afterward you will receive clear written aftercare and a direct line to reach us with any concerns.',
    whyChoose:
      'Endodontics is not a sideline for us, it is all we do. Performing root canal therapy under magnification every day, with 3D imaging when it helps, gives Dr. Leong the ability to treat complex anatomy thoroughly the first time. That focus is why general dentists across the west side of San Francisco refer their patients to Ocean Endodontics.',
    aftercare:
      'Mild tenderness for a few days is normal and usually managed with over-the-counter pain relievers. Chew on the other side until your dentist places the final restoration, and call us if swelling or pain increases rather than improves.',
    considerations:
      'Most dental insurance plans provide benefits toward root canal therapy. We verify your coverage in advance and review the estimate with you before treatment begins, so you can make an informed decision without surprises.',
    faqs: [
      { q: 'Does a root canal hurt?', a: 'The procedure itself is designed to relieve pain. Once the tooth is numb, most patients feel only pressure and vibration, and many describe it as similar to having a filling placed.' },
      { q: 'How long does a root canal take?', a: 'Most single-visit root canals take about 60 to 90 minutes depending on the tooth and the number of canals. More complex cases may be completed in two visits.' },
      { q: 'Do I still need to see my regular dentist afterward?', a: 'Yes. In most cases your general dentist will place a permanent crown or restoration after the root canal to protect the tooth and restore full function.' },
    ],
    related: ['retreatment-root-canal-therapy', 'cracked-tooth-treatment', 'emergency-endodontic-treatment'],
    seoTitle: 'Root Canal Therapy in San Francisco | Ocean Endodontics',
    seoDescription:
      'Gentle, microscope-guided root canal therapy in San Francisco with board-certified endodontist Dr. Kelly Kimiko Leong. Relieve pain and save your natural tooth. Call (415) 741-3636.',
    medicalProcedureType: 'Therapeutic',
    deliveredInHouse: true,
  },

  {
    slug: 'retreatment-root-canal-therapy',
    title: 'Endodontic Retreatment',
    navTitle: 'Root Canal Retreatment',
    category: 'endodontic',
    icon: 'refresh',
    heroImage: 'detail-wide',
    heroEyebrow: 'A second chance to save the tooth',
    shortDescription:
      'When a previously treated tooth develops new symptoms, retreatment reopens, disinfects, and reseals the canals to give the tooth another chance to heal.',
    longDescription:
      'Most root canals last a lifetime, but occasionally a treated tooth does not heal as expected, or becomes painful or infected months or years later. This can happen when a canal is unusually narrow or curved, when a new cavity or a cracked restoration lets bacteria back in, or when hidden anatomy was not fully treated the first time. Retreatment gives the tooth a genuine second chance before extraction is ever considered.\n\nDuring endodontic retreatment, Dr. Leong reopens the tooth and carefully removes the previous filling material from inside the canals. Working under an operating microscope, she inspects the canal system for missed anatomy, additional canals, or the source of persistent infection, cleans and disinfects thoroughly, and reseals the space. When appropriate, [cone beam 3D imaging](/technology) is used beforehand to map the tooth and plan the approach with precision.\n\nRetreatment is often more intricate than an initial root canal because the tooth must first be carefully disassembled without weakening it. This is exactly the kind of complex case that benefits from a specialist. If a tooth cannot be predictably saved through the crown, surgical options such as an [apicoectomy](/services/apicoectomy-endodontic-microsurgery) may be discussed. Our priority is always the most conservative treatment that gives your natural tooth the best long-term outlook.\n\nChoosing retreatment usually means keeping a tooth you already have rather than moving to extraction and an implant or bridge. For many patients that is the more comfortable, more economical path, and it preserves the natural tooth that your bite and bone are built around.',
    benefits: [
      'A conservative alternative to extraction for a failing root canal',
      'Microscope inspection finds missed or unusual canal anatomy',
      'Removes the source of lingering infection or discomfort',
      'Preserves your natural tooth and existing bite',
      'Planned with 3D imaging for predictability',
    ],
    process: [
      { title: 'Review & 3D imaging', body: 'We evaluate the previous treatment and often use cone beam 3D imaging to understand exactly why the tooth is symptomatic.' },
      { title: 'Careful access', body: 'The existing crown or filling is accessed and previous canal material is removed without weakening the tooth.' },
      { title: 'Re-cleaning', body: 'Under magnification, the canals are re-disinfected and any missed anatomy is located and treated.' },
      { title: 'Reseal & restore', body: 'The canals are resealed and the tooth is closed, then restored by your dentist to protect it going forward.' },
    ],
    idealCandidate:
      'Retreatment may be right for you if a tooth that had a root canal is tender, painful, or swollen, if a bump has appeared on the gum, or if your dentist sees signs of infection on an X-ray. We will confirm whether the tooth can be predictably saved before recommending a path.',
    whatToExpect:
      'We start by explaining what likely happened and why, using your images so the plan makes sense. The visit is thorough and unhurried, and comfort options are available. Because these cases are detailed, we give the tooth the time it deserves rather than rushing.',
    whyChoose:
      'Retreatment rewards experience and magnification. Dr. Leong routinely handles teeth with complex or previously missed anatomy, and treats them under the microscope with the patience these cases require. That is the difference a dedicated endodontist makes.',
    aftercare:
      'Expect mild soreness for a few days, managed with over-the-counter pain relievers. Protect the tooth by chewing elsewhere until your dentist places the final restoration, and contact us if symptoms worsen instead of easing.',
    considerations:
      'Retreatment is frequently covered by dental insurance, though benefits vary by plan and history. We verify coverage and review your estimate before any treatment, and we will always be candid if a tooth has a poor long-term outlook.',
    faqs: [
      { q: 'Why did my root canal fail?', a: 'Common reasons include very narrow or curved canals, new decay, a leaking crown or filling, or additional canals that were difficult to detect originally. Retreatment addresses these causes directly.' },
      { q: 'Is retreatment better than an implant?', a: 'When a tooth can be predictably saved, keeping your natural tooth is usually the most conservative option. We will give you an honest assessment so you can weigh retreatment against extraction and replacement.' },
    ],
    related: ['root-canal-therapy', 'apicoectomy-endodontic-microsurgery', 'diagnosis-pain-management'],
    seoTitle: 'Root Canal Retreatment in San Francisco | Ocean Endodontics',
    seoDescription:
      'Endodontic retreatment for a failing or painful root canal in San Francisco. Board-certified endodontist Dr. Kelly Kimiko Leong reopens, disinfects, and reseals to save your tooth.',
    medicalProcedureType: 'Therapeutic',
    deliveredInHouse: true,
  },

  {
    slug: 'apicoectomy-endodontic-microsurgery',
    title: 'Apicoectomy (Endodontic Microsurgery)',
    navTitle: 'Apicoectomy / Microsurgery',
    category: 'surgical',
    icon: 'microscope',
    heroImage: 'operatory-2',
    heroEyebrow: 'Microsurgery to save a tooth',
    shortDescription:
      'When infection persists at the tip of a root, a precise microsurgical procedure removes the source and seals the root end, preserving the tooth.',
    longDescription:
      'Sometimes a tooth that has already had a root canal continues to show signs of infection at the very tip of the root, in the bone. When retreatment through the crown is not the best option, an apicoectomy, also called endodontic microsurgery, treats the problem directly at its source and can save a tooth that might otherwise need to be removed.\n\nThe procedure is more delicate than it sounds. After you are fully numb, Dr. Leong makes a small opening in the gum near the tooth to reach the root tip. Working under an operating microscope, she removes the inflamed tissue and the very end of the root, then places a tiny, biocompatible seal in the root end to prevent bacteria from returning. The gum is closed with fine sutures, and the area heals over the following weeks.\n\nMicrosurgery is exactly where specialty training and high magnification matter most. The structures involved are millimeters in size, and precision determines the outcome. [Cone beam 3D imaging](/technology) is typically used beforehand to map the root anatomy and nearby structures so the procedure is planned to the smallest detail.\n\nAn apicoectomy is a same-day, outpatient procedure, and most patients are comfortable returning to normal activities the next day. For a tooth with a solid crown and restoration already in place, microsurgery can be the most conservative way to resolve a stubborn infection without disturbing the existing restorative work. As always, we will only recommend surgery when it offers your tooth the best predictable outcome.',
    benefits: [
      'Resolves infection at the root tip that persists after a root canal',
      'Preserves an existing crown and restorative work',
      'Performed under an operating microscope for precision',
      'Same-day, outpatient procedure with a straightforward recovery',
      'A tooth-saving alternative to extraction',
    ],
    process: [
      { title: '3D planning', body: 'Cone beam imaging maps the root tip and nearby anatomy so the procedure is planned precisely.' },
      { title: 'Gentle access', body: 'After thorough numbing, a small opening in the gum exposes the root tip.' },
      { title: 'Microsurgery', body: 'Under the microscope, the inflamed tissue and root end are removed and a small seal is placed.' },
      { title: 'Close & heal', body: 'Fine sutures close the site, and the bone heals over the following weeks.' },
    ],
    idealCandidate:
      'An apicoectomy may be recommended when infection or inflammation persists at the root tip after a root canal, when retreatment through the crown is not ideal, or when an existing crown is best left undisturbed. Imaging confirms whether microsurgery is the right approach.',
    whatToExpect:
      'The visit is calm and carefully explained from start to finish. Local anesthesia keeps you comfortable, and the procedure itself is usually shorter than patients expect. You will leave with detailed aftercare and a direct way to reach us.',
    whyChoose:
      'Endodontic microsurgery is a defining skill of the specialty. Dr. Leong performs these procedures under the microscope with the meticulous, checked-and-rechecked approach our patients describe. Precision at this scale is what protects the tooth and the tissues around it.',
    aftercare:
      'Some swelling and mild discomfort for a few days is normal. Use cold compresses as directed, eat soft foods, keep the area clean, and avoid vigorous activity for a day or two. Sutures are typically removed or dissolve within about a week.',
    considerations:
      'Coverage for endodontic surgery varies by plan. We verify your benefits, provide a clear estimate, and make sure you understand the recovery before scheduling.',
    faqs: [
      { q: 'Is an apicoectomy the same as an extraction?', a: 'No. An apicoectomy is a tooth-saving microsurgery that removes only the infected root tip, allowing you to keep the natural tooth. Extraction removes the entire tooth.' },
      { q: 'How long is recovery?', a: 'Most patients return to normal activities the next day. Minor swelling and tenderness for a few days is normal and managed with simple measures and over-the-counter pain relievers.' },
    ],
    related: ['retreatment-root-canal-therapy', 'root-canal-therapy', 'diagnosis-pain-management'],
    seoTitle: 'Apicoectomy & Endodontic Microsurgery in San Francisco | Ocean Endodontics',
    seoDescription:
      'Endodontic microsurgery (apicoectomy) in San Francisco with board-certified endodontist Dr. Kelly Kimiko Leong. Microscope-guided root-tip surgery that saves natural teeth.',
    medicalProcedureType: 'Surgical',
    deliveredInHouse: true,
  },

  {
    slug: 'diagnosis-pain-management',
    title: 'Diagnosis & Pain Management',
    navTitle: 'Diagnosis & Pain Management',
    category: 'diagnostic',
    icon: 'search',
    heroImage: 'detail-instruments',
    heroEyebrow: 'Find the real source of pain',
    shortDescription:
      'Tooth pain is not always where it seems. We pinpoint the true source with careful testing and precise imaging, then guide you to the right relief.',
    longDescription:
      'Dental pain can be confusing. It can radiate from one tooth to another, feel like it is coming from the upper jaw when it starts in the lower, or come and go without a clear pattern. Getting the diagnosis right is the most important step in getting you comfortable, and it is a core strength of an endodontist.\n\nAt Ocean Endodontics, diagnosis is a deliberate process, not a guess. Dr. Leong reviews your history and symptoms, then performs focused tests, such as gentle temperature and pressure testing, to identify which tooth is truly involved and whether the pulp inside it is healthy, inflamed, or infected. Digital X-rays and, when needed, [cone beam 3D imaging](/technology) reveal detail that everyday dental films cannot, including cracks, extra canals, and infection in the surrounding bone.\n\nBecause we specialize in the inside of the tooth, we can often distinguish a problem that needs a [root canal](/services/root-canal-therapy) from one that does not, and we can recognize pain that is coming from a [cracked tooth](/services/cracked-tooth-treatment), a sinus issue, or a bite problem. That clarity spares you from unnecessary treatment and points you toward the care that will actually resolve the pain.\n\nWhen a diagnosis points to treatment we provide, we can often begin the same day. When the answer lies outside endodontics, we will tell you plainly and coordinate with your general dentist or the right specialist. Either way, you leave with an honest explanation of what is happening and a clear plan for relief.',
    benefits: [
      'Identifies the true source of tooth pain, not just the symptom',
      'Focused testing plus advanced imaging for an accurate diagnosis',
      'Avoids unnecessary treatment on the wrong tooth',
      'Clear, honest explanation of findings and options',
      'Coordinated referral when the issue is outside endodontics',
    ],
    idealCandidate:
      'Come see us if you have a toothache you cannot localize, lingering sensitivity to hot or cold, pain when biting, or you have been bounced between providers without answers. Accurate diagnosis is often the difference between ongoing pain and lasting relief.',
    whatToExpect:
      'Expect a thorough conversation and gentle, methodical testing. We show you what we see on your images and explain the reasoning behind the diagnosis in plain language, so the plan makes sense before anything is decided.',
    whyChoose:
      'Endodontists are, in effect, specialists in tooth pain. Dr. Leong combines careful clinical testing with 3D imaging to reach a diagnosis others may miss, which is why both patients and dentists rely on us for difficult cases.',
    considerations:
      'A focused diagnostic exam and any necessary imaging are typically eligible for insurance benefits. We review costs up front and never recommend treatment you do not need.',
    faqs: [
      { q: 'Why does my dentist want me to see an endodontist for a diagnosis?', a: 'Endodontists have advanced training and imaging focused on the inside of the tooth, which makes them well suited to solve pain that is difficult to pin down.' },
      { q: 'What if the pain is not from my tooth?', a: 'If your pain is coming from something other than the tooth pulp, we will tell you honestly and help direct you to the right care rather than treating unnecessarily.' },
    ],
    related: ['root-canal-therapy', 'cracked-tooth-treatment', 'emergency-endodontic-treatment'],
    seoTitle: 'Tooth Pain Diagnosis & Management in San Francisco | Ocean Endodontics',
    seoDescription:
      'Precise diagnosis of hard-to-locate tooth pain in San Francisco with endodontist Dr. Kelly Kimiko Leong. Advanced testing and 3D imaging to find the source and guide relief.',
    medicalProcedureType: 'Diagnostic',
    deliveredInHouse: true,
  },

  {
    slug: 'cracked-tooth-treatment',
    title: 'Cracked Tooth Treatment',
    navTitle: 'Cracked Tooth Treatment',
    category: 'endodontic',
    icon: 'crack',
    heroImage: 'detail-chair',
    heroEyebrow: 'Catch a crack early',
    shortDescription:
      'Cracked and fractured teeth can be tricky to diagnose and painful to live with. We evaluate the crack precisely and plan treatment that protects what remains.',
    longDescription:
      'A cracked tooth can be one of the most frustrating dental problems. The pain may come only when you bite in a certain way or release, or when you eat something cold, and standard X-rays often do not show the crack at all. Left alone, small cracks can deepen and reach the pulp, so an early, accurate assessment really matters.\n\nDr. Leong evaluates cracked and fractured teeth with focused bite testing, magnification under the operating microscope, and, when helpful, [cone beam 3D imaging](/technology) that can reveal detail conventional films miss. The goal is to understand exactly how far the crack extends, because that determines whether the tooth can be saved and how.\n\nTreatment depends on the type and depth of the crack. A crack that has reached the pulp but not split the tooth can often be treated with [root canal therapy](/services/root-canal-therapy) followed by a protective crown from your general dentist, which holds the tooth together and relieves the pain. Craze lines that affect only the outer enamel may need only monitoring. When a crack extends below the bone and the tooth cannot be predictably saved, we will tell you honestly and help you plan the next step with your dentist.\n\nThe most important message about cracked teeth is that time is not on your side. Catching a crack before it propagates gives us the best chance to preserve the tooth. If you have a tooth that hurts when you bite or is sharply sensitive to temperature, an evaluation now can save you a much bigger problem later.',
    benefits: [
      'Accurate diagnosis of cracks that ordinary X-rays miss',
      'Microscope and 3D imaging to judge how far a crack extends',
      'Treatment that relieves pain and protects remaining structure',
      'Honest guidance on which teeth can and cannot be saved',
      'Early intervention that can prevent tooth loss',
    ],
    process: [
      { title: 'Bite & symptom testing', body: 'We reproduce and localize the pain to understand how the tooth is cracking.' },
      { title: 'Magnified evaluation', body: 'Under the microscope, and with 3D imaging when needed, we assess the crack’s depth and direction.' },
      { title: 'Tailored plan', body: 'Depending on the crack, we may recommend root canal therapy and a crown, monitoring, or an honest referral.' },
    ],
    idealCandidate:
      'See us if you have sharp pain when biting or releasing, sensitivity to temperature that lingers, or a tooth that simply does not feel right. Cracked teeth are easier to save the sooner they are evaluated.',
    whatToExpect:
      'We take the time to reproduce your symptoms so we can localize the crack, then show you what we find and explain the realistic options. You will leave understanding the trade-offs, not just a single recommendation.',
    whyChoose:
      'Cracked teeth demand patience, magnification, and experience. Dr. Leong’s microscope-based approach and detailed imaging make it possible to diagnose subtle fractures accurately and act before a treatable crack becomes an untreatable one.',
    considerations:
      'Because outcomes for cracked teeth vary with the depth of the crack, we give you a candid prognosis before treatment. Diagnostic and treatment costs are reviewed with your insurance in advance.',
    faqs: [
      { q: 'Why can’t my dentist see the crack on an X-ray?', a: 'Many cracks run in a direction that does not show up on standard films. Bite testing, magnification, and 3D imaging are often needed to find and assess them.' },
      { q: 'Can every cracked tooth be saved?', a: 'Not always. Shallow cracks are often very treatable, while cracks that extend deep below the gum and bone may not be. We will always give you an honest assessment.' },
    ],
    related: ['root-canal-therapy', 'diagnosis-pain-management', 'dental-trauma-management'],
    seoTitle: 'Cracked Tooth Treatment in San Francisco | Ocean Endodontics',
    seoDescription:
      'Expert diagnosis and treatment of cracked and fractured teeth in San Francisco with endodontist Dr. Kelly Kimiko Leong. Microscope and 3D imaging to save your tooth. Call (415) 741-3636.',
    medicalProcedureType: 'Therapeutic',
    deliveredInHouse: true,
  },

  {
    slug: 'emergency-endodontic-treatment',
    title: 'Emergency Endodontic Treatment',
    navTitle: 'Emergency Endodontics',
    category: 'emergency',
    icon: 'bolt',
    heroImage: 'operatory-2',
    heroEyebrow: 'Relief when you need it',
    shortDescription:
      'Severe tooth pain and swelling should not wait. We reserve time each day for urgent visits and aim to see patients in significant pain the same day whenever possible.',
    longDescription:
      'A dental emergency has a way of taking over your whole day. Severe, throbbing tooth pain, swelling, or a tooth knocked loose or out is frightening, and it is exhausting. Ocean Endodontics reserves time in the schedule for urgent cases so that patients in real pain can be seen quickly, and we coordinate closely with your general dentist to get you comfortable fast.\n\nWhen you call, tell our team you have an emergency. We will triage your situation over the phone, get you in as soon as we can on a business day, and give you guidance for the hours in between. On arrival, Dr. Leong quickly identifies the source of the problem with focused testing and imaging, because the right relief depends on the right diagnosis. Depending on what we find, treatment may involve starting [root canal therapy](/services/root-canal-therapy), draining an infection, stabilizing a [traumatized tooth](/services/dental-trauma-management), or managing a [cracked tooth](/services/cracked-tooth-treatment).\n\nComfort comes first. We fully numb the area, and options such as [nitrous oxide](/services/nitrous-oxide-sedation) are available to help you relax during urgent care. Our aim is to relieve the acute pain at the visit and set a clear plan to finish treatment and protect the tooth.\n\nPlease note our regular hours: we are open Monday, Tuesday, Wednesday, and Friday, and closed Thursday, Saturday, and Sunday. Call us as early as possible so we can prioritize your care. If you are having a true medical emergency, such as difficulty breathing or swallowing, uncontrolled bleeding, or rapidly spreading facial swelling, call 911 or go to your nearest emergency room right away.',
    benefits: [
      'Time reserved each business day for urgent visits',
      'Same-day care for significant pain whenever possible',
      'Fast, accurate diagnosis of the source of the emergency',
      'Comfort-focused treatment with sedation options available',
      'Close coordination with your general dentist',
    ],
    idealCandidate:
      'Call us for severe or worsening tooth pain, swelling around a tooth or in the face, a tooth that has been knocked loose or out, or pain that keeps you from sleeping, eating, or concentrating. The sooner we see you, the sooner we can help.',
    whatToExpect:
      'We move quickly but never carelessly. After triaging your call, we identify the source of the problem, get you numb and comfortable, and address the acute issue at the visit, then explain the plan to complete care.',
    whyChoose:
      'In an emergency you want a specialist who can both diagnose and treat the problem on the spot. Dr. Leong’s focus on endodontics means fast, precise relief, and our patients consistently describe even urgent visits as calm and reassuring.',
    aftercare:
      'Follow the written instructions we provide, take any recommended pain relievers as directed, and keep the area clean. Call us if pain or swelling increases after the visit rather than easing.',
    considerations:
      'We will discuss emergency and treatment fees with you and check your insurance benefits as part of the visit. Relieving your pain safely is always the first priority.',
    faqs: [
      { q: 'Can you see me the same day?', a: 'We reserve time each business day for emergencies and do our best to see patients in significant pain the same day. Call (415) 741-3636 as early as you can so we can prioritize you.' },
      { q: 'What should I do for a knocked-out tooth?', a: 'Handle the tooth by the crown, not the root, gently rinse it, and if possible place it back in the socket or keep it in milk. Then call us immediately. Time is critical for saving the tooth.' },
      { q: 'What counts as a 911 emergency?', a: 'Difficulty breathing or swallowing, uncontrolled bleeding, or rapidly spreading facial swelling are medical emergencies. Call 911 or go to the nearest emergency room right away.' },
    ],
    related: ['dental-trauma-management', 'root-canal-therapy', 'diagnosis-pain-management'],
    seoTitle: 'Emergency Endodontist in San Francisco | Same-Day Tooth Pain Relief',
    seoDescription:
      'Severe tooth pain or swelling in San Francisco? Ocean Endodontics reserves same-day time for emergencies with endodontist Dr. Kelly Kimiko Leong. Call (415) 741-3636.',
    medicalProcedureType: 'Therapeutic',
    deliveredInHouse: true,
    sameDay: true,
  },

  {
    slug: 'dental-trauma-management',
    title: 'Dental Trauma Management',
    navTitle: 'Dental Trauma Management',
    category: 'trauma',
    icon: 'shield',
    heroImage: 'microscope',
    heroEyebrow: 'Urgent care for injured teeth',
    shortDescription:
      'A chipped, displaced, or knocked-out tooth needs prompt, expert care. We provide urgent evaluation and evidence-based treatment to protect the tooth and its future.',
    longDescription:
      'Accidents happen in an instant, on the sidewalk, on the court, in the car, and a blow to the mouth can chip, loosen, push, or completely knock out a tooth. How quickly and how well an injured tooth is treated has a major effect on whether it survives, which is why endodontists are trained specifically in the management of dental trauma.\n\nIf a tooth has been knocked out, time matters enormously. Handle the tooth by the crown, not the root, gently rinse away debris, and if you can, place it back into the socket and bite on a clean cloth to hold it. If it cannot be replaced, keep it moist in milk or in your cheek and call us immediately. For chipped, loosened, or displaced teeth, prompt evaluation still makes a real difference.\n\nAt the office, Dr. Leong assesses the injury with focused testing and imaging to determine which teeth are affected and whether the pulp or root is involved. Treatment may include repositioning and stabilizing the tooth, monitoring the nerve over time, or performing [root canal therapy](/services/root-canal-therapy) when the pulp has been damaged. Because injuries to the developing roots of younger patients require special care, we tailor the approach to the individual.\n\nThroughout, we coordinate closely with your general dentist so that function and appearance are fully restored once the tooth has stabilized. Dental trauma can be alarming, but with prompt, specialized care, many injured teeth can be saved and go on to serve you for years.',
    benefits: [
      'Prompt, specialist evaluation of injured teeth',
      'Evidence-based care for knocked-out and displaced teeth',
      'Stabilization and nerve monitoring to preserve the tooth',
      'Tailored care for adults and younger patients',
      'Coordinated restoration with your general dentist',
    ],
    process: [
      { title: 'Rapid assessment', body: 'We evaluate the injury with focused testing and imaging to see which teeth and tissues are affected.' },
      { title: 'Stabilize', body: 'Displaced or loosened teeth are repositioned and stabilized to support healing.' },
      { title: 'Protect the nerve', body: 'We monitor the pulp over time and perform root canal therapy only if and when it is needed.' },
      { title: 'Restore together', body: 'We coordinate with your dentist to restore full function and appearance once the tooth is stable.' },
    ],
    idealCandidate:
      'Seek care right away for a knocked-out, loosened, pushed-out, or chipped tooth, or any blow to the mouth that causes pain or bleeding. Prompt treatment gives an injured tooth its best chance.',
    whatToExpect:
      'We prioritize trauma calls and move quickly to evaluate and stabilize the injury. We explain what happened, what we can do now, and what follow-up will look like, and we coordinate with your dentist throughout.',
    whyChoose:
      'Managing dental trauma is part of an endodontist’s core training. Dr. Leong brings that expertise, plus advanced imaging and a calm, reassuring manner, to some of the most stressful moments a patient can face.',
    aftercare:
      'Eat soft foods, keep the area clean, and attend all follow-up visits, since injured teeth need monitoring over weeks to months. Call us promptly if pain, swelling, or discoloration develops.',
    considerations:
      'Trauma care may be urgent and staged over time. We keep you informed about each step and review costs and insurance as care progresses.',
    faqs: [
      { q: 'My tooth was knocked out. What do I do right now?', a: 'Pick it up by the crown, not the root, gently rinse it, and if possible place it back in the socket. If you cannot, keep it in milk or your cheek and call us immediately. Minutes matter.' },
      { q: 'Can a knocked-out tooth really be saved?', a: 'Often, yes, especially when it is reimplanted quickly and kept moist. The sooner you are seen, the better the outlook for the tooth.' },
    ],
    related: ['emergency-endodontic-treatment', 'root-canal-therapy', 'cracked-tooth-treatment'],
    seoTitle: 'Dental Trauma & Knocked-Out Tooth Care in San Francisco | Ocean Endodontics',
    seoDescription:
      'Urgent, expert care for chipped, displaced, and knocked-out teeth in San Francisco with endodontist Dr. Kelly Kimiko Leong. Fast evaluation to save injured teeth. Call (415) 741-3636.',
    medicalProcedureType: 'Therapeutic',
    deliveredInHouse: true,
    sameDay: true,
  },

  {
    slug: 'nitrous-oxide-sedation',
    title: 'Nitrous Oxide Sedation',
    navTitle: 'Nitrous Oxide Sedation',
    category: 'sedation',
    icon: 'leaf',
    heroImage: 'operatory-1',
    heroEyebrow: 'Relax during your visit',
    shortDescription:
      'Safe, effective nitrous oxide, or laughing gas, helps ease dental anxiety so your treatment feels calm and stress-free, with effects that wear off quickly.',
    longDescription:
      'For many people, the hardest part of dental care is nervousness, not the treatment itself. Nitrous oxide, commonly known as laughing gas, is a safe and time-tested way to help you feel calm and comfortable during your visit. It is one of the gentlest forms of sedation available, and its effects wear off quickly once the gas is stopped.\n\nDuring treatment you breathe a carefully controlled mix of nitrous oxide and oxygen through a small, comfortable mask over your nose. Within minutes you feel relaxed and a little lighter, while remaining fully awake and able to respond to Dr. Leong. The level is adjusted to keep you comfortable throughout, and at the end of the appointment you breathe pure oxygen so the effects clear within a few minutes.\n\nBecause it leaves your system so quickly, nitrous oxide is convenient for busy schedules. In most cases you can drive yourself home and return to your normal day, unlike deeper forms of sedation. It pairs well with [root canal therapy](/services/root-canal-therapy), [retreatment](/services/retreatment-root-canal-therapy), and [emergency visits](/services/emergency-endodontic-treatment), and it is especially helpful for patients who feel anxious in the dental chair.\n\nNitrous oxide is not right for everyone, so we review your health history and discuss whether it is a good fit. For patients who need a deeper level of relaxation, we also offer [oral conscious sedation](/services/oral-conscious-sedation-dentistry). Please note that we do not provide IV sedation or general anesthesia. Whatever your comfort needs, we will find an approach that helps you get the care you deserve.',
    benefits: [
      'Eases dental anxiety so you can relax during treatment',
      'You stay awake and able to respond throughout',
      'Effects wear off within minutes after the mask is removed',
      'Usually no need for a driver, so it fits a busy day',
      'A gentle option that pairs well with most procedures',
    ],
    idealCandidate:
      'Nitrous oxide is a good fit for patients who feel nervous about dental care, have a sensitive gag reflex, or simply want to feel more at ease. We confirm suitability by reviewing your health history first.',
    whatToExpect:
      'We fit a small mask over your nose and adjust the level so you feel comfortably relaxed while staying awake. At the end, a few minutes of oxygen clears the effect, and most patients feel back to normal quickly.',
    considerations:
      'Nitrous oxide is not recommended for everyone, including some patients with certain respiratory conditions or during pregnancy. Share your full health history so we can recommend the safest comfort option for you. We do not offer IV sedation or general anesthesia.',
    faqs: [
      { q: 'Will I be asleep?', a: 'No. Nitrous oxide relaxes you while you remain awake and able to respond. It is a light form of sedation, not general anesthesia.' },
      { q: 'Can I drive myself home?', a: 'In most cases, yes. Because the effects clear within minutes of breathing oxygen at the end of your visit, most patients can drive themselves home. We will confirm this with you.' },
    ],
    related: ['oral-conscious-sedation-dentistry', 'root-canal-therapy', 'emergency-endodontic-treatment'],
    seoTitle: 'Nitrous Oxide (Laughing Gas) Sedation in San Francisco | Ocean Endodontics',
    seoDescription:
      'Ease dental anxiety with safe nitrous oxide sedation at Ocean Endodontics in San Francisco. Stay relaxed and awake during treatment with Dr. Kelly Kimiko Leong. Call (415) 741-3636.',
    medicalProcedureType: 'Therapeutic',
    deliveredInHouse: true,
  },

  {
    slug: 'oral-conscious-sedation-dentistry',
    title: 'Oral Conscious Sedation',
    navTitle: 'Oral Conscious Sedation',
    category: 'sedation',
    icon: 'moon',
    heroImage: 'welcome-hall',
    heroEyebrow: 'Deeper comfort for anxious visits',
    shortDescription:
      'For appropriate patients, gentle oral sedation offers a deeper level of relaxation during treatment. We review your health history to confirm it is a safe fit.',
    longDescription:
      'Some patients feel more than ordinary nervousness about dental care, and for them a light mask of nitrous oxide may not be enough. Oral conscious sedation offers a deeper, yet still gentle, level of relaxation that can make treatment feel effortless, without the complexity of IV sedation or general anesthesia.\n\nWith oral conscious sedation, you take a prescribed medication before your appointment, as directed by Dr. Leong. By the time treatment begins you feel deeply relaxed and drowsy, though you remain conscious and able to respond. Many patients recall very little of the visit afterward, which is a relief for those who have avoided dental care because of anxiety or difficult past experiences.\n\nBecause the medication takes time to wear off, oral sedation requires a bit of planning. You will need a responsible adult to drive you to and from the appointment, and you should plan to rest for the remainder of the day. We provide clear instructions beforehand and monitor you closely throughout the visit for your safety and comfort.\n\nOral conscious sedation is not appropriate for everyone, so a careful review of your health history and current medications is essential. For lighter needs, [nitrous oxide](/services/nitrous-oxide-sedation) may be the better choice, and it can be discussed at your visit. Please note that we do not provide IV sedation or general anesthesia in our office. Our goal is simple: to remove anxiety as a barrier so you can get the endodontic care you need in comfort.',
    benefits: [
      'A deeper level of relaxation for high dental anxiety',
      'You remain conscious and responsive throughout',
      'Many patients recall little of the procedure',
      'Helps patients who have long avoided dental care',
      'Carefully screened and monitored for safety',
    ],
    idealCandidate:
      'Oral conscious sedation may suit patients with significant dental anxiety, a strong gag reflex, difficulty getting numb, or a history of stressful dental visits. Suitability depends on your health history and medications, which we review carefully.',
    whatToExpect:
      'You take a prescribed medication before arriving and feel deeply relaxed during treatment while remaining responsive. Because it takes time to wear off, you will need a driver and a restful day afterward. We monitor you closely the entire visit.',
    considerations:
      'Oral conscious sedation requires a responsible adult to drive you to and from your appointment and is not appropriate for everyone. A full review of your health history and medications is required. We do not offer IV sedation or general anesthesia.',
    faqs: [
      { q: 'Will I be unconscious?', a: 'No. Oral conscious sedation relaxes you deeply while you remain conscious and able to respond. It is not general anesthesia.' },
      { q: 'Do I need someone to drive me?', a: 'Yes. Because the medication takes time to wear off, you will need a responsible adult to drive you to and from the appointment and should plan to rest for the day.' },
    ],
    related: ['nitrous-oxide-sedation', 'root-canal-therapy', 'apicoectomy-endodontic-microsurgery'],
    seoTitle: 'Oral Conscious Sedation Dentistry in San Francisco | Ocean Endodontics',
    seoDescription:
      'Gentle oral conscious sedation for anxious patients at Ocean Endodontics in San Francisco. Dr. Kelly Kimiko Leong reviews your health history to keep sedation safe and comfortable.',
    medicalProcedureType: 'Therapeutic',
    deliveredInHouse: true,
  },

  {
    slug: 'internal-bleaching',
    title: 'Internal Bleaching',
    navTitle: 'Internal Bleaching',
    category: 'cosmetic',
    icon: 'sparkle',
    heroImage: 'detail-orchid',
    heroEyebrow: 'Brighten a darkened tooth',
    shortDescription:
      'A single tooth that darkens after a root canal or injury can be lightened from the inside, restoring a natural, even smile while preserving tooth structure.',
    longDescription:
      'When a tooth darkens after a root canal or an injury, it can stand out in an otherwise bright smile. The discoloration comes from within the tooth, so surface whitening strips and gels, which work on the outside of enamel, usually cannot fix it. Internal bleaching solves the problem where it starts, inside the tooth itself.\n\nBecause a tooth treated with a root canal no longer has living pulp, Dr. Leong can place a safe whitening agent inside the tooth, in the space already created during the root canal, and seal it temporarily. Over a short period the agent lightens the tooth from the inside out, bringing its shade back into harmony with the neighboring teeth. The treatment is conservative and preserves your natural tooth structure, with no need for a crown or veneer in many cases.\n\nInternal bleaching is often completed in one or a few short visits, depending on how much lightening is needed, and it is comfortable, since the tooth no longer has a nerve. It is a wonderful finishing touch after [root canal therapy](/services/root-canal-therapy) on a front tooth, restoring not just health but appearance and confidence.\n\nThis treatment is specifically for teeth that have already had a root canal or lost their pulp. If you have general discoloration across many teeth, external whitening through your general dentist is the better route, and we are happy to point you in the right direction. For a single dark tooth, though, internal bleaching is often the most natural-looking and tooth-preserving solution available.',
    benefits: [
      'Lightens a single darkened tooth from the inside',
      'Addresses discoloration that surface whitening cannot',
      'Conservative, preserving natural tooth structure',
      'Often completed in one or a few short visits',
      'Comfortable, since the treated tooth has no nerve',
    ],
    idealCandidate:
      'Internal bleaching is ideal for a single tooth that has darkened after a root canal or trauma. It is not intended for whitening many teeth at once, which is better handled with external whitening through your dentist.',
    whatToExpect:
      'We place a safe whitening agent inside the previously treated tooth and seal it temporarily, then reassess the shade. The process is comfortable and usually completed in one or a few brief visits.',
    considerations:
      'Because it addresses a single non-vital tooth, internal bleaching is generally considered cosmetic and may not be covered by insurance. We will review any costs with you in advance. Individual results vary with the cause and degree of discoloration.',
    faqs: [
      { q: 'Why won’t whitening strips fix my dark tooth?', a: 'Strips and gels whiten the outer enamel, but a tooth that darkens after a root canal is discolored from the inside. Internal bleaching treats the discoloration at its source.' },
      { q: 'Is internal bleaching safe?', a: 'Yes. It uses a controlled whitening agent placed inside a tooth that no longer has a nerve, making it a conservative, comfortable way to restore a natural shade.' },
    ],
    related: ['root-canal-therapy', 'retreatment-root-canal-therapy', 'diagnosis-pain-management'],
    seoTitle: 'Internal Bleaching for a Dark Tooth in San Francisco | Ocean Endodontics',
    seoDescription:
      'Whiten a single darkened tooth after a root canal with internal bleaching at Ocean Endodontics in San Francisco. Conservative, natural-looking results with Dr. Kelly Kimiko Leong.',
    medicalProcedureType: 'Therapeutic',
    deliveredInHouse: true,
  },

  {
    slug: 'botox-for-bruxism',
    title: 'Botox for Bruxism',
    navTitle: 'Botox for Bruxism',
    category: 'endodontic',
    icon: 'wave',
    heroImage: 'detail-tools',
    heroEyebrow: 'Relief for a clenching jaw',
    shortDescription:
      'For patients who grind or clench, therapeutic Botox can relax overactive jaw muscles, easing jaw pain and helping protect the teeth, in a quick in-office treatment.',
    longDescription:
      'Chronic grinding and clenching, known as bruxism, puts enormous force on your teeth and jaw muscles. Over time it can lead to worn or cracked teeth, sore jaw muscles, tension headaches, and disrupted sleep. For appropriate patients, therapeutic Botox offers a targeted way to calm the overactive muscles that drive this cycle.\n\nUsed therapeutically for bruxism, small amounts of Botox are placed into the large chewing muscles, most often the masseters at the angle of the jaw. The medication gently reduces the intensity of these muscles’ contractions, so you clench and grind with less force. The result for many patients is less jaw soreness and fewer tension headaches, and a meaningful reduction in the destructive forces that crack and wear teeth, which protects both natural teeth and dental work.\n\nThe treatment itself is quick and performed right in our office. After identifying the correct muscles, Dr. Leong administers a few small injections, a process that takes only minutes. There is no downtime, and most patients return to their normal activities immediately. The effect develops over the following days and typically lasts a few months, at which point the treatment can be repeated to maintain relief.\n\nIt is important to understand that this is a therapeutic treatment aimed at bruxism and jaw muscle overactivity, not a cosmetic wrinkle service. Botox for bruxism often works best as part of a broader plan, which may include a night guard from your general dentist and, when tooth damage has already occurred, endodontic care such as [cracked tooth treatment](/services/cracked-tooth-treatment). We will review your history and goals to determine whether it is an appropriate option for you.',
    benefits: [
      'Relaxes overactive jaw muscles that grind and clench',
      'Can reduce jaw soreness and tension headaches',
      'Helps protect teeth and dental work from grinding forces',
      'Quick in-office treatment with no downtime',
      'Complements a night guard and other protective care',
    ],
    process: [
      { title: 'Evaluation', body: 'We review your symptoms, grinding history, and goals to confirm therapeutic Botox is appropriate.' },
      { title: 'Targeted injections', body: 'A few small injections are placed in the chewing muscles in a matter of minutes.' },
      { title: 'Gradual relief', body: 'The effect develops over several days and typically lasts a few months before it can be repeated.' },
    ],
    idealCandidate:
      'This treatment may help patients with diagnosed or evident bruxism, jaw muscle soreness, or clenching-related tension headaches, particularly alongside a protective night guard. It is a therapeutic, not cosmetic, service, and we confirm suitability first.',
    whatToExpect:
      'After identifying the right muscles, we administer a few quick injections. There is no downtime, and you can return to your day immediately. Relief develops over the following days.',
    considerations:
      'Therapeutic Botox for bruxism is typically not covered by dental insurance, and results and duration vary by individual. We review candidacy, costs, and expectations with you before treatment. This is a therapeutic treatment for jaw muscle overactivity, not a cosmetic wrinkle service.',
    faqs: [
      { q: 'Is this a cosmetic treatment?', a: 'No. Here, Botox is used therapeutically to relax the jaw muscles involved in grinding and clenching, with the goal of easing jaw pain and helping protect the teeth.' },
      { q: 'How long does it last?', a: 'The effect typically develops over several days and lasts a few months. Treatment can be repeated to maintain relief as directed.' },
    ],
    related: ['cracked-tooth-treatment', 'diagnosis-pain-management', 'root-canal-therapy'],
    seoTitle: 'Botox for Bruxism & Jaw Clenching in San Francisco | Ocean Endodontics',
    seoDescription:
      'Therapeutic Botox for bruxism and jaw clenching at Ocean Endodontics in San Francisco. Relax overactive jaw muscles and help protect your teeth with Dr. Kelly Kimiko Leong.',
    medicalProcedureType: 'Therapeutic',
    deliveredInHouse: true,
  },
];

export const serviceCategoryLabels: Record<ServiceCategory, string> = {
  endodontic: 'Endodontic Care',
  surgical: 'Endodontic Surgery',
  diagnostic: 'Diagnosis',
  trauma: 'Trauma Care',
  sedation: 'Comfort & Sedation',
  cosmetic: 'Cosmetic',
  emergency: 'Emergency',
};

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const serviceSlugs = services.map((s) => s.slug);
