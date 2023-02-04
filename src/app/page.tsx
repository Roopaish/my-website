'use client';

import Page from '@/components/Page';
import useMount from '@/utils/useMount';

export default function Home() {
  const [mounted] = useMount();

  return (
    <Page>
      <section className={`relative flex justify-between  space-x-4 `}>
        <div
          className={`relative flex-1 text-right ${
            mounted ? 'top-0 opacity-100' : 'top-2 opacity-0'
          } transition-all duration-1000`}
        >
          <h1>Gallery</h1>
          <p className="text-2xl">
            An honorable list of my websites and apps projects.
          </p>
        </div>
        <div className="flex-1">
          <h1
            className={`relative
            ${
              mounted ? 'top-0 opacity-100' : 'top-2 opacity-0'
            } transition-all duration-1000
            `}
          >
            Software Engineer
          </h1>
          <p className="text-2xl">
            <span
              className={`relative text-5xl
            ${
              mounted ? 'top-0 opacity-100' : 'top-1 opacity-0'
            } transition-all duration-500`}
            >
              Full-stack developer
            </span>{' '}
            <span
              className={`relative
            ${
              mounted ? 'top-0 opacity-100' : 'top-2 opacity-0'
            } transition-all duration-1000
            `}
            >
              specialized in Flutter, React and Node.
            </span>
          </p>
        </div>
      </section>
    </Page>
  );
}
