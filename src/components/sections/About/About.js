import React from 'react';
import { ABOUT_HIGHLIGHTS } from '../../../constants/site';
import { useTranslation } from 'react-i18next';
import ScrollReveal from '../../ui/ScrollReveal';
import ProjectShowcase from '../../ui/ProjectShowcase';
import './About.css';

function About() {
  const { t } = useTranslation();
  const paragraphs = t('about.paragraphs', { returnObjects: true });

  return (
    <section id="about" className="about section">
      <div className="container about__grid">
        <ScrollReveal className="about__visual">
          <ProjectShowcase />
          <div className="about__accent" aria-hidden="true" />
        </ScrollReveal>

        <ScrollReveal className="about__content reveal--delay-2">
          <span className="section-label">{t('about.label')}</span>

          {Array.isArray(paragraphs) &&
            paragraphs.map((paragraph, index) => (
              <p key={index} className="about__text">
                {paragraph}
              </p>
            ))}

          <div className="about__stats">
            {ABOUT_HIGHLIGHTS.map((item) => (
              <div key={item.labelKey} className="about__stat">
                <span className="about__stat-number">{item.value}</span>
                <span className="about__stat-label">{t(item.labelKey)}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default About;
