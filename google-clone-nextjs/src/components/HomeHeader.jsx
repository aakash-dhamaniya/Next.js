import Link from "next/link";
import { TbGridDots } from "react-icons/tb";
export default function HomeHeader() {
  return (
    <header className="flex justify-end p-4 text-sm">
      <div className="flex space-x-3 items-center ">
        <Link href="https://mail.google.com/" className="hover:underline">
          Gmail
        </Link>
        <Link href="https://image.google.com/" className="hover:underline">
          Images
        </Link>
        <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2" />
        <button className="bg-blue-500 px-6 py-2 font-medium rounded-md text-white hover:brightness-105 hover:shadow-md transition-shadow">
          Sign in
        </button>
      </div>
    </header>
  );
}
