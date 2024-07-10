import React from 'react';
import Link from 'next/link';

const ContactForm = ({ EmailAddress, FirstName, LastName, PhoneNumber, PaxQuantity, Message, TermsText1, TermsText2, SubmitText }) => {
  const TermsLink = `/terms`
  return (
    <form className="max-w-md mx-auto"
      action='https://formsubmit.co/escudero.mdz@gmail.com'
      method='POST'
    >


      {/* Email */}
      <div className="relative z-0 w-full mb-7 group">
        <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent   border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-sky-500 focus:outline-none focus:ring-0 focus:border-sky-700 peer " placeholder=" " required />
        <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-sky-700 peer-focus:dark:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{EmailAddress}</label>
      </div>

      {/* Name */}
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-7 group">
          <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-sky-500 focus:outline-none focus:ring-0 focus:border-sky-700 peer" placeholder=" " required />
          <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-sky-700 peer-focus:dark:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{FirstName}</label>
        </div>
        {/* LastName */}
        <div className="relative z-0 w-full mb-7 group">
          <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-sky-500 focus:outline-none focus:ring-0 focus:border-sky-700 peer" placeholder=" " required />
          <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-sky-700 peer-focus:dark:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{LastName}</label>
        </div>
      </div>

      <div className="grid md:grid-cols-2 md:gap-6">
        {/* Phone Number */}
        <div className="relative z-0 w-full mb-7 group">
          <input type="tel" pattern="^(?:[0-9]\s*){12,14}$" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-sky-500 focus:outline-none focus:ring-0 focus:border-sky-700 peer" placeholder=" " required />
          <label for="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-sky-700 peer-focus:dark:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{PhoneNumber}</label>
        </div>
        {/* paxQuantity */}
        <div className="relative z-0 w-full mb-7 group">
          <input type="number" name="floating_paxQuantity" id="floating_paxQuantity" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-sky-500 focus:outline-none focus:ring-0 focus:border-sky-700 peer" placeholder=" " required />
          <label for="floating_paxQuantity" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-sky-700 peer-focus:dark:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{PaxQuantity}</label>
        </div>

      </div>
      {/* Message */}
      <div className="relative z-0 w-full mb-7 group">
        <textarea type="textarea" name="floating_message" id="floating_message" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-sky-500 focus:outline-none focus:ring-0 focus:border-sky-700 peer" placeholder=" " required />
        <label for="floating_message" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-sky-700 peer-focus:dark:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{Message}</label>
      </div>

      {/* Terms */}
      <div className="flex items-start mb-7 w-full">
        <div className="flex items-center h-5">
          <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-sky-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-sky-700 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
        </div>
        <label for="terms" className="ms-2 text-start text-sm font-medium text-gray-900 dark:text-gray-300">{TermsText1}
          <Link
            target='_blank'
            rel='noopener noreferrer'
            title='Terms and Conditions'
            aria-label='Terms and Conditions'
            href={TermsLink}
            className="text-sky-700 hover:underline dark:text-sky-500">{TermsText2}
          </Link>
        </label>
      </div>

      {/* Button */}
      <button type="submit" className="text-white hover:bg-sky-700 bg-sky-600 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 my-4 text-center dark:bg-sky-700 dark:hover:bg-sky-700 dark:focus:ring-sky-600">{SubmitText}</button>

      <input
        type='hidden'
        name='_next'
        defaultValue='http://localhost:3000/contact'
      />
      <input type='hidden' name='_captcha' defaultValue='false' />
    </form>
  );
}

export default ContactForm;
