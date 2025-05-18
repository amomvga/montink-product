"use client"

import Image from "next/image"

interface ImageGalleryProps {
  images: string[]
  selectedImage: string
  onSelectImage: (image: string) => void
}

export default function ImageGallery({
  images,
  selectedImage,
  onSelectImage,
}: ImageGalleryProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg border bg-gray-100">
        <Image
          src={selectedImage || "/placeholder.svg"}
          alt="Imagem principal do produto"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2">
        {images.map((imageSource) => (
          <button
            key={imageSource}
            onClick={() => onSelectImage(imageSource)}
            className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md ${selectedImage === imageSource
                ? "ring-2 ring-rose-500"
                : "ring-1 ring-gray-200"
              }`}
          >
            <Image
              src={imageSource || "/placeholder.svg"}
              alt="Miniatura do produto"
              fill
              style={{ objectFit: "cover" }}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
