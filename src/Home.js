import React, { useCallback } from 'react';
import {
  Navbar,
  Hero,
  About,
  Services,
  Portfolio,
  ParallaxQuote,
  Process,
  Contact,
  Footer,
  WhatsAppButton,
} from './components';
import { getWhatsAppUrl } from './constants/site';
import { useTranslation } from 'react-i18next';
import './Home.css';

function Home() {
  const { t } = useTranslation();

  const openWhatsApp = useCallback(() => {
    window.open(getWhatsAppUrl(t('whatsapp.message')), '_blank', 'noopener,noreferrer');
  }, [t]);

  return (
    <div className="site">
      <Navbar onWhatsAppClick={openWhatsApp} />
      <main>
        <Hero onWhatsAppClick={openWhatsApp} />
        <About />
        <Services />
        <Portfolio />
        <ParallaxQuote />
        <Process />
        <Contact onWhatsAppClick={openWhatsApp} />
      </main>
      <Footer />
      <WhatsAppButton onClick={openWhatsApp} />
    </div>
  );
}

export default Home;
