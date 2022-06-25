import Script from 'next/script'
import React from 'react'

const ga = 'G-02BZYLC7SH'
export const GoogleAnalytics = () => {
  return (
    <>
    <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${ga}`} />

    <Script strategy="lazyOnload" id="ga-1">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${ga}', {
            page_path: window.location.pathname,
            });
        `}
    </Script>
    </>
  )
}
