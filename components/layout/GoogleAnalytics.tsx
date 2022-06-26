import Script from 'next/script'
import React from 'react'
import { GA } from '../../src/consts'

export const GoogleAnalytics = () => {
  return (
    <>
    <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${GA}`} />

    <Script strategy="lazyOnload" id="ga-1">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA}', {
            page_path: window.location.pathname,
            });
        `}
    </Script>
    </>
  )
}
