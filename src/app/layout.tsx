'use client';

import Contact from '@/components/Contact';
import Drawer from '@/components/Drawer';
import Icon from '@/components/icons';
import Modal from '@/components/Modal';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { contactData } from '@/constants/data';
import { rabenue } from '@/utils/localFonts';
import Link from 'next/link';
import { useState } from 'react';
import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <html lang="en">
      <head />
      <body
        className={`${rabenue.className} min-h-screen dark:bg-black dark:text-white`}
      >
        <header className={`text-lg md:py-3 md:text-2xl`}>
          <div className="mx-auto flex max-w-7xl items-center justify-between bg-transparent p-4">
            <Link href="/" className="font-medium uppercase">
              Roopaish
            </Link>

            <ul className="hidden items-center space-x-4 uppercase md:flex">
              <li>
                <Link href="/blogs">Blogs</Link>
              </li>
            </ul>

            <Modal
              className="hidden md:block"
              trigger={
                <div className="group flex items-center space-x-1">
                  <span>LET&apos;S TALK</span>
                  <Icon
                    type="arrow-right"
                    className="rotate-0 transition-all duration-500 ease-in-out group-hover:-rotate-45"
                  />
                </div>
              }
              variant="screen"
              title="Let's talk"
            >
              <Contact />
            </Modal>

            <button
              className="block md:hidden"
              onClick={() => setIsMenuOpen(true)}
            >
              <Icon type="menu" />
            </button>

            <Drawer isOpen={isMenuOpen} setIsOpen={setIsMenuOpen}>
              <ul
                className="items-center space-x-4 pt-10 uppercase md:hidden"
                onClick={() => setIsMenuOpen(false)}
              >
                <li className="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                  <Link href="/blogs" className="block">
                    Blogs
                  </Link>
                </li>
              </ul>
            </Drawer>
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
          <div className="flex gap-4">
            <ThemeSwitcher />
            <a
              href="https://github.com/Roopaish/my-website"
              target="_blank"
              rel="noreferrer"
            >
              <Icon type="github" />
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
