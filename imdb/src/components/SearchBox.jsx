"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const submitHandler = (e) => {
    e.preventDefault();

    router.push(`/search/${search}`);
  };
  return (
    <form
      onSubmit={submitHandler}
      className="flex max-w-6xl mx-auto justify-between items-center px-5"
    >
      <input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        type="text"
        placeholder="Search keyword..."
        className="w-full h-14 rounded-sm outline-none placeholder-gray-500 bg-transparent flex-1"
      />
      {search && (
        <button type="submit" className="text-amber-500 disabled:text-gray-400">
          Search{" "}
        </button>
      )}
    </form>
  );
}
