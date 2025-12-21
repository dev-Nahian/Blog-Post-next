import Modal from "@/app/components/Modal";
import photos from "../../../image";
import Image from "next/image";

export default async function PhotoPage({ params }) {
  const { id } = await params;
  const photo = photos.find((image) => image.id === id);

  return (
    <Modal>
      <div className="w-1/2 mx-auto">
        <div>
          <h1 className="text-center text-3xl font-bold my-4">{photo.name}</h1>
        </div>
        <Image
          alt={photo.name}
          src={photo.src}
          className="w-full object-cover aspect-square "
        />
      </div>
    </Modal>
  );
}
