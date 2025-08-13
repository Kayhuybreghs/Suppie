
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

