'use client';

import { useEffect, useState } from 'react';
import Icon from './icons';

export default function Modal({
  trigger,
  children,
  variant,
  title,
  className,
}: {
  trigger: React.ReactNode;
  children: React.ReactNode;
  variant?: 'default' | 'small' | 'screen';
  title?: string;
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className={className}>
        {trigger}
      </button>
      <div
        className={`absolute z-50 transition-opacity ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={() => setIsOpen(false)}
        ></div>
        <div className="fixed inset-0 flex items-center justify-center">
          <div
            className={`flex flex-col rounded-md bg-gray-50 p-6 transition-all dark:bg-gray-900 dark:text-white ${
              isOpen ? 'scale-100' : 'scale-90'
            }
            ${variant === 'screen' ? 'h-full w-full' : ''}
            `}
          >
            <header className="flex items-center justify-between text-xl">
              <h1 className="text-4xl font-medium">{title ?? ''}</h1>
              <button
                onClick={() => setIsOpen(false)}
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-gray-400"
              >
                <Icon
                  type="cross"
                  size={24}
                  className="rotate-0 text-gray-700 transition-transform duration-1000 ease-in-out group-hover:rotate-90 dark:text-gray-300"
                />
              </button>
            </header>
            <main className="slick-scroll-bar flex-1 overflow-y-auto py-20">
              {children}
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
