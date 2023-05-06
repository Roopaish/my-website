import { ProjectItemType } from '@/components/ProjectItem';
import { ServiceItemType } from '@/components/ServiceItem';
import { WorkListItemType } from '@/components/WorkListItems';

export const workData: WorkListItemType[] = [
  {
    title: 'Chief Technical Officer',
    href: 'https://www.linkedin.com/company/hyperce/',
    date: 'Apr 2023 - Present',
    type: 'Remote',
    timing: 'Self-Employed',
    company: 'hyperce',
    image: '/images/hyperce.png',
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
    title: 'Frontend Developer',
    href: 'https://menzz.co',
    date: 'Apr 2022 - Aug 2022 · 5 mos',
    type: 'Remote',
    timing: 'Contract',
    company: 'menzz',
    image: '/images/menzz.png',
  },
  {
    title: 'Frontend Developer',
    href: '',
    date: 'Nov 2021 - Dec 2021 · 2 mos',
    type: 'Remote',
    timing: 'Part time',
    company: 'Clamphook',
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
];

export const galleryData = [
  {
    href: 'https://flutter-roadmap.netlify.app/#/',
    img: '/images/gallery/apps.png',
  },
  {
    href: 'https://roopaish.github.io/CSS-RoadMap/',
    img: '/images/gallery/css.png',
  },
  {
    href: 'https://github.com/Roopaish/ease_commerce_web',
    img: '/images/gallery/ease_music.png',
  },
  {
    href: 'https://roopaish.github.io/CSS-RoadMap/Godot%20Landing%20Page%20-%20Redesign/',
    img: '/images/gallery/godot_redesign.png',
  },
  {
    href: 'https://hyperce.io',
    img: '/images/gallery/hyperce.png',
  },
  {
    href: 'https://menzz.co/',
    img: '/images/gallery/menzz.png',
  },
  {
    href: 'https://padhao.com.np/',
    img: '/images/gallery/padhao.png',
  },
  {
    href: 'https://aagamannepal.com/',
    img: '/images/gallery/published_apps.png',
  },
  {
    href: 'https://github.com/Roopaish/post_it-PERN',
    img: '/images/gallery/real_apps.png',
  },
  {
    href: 'https://roopaish.github.io/CSS-RoadMap/Youtube%20Clone%20-%20Redesign/',
    img: '/images/gallery/youtube_redesign.png',
  },
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

export const contactData = [
  {
    title: 'Email',
    href: 'mailto:rupesh39943@gmail.com',
  },
  {
    title: 'Github',
    href: 'https://twitter.com/roopaish_',
  },
  {
    title: 'Twitter',
    href: 'https://twitter.com/roopaish_',
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/roopaish/',
  },
];

export const featuredProjects: ProjectItemType[] = [
  {
    title: 'Hyperce',
    description: 'Building e-commerce suite for businesses of all size.',
    href: 'https://hyperce.io/',
    img: '/images/hyperce.png',
    skills: [
      'React',
      'NextJs',
      'Remix',
      'Astro',
      'Typescript',
      'GraphQL',
      'TailwindCSS',
    ],
  },
  {
    title: 'Menzz.co',
    description: 'Online e-commerce website targeted for men.',
    href: 'https://menzz.co',
    img: '/images/menzz.png',
    skills: ['React', 'NextJs', 'Typescript', 'GraphQL', 'TailwindCSS'],
  },
  {
    title: 'Clamphook App',
    description:
      'Entrance preparation app with Latex support, Live and Recorded classes',
    href: 'https://play.google.com/store/apps/details?id=com.clamphook.clamphook',
    img: '/images/clamphook.png',
    skills: ['Flutter', 'Dart', 'RestAPI'],
  },
  {
    title: 'Aaagaman App',
    description:
      'Restaurant discovery as well as food pre-booking services, you can be sure to be on time everywhere while also fulfilling your hunger.',
    href: 'https://play.google.com/store/apps/details?id=com.aagaman.bookingapp',
    img: '/images/aagaman.png',
    skills: ['Flutter', 'Dart', 'RestAPI'],
  },
  {
    title: 'Ease Commerce',
    description:
      'Search and Compare products across multiple e-commerce sites like Daraz and Amazon',
    href: 'https://github.com/Roopaish/ease_commerce_web',
    github: 'https://github.com/Roopaish/ease_commerce_web',
    img: '/images/ease-commerce.png',
    skills: ['VanillaJs', 'ExpressJs', 'MongoDB', 'Web Scraping'],
  },
  {
    title: 'Flutter Roadmap',
    description:
      'Flutter notes, Quiz App, Meals App, Expense App, Shop App, Great Places App and Chat App',
    href: 'https://flutter-roadmap.netlify.app/#/',
    github: 'https://github.com/Roopaish/Flutter-RoadMap',
    img: '/images/gallery/apps.png',
    skills: [
      'Flutter',
      'Dart',
      'Firebase',
      'ChatApp',
      'ExpenseApp',
      'ShopApp',
      'MealsApp',
      'QuizApp',
    ],
  },
  {
    title: 'CSS Roadmap',
    description:
      'CSS Buttons, Hover Effects, Animations, Emoji, Tooltips, Landing Page, Youtube Clone',
    href: 'https://roopaish.github.io/CSS-RoadMap/',
    github: 'https://github.com/Roopaish/Flutter-RoadMap',
    img: '/images/gallery/youtube_redesign.png',
    skills: [
      'CSS',
      'HTML',
      'LandingPage',
      'YoutubeClone',
      'Buttons',
      'HoverEffects',
      'Animations',
      'Emoji',
      'Tooltips',
    ],
  },
];
