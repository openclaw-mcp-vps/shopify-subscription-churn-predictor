import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Churn Predictor — Stop Shopify Subscription Cancellations',
  description: 'Predict which Shopify subscribers will cancel next. Get churn risk scores and automated retention actions before it is too late.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="71236979-a2e7-4daf-a45c-44bc8649f4a3"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
