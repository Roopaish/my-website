export type ServiceItemType = {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
};

export default function ServiceItem({
  title,
  subtitle,
  description,
  technologies,
}: ServiceItemType) {
  return (
    <li className="w-full bg-gray-50 p-6 text-center dark:bg-blueGray-dark">
      <h2 className="pt-10 text-4xl">{title}</h2>
      <p>{subtitle}</p>
      <p className="mt-10 text-2xl">
        {technologies.map((technology, index) => (
          <span key={index}>
            <span>{technology}</span>
            {index !== technologies.length - 1 && <span> | </span>}
          </span>
        ))}
      </p>
      <p className="mt-5">{description}</p>
    </li>
  );
}
