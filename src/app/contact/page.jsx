import ContactForm from '@/components/ContactForm/ContactForm'
import React from 'react'
import content from '../../translations/es/global.json'


export default function contact() {
  const form = content.form

  return (
    <section className={`min-h-screen mt-10 align-middle p-4 sm:p-6 md:p-8 lg:p-14 `}>

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
