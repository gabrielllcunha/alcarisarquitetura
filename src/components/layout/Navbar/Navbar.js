import React, { useEffect, useState } from 'react';
import { NAV_LINKS } from '../../../constants/site';
import { useTranslation } from 'react-i18next';
import Logo from '../../ui/Logo';
import LanguageSelector from '../../ui/LanguageSelector';
import './Navbar.css';

function Navbar({ onWhatsAppClick }) {
  const { t } = useTranslation();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [pastHero, setPastHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('inicio');
    const fadeDistance = 100;

    const onScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = hero?.offsetHeight ?? window.innerHeight;

      setScrollProgress(Math.min(scrollY / fadeDistance, 1));
      setPastHero(scrollY >= heroHeight - 1);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.innerWidth > 900) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', closeOnDesktop);
    return () => window.removeEventListener('resize', closeOnDesktop);
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const headerClassName = [
    'navbar',
    scrollProgress > 0 ? 'navbar--scrolled' : '',
    pastHero ? 'navbar--past-hero' : '',
    menuOpen ? 'navbar--menu-open' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <header
      className={headerClassName}
      style={{
        '--nav-bg-alpha': scrollProgress * 0.52,
        '--nav-blur': `${scrollProgress * 18}px`,
        '--nav-shadow-alpha': scrollProgress * 0.1,
      }}
    >
      <div className="navbar__inner container">
        <a href="#home" className="navbar__brand" onClick={closeMenu}>
          <Logo className="logo--nav" />
        </a>

        <nav
          id="site-navigation"
          className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}
          aria-hidden={!menuOpen}
        >
          <ul className="navbar__links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {t(link.labelKey)}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="navbar__cta btn btn--primary"
            onClick={() => {
              closeMenu();
              onWhatsAppClick();
            }}
          >
            {t('nav.cta')}
          </button>
          <div className="navbar__nav-lang">
            <LanguageSelector />
          </div>
        </nav>

        <div className="navbar__end">
          <LanguageSelector />
          <button
            type="button"
            className={`navbar__toggle ${menuOpen ? 'navbar__toggle--open' : ''}`}
            aria-label={menuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
            aria-expanded={menuOpen}
            aria-controls="site-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
