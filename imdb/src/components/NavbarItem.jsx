"use client";
import Link from "next/link";

import React from "react";
import { useSearchParams } from "next/navigation";
function NavbarItem({ title, param }) {
  const searchParams = useSearchParams(); // this hook help to get something from url
  const genre = searchParams.get("genere"); //it will take genera from url bar
  return (
    <div>
      <Link
        className={`m-4 hover:text-amber-600 font-semibold p-2 ${
          genre &&
          genre === param &&
          "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
        }`}
        href={`/?genere=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}

export default NavbarItem;
