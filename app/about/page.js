export default function AboutPage() {
  return (
    <div className="mt-12">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-xl text-black font-semibold text-center px-4 py-1 bg-white/80 w-max rounded-full">
            About
        </h2>
        <h1 className="text-6xl text-white/90 font-medium mt-12">
            About Us{" "}
        </h1>
        <p className="text-lg max-w-[900px] text-center mt-6 text-white/30">
          Discover the achievements that set us apart. From groundbreaking
          projects to industry accolades, we take pride in out accomplishments.
        </p>
      </div>
    </div>
  );
}
