import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
const Header = () => {
  return (
    <div className=" flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex">
        <div>
          <MenuItem title="HOME" address="/" Icon={AiFillHome} />
        </div>
        <div className="">
          <MenuItem title="ABOUT" address="/About" Icon={BsInfoCircleFill} />
        </div>
      </div>
      <div className="">
        <Link href="/">
          <h2 className="text-2xl">
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">
              IMDb
            </span>
            <span className="text-xl hidden sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;
