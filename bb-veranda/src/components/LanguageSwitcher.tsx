"use client"

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'

export default function LanguageSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  function switchTo(target: 'tr' | 'nl') {
    if (target === locale) return
    const segments = pathname.split('/').filter(Boolean)
    // If first segment is a locale, replace it; otherwise prepend
    const hasLocale = segments[0] === 'tr' || segments[0] === 'nl'
    const newSegments = hasLocale ? [target, ...segments.slice(1)] : [target, ...segments]
    const nextPath = '/' + newSegments.join('/')
    router.push(nextPath)
  }

  return (
    <div className="flex items-center gap-2 text-xs">
      <button
        aria-label="Türkçe"
        className={`px-2 py-1 rounded ${locale === 'tr' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
        onClick={() => switchTo('tr')}
      >
        TR
      </button>
      <span className="text-gray-300">|</span>
      <button
        aria-label="Nederlands"
        className={`px-2 py-1 rounded ${locale === 'nl' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
        onClick={() => switchTo('nl')}
      >
        NL
      </button>
    </div>
  )
}



