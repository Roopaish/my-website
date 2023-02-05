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
              <li>Blogs.</li>
              <li>Tools.</li>
            </ul>
            <button>Let&apos;s talk.</button>
          </div>
        </header>
        {children}
        <footer></footer>
      </body>
    </html>
  );
}
