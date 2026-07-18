import React from 'react';
import { SERVICE_IDS } from '../../../constants/site';
import { useTranslation } from 'react-i18next';
import ScrollReveal from '../../ui/ScrollReveal';
import './Services.css';

function Services() {
  const { t } = useTranslation();

  return (
    <section id="servicos" className="services section">
      <div className="container">
        <ScrollReveal className="services__header">
          <span className="section-label section-label--light">{t('services.label')}</span>
          <h2 className="section-title section-title--light">{t('services.title')}</h2>
          <p className="services__intro">{t('services.intro')}</p>
        </ScrollReveal>

        <div className="services__grid">
          {SERVICE_IDS.map((serviceId, index) => (
            <ScrollReveal
              key={serviceId}
              className={`service-card reveal--delay-${Math.min(index + 1, 4)}`}
            >
              <span className="service-card__index">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="service-card__title">
                {t(`services.items.${serviceId}.title`)}
              </h3>
              <p className="service-card__description">
                {t(`services.items.${serviceId}.description`)}
              </p>
              <div className="service-card__line" aria-hidden="true" />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
