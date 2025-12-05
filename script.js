window.addEventListener('scroll', () => {
  const header = document.getElementById('barra_navegacao');
  if(!header)return;
  if (window.scrollY > 40) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
})// Animação nav