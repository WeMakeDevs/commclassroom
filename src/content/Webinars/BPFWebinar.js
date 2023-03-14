import Poster from '@/assets/webinars/ebf.jpg';

import {
  IndividualWebinarPageFAQ,
  IndividualWebinarPageHeader,
} from './IndividualWebinarPageContent';

const BPFWebinar = {
  header: IndividualWebinarPageHeader,
  name: 'Groundcover demo - cloud-native observability with eBPF',
  description:
    'A walkthrough of groundcover,  a modern approach to a Kubernetes-native APM',
  poster: Poster,
  takeaways: [
    'What is eBPF?',
    'How it can be used for practical application monitoring',
    'What is groundcover and how to get started?',
  ],
  time: '17 March 2023 02:00:00 GMT',
  speakers: [
    {
      name: 'Yechezkel Rabinovich',
      description: 'Co-Founder and CTO at groundcover',
      linkedin: 'yechezkel-rabinovich-946794b',
      twitter: 'yechezkel__',
      img: 'https://pbs.twimg.com/profile_images/1564199427002228737/rxDmaeVF_400x400.jpg',
    },
    {
      name: 'Shahar Azulay',
      description: 'Co-Founder and CEO at groundcover',
      linkedin: 'shahar-azulay-54156bb4',
      twitter: 'shahar__azulay',
      img: 'https://pbs.twimg.com/profile_images/1558796013548314624/tFEl5CDr_400x400.jpg',
    },
  ],
  register:
    'https://bed11154.sibforms.com/serve/MUIEALEWzHiQOF7b_I2j03JiPvaj4J5bGw4Lt5ogjtascL4kDoWTOO-xziThbHNsliTsQRUQK5q_ayoIRl0YtCH3hLcgm81r6X8l9y9jaT5kkQfpPYD9m2iHZQWRFAUH4MnDqGwkwbJOVah3sSAc-kDUHBDI_G2_Qb7FRRvfq_qdOJhcZMfn4B2WYV6XunTJIuD0X8Asjw5mywC2',
  faq: IndividualWebinarPageFAQ,
};

export default BPFWebinar;
