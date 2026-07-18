import { useEffect, useRef } from 'react';

export function useParallax(speed = 0.4) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    let frameId = null;

    const update = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const visible = rect.bottom > 0 && rect.top < windowHeight;

      if (visible) {
        const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
        const offset = (progress - 0.5) * 120 * speed;
        element.style.setProperty('--parallax-y', `${offset}px`);
      }
    };

    const onScroll = () => {
      if (frameId) cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [speed]);

  return ref;
}
