document.addEventListener('DOMContentLoaded', () => {
  // 6章 アコーディオン
  document.querySelectorAll('.accordion-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const panel = button.nextElementSibling;
      const isOpen = button.classList.contains('active');

      document.querySelectorAll('.accordion-btn').forEach((btn) => {
        btn.classList.remove('active');
        const next = btn.nextElementSibling;
        if (next && next.classList.contains('accordion-content')) {
          next.classList.remove('open');
          next.style.maxHeight = '0px';
        }
      });

      if (!isOpen && panel && panel.classList.contains('accordion-content')) {
        button.classList.add('active');
        panel.classList.add('open');
        requestAnimationFrame(() => {
          panel.style.maxHeight = panel.scrollHeight + 'px';
        });
      }
    });
  });

  // 用語カード反転
  document.querySelectorAll('.flashcard').forEach((card) => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });

  // トップへ戻る
  const btn = document.getElementById('backToTop');

  if (btn) {
    window.addEventListener('scroll', () => {
      btn.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    btn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});