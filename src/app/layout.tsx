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
          <div className="mx-auto max-w-7xl bg-transparent p-4">
            <Link href="/" className="text-lg font-bold">
              Roopaish.
            </Link>
          </div>
        </header>
        {children}
        <footer></footer>
      </body>
    </html>
  );
}
