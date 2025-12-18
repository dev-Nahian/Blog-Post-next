import Link from "next/link";
import BlogItem from "../components/BlogItem";
import blogs from "../data/blogs";
import BlogCard from "../components/BlogCard";

export default function page() {
  return (
    <div className="mt-12">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-xl text-black font-semibold text-center px-4 py-1 bg-white/80 w-max rounded-full">
          Blog
        </h2>
        <h1 className="text-6xl text-white/90 font-medium mt-12">
          Discover Our Latest Blog{" "}
        </h1>
        <p className="text-lg max-w-[900px] text-center mt-6 text-white/30">
          Discover the achievements that set us apart. From groundbreaking
          projects to industry accolades, we take pride in out accomplishments.
        </p>
      </div>

      <div className="mt-20 mx-20">
        <div>
          <h3 className="text-2xl text-white/80 font-medium">All Blogs</h3>
        </div>
        <div className="grid grid-cols-4 gap-5 mt-10">
          {blogs.map((blog) => (
            <Link href={`/blog/${blog.id}`} key={blog.id}>
              {/* <BlogItem title={blog.title} /> */}
              <BlogCard title={blog.title} description={blog.description} image={blog.img} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
