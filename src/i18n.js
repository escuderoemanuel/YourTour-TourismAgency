import { notFound } from "next/navigation"
import { getRequestConfig } from "next-intl/server"

// Can be imported from a shared config
const locales = ["es", "en", "pt"]

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound()

  const messages = {
    ...(await import(`../messages/${locale}/ContactPage.json`)).default,
    ...(await import(`../messages/${locale}/ExcursionsPage.json`)).default,
    ...(await import(`../messages/${locale}/Footer.json`)).default,
    ...(await import(`../messages/${locale}/Header.json`)).default,
    ...(await import(`../messages/${locale}/HomePage.json`)).default,
    ...(await import(`../messages/${locale}/Languages.json`)).default,
    ...(await import(`../messages/${locale}/NavLinks.json`)).default,
    ...(await import(`../messages/${locale}/ServicesPage.json`)).default,
    ...(await import(`../messages/${locale}/TermsPage.json`)).default
  }

  return {
    messages
  }
})
