import React from 'react';
import { BiLogoInstagram } from 'react-icons/bi';
import { SITE } from '../../../constants/site';
import { useTranslation } from 'react-i18next';
import Logo from '../../ui/Logo';
import './Footer.css';

function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Logo className="logo--footer" />
          <p className="footer__founder">
            {t('footer.founder', { founder: SITE.founder })}
          </p>
        </div>

        <div className="footer__social">
          <a
            href={SITE.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('footer.instagram')}
          >
            <BiLogoInstagram size={26} />
          </a>
        </div>

        <div className="footer__legal">
          <span>
            {t('footer.copyright', {
              year,
              name: SITE.name,
              suffix: SITE.suffix,
            })}
          </span>
          <span>{t('footer.rights')}</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
