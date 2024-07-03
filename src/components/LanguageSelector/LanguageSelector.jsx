import React from 'react';
import content from '../../translations/es/global.json'

const LanguageSelector = ({ isScrolled }) => {
  return (
    <div className={`headerBottom items-center text-center ${isScrolled ? 'text-primary-color' : 'text-white-color'}`}>
      <form className="max-w-sm mx-auto 
      ">
        <select id="underline_select" className="block py-0.5 px-0.5 w-full text-center rounded-md text-sm bg-transparent border-1 border-white appearance-none focus:outline-none focus:ring-0 focus:border-white peer">
          <option
            className={`text-primary-color`}
            selected>{content.languages.language}</option>
          <option value="US"
            className={`text-primary-color`}
          >{content.languages.english}</option>
          <option value="SP"
            className={`text-primary-color`}
          >{content.languages.spanish}</option>
          <option value="PR"
            className={`text-primary-color`}
          >{content.languages.portuguese}</option>
        </select>
      </form>

    </div>


  );
}

export default LanguageSelector;
