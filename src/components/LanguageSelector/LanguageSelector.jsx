import React, { useState } from 'react';
import content from '../../translations/es/global.json';
import { use } from 'i18next';

const LanguageSelector = ({ isScrolled }) => {
  const [language, setLanguage] = useState('SP');

  const handleChangeLanguage = (e) => {
    setLanguage(e.target.value);
    use(language);
  };



  return (
    <div className={`flex items-center justify-center ${isScrolled ? 'text-primary-color' : 'text-white-color'}`}>
      <form className="max-w-sm mx-auto">
        <select
          id="underline_select"
          className="block py-1 px-2 rounded-md bg-transparent border border-white appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
          value={language}
          onChange={handleChangeLanguage}>
          <option value="US" className="text-sm text-primary-color">{content.languages.english}</option>
          <option value="SP" className="text-sm text-primary-color">{content.languages.spanish}</option>
          <option value="PR" className="text-sm text-primary-color">{content.languages.portuguese}</option>
        </select>
      </form>
    </div>
  );
}

export default LanguageSelector;
