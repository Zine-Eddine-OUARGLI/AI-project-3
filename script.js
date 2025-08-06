document.addEventListener('DOMContentLoaded', function() {
  const btn = document.querySelector('.btn-primary');
  if (btn) {
    btn.addEventListener('click', function() {
      btn.classList.add('clicked');
      setTimeout(() => btn.classList.remove('clicked'), 150);
      alert('Trial started! (Demo)');
    });
  }
});