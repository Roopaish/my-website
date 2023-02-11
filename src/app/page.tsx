'use client';

import Contact from '@/components/Contact';
import Icon from '@/components/icons';
import Modal from '@/components/Modal';
import Page from '@/components/Page';
import Section from '@/components/Section';
import ServiceItem from '@/components/ServiceItem';
import WorkListItem from '@/components/WorkListItems';
import { galleryData, serviceData, workData } from '@/constants/data';
import openURL from '@/utils/openURL';
import { shimmerData } from '@/utils/shimmer';
import useMount from '@/utils/useMount';
import Image from 'next/image';

export default function Home() {
  const mounted = useMount();

  return (
    <Page>
      <section
        className={`relative flex min-h-screen flex-col-reverse justify-between md:flex-row md:space-x-4 md:pt-40 `}
      >
        <div
          className={`relative mt-40 text-right md:mt-0 md:flex-1 ${
            mounted ? 'top-0 opacity-100' : 'top-2 opacity-0'
          } transition-positionOpacity duration-1000`}
        >
          <h1>Gallery</h1>
          <p className="text-2xl">
            My projects are a reflection of my passion for design and
            development.
          </p>
          <section className="group ml-auto flex h-[400px] w-full max-w-lg space-x-4 overflow-hidden">
            <div
              className={`flex w-full flex-col space-y-4 transition-opacity delay-500 duration-1000 ${
                mounted ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {galleryData.slice(0, 5).map((data, i) => (
                <figure
                  className="group-hover:pause relative max-h-[320px]  min-h-[320px] w-full animate-slideUp cursor-pointer overflow-hidden transition-all hover:p-2"
                  key={i}
                  onClick={() => openURL(data!.href)}
                >
                  <Image
                    src={data!.img}
                    alt="gallery"
                    height={320}
                    width={248}
                    placeholder="blur"
                    blurDataURL={shimmerData(248, 320)}
                    className="h-full w-full object-cover"
                  />
                </figure>
              ))}
              {galleryData.slice(0, 2).map((data, i) => (
                <figure
                  className="group-hover:pause relative max-h-[320px] min-h-[320px] w-full animate-slideUp cursor-pointer overflow-hidden transition-all hover:p-2"
                  key={i}
                  onClick={() => openURL(data!.href)}
                >
                  <Image
                    src={data!.img}
                    alt="gallery"
                    height={320}
                    width={248}
                    placeholder="blur"
                    blurDataURL={shimmerData(248, 320)}
                    className="h-full w-full object-cover"
                  />
                </figure>
              ))}
            </div>
            <div
              className={`flex w-full flex-col space-y-4 transition-opacity delay-500 duration-1000  ${
                mounted ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {galleryData.slice(5).map((data, i) => (
                <figure
                  className="group-hover:pause relative max-h-[320px] min-h-[320px] w-full animate-slideDown cursor-pointer overflow-hidden transition-all hover:p-2"
                  key={i}
                  onClick={() => openURL(data!.href)}
                >
                  <Image
                    src={data!.img}
                    alt="gallery"
                    placeholder="blur"
                    blurDataURL={shimmerData(248, 320)}
                    height={320}
                    width={248}
                    className="h-full w-full object-cover"
                  />
                </figure>
              ))}
              {galleryData.slice(5, 7).map((data, i) => (
                <figure
                  className="group-hover:pause relative max-h-[320px] min-h-[320px] w-full animate-slideDown cursor-pointer overflow-hidden transition-all hover:p-2"
                  key={i}
                  onClick={() => openURL(data!.href)}
                >
                  <Image
                    src={data!.img}
                    alt="gallery"
                    placeholder="blur"
                    blurDataURL={shimmerData(248, 320)}
                    height={320}
                    width={248}
                    className="h-full w-full object-cover"
                  />
                </figure>
              ))}
            </div>
          </section>
        </div>
        <div className="mt-32 md:mt-0  md:flex-1">
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
            <div
              className={`block pt-10 md:hidden  ${
                mounted ? 'opacity-100' : 'opacity-0'
              } transition-opacity delay-700 duration-1000`}
            >
              Any projects in mind?
              <Modal
                className="block md:hidden"
                trigger={
                  <div className="group flex items-center space-x-1">
                    <span>LET&apos;S TALK</span>
                    <Icon
                      type="arrow-right"
                      className="rotate-0 transition-all group-hover:-rotate-45"
                    />
                  </div>
                }
                variant="screen"
                title="Let's talk"
              >
                <Contact />
              </Modal>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <h1>Experiences</h1>
        <ul className="space-y-6">
          {workData.map((work, i) => (
            <WorkListItem key={i} {...work} />
          ))}
        </ul>
      </Section>

      <Section>
        <h1 className="text-right">Services</h1>
        <p className="text-right text-2xl">What I can do for you.</p>
        <ul className="flex flex-col gap-4 md:flex-row">
          {serviceData.map((service, i) => (
            <ServiceItem key={i} {...service} />
          ))}
        </ul>
      </Section>

      <Section>
        <h1>Technologies</h1>
        <p className="text-2xl">Technology I am familiar with.</p>
        <p className="mt-4 flex gap-4 text-xl">
          &#10170; React, Next.js, Remix, Node.js, Express, PostgreSQL, Redis,
          Firebase
          <br />
          &#10170; GraphQl, REST <br />
          &#10170; CSS, Tailwind CSS, Ant Design, Next UI, Styled-Components{' '}
          <br />
          &#10170; Flutter, GetX, Provider <br /> &#10170; Git, Github, Gitlab,
          Docker <br />
          &#10170; Dart, Typescript
        </p>
      </Section>
    </Page>
  );
}
