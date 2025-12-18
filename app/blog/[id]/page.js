import blogs from "@/app/data/blogs";
import Image from "next/image";

export default async function page({ params }) {

    const {id} = await params
    const blog = blogs.find((blog) => blog.id === id)
    const {title,description, img} = blog

  return (
    <div className="mt-12 max-w-[800px] mx-auto">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-4xl font-semibold text-green-400">{title}</h2>
        <div className="my-10 w-[500px] h-[500px] overflow-hidden">
          <Image src={img} className="w-full h-full object-cover rounded-2xl" alt="not found" />
        </div>
        <p className="text-xl mt-5">{description}</p>
      </div>
    </div>
  );
}
