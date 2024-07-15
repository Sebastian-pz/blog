"use client";

import { useState } from "react";
import SearchComponent from "./SearchComponent";

export default function Search() {
  const [isSearchComponentOpen, setSearchComponentOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setSearchComponentOpen(!isSearchComponentOpen)}
        className={`my-2 ml-2 mr-4 hover:scale-110`}
      >
        🔍
      </button>
      {isSearchComponentOpen && (
        <SearchComponent
          closeAction={() => {
            setSearchComponentOpen(false);
          }}
        />
      )}
    </>
  );
}
