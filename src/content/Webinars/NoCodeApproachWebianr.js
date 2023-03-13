import Poster from '@/assets/webinar/no-code.jpg';

import {
  IndividualWebinarPageFAQ,
  IndividualWebinarPageHeader,
} from './IndividualWebinarPageContent';

const NoCodeApproachWebianr = {
  header: IndividualWebinarPageHeader,
  name: 'The no-code approach to internal developer portals',
  description:
    "Internal developer portals are the core tool in the platform engineering world. We'll talk about data models for internal developer portals, the software catalog, self-service actions and how developer portals use scorecards. We'll then cover advanced use cases, such as using the portal for CI/CD and more.",
  poster: Poster,
  takeaways: [
    'Core elements of the internal developer portals.',
    'How to set them?',
    'How they fit within platform engineering?',
  ],
  time: '19 March 2023 02:00:00 GMT',
  speakers: [
    {
      name: 'Yechezkel Rabinovich',
      description: 'Co-Founder and CTO at groundcover',
      linkedin: 'zohar-einy-b6219612a',
      twitter: 'ZoharEiny',
      img: 'https://pbs.twimg.com/profile_images/1583140212569505795/4fPTB6oV_400x400.jpg',
    },
  ],
  register: 'https://wemakedevs-newsletter.vercel.app/',
  faq: IndividualWebinarPageFAQ,
};

export default NoCodeApproachWebianr;
