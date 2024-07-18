"use client"

import { useLocale, useTranslations } from "next-intl"
import { useRouter, usePathname } from "next/navigation"
import { useTransition } from "react"

export default function LanguageSelector({ isScrolled }) {
  const t = useTranslations('Languages')

  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const pathname = usePathname()
  const localActive = useLocale()

  const onSelectChange = e => {
    const nextLocale = e.target.value
    const segments = pathname.split("/")
    segments[1] = nextLocale // Replace the locale segment
    const newPath = segments.join("/")

    startTransition(() => {
      router.replace(newPath)
    })
  }

  return (
    <div
      className={`flex items-center justify-center ${isScrolled ? "text-primary-color" : "text-white-color"
        }`}
    >
      <label className="border-none rounded text-black bg-red-400">
        <p className="sr-only">change language</p>
        <select
          defaultValue={localActive}
          className="font-medium rounded p-1"
          onChange={onSelectChange}
          disabled={isPending}
        >
          <option value="es">{t('spanish')}</option>
          <option value="en">{t('english')}</option>
          <option value="pt">{t('portuguese')}</option>
        </select>
      </label>
    </div>
  )
}
