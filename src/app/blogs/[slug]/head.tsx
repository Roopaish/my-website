import { BlogMetaData } from '@/utils/getBlogsMetadata';
import fs from 'fs';
import matter from 'gray-matter';

function getBlogContent(slug: string): BlogMetaData {
  const fileContent = fs.readFileSync(`blogs/${slug}.md`, 'utf8');
  const matterResult = matter(fileContent);

  return {
    title: matterResult.data.title,
    date: matterResult.data.date,
    subtitle: matterResult.data.subtitle,
  };
}

export default function Head({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const { title, subtitle } = getBlogContent(slug);
  return (
    <head>
      <title>{title + ' by @roopaish'}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={subtitle} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />

      <meta property="og:title" content={title + ' by @roopaish'} />
      <meta property="og:description" content={subtitle} />
      <meta
        property="og:url"
        content={`https://www.rupeshbudhathoki.com.np/blogs/${slug}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="@roopaish" />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@roopaish" />
      <meta name="twitter:creator" content="@roopaish" />
      <meta name="twitter:title" content={title + ' by @roopaish'} />
      <meta name="twitter:description" content={subtitle} />
    </head>
  );
}
