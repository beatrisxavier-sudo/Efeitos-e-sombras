document.addEventListener('DOMContentLoaded', () => {
  // Inicializa os ícones do Lucide
  lucide.createIcons();

  /* ==========================================================================
     1. Modo Escuro Persistente (localStorage)
     ========================================================================== */
  const toggleThemeBtn = document.getElementById('toggle-theme');
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }

  toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  /* ==========================================================================
     2. Sistema de Curtir Interativo
     ========================================================================== */
  const likeButtons = document.querySelectorAll('.like-btn');

  likeButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Impede propagação se necessário
      e.stopPropagation();

      const countSpan = btn.querySelector('.like-count');
      let currentLikes = parseInt(btn.getAttribute('data-likes'), 10);
      const isLiked = btn.classList.contains('liked');

      if (!isLiked) {
        currentLikes += 1;
        btn.classList.add('liked');
      } else {
        currentLikes -= 1;
        btn.classList.remove('liked');
      }

      // Atualiza estado e contador
      btn.setAttribute('data-likes', currentLikes);
      countSpan.textContent = currentLikes;

      // Animação Heartbeat
      btn.classList.remove('pulse');
      void btn.offsetWidth; // Força re-render para reiniciar animação
      btn.classList.add('pulse');
    });
  });

  /* ==========================================================================
     3. Filtro por Tags em Tempo Real
     ========================================================================== */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('article.card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Atualiza botão ativo
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const selectedTag = btn.getAttribute('data-tag');

      cards.forEach(card => {
        const cardTag = card.getAttribute('data-tag');

        if (selectedTag === 'all' || cardTag === selectedTag) {
          card.style.display = 'block';
          card.style.animation = 'fadeIn 0.3s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
