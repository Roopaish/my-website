import { ServiceItemType } from '@/components/ServiceItem';
import { WorkListItemType } from '@/components/WorkListItems';

export const workData: WorkListItemType[] = [
  {
    title: 'Frontend Developer',
    href: '',
    date: 'Nov 2021 - Dec 2021 · 2 mos',
    type: 'Remote',
    timing: 'Part time',
    company: 'padhao',
    image: '/images/padhao.png',
  },
  {
    title: 'Mobile Application Developer',
    href: 'https://clamphook.com',
    date: 'Sep 2021 - Aug 2022 · 1 yr',
    type: 'Hybrid',
    timing: 'Part time',
    company: 'clamphook',
    image: '/images/clamphook.png',
  },
  {
    title: 'Frontend Developer',
    href: 'https://menzz.co',
    date: 'Apr 2022 - Aug 2022 · 5 mos',
    type: 'Remote',
    timing: 'Contract',
    company: 'menzz',
    image: '/images/menzz.png',
  },
  {
    title: 'Mobile Application Developer',
    href: 'https://silicontechnepal.com.np/',
    date: 'Aug 2022 - Nov 2022 · 4 mos ',
    type: 'Remote',
    timing: 'Contract',
    company: 'silicontechnepal',
    image: '/images/aagaman.png',
  },
  {
    title: 'Web and App developer',
    href: 'https://www.linkedin.com/company/webapplix/',
    date: 'Apr 2022 - Present',
    type: 'Remote',
    timing: 'Freelance',
    company: 'webapplix',
    image:
      'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
  },
];

export const galleryData = [
  '/images/gallery/apps.png',
  '/images/gallery/css.png',
  '/images/gallery/ease_music.png',
  '/images/gallery/godot_redesign.png',
  '/images/gallery/hyperce.png',
  '/images/gallery/menzz.png',
  '/images/gallery/padhao.png',
  '/images/gallery/published_apps.png',
  '/images/gallery/real_apps.png',
  '/images/gallery/youtube_redesign.png',
];

export const serviceData: ServiceItemType[] = [
  {
    title: 'Web Development',
    description:
      'Developing interactive and responsive websites using modern web technologies. I ensure that your website runs smoothly on all devices, providing an excellent user experience.',
    subtitle: 'Building User-Friendly and Dynamic Websites',
    technologies: ['React', 'Next.js', 'Remix', 'Node.js'],
  },
  {
    title: 'App Development',
    description:
      'Building robust and scalable mobile apps that provide seamless functionality on both iOS and Android devices. I utilize Flutter to create beautiful and intuitive user interfaces.',
    subtitle: 'Creating Seamless Mobile Experiences with Flutter',
    technologies: ['Flutter'],
  },
];
