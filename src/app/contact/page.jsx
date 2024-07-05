import ContactForm from '@/components/ContactForm/ContactForm'
import React from 'react'
import content from '../../translations/es/global.json'
import Image from 'next/image'
const imageContact = '/img/contact3.svg'

export default function contact() {
  const form = content.form

  return (
    <section className={`min-h-screen flex flex-col items-center justify-center mt-0 p-4 sm:p-6 md:p-8 lg:p-14 lg:flex lg:flex-row lg:items-start lg:mt-16`}>

      <Image
        className={`mb-8 w-44 md:w-64 h-auto lg:w-80 md:mb-12 lg:mr-12 lg:mt-12`}
        src={imageContact}
        alt='Persona enviando email'
        width={100}
        height={100}
      />
      <ContactForm
        EmailAddress={form.email}
        FirstName={form.firstName}
        LastName={form.lastName}
        PhoneNumber={form.phoneNumber}
        PaxQuantity={form.paxQuantity}
        Message={form.message}
        TermsText1={form.termsText1}
        TermsText2={form.termsText2}
        TermsLink={form.termsLink}
        SubmitText={form.submitText}
      />


    </section>
  )
}
