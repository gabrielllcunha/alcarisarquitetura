import React from 'react';
import { PROCESS_STEPS } from '../../../constants/site';
import { useTranslation } from 'react-i18next';
import ScrollReveal from '../../ui/ScrollReveal';
import './Process.css';

function Process() {
  const { t } = useTranslation();

  return (
    <section id="process" className="process section">
      <div className="container">
        <ScrollReveal className="process__header">
          <span className="section-label section-label--light">{t('process.label')}</span>
          <h2 className="section-title section-title--light">{t('process.title')}</h2>
        </ScrollReveal>
      </div>

      <div className="container process__timeline-wrap">
        <div className="process__timeline">
          {PROCESS_STEPS.map((item, index) => (
            <ScrollReveal
              key={item.step}
              className={`process-step reveal--delay-${Math.min(index + 1, 6)}`}
            >
              <span className="process-step__number">{item.step}</span>
              <div className="process-step__content">
                <h3 className="process-step__title">
                  {t(`process.steps.${item.id}.title`)}
                </h3>
                <p className="process-step__description">
                  {t(`process.steps.${item.id}.description`)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
