import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParallax } from '../../../hooks/useParallax';
import Logo from '../../ui/Logo';
import './Hero.css';

function Hero({ onWhatsAppClick }) {
  const { t } = useTranslation();
  const parallaxRef = useParallax(0.35);

  return (
    <section id="inicio" className="hero">
      <div className="hero__media" ref={parallaxRef}>
        <div className="hero__image hero__image--placeholder" aria-hidden="true" />
        <div className="hero__overlay" />
        <div className="hero__grain" aria-hidden="true" />
      </div>

      <div className="hero__content container">
        <div className="hero__eyebrow reveal">
          <span className="hero__line" />
          <span>{t('hero.eyebrow')}</span>
        </div>

        <h1 className="hero__title reveal reveal--delay-1">
          <Logo className="logo--hero" />
        </h1>

        <p className="hero__tagline reveal reveal--delay-2">{t('hero.tagline')}</p>

        <div className="hero__actions reveal reveal--delay-3">
          <button type="button" className="btn btn--primary btn--large" onClick={onWhatsAppClick}>
            {t('hero.ctaPrimary')}
          </button>
          <a href="#portfolio" className="btn btn--ghost btn--large">
            {t('hero.ctaSecondary')}
          </a>
        </div>

        <div className="hero__scroll reveal reveal--delay-4">
          <span>{t('hero.scroll')}</span>
          <div className="hero__scroll-line" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
