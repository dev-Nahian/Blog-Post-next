import Image from "next/image";


export default function BlogCard({image,title,description}) {
  return (
    <div className="w-full h-full p-4 border border-white/60 rounded-2xl">
        <div className="w-full h-[300px]">
            <Image src={image} className="object-cover w-full h-full" alt="not found"/>
        </div>

        <div className="mt-3">
            <h3 className="text-2xl text-white/80">{title}</h3>
            <p className="mt-2 text-lg text-white/50 line-clamp-3">{description}</p>
        </div>
    </div>
  )
}
