
import { initFaq, initNewsletter } from './faq.js';
import { FloatingBubbles } from './floating-bubbles.js';
import { ChartInteractions } from './chart-interactions.js';


function setupLazyLoad(selector, initFunction) {
    const element = document.querySelector(selector);
    if (!element) return;

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                initFunction();
                observer.unobserve(element); 
            }
        });
    }, {
        rootMargin: '0px', 
        threshold: 0.1 

    observer.observe(element);
}

setupLazyLoad('#sFaqSearchInput', initFaq);

setupLazyLoad('#sNewsletter', initNewsletter);

setupLazyLoad('.floating-bubbles', () => new FloatingBubbles());

setupLazyLoad('.chart-container', () => new ChartInteractions());
