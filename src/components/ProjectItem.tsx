import Image from 'next/image';
import Icon from './icons';

export type ProjectItemType = {
  title: string;
  description: string;
  img: string;
  href?: string;
  github: string;
}

export default function ProjectItem(p: ProjectItemType) {
  return (
    <div className='w-full relative'>
      <a href={p.href ?? p.github} className="flex group flex-col cursor-pointer justify-end w-full bg-gray-50 p-6 text-center h-60 md:h-96 dark:bg-blueGray-dark relative overflow-hidden text-white" target="_blank" rel="noreferrer">
        <figure className="w-full absolute inset-0 md:transition-position md:duration-1000 group-hover:md:-top-1/2">
          <Image src={p.img} width={200} height={384} alt={p.title} className="w-full h-auto" />
        </figure>
        <div className="absolute bottom-0 left-0 right-0 md:top-0 -top-10 md:transition-position group-hover:top-1/2 bg-opacity-70 bg-gradient-to-t from-blueGray-dark"></div>
        <div className='relative'>
          <h2 className="text-2xl">
            {p.title}
          </h2>
          <p className="md:mt-5 text-lg md:block hidden">{p.description}</p>
        </div>
      </a>
      {p.href && <a href={p.github} target="_blank" rel="noreferrer" className='flex items-center justify-center absolute top-0 right-0 p-4 bg-black'>
        <Icon type="github" />
      </a>}
    </div>
  );
}