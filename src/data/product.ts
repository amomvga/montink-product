import type { Product } from "../types/product"

export const productData: Product = {
  id: "1",
  name: "Tênis Esportivo Cross trainer NIKE Air Monarch Iv masculino",
  description:
    "O Tênis Esportivo Cross trainer NIKE Air Monarch Iv masculino é perfeito para atividades físicas e uso casual. Desenvolvido com tecnologia de amortecimento avançada e materiais respiráveis, proporciona conforto durante todo o dia. Seu design moderno combina com diversos estilos, enquanto a sola de borracha oferece aderência e durabilidade excepcionais.",
  price: 860.00,
  originalPrice: 960.99,
  category: "Calçados",
  images: [
    "/tenis-perfil.jpg?height=600&width=600&text=Tênis+Preto",
    "/tenis-lateral.jpg?height=600&width=600&text=Tênis+Lateral",
    "/tenis-traseira.jpg?height=600&width=600&text=Tênis+Traseira",
    "/tenis-sola.jpg?height=600&width=600&text=Tênis+Sola",
    "/tenis-detalhe.jpg?height=600&width=600&text=Tênis+Detalhe",
  ],
  colors: [
    { id: "preto", name: "Preto", value: "#000000" },
    { id: "branco", name: "Branco", value: "#FFFFFF" },
    { id: "azul", name: "Azul", value: "#0066CC" },
    { id: "vermelho", name: "Vermelho", value: "#CC0000" },
  ],
  sizes: [
    { id: "35", name: "35", value: "35" },
    { id: "36", name: "36", value: "36" },
    { id: "37", name: "37", value: "37" },
    { id: "38", name: "38", value: "38" },
    { id: "39", name: "39", value: "39" },
    { id: "40", name: "40", value: "40" },
    { id: "41", name: "41", value: "41" },
    { id: "42", name: "42", value: "42" },
    { id: "43", name: "43", value: "43" },
    { id: "44", name: "44", value: "44" },
  ],
}
