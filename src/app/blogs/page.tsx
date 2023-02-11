import BlogListItem from '@/components/BlogListItem';
import Page from '@/components/Page';
import { getBlogsMetadata } from '@/utils/getBlogsMetadata';
import Link from 'next/link';

export default function Blogs() {
  const blogsMetaData = getBlogsMetadata();

  return (
    <Page>
      <section className="pt-40">
        <h1>Blogs</h1>
        <p className="text-2xl">
          Get latest blogs about programming and new technologies.
        </p>
      </section>
      <section className="mt-10">
        <ul className="grid grid-cols-1 gap-4  sm:grid-cols-2 md:grid-cols-3">
          {blogsMetaData.map((data) => (
            <li key={data.slug} className="block h-full">
              <Link href={`/blogs/${data.slug}`} className="block h-full">
                <BlogListItem className="h-full" {...data} />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Page>
  );
}
