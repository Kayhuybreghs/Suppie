// Lightweight chart interactions - CSS-first approach
(() => {
  const el = document.getElementById('visitors-chart');
  if (!el) return;
  
  // Activeer cursor-volg wanneer je binnen de chart zit
  el.addEventListener('pointerenter', () => el.dataset.follow = '1');
  el.addEventListener('pointerleave', () => el.dataset.follow = '');
  
  // Update CSS-variabelen voor muiscoördinaten (passive → geen scroll-jank)
  el.addEventListener('pointermove', e => {
    el.style.setProperty('--mx', e.clientX + 'px');
    el.style.setProperty('--my', e.clientY + 'px');
  }, { passive: true });
})();