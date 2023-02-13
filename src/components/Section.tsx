import { ReactNode } from 'react';

export default function Section({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`min-h-screen pt-40 ${className}`}>{children}</section>
  );
}
