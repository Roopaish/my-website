import Modal from '@/components/Modal';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { contactData } from '@/constants/data';
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
      <body
        className={`${rabenue.className} min-h-screen dark:bg-black dark:text-white`}
      >
        <header className="text-xl md:text-2xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between bg-transparent p-4">
            <Link href="/" className="font-medium uppercase">
              Roopaish.
            </Link>
            <ul className="flex items-center space-x-4 uppercase">
              <li>
                <Link href="/blogs">Blogs.</Link>
              </li>
            </ul>
            <Modal trigger={"LET'S TALK."} variant="screen" title="Let's talk">
              <div className="flex flex-col gap-4">
                <p className="text-3xl">
                  Any project in mind? Feel free to discuss with me. I&apos;d
                  love to hear from you.
                </p>
                <div className="text-2xl">
                  <p>
                    You can reach me at{' '}
                    <a href="mailto:rupesh39943@gmail.com" className="text-4xl">
                      rupesh39943@gmail.com
                    </a>
                  </p>
                  <hr className="my-10" />
                  Or the following social handles
                  <ul className="flex flex-wrap gap-4 text-xl">
                    {contactData.slice(1).map((contact) => (
                      <li key={contact.title}>
                        &#10170;
                        <a href={contact.href} target="_blank" rel="noreferrer">
                          {contact.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Modal>
          </div>
        </header>
        {children}
        <footer className="bg-gray-50 p-10 dark:bg-blueGray-dark dark:text-white ">
          <div>&copy;roopaish 2023</div>
          <div className="mt-4">
            <h1>Connect with me</h1>
            <ul className="mb-5 flex flex-wrap gap-4 text-xl">
              {contactData.slice(1).map((contact) => (
                <li key={contact.title}>
                  <a href={contact.href} target="_blank" rel="noreferrer">
                    {contact.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <ThemeSwitcher />
        </footer>
      </body>
    </html>
  );
}
