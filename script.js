const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    const open = nav.style.display === 'flex';
    nav.style.display = open ? '' : 'flex';
    if (!open) {
      nav.style.position = 'absolute';
      nav.style.top = '76px';
      nav.style.left = '0';
      nav.style.right = '0';
      nav.style.background = '#050505';
      nav.style.padding = '20px 7%';
      nav.style.flexDirection = 'column';
      nav.style.borderBottom = '1px solid #242424';
    }
  });
}
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => {
  if (window.innerWidth <= 900) nav.style.display = '';
}));
