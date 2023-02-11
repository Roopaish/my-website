import { BlogMetaData } from "@/utils/getBlogsMetadata";

export default function BlogListItem({
  title, date, subtitle, className
}: BlogMetaData & { className?: string }) {
  return (
    <div className={`w-full bg-gray-50 p-6 text-center dark:bg-blueGray-dark ${className}`}>
      <h2 className=" text-4xl">{title}</h2>
      <p>{date}</p>
      <p className="mt-5 text-xl">{subtitle}</p>
    </div>
  );
}