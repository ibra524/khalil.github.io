const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.textContent = isOpen ? '×' : '☰';
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = '☰';
}));
const whatsappNumber = '221771322779';
document.querySelectorAll('.order-button').forEach(button => {
  button.addEventListener('click', () => {
    const product = button.dataset.product;
    const message = `Bonjour Capiluxe ! Je souhaite commander : ${product}. Pouvez-vous m'indiquer le prix et la disponibilité ?`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
  });
});
document.getElementById('year').textContent = new Date().getFullYear();