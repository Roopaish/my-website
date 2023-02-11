'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import theme from 'react-syntax-highlighter/dist/cjs/styles/prism/one-dark';

export default function CodeBlock({
  children,
  language,
}: {
  children: string;
  language: string;
}) {
  return (
    <SyntaxHighlighter style={theme} language={language}>
      {children}
    </SyntaxHighlighter>
  );
}
