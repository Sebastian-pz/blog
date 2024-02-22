import Link from "next/link";
interface CardProps {
  title: string;
  link: string;
  dates: string;
  description: string;
  responsibilities: Array<string>;
}

export default function Card({
  title,
  link,
  dates,
  description,
  responsibilities,
}: CardProps) {
  return (
    <article className="mb-5 w-full mx-auto ">
      <div className="shadow-[0px_100px_80px_rgba(0,_0,_0,_0.07),_0px_41.8px_33.42px_rgba(0,_0,_0,_0.05),_0px_22.3px_17.87px_rgba(0,_0,_0,_0.04),_0px_12.5px_10.02px_rgba(0,_0,_0,_0.04),_0px_6.7px_5.32px_rgba(0,_0,_0,_0.03),_0px_2.8px_2.21px_rgba(0,_0,_0,_0.02)] bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <h3 className="text-gray-900 font-bold text-xl mb-2 hover:text-secondary-color">
            <Link href={link}>{title}</Link>
          </h3>
          <p className="text-sm text-gray-600 flex items-center">
            <svg
              className="fill-current text-gray-500 w-3 h-3 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg>
            {dates}
          </p>
          <p className="text-gray-700 text-base">{description}</p>
          <ul>
            {responsibilities.map((responsibility, i) => {
              return (
                <li
                  key={i}
                  className="list-disc mx-4 mt-2 text-sm text-slate-500 hidden md:block"
                >
                  {responsibility}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </article>
  );
}
