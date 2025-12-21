import Link from "next/link";
import React from "react";

export default function Folder1() {
  return (
    <div className="flex flex-col justify-center items-center mt-12">
      <h2 className="text-xl text-black font-semibold text-center px-4 py-1 bg-white/80 w-max rounded-full">
        Folder One
      </h2>
      <h1 className="text-6xl text-white/90 font-medium mt-12">
        FOLDER ONE{" "}
      </h1>
      <p className="text-lg max-w-[900px] text-center mt-6 text-white/30">
        Discover the achievements that set us apart. From groundbreaking
        projects to industry accolades, we take pride in out accomplishments.
      </p>

      <div className="mt-10 flex flex-col gap-2">
        <Link href="/intercept" className="text-green-500">Go Back To Main Intercept</Link>
        {/* <Link href="/intercept/folder2" className="text-green-500">Go Back To Intercepted Folder Two</Link> */}
      </div>
    </div>
  );
}
