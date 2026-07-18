import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSelector.css';

function LanguageSelector() {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage || i18n.language;
  const isEnglish = currentLanguage === 'en';

  return (
    <div className="language-selector" role="group" aria-label={t('nav.language')}>
      <button
        type="button"
        className={`language-selector__option ${isEnglish ? 'language-selector__option--active' : ''}`}
        onClick={() => i18n.changeLanguage('en')}
        aria-pressed={isEnglish}
      >
        EN
      </button>
      <span className="language-selector__divider" aria-hidden="true">
        /
      </span>
      <button
        type="button"
        className={`language-selector__option ${!isEnglish ? 'language-selector__option--active' : ''}`}
        onClick={() => i18n.changeLanguage('pt')}
        aria-pressed={!isEnglish}
      >
        PT
      </button>
    </div>
  );
}

export default LanguageSelector;
