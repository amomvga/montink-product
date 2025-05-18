"use client"

import { useEffect, useState } from "react"
import ImageGallery from "../components/image-gallery"
import ProductInfo from "../components/product-info"
import DeliveryCheck from "../components/delivery-check"
import { productData } from "../data/product"

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState("")
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedImage, setSelectedImage] = useState(productData.images[0])
  const [cepInfo, setCepInfo] = useState(null)

  useEffect(() => {
    const savedData = localStorage.getItem("productSelections")

    if (savedData) {
      const parsedData = JSON.parse(savedData)
      const now = new Date().getTime()

      if (parsedData.expiry && now < parsedData.expiry) {
        setSelectedColor(parsedData.color || "")
        setSelectedSize(parsedData.size || "")
        setSelectedImage(parsedData.image || productData.images[0])
        setCepInfo(parsedData.cepInfo || null)
      } else {
        localStorage.removeItem("productSelections")
      }
    }
  }, [])

  useEffect(() => {
    const saveData = () => {
      const expiry = new Date().getTime() + 15 * 60 * 1000
      const dataToSave = {
        color: selectedColor,
        size: selectedSize,
        image: selectedImage,
        cepInfo: cepInfo,
        expiry: expiry,
      }

      localStorage.setItem("productSelections", JSON.stringify(dataToSave))
    }

    if (selectedColor || selectedSize || cepInfo || selectedImage !== productData.images[0]) {
      saveData()
    }
  }, [selectedColor, selectedSize, selectedImage, cepInfo])

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-[35%]">
          <ImageGallery images={productData.images} selectedImage={selectedImage} onSelectImage={setSelectedImage} />
        </div>

        <div className="w-full md:w-[65%]">
          <ProductInfo
            product={productData}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />

          <div className="mt-8 border-t pt-6">
            <DeliveryCheck cepInfo={cepInfo} setCepInfo={setCepInfo} />
          </div>
        </div>
      </div>
    </div>
  )
}
