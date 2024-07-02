import React from 'react';

const LanguageSelector = ({ isScrolled }) => {
  return (
    <div className={`headerBottom items-center text-center `}>
      <h3 className={`
    ${isScrolled ? 'text-primary-color' : 'text-white-color'}`}>Idioma</h3>
    </div>
  );
}

export default LanguageSelector;
