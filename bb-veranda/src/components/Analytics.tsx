"use client"

import Script from 'next/script'
import { useEffect, useState } from 'react'

export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID
  const [consent, setConsent] = useState<'granted' | 'denied'>('denied')

  useEffect(() => {
    const stored = window.localStorage.getItem('cookie-consent')
    setConsent(stored === 'accepted' ? 'granted' : 'denied')
  }, [])

  useEffect(() => {
    if (!('gtag' in window)) return
    // Consent Mode v2
    ;(window as any).gtag('consent', 'update', {
      ad_user_data: consent,
      ad_personalization: consent,
      ad_storage: consent,
      analytics_storage: consent
    })
  }, [consent])

  if (!gaId) return null
  return (
    <>
      <Script id="ga-consent" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('consent','default',{ad_user_data:'denied',ad_personalization:'denied',ad_storage:'denied',analytics_storage:'denied'}); gtag('js', new Date());`}
      </Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`gtag('config','${gaId}',{ anonymize_ip: true });`}
      </Script>
    </>
  )
}



