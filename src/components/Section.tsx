import { ReactNode } from 'react';

export default function Section({ children }: { children: ReactNode }) {
  return <section className="min-h-screen pt-40">{children}</section>;
}
