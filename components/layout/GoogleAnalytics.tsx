import Script from 'next/script'
import React from 'react'
import { GA } from '../../src/consts'

export const GoogleAnalytics = () => {
  return (
    <>
       <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA}`}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA}', { page_path: window.location.pathname });
            `,
          }}
        />
    </>
  )
}
