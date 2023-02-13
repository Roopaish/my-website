import Image from 'next/image';
import Icon from './icons';

export type ProjectItemType = {
  title: string;
  description: string;
  img: string;
  href?: string;
  github: string;
};

export default function ProjectItem(p: ProjectItemType) {
  return (
    <div className="relative w-full">
      <a
        href={p.href ?? p.github}
        className="group relative flex h-60 w-full cursor-pointer flex-col justify-end overflow-hidden bg-gray-50 p-6 text-center text-white dark:bg-blueGray-dark md:h-96"
        target="_blank"
        rel="noreferrer"
      >
        <figure className="absolute inset-0 w-full md:transition-position md:duration-1000 group-hover:md:-top-1/2">
          <Image
            src={p.img}
            width={200}
            height={384}
            alt={p.title}
            className="h-auto w-full"
          />
        </figure>
        <div className="absolute bottom-0 left-0 right-0 -top-10 bg-opacity-70 bg-gradient-to-t from-blueGray-dark group-hover:top-1/2 md:top-0 md:transition-position"></div>
        <div className="relative">
          <h2 className="text-2xl">{p.title}</h2>
          <p className="hidden text-lg md:mt-5 md:block">{p.description}</p>
        </div>
      </a>
      {p.href && (
        <a
          href={p.github}
          target="_blank"
          rel="noreferrer"
          className="absolute top-0 right-0 flex items-center justify-center bg-black p-4"
        >
          <Icon type="github" />
        </a>
      )}
    </div>
  );
}
