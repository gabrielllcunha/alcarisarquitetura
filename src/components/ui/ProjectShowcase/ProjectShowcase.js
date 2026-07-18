import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PROJECTS } from '../../../content/projects';
import './ProjectShowcase.css';

const ROTATION_INTERVAL_MS = 4000;

function ProjectShowcase() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  const goToNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % PROJECTS.length);
  }, []);

  useEffect(() => {
    if (PROJECTS.length <= 1) return undefined;

    const intervalId = window.setInterval(goToNext, ROTATION_INTERVAL_MS);
    return () => window.clearInterval(intervalId);
  }, [goToNext, activeIndex]);

  const activeProject = PROJECTS[activeIndex];

  return (
    <div className="project-showcase">
      <button
        type="button"
        className="project-showcase__viewer"
        onClick={goToNext}
        aria-label={t('about.showcase.next')}
      >
        {PROJECTS.map((project, index) => (
          <img
            key={project.id}
            src={project.image}
            alt={t(`portfolio.projects.${project.slug}`)}
            className={`project-showcase__image ${
              index === activeIndex ? 'project-showcase__image--active' : ''
            }`}
            loading={index === 0 ? 'eager' : 'lazy'}
          />
        ))}

        <div className="project-showcase__overlay">
          <span className="project-showcase__category">
            {t(`portfolio.categories.${activeProject.category}`)}
          </span>
          <span className="project-showcase__title">
            {t(`portfolio.projects.${activeProject.slug}`)}
          </span>
        </div>
      </button>

      <div className="project-showcase__dots" aria-hidden="true">
        {PROJECTS.map((project, index) => (
          <span
            key={project.id}
            className={`project-showcase__dot ${
              index === activeIndex ? 'project-showcase__dot--active' : ''
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectShowcase;
