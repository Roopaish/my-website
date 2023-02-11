import BlogListItem from '@/components/BlogListItem';
import Page from '@/components/Page';
import { BlogMetaData, getBlogsMetadata } from '@/utils/getBlogsMetadata';
import fs from 'fs';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

function getBlogContent(slug: string): BlogMetaData {
  const fileContent = fs.readFileSync(`blogs/${slug}.md`, 'utf8');
  const matterResult = matter(fileContent);

  return {
    title: matterResult.data.title,
    date: matterResult.data.date,
    subtitle: matterResult.data.subtitle,
    content: matterResult.content,
  }
}

export async function generateStaticParams() {
  const blogsMetaData = getBlogsMetadata();
  return blogsMetaData.map(({ slug }) => ({ slug }));
}

export default function BlogPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const { title, date, subtitle, content } = getBlogContent(slug);

  return (
    <Page>
      <section className='w-full bg-gray-50 p-6 text-center dark:bg-blueGray-dark'>
        <BlogListItem title={title} date={date} subtitle={subtitle} />
      </section>
      <main className='mt-10 mb-40 mx-auto'>
        <article className='prose lg:prose-xl mx-auto max-w-4xl dark:text-white prose-headings:dark:text-white'>
          <ReactMarkdown>
            {content!}
          </ReactMarkdown>
        </article>
      </main>
    </Page>
  );
}