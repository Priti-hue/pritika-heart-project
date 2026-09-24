import headshot from "../assets/pritika-headshot.jpg.asset.json";
import tree from "../assets/giant-tree.jpeg.asset.json";
import vineyard from "../assets/travel-vineyard.jpeg.asset.json";
import city from "../assets/travel-city.jpeg.asset.json";
import monument from "../assets/travel-monument.jpeg.asset.json";
import composition from "../assets/original-composition.mp4.asset.json";
import compositionPoster from "../assets/composition-poster.jpg.asset.json";
import resume from "../assets/Pritika-Khatri-Resume.pdf.asset.json";
import socialPreview from "../assets/pritika-khatri-social-preview.jpg.asset.json";
import poemRecitation from "../assets/poem-khursani.mp3.asset.json";

export const portfolio = {
  name: "Pritika Khatri",
  descriptor: "Public health leader · Doctoral researcher · Poet",
  statement: "Public health, with people at the center.",
  intro: "I work across public health leadership, research, and community partnerships to improve access to care. My doctoral work at UC Berkeley explores chatbots, adolescent health, and the trust that makes sensitive conversations possible.",
  context: "Experience across Nepal, Nigeria, India, and the United States.",
  email: "Pritika.khatri@berkeley.edu",
  linkedin: "https://www.linkedin.com/in/khatrip/",
  headshot: headshot.url,
  resume: resume.url,
  socialPreview: socialPreview.url,
  about: "I’m a public health leader from Dolakha, Nepal, with 16 years of experience across government, nonprofit, healthcare, and private-sector settings. My work spans adolescent and maternal health, mental health, health systems, and clinical research. Alongside this work, I write and recite poetry, compose music, and make time for travel and adventure.",
  education: [
    ["Doctor of Public Health", "University of California, Berkeley", "Ongoing"],
    ["Master of Public Health", "Institute of Medicine, Nepal", ""],
    ["Bachelor of Public Health", "Institute of Medicine, Nepal", ""],
    ["Diploma in Nursing", "Institute of Medicine, Nepal", ""],
  ],
  languages: ["Nepali", "English", "Hindi", "Urdu"],
  work: [
    {
      organization: "Health Foundation Nepal",
      role: "Director of Development and Executive Board Member",
      dates: "September 2024–Present",
      description: "Provides strategic leadership across maternal health, community mental health, partnerships, and disaster response in underserved regions of Nepal.",
      evidence: ["4,077 women reached through maternal health programs", "5,039 follow-ups facilitated by those programs", "School-based psychosocial programs in 20+ schools"],
    },
    {
      organization: "Health Care Clinic, Ogane-uge, Nigeria",
      role: "Executive Director",
      dates: "December 2016–Present",
      description: "Leads health programs serving 12 communities across malaria, HIV, family planning, maternal and child health, and safe motherhood.",
      evidence: ["12 communities served", "60,000+ patients: reported reach of services under her management"],
    },
    {
      organization: "World Health Organization — South-East Asia Research Fellowship",
      role: "Research Fellow",
      dates: "October 2019–December 2021",
      description: "Past fellowship focused on adolescent-friendly health services, social determinants, and intersectionality. Implemented by the Public Health Foundation of India and United Nations University Malaysia.",
      evidence: ["Gender and intersectionality training resources developed and evaluated", "500+ researchers reached by those resources"],
    },
  ],
  earlier: [
    { role: "Clinical Trial Director", organization: "Sarfez Pharmaceutical Inc.", dates: "May 2023–August 2024", detail: "Operational planning for a multisite Phase 3 cardiovascular trial; managed a database of 340 clinical sites and reduced projected costs by 20%." },
    { role: "Liaison and Quality Assurance Officer", organization: "Save the Children International / Global Fund", dates: "January–July 2019", detail: "Supported Nepal’s National Tuberculosis Prevalence Survey; supervised a 50-member team and achieved 85%+ participation in supervised clusters." },
    { role: "Program Officer", organization: "Centre for Public Health Development", dates: "July 2015–April 2016", detail: "Led UNICEF-funded post-earthquake maternal support for 300 women across eight temporary shelters." },
    { role: "Program Coordinator", organization: "Partnership for Transformation, Nepal", dates: "April 2010–May 2015", detail: "Coordinated adolescent reproductive health education." },
  ],
  researchQuestions: [
    ["Access", "How might chatbots help adolescents access SRH information?"],
    ["Trust", "How comfortable do adolescents feel discussing sensitive SRH topics with a chatbot?"],
    ["Context", "What considerations matter for using these tools in low- and middle-income countries?"],
  ],
  writing: [
    { title: "Adolescent Friendly Health Services in Nepal and Intersectionality: A Scoping Review", authors: "Pritika Khatri and Srinidhi V.", label: "Submitted to BMC Public Health" },
    { title: "Prevalence of Depressive Symptoms and its associated factors among medical students of Kathmandu Valley", authors: "Pritika Khatri and coauthors", label: "Submitted to PLOS Global Public Health" },
    { title: "Covid-19 Induced Gender Gaps: Past Lesson, Current State and Future Plans", authors: "Pritika Khatri", label: "Op-ed" },
  ],
  moreWriting: [
    "Mental stress and the effect of mindful breathing package on perception and practice intention among school adolescents of Budhanilkantha municipality — Submitted to American Journal of Public Health",
    "A Study on the dietary intake pattern of nurses working in COVID and non-COVID hospitals in Nepal — Submitted to Nepal Health Research Council",
    "Housing Conditions, Self-Reported health status and Nutritional Status of 6–59 months Children in Bharatpur Metropolitan City, Nepal — Submitted to PLOS Global Public Health",
  ],
  poetry: {
    title: "Khursani",
    language: "Nepali",
    src: poemRecitation.url,
    performer: "Recited by Pritika Khatri",
  },
  composition: { src: composition.url, poster: compositionPoster.url },
  gallery: [
    { src: tree.url, alt: "Pritika standing at the base of an immense sequoia tree" },
    { src: monument.url, alt: "Pritika outdoors in front of the Statue of Liberty" },
    { src: vineyard.url, alt: "Pritika standing by a wine-growing region sign with vineyards behind her" },
    { src: city.url, alt: "Pritika at the I Love NYC installation at night" },
  ],
} as const;
