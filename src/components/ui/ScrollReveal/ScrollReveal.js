import React from 'react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';

function ScrollReveal({ as: Tag = 'div', className = '', children }) {
  const ref = useScrollReveal();

  return (
    <Tag ref={ref} className={`scroll-reveal ${className}`.trim()}>
      {children}
    </Tag>
  );
}

export default ScrollReveal;
