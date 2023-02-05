import Image from 'next/image';

export type WorkListItemType = {
  href: string;
  title: string;
  date: string;
  type: 'Remote' | 'Hybrid' | 'Office';
  timing: 'Full time' | 'Part time' | 'Contract' | 'Freelance';
  company: string;
  image?: string;
};

export default function WorkListItem({
  href,
  title,
  date,
  timing,
  type,
  company,
  image,
}: WorkListItemType) {
  return (
    <li className="group relative">
      <figure className="absolute right-1/3 -top-1/3 min-h-[320px] w-60 opacity-0 grayscale filter transition-all delay-500 duration-500 group-hover:-top-1/2 group-hover:right-[35%] group-hover:opacity-100">
        <Image
          src={image ?? `https://source.unsplash.com/random/${date}}`}
          alt={company}
          fill={true}
          className="object-contain"
        />
      </figure>
      <div className="relative">
        <span className="text-4xl">{title}</span>{' '}
        <a href={href} target="_blank" rel="noreferrer" className="text-2xl">
          @{company}
        </a>
        <div className="text-2xl">
          <p> &#10170;{date}</p>
          <p>
            {' '}
            &#10170;{type} &#10170;{timing}
          </p>
        </div>
      </div>
    </li>
  );
}
