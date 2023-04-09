"use client";
import React, { use, useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill, BsInputCursorText } from "react-icons/bs";
export default function HomeSearch() {
  const [input, setInput] = useState();
  const [disable, setDisable] = useState(false);
  const router = useRouter();
  function submitHandler(e) {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  }
  async function randomSearch() {
    setDisable(true);
    const res = await fetch(`https://random-word-api.herokuapp.com/word`);
    const data = res.json();
    if (res.ok) {
      data.then((data) => {
        console.log(data);
        router.push(`/search/web?searchTerm=${data}`);
      });
      setDisable(false);
    }
  }
  return (
    <>
      <form
        onSubmit={submitHandler}
        className="flex border border-gray-200 w-full mt-5 mx-auto max-w-[90%] px-5 py-3  hover:shadow-md focus-within:shadow-md rounded-full transition-shadow sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input
          type="text"
          className="flex-grow focus:outline-none"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <BsFillMicFill className="text-lg" />
      </form>
      <div className="flex flex-col space-y-4 sm:space-y-0 sm:space-x-4 sm:flex-row mt-6">
        <button className="btn" onClick={submitHandler}>
          Google Search
        </button>
        <button
          disabled={disable}
          className="btn disabled:bg-opacity-80"
          onClick={randomSearch}
        >
          I am Feeling Lucky{" "}
        </button>
      </div>
    </>
  );
}
