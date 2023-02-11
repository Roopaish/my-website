import fs from 'fs';
import matter from 'gray-matter';

export type BlogMetaData = {
  title: string;
  date: string;
  subtitle: string;
  slug?: string;
  content?: string;
};

export function getBlogsMetadata() {
  const blogs = fs.readdirSync('blogs');
  const markdownFiles = blogs.filter((fn) => fn.endsWith('.md'));

  const blogsMetaData: BlogMetaData[] = markdownFiles.map((file) => {
    const fileContent = fs.readFileSync(`blogs/${file}`, 'utf8');
    const matterResult = matter(fileContent).data;

    return {
      title: matterResult.title,
      date: matterResult.date,
      subtitle: matterResult.subtitle,
      slug: file.replace('.md', ''),
    };
  });

  return blogsMetaData;
}
