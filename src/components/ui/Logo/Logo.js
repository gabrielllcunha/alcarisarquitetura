import React from 'react';
import { BRAND } from '../../../constants/site';
import { useTranslation } from 'react-i18next';
import './Logo.css';

const LOGO_VARIANTS = {
  horizontalTagline: BRAND.logos.horizontalTagline,
  wordmark: BRAND.logos.wordmark,
  vertical: BRAND.logos.vertical,
  badge: BRAND.logos.badge,
};

function Logo({ variant = 'horizontalTagline', className = '', ...props }) {
  const { t } = useTranslation();

  return (
    <img
      src={LOGO_VARIANTS[variant]}
      alt={t('brand.alt')}
      className={`logo logo--${variant} ${className}`.trim()}
      {...props}
    />
  );
}

export default Logo;
