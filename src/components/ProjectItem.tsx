import Image from 'next/image';
import Icon from './icons';

export type ProjectItemType = {
  title: string;
  description: string;
  img: string;
  href?: string;
  github?: string;
  skills: string[];
};

export default function ProjectItem(p: ProjectItemType) {
  return (
    <div className="relative w-full">
      <a
        href={p.href ?? p.github ?? ""}
        className="group relative w-full cursor-pointer overflow-hidden"
        target="_blank"
        rel="noreferrer"
      >
        <figure className="w-full relative  h-60 sm:h-96">
          <Image
            src={p.img}
            alt={p.title}
            fill
            className="object-cover h-full w-full object-top"
          />
          <div className="absolute left-4 right-4 bottom-4 flex flex-wrap gap-2">
            {
              p.skills?.map((s) => (
                <div key={s} className="bg-zinc-100 px-3 py-1 rounded-full text-black shadow-inner">
                  {s}
                </div>
              ))
            }
          </div>
        </figure>
        {/* <div className="absolute bottom-0 left-0 right-0 -top-10 bg-opacity-70 bg-gradient-to-t from-blueGray-dark group-hover:top-1/2 md:top-0 md:transition-position"></div> */}

        <h2 className="text-3xl md:text-4xl font-medium">{p.title}</h2>
        <p className="text-xl leading-tight">{p.description}</p>
      </a>
      {p.github && (
        <a
          href={p.github}
          target="_blank"
          rel="noreferrer"
          className="absolute top-0 right-0 flex items-center justify-center bg-black p-4"
        >
          <Icon type="github" color="white" />
        </a>
      )}

    </div>
  );
}
