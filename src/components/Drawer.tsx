import { ReactNode, useEffect } from "react";
import Icon from "./icons";

export default function Drawer({ children, isOpen, setIsOpen }: {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <main
      className={
        `fixed overflow-hidden z-10 bg-gray-900 inset-0 transform ease-in-out bg-opacity-25 
       ${isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0"
          : " transition-all opacity-0 duration-500 translate-x-full"}
      `}
    >
      <section
        className={
          " w-screen max-w-lg right-0 absolute  bg-gray-50 dark:bg-gray-900 dark:text-white h-full shadow-xl duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 h-full">
          <header className="px-4 pt-4 font-bold text-lg flex justify-between items-center">
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
        className="w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
}