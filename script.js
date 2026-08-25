// Lógica para alternar o modo claro/escuro
const toggleBtn = document.getElementById('toggle-theme');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
