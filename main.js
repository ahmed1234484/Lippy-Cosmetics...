
// Add show class when scrolling into view
const productCards = document.querySelectorAll('.product-card');
const showProducts = () => {
  productCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      card.classList.add('show');
    }
  });
};

// Add event listener
window.addEventListener('scroll', showProducts);
showProducts(); // Initial call to show already visible products
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
