"use client"

interface VariantSelectorProps {
  label: string
  options: Array<{ id: string; name: string; value: string }>
  selectedOption: string
  onSelect: (option: string) => void
  type: "color" | "size"
}

export default function VariantSelector({ label, options, selectedOption, onSelect, type }: VariantSelectorProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isSelected = selectedOption === option.id

          if (type === "color") {
            return (
              <button
                key={option.id}
                onClick={() => onSelect(option.id)}
                className={`relative h-10 w-10 rounded-full ${isSelected ? "ring-2 ring-rose-500 ring-offset-2" : ""}`}
                title={option.name}
              >
                <span className="absolute inset-0 rounded-full" style={{ backgroundColor: option.value }} />
              </button>
            )
          }

          return (
            <button
              key={option.id}
              onClick={() => onSelect(option.id)}
              className={`min-w-[3rem] rounded-md border px-3 py-2 text-sm ${
                isSelected
                  ? "border-rose-500 bg-rose-50 text-rose-600"
                  : "border-gray-300 bg-white text-gray-900 hover:bg-gray-50"
              }`}
            >
              {option.name}
            </button>
          )
        })}
      </div>
    </div>
  )
}
