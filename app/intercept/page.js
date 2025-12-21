import Link from "next/link";

export default function InterceptPage() {
  return (
    <div className="mt-12">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-xl text-black font-semibold text-center px-4 py-1 bg-white/80 w-max rounded-full">
          Intercept
        </h2>
        <h1 className="text-6xl text-white/90 font-medium mt-12">
          Intercept Route Concept{" "}
        </h1>
        <p className="text-lg max-w-[900px] text-center mt-6 text-white/30">
          Discover the achievements that set us apart. From groundbreaking
          projects to industry accolades, we take pride in out accomplishments.
        </p>
      </div>

      <div className="mt-20 mx-20">
        <div>
          <h3 className="text-2xl text-white/80 font-medium">Intercepts</h3>
        </div>

        <div className="mt-5 flex flex-col gap-2 w-max">
          <Link href="/intercept/folder1" className="text-orange-400">
            Go To Folder One
          </Link>
          <Link href="/intercept/folder2" className="text-orange-400">
            Go To Folder Two
          </Link>
          <Link href="/intercept/folder3" className="text-orange-400">
            Go To Folder Three
          </Link>
        </div>
      </div>
    </div>
  );
}
