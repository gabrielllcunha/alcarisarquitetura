import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParallax } from '../../../hooks/useParallax';
import './ParallaxQuote.css';

function ParallaxQuote() {
  const { t } = useTranslation();
  const parallaxRef = useParallax(0.25);

  return (
    <section className="parallax-quote" aria-label={t('quote.ariaLabel')}>
      <div className="parallax-quote__media" ref={parallaxRef}>
        <div className="parallax-quote__image" aria-hidden="true" />
        <div className="parallax-quote__overlay" />
      </div>
      <blockquote className="parallax-quote__content container">
        <p className="parallax-quote__text">&ldquo;{t('quote.text')}&rdquo;</p>
        <cite className="parallax-quote__cite">— {t('quote.cite')}</cite>
      </blockquote>
    </section>
  );
}

export default ParallaxQuote;
