'use client';

import Page from '@/components/Page';
import WorkListItem from '@/components/WorkListItems';
import { galleryData, workData } from '@/constants/data';
import useMount from '@/utils/useMount';
import Image from 'next/image';

export default function Home() {
  const [mounted] = useMount();

  return (
    <Page>
      <section
        className={`relative flex min-h-screen flex-col-reverse justify-between md:flex-row md:space-x-4 md:pt-40 `}
      >
        <div
          className={`relative mt-32 text-right md:mt-0 md:flex-1  ${
            mounted ? 'top-0 opacity-100' : 'top-2 opacity-0'
          } transition-positionOpacity  duration-1000`}
        >
          <h1>Gallery</h1>
          <p className="text-2xl">
            An honorable list of my websites and apps projects.
          </p>
          <section className="ml-auto flex h-[400px] w-full max-w-lg space-x-4 overflow-hidden">
            <div
              className={`flex w-full flex-col space-y-4 transition-opacity duration-1000 ${
                mounted ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {galleryData.slice(0, 5).map((img, i) => (
                <figure
                  className="relative min-h-[320px] w-full animate-slideUp grayscale filter"
                  key={i}
                >
                  <Image
                    src={img}
                    alt="gallery"
                    fill={true}
                    placeholder="blur"
                    blurDataURL="/images/placeholder.png"
                    className="object-cover"
                  />
                </figure>
              ))}
            </div>
            <div
              className={`flex w-full flex-col space-y-4 transition-opacity delay-500 duration-1000  ${
                mounted ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {galleryData.slice(6).map((img, i) => (
                <figure
                  className="relative min-h-[320px] w-full animate-slideDown grayscale filter"
                  key={i}
                >
                  <Image
                    src={img}
                    alt="gallery"
                    fill={true}
                    placeholder="blur"
                    blurDataURL="/images/placeholder.png"
                    className="object-cover"
                  />
                </figure>
              ))}
            </div>
          </section>
        </div>
        <div className="mt-20 md:mt-0 md:flex-1">
          <h1
            className={`relative
            ${
              mounted ? 'top-0 opacity-100' : 'top-2 opacity-0'
            } transition-positionOpacity duration-1000
            `}
          >
            Software Engineer
          </h1>
          <div className="space-y-4 text-2xl">
            <p>
              <span
                className={`relative text-5xl
            ${
              mounted ? 'top-0 opacity-100' : 'top-1 opacity-0'
            } transition-positionOpacity duration-500`}
              >
                Full-stack developer
              </span>{' '}
              <span
                className={`relative
            ${
              mounted ? 'top-0 opacity-100' : 'top-2 opacity-0'
            } transition-positionOpacity duration-1000
            `}
              >
                specialized in Flutter, React and Node.
              </span>
            </p>
            <p
              className={`relative pt-10
            ${mounted ? 'top-0 opacity-100' : 'top-2 opacity-0'}
            transition-positionOpacity delay-100 duration-1000
            `}
            >
              Based in Nepal
            </p>
            <p
              className={`relative 
            ${mounted ? 'top-0 opacity-100' : 'top-2 opacity-0'}
            transition-positionOpacity delay-300 duration-1000
            `}
            >
              As a proficient developer with attention to detail, I like to
              build dynamic and interactive web and mobile applications that
              meet the highest standards of quality.
            </p>
          </div>
        </div>
      </section>
      <section className="min-h-screen pt-40">
        <h1>Works</h1>
        <ul className="space-y-6">
          {workData.map((work, i) => (
            <WorkListItem key={i} {...work} />
          ))}
        </ul>
      </section>
    </Page>
  );
}
