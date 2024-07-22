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

    < div div className={`flex items-center justify-center ${isScrolled ? "text-primary-color" : "text-white-color"
      }`
    }>

      <label>
        <p className="sr-only">{t('language')}</p>
      </label>
      <select
        id='languageSelector'
        className={`flex flex-row justify-between text-xs rounded border-1 border-gray-300 bg-transparent focus:border-gray-300  ${isScrolled ? "text-primary-color" : "text-secondary-color "}`}
        defaultValue={localActive}
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option className='text-primary-color' value="es">{t('spanish')}</option>
        <option className='text-primary-color' value="en">{t('english')}</option>
        <option className='text-primary-color' value="pt">{t('portuguese')}</option>
      </select>





    </ div>


  )
}
