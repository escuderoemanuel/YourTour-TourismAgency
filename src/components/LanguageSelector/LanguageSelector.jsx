import React from 'react';
import content from '../../translations/es/global.json'

const LanguageSelector = ({ isScrolled }) => {
  return (
    <div className={`headerBottom items-center text-center ${isScrolled ? 'text-primary-color' : 'text-white-color'}`}>
      <form className="max-w-sm mx-auto w-fit
      ">
        <select id="underline_select" className="block py-0.5 px-0 text-center rounded-md bg-transparent border-1 border-white appearance-none focus:outline-none focus:ring-0 focus:border-white peer w-fit">
          <option
            className={`text-primary-color text-sm w-fit`}
            selected>{content.languages.language}</option>
          <option value="US"
            className={`text-primary-color text-sm`}
          >{content.languages.english}</option>
          <option value="SP"
            className={`text-primary-color text-sm`}
          >{content.languages.spanish}</option>
          <option value="PR"
            className={`text-primary-color text-sm`}
          >{content.languages.portuguese}</option>
        </select>
      </form>

    </div>


  );
}

export default LanguageSelector;
