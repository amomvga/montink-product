"use client"

import type React from "react"

import { useState } from "react"
import { Truck, Loader2 } from "lucide-react"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"

interface CepInfo {
  cep: string
  logradouro: string
  complemento: string
  bairro: string
  localidade: string
  uf: string
}

interface DeliveryCheckProps {
  cepInfo: CepInfo | null
  setCepInfo: (info: CepInfo | null) => void
}

export default function DeliveryCheck({ cepInfo, setCepInfo }: DeliveryCheckProps) {
  const [cep, setCep] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "")

    if (value.length > 8) {
      value = value.slice(0, 8)
    }

    if (value.length > 5) {
      value = value.slice(0, 5) + "-" + value.slice(5)
    }

    setCep(value)
    setError("")
  }

  const checkCep = async () => {
    const cleanCep = cep.replace(/\D/g, "")

    if (cleanCep.length !== 8) {
      setError("CEP inválido. Digite um CEP com 8 dígitos.")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`)
      const data = await response.json()

      if (data.erro) {
        setError("CEP não encontrado.")
        setCepInfo(null)
      } else {
        setCepInfo(data)
      }
    } catch (err) {
      setError("Erro ao consultar o CEP. Tente novamente.")
      setCepInfo(null)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900">Calcular frete e prazo</h3>

      <div className="flex flex-col sm:flex-row gap-2">
        <div className="relative flex-1">
          <Input
            type="text"
            placeholder="Digite seu CEP"
            value={cep}
            onChange={handleCepChange}
            maxLength={9}
            className="pr-24"
          />
          <a
            href="https://buscacepinter.correios.com.br/app/endereco/index.php"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-rose-600 hover:underline"
          >
            Não sei meu CEP
          </a>
        </div>
        <Button onClick={checkCep} disabled={isLoading} className="bg-rose-600 hover:bg-rose-700">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Consultando...
            </>
          ) : (
            "Calcular"
          )}
        </Button>
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}

      {cepInfo && (
        <div className="rounded-lg border border-gray-200 p-4">
          <div className="flex items-start gap-3">
            <Truck className="h-5 w-5 text-green-600 mt-0.5" />
            <div>
              <p className="font-medium text-gray-900">Entrega disponível para este endereço:</p>
              <p className="text-gray-700">
                {cepInfo.logradouro}, {cepInfo.bairro}, {cepInfo.localidade} - {cepInfo.uf}, {cepInfo.cep}
              </p>
              <div className="mt-3 space-y-2">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-sm">Entrega padrão</span>
                  <span className="font-medium">R$ 19,90</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-sm">Entrega expressa</span>
                  <span className="font-medium">R$ 29,90</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
