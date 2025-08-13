window.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.floating-bubbles')) {
    import('./floating-bubbles.js');
  }
});

const faqSection = document.querySelector('#sFaqSidebar');
if (faqSection) {
  const observer = new IntersectionObserver((entries) => {
    if (entries.some(e => e.isIntersecting)) {
      import('./faq.js');
      observer.disconnect();
    }
  });
  observer.observe(faqSection);
}

const chart = document.getElementById('visitors-chart');
if (chart) {
  import('./chart-interactions.js');
}
