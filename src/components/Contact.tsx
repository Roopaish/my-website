import { contactData } from "@/constants/data";

export default function Contact() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-3xl">
        Any project in mind? Feel free to discuss with me. I&apos;d
        love to hear from you.
      </p>
      <div className="text-2xl">
        <p>
          You can reach me at{' '}
          <a href="mailto:rupesh39943@gmail.com" className="text-4xl">
            rupesh39943@gmail.com
          </a>
        </p>
        <hr className="my-10" />
        Or the following social handles
        <ul className="flex flex-wrap gap-4 text-xl">
          {contactData.slice(1).map((contact) => (
            <li key={contact.title}>
              &#10170;
              <a href={contact.href} target="_blank" rel="noreferrer">
                {contact.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}