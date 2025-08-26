"use client"

import { useEffect, useState } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = typeof window !== 'undefined' && window.localStorage.getItem('cookie-consent') === 'accepted'
    if (!accepted) setVisible(true)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="container-site mb-4">
        <div className="rounded-md bg-white shadow-md border p-4 sm:flex sm:items-center sm:justify-between">
          <p className="text-sm text-gray-700">
            Bu sitede deneyiminizi iyileştirmek için çerezler kullanıyoruz. Devam ederek çerezleri kabul etmiş olursunuz.
          </p>
          <div className="mt-3 sm:mt-0 flex gap-2">
            <button
              className="rounded-md border px-4 py-2 text-sm"
              onClick={() => setVisible(false)}
            >
              Reddet
            </button>
            <button
              className="rounded-md bg-primary px-4 py-2 text-white text-sm"
              onClick={() => {
                window.localStorage.setItem('cookie-consent', 'accepted')
                try {
                  if ('gtag' in window) {
                    ;(window as any).gtag('consent', 'update', {
                      ad_user_data: 'granted',
                      ad_personalization: 'granted',
                      ad_storage: 'granted',
                      analytics_storage: 'granted'
                    })
                  }
                } catch {}
                setVisible(false)
              }}
            >
              Kabul Et
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}