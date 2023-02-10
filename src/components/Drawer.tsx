import { ReactNode, useEffect } from 'react';
import Icon from './icons';

export default function Drawer({
  children,
  isOpen,
  setIsOpen,
}: {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <main
      className={`fixed inset-0 z-10 transform overflow-hidden bg-gray-900 bg-opacity-25 ease-in-out 
       ${
         isOpen
           ? ' translate-x-0 opacity-100 transition-opacity duration-500'
           : ' translate-x-full opacity-0 transition-all duration-500'
       }
      `}
    >
      <section
        className={
          ' absolute right-0 h-full w-screen  max-w-lg transform bg-gray-50 shadow-xl transition-all duration-500 ease-in-out dark:bg-gray-900 dark:text-white  ' +
          (isOpen ? ' translate-x-0 ' : ' translate-x-full ')
        }
      >
        <article className="relative flex h-full w-screen max-w-lg flex-col space-y-6 pb-10">
          <header className="flex items-center justify-between px-4 pt-4 text-lg font-bold">
            <div></div>
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
          <div className="px-4">{children}</div>
        </article>
      </section>
      <section
        className="h-full w-screen cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
}
