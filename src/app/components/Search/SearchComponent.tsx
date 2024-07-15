import { searchPosts } from "@/app/utils/const";
import { postInterface } from "@/app/utils/interfaces";
import { useLocale } from "next-intl";
import Link from "next/link";
import React, { ChangeEvent, useEffect, useState } from "react";

interface propsComponent {
  closeAction: () => void;
}

export default function SearchComponent({ closeAction }: propsComponent) {
  const localeActive = useLocale();
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Array<postInterface>>([]);
  const minLengthRequired = 3;

  useEffect(() => {
    if (search.length >= minLengthRequired) {
      setResults(searchPosts(localeActive, search));
    } else {
      setResults([]);
    }
  }, [search]);

  function handleInputChanges(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }
  return (
    <section className="absolute bg-[#00000075] right-0 top-0 w-screen h-screen flex flex-col justify-center items-center text-white text-lg">
      <div
        className="absolute bg-[#00000075] right-0 top-0 w-screen h-screen"
        onClick={() => closeAction()}
      ></div>
      <div className="bg-[#ffffff0d] backdrop-blur rounded-lg p-6 border flex flex-col items-center sm:w-[600px] md:w-[700px] max-w-[80%]">
        <label htmlFor="searchInput">What are you looking for 👀?</label>
        <input
          type="text"
          name="searchInput"
          id="searchInput"
          className="p-2 px-6 rounded-3xl text-slate-900 bg-[#ffffffdc] border  outline-none"
          onChange={(e) => handleInputChanges(e)}
        />
        <ul className="mt-4 flex flex-col gap-2">
          {results.map((post, index) => {
            return (
              <li
                key={index}
                className="border rounded-lg bg-[#ffffff50] hover:bg-[#ffffff75] px-2"
              >
                <Link
                  onClick={() => closeAction()}
                  href={`/${localeActive}/post/${post.id}`}
                >
                  {post.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
