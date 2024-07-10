import React from 'react';
import content from '../../translations/es/global.json';

const LanguageSelector = ({ isScrolled }) => {
  return (
    <div className={`flex items-center justify-center ${isScrolled ? 'text-primary-color' : 'text-white-color'}`}>
      <form className="max-w-sm mx-auto">
        <select id="underline_select" className="block py-1 px-2 rounded-md bg-transparent border border-white appearance-none focus:outline-none focus:ring-0 focus:border-white peer">
          <option value="US" className="text-sm text-primary-color">{content.languages.english}</option>
          <option selected value="SP" className="text-sm text-primary-color">{content.languages.spanish}</option>
          <option value="PR" className="text-sm text-primary-color">{content.languages.portuguese}</option>
        </select>
      </form>
    </div>
  );
}

export default LanguageSelector;
