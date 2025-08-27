"use client"

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import {
  type Model,
  type Roof,
  type Variant,
  type Color,
  type Selection,
  MODEL_NAMES,
  ROOF_NAMES,
  VARIANT_NAMES,
  COLOR_NAMES,
  getVerandaImagePath,
  getImageAltText,
  isSelectionComplete,
  getAvailableVariants,
  getAvailableRoofs
} from '@/types/veranda'

const DEFAULT_SELECTION: Selection = {
  model: 'prime-line-plus',
  roof: 'glass',
  variant: 'helder-glas',
  color: 'antraciet'
};

export default function VerandaConfigurator() {
  const pathname = usePathname()

  // Always start with default selection (no URL persistence)
  const [selection, setSelection] = useState<Selection>(DEFAULT_SELECTION)

  const [currentImagePath, setCurrentImagePath] = useState<string>('/products/verandas/placeholder.jpg')
  const [imageError, setImageError] = useState(false)

  // Reset selection when page is visited (pathname changes)
  useEffect(() => {
    setSelection(DEFAULT_SELECTION)
    setImageError(false)
  }, [pathname])

  // Update image when selection changes
  useEffect(() => {
    const newPath = getVerandaImagePath(selection)
    setCurrentImagePath(newPath)
    setImageError(false)
  }, [selection])

  // No URL synchronization - selections are not persisted

  // Handle selection changes with smart defaults
  const updateSelection = (field: keyof Selection, value: any) => {
    setSelection(prev => {
      const newSelection = { ...prev, [field]: value }
      
      // Reset dependent fields when model or roof changes
      if (field === 'model') {
        // Cubo Line için sadece cam çatı seç
        const availableRoofs = getAvailableRoofs(value as Model)
        newSelection.roof = availableRoofs[0] || 'glass'
        const availableVariants = getAvailableVariants(newSelection.roof)
        newSelection.variant = availableVariants[0] || 'default'
        newSelection.color = 'antraciet'
      } else if (field === 'roof') {
        const availableVariants = getAvailableVariants(value as Roof)
        newSelection.variant = availableVariants[0] || 'default'
        newSelection.color = 'antraciet'
      } else if (field === 'variant') {
        newSelection.color = 'antraciet'
      }
      
      return newSelection
    })
  }

  // Handle image error
  const handleImageError = () => {
    setImageError(true)
    setCurrentImagePath('/products/verandas/placeholder.jpg')
  }

  const isComplete = isSelectionComplete(selection)
  const availableVariants = selection.roof ? getAvailableVariants(selection.roof) : []

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Sol taraf - Görsel Alanı */}
      <div className="space-y-4">
        <div className="aspect-video rounded-lg bg-gray-100 overflow-hidden relative">
          {!imageError ? (
            <Image
              src={currentImagePath}
              alt={getImageAltText(selection)}
              fill
              className="object-cover"
              priority
              sizes="(min-width:1024px) 50vw, 100vw"
              onError={handleImageError}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              <div className="text-center">
                <div className="text-6xl mb-2">🏠</div>
                <div className="text-sm">Görsel yüklenemedi</div>
              </div>
            </div>
          )}
        </div>
        
        {/* Görsel bilgisi */}
        <div className="text-center text-sm text-gray-600">
          {isComplete ? (
            <span className="text-green-600">✓ {getImageAltText(selection)}</span>
          ) : (
            <span>Lütfen model, çatı tipi, varyant ve renk seçiniz</span>
          )}
        </div>
      </div>

      {/* Sağ taraf - Seçim Alanı */}
      <div className="space-y-6">
        {/* Model Seçimi */}
        <div>
          <div className="font-medium text-gray-900 mb-3">Model</div>
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(MODEL_NAMES).map(([key, name]) => (
              <button
                key={key}
                onClick={() => updateSelection('model', key as Model)}
                className={`px-4 py-3 text-sm font-medium rounded-lg border transition-all ${
                  selection.model === key
                    ? 'border-primary bg-primary text-white shadow-sm'
                    : 'border-gray-300 text-gray-700 hover:border-primary/50 hover:bg-primary/5'
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        {/* Çatı Tipi Seçimi */}
        {selection.model && (
          <div>
            <div className="font-medium text-gray-900 mb-3">Çatı Tipi</div>
            <div className="flex gap-2">
              {getAvailableRoofs(selection.model).map((roof) => (
                <button
                  key={roof}
                  onClick={() => updateSelection('roof', roof)}
                  className={`px-4 py-3 text-sm font-medium rounded-lg border transition-all ${
                    selection.roof === roof
                      ? 'border-primary bg-primary text-white shadow-sm'
                      : 'border-gray-300 text-gray-700 hover:border-primary/50 hover:bg-primary/5'
                  }`}
                >
                  {ROOF_NAMES[roof]}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Varyant Seçimi */}
        {selection.roof && availableVariants.length > 0 && (
          <div>
            <div className="font-medium text-gray-900 mb-3">Varyant</div>
            <div className="flex flex-wrap gap-2">
              {availableVariants.map((variant) => (
                <button
                  key={variant}
                  onClick={() => updateSelection('variant', variant)}
                  className={`px-4 py-3 text-sm font-medium rounded-lg border transition-all ${
                    selection.variant === variant
                      ? 'border-primary bg-primary text-white shadow-sm'
                      : 'border-gray-300 text-gray-700 hover:border-primary/50 hover:bg-primary/5'
                  }`}
                >
                  {VARIANT_NAMES[variant]}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Renk Seçimi */}
        {selection.variant && (
          <div>
            <div className="font-medium text-gray-900 mb-3">Renk</div>
            <div className="flex gap-2">
              {Object.entries(COLOR_NAMES).map(([key, name]) => (
                <button
                  key={key}
                  onClick={() => updateSelection('color', key as Color)}
                  className={`px-4 py-3 text-sm font-medium rounded-lg border transition-all ${
                    selection.color === key
                      ? 'border-primary bg-primary text-white shadow-sm'
                      : 'border-gray-300 text-gray-700 hover:border-primary/50 hover:bg-primary/5'
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Aksiyon Butonları */}
        <div className="pt-4 flex gap-3">
          <a
            href="/teklif"
            className={`rounded-md px-5 py-2.5 text-sm font-medium transition-colors ${
              isComplete
                ? 'bg-primary text-white hover:bg-primary/90'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            onClick={(e) => !isComplete && e.preventDefault()}
          >
            Bu ürün için fiyat isteyin
          </a>
          <a
            href="#ozellikler"
            className="rounded-md border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Özellikler
          </a>
        </div>

        {/* Seçim Özeti */}
        {isComplete && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="text-sm text-green-800">
              <div className="font-medium mb-2">Seçilen Konfigürasyon:</div>
              <div className="space-y-1">
                <div>• Model: {MODEL_NAMES[selection.model!]}</div>
                <div>• Çatı: {ROOF_NAMES[selection.roof!]}</div>
                <div>• Varyant: {VARIANT_NAMES[selection.variant!]}</div>
                <div>• Renk: {COLOR_NAMES[selection.color!]}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
