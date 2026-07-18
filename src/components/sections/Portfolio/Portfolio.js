import React from 'react';
import { PROJECTS } from '../../../content/projects';
import { useTranslation } from 'react-i18next';
import ScrollReveal from '../../ui/ScrollReveal';
import './Portfolio.css';

function Portfolio() {
  const { t } = useTranslation();

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container">
        <ScrollReveal className="portfolio__header">
          <span className="section-label">{t('portfolio.label')}</span>
          <h2 className="section-title">{t('portfolio.title')}</h2>
          <p className="portfolio__intro">{t('portfolio.intro')}</p>
        </ScrollReveal>

        <div className="portfolio__grid">
          {PROJECTS.map((project, index) => (
            <ScrollReveal
              key={project.id}
              className={`portfolio-card reveal--delay-${Math.min(index % 4 + 1, 4)}`}
            >
              <a
                href={project.instagramUrl}
                className="portfolio-card__link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('portfolio.viewOnInstagram', {
                  project: t(`portfolio.projects.${project.slug}`),
                })}
              >
                <div className="portfolio-card__image">
                  <img
                    src={project.image}
                    alt={t(`portfolio.projects.${project.slug}`)}
                    className="portfolio-card__photo"
                    loading="lazy"
                  />
                  <div className="portfolio-card__overlay">
                    <span className="portfolio-card__category">
                      {t(`portfolio.categories.${project.category}`)}
                    </span>
                    <h3 className="portfolio-card__title">
                      {t(`portfolio.projects.${project.slug}`)}
                    </h3>
                    <span className="portfolio-card__year">{project.year}</span>
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
