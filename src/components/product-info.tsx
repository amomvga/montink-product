"use client"

import { useState } from "react"
import { ShoppingCart, Heart } from "lucide-react"
import { Button } from "../components/ui/button"
import VariantSelector from "./variant-selector"
import type { Product } from "../types/product"

interface ProductInfoProps {
  product: Product
  selectedColor: string
  setSelectedColor: (color: string) => void
  selectedSize: string
  setSelectedSize: (size: string) => void
}

export default function ProductInfo({
  product,
  selectedColor,
  setSelectedColor,
  selectedSize,
  setSelectedSize,
}: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1)

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price)
  }

  return (
    <div className="flex flex-col gap-4">
      <nav className="text-sm text-gray-500">
        <ol className="flex items-center gap-1">
          <li>
            <a href="#" className="hover:text-rose-500">
              Home
            </a>
          </li>
          <li>&gt;</li>
          <li>
            <a href="#" className="hover:text-rose-500">
              {product.category}
            </a>
          </li>
          <li>&gt;</li>
          <li className="text-gray-700">{product.name}</li>
        </ol>
      </nav>

      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{product.name}</h1>
        <div className="mt-2 flex items-center gap-2">
          <div className="flex text-yellow-400">{"★".repeat(5)}</div>
          <span className="text-sm text-gray-500">(128 avaliações)</span>
        </div>
      </div>

      <div className="mt-2">
        <p className="text-3xl font-bold text-gray-900">{formatPrice(product.price)}</p>
        {product.originalPrice && (
          <p className="text-sm text-gray-500 line-through">{formatPrice(product.originalPrice)}</p>
        )}
        <p className="text-sm text-green-600 mt-1">Em até 10x de {formatPrice(product.price / 10)} sem juros</p>
      </div>

      <div className="mt-4 space-y-6">
        <VariantSelector
          label="Cor"
          options={product.colors}
          selectedOption={selectedColor}
          onSelect={setSelectedColor}
          type="color"
        />

        <VariantSelector
          label="Tamanho"
          options={product.sizes}
          selectedOption={selectedSize}
          onSelect={setSelectedSize}
          type="size"
        />
      </div>

      <div className="mt-4">
        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
          Quantidade
        </label>
        <div className="flex items-center">
          <button
            onClick={decreaseQuantity}
            className="h-10 w-10 rounded-l-md border border-gray-300 bg-gray-100 flex items-center justify-center"
          >
            -
          </button>
          <div className="h-10 w-14 border-t border-b border-gray-300 flex items-center justify-center">{quantity}</div>
          <button
            onClick={increaseQuantity}
            className="h-10 w-10 rounded-r-md border border-gray-300 bg-gray-100 flex items-center justify-center"
          >
            +
          </button>
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <Button className="flex-1 bg-rose-600 hover:bg-rose-700">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Adicionar ao carrinho
        </Button>
        <Button variant="outline" className="flex-1 border-rose-200 text-rose-600 hover:bg-rose-50">
          <Heart className="mr-2 h-4 w-4" />
          Adicionar à lista de desejos
        </Button>
      </div>

      <div className="mt-6 border-t pt-4">
        <h3 className="text-lg font-medium text-gray-900">Descrição do produto</h3>
        <div className="mt-2 text-gray-700 space-y-2">
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  )
}
