import { rabenue } from '@/utils/localFonts';
import Link from 'next/link';
import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={`${rabenue.className} min-h-screen`}>
        <header className="">
          <div className="mx-auto flex max-w-7xl items-center justify-between bg-transparent p-4">
            <Link href="/" className="text-lg font-bold">
              Roopaish.
            </Link>
            <ul className="flex items-center space-x-4">
              <li>
                <Link href="/blogs">Blogs.</Link>
              </li>
            </ul>
            <button>Let&apos;s talk.</button>
          </div>
        </header>
        {children}
        <footer className="bg-gray-50 p-10">
          <div>&copy;roopaish 2023</div>
          <div className="mt-4">
            <h1>Connect with me</h1>
            <ul className="flex flex-wrap gap-4 text-lg">
              <li>
                <a
                  href="https://github.com/roopaish"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/roopaish_"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/roopaish"
                  target="_blank"
                  rel="noreferrer"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </body>
    </html>
  );
}
