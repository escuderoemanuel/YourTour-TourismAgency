import { Inter } from "next/font/google"
import "./globals.css"
import Header from '@/components/Header/Header'
import Whatsapp from '@/components/Whatsapp/Whatsapp'
import Footer from '@/components/Footer/Footer'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from "next-intl/server"


const inter = Inter({ subsets: ["latin"] })
const favicon = "/favicon.ico"

export const metadata = {
  icons: {
    icon: favicon,
  },
  title: "Your Tour ● Turism Agency",
  description: "Turism Agency Website located in Mendoza, Argentina",
}

export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href={metadata.icons.icon} />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`${inter.className} antialiased bg-neutral-100`}>
        <div className="flex flex-col h-screen max-w-4xl mx-auto">
          <NextIntlClientProvider messages={messages}>
            <Header />
            {children}
            <Whatsapp />
            <Footer />
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  )
}
