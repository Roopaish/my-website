import { ReactNode } from 'react';

export default function Page({ children }: { children: ReactNode }) {
  return <main className="mx-auto max-w-7xl p-4">{children}</main>;
}
