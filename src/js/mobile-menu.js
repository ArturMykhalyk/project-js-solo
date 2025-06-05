import refs from './refs';
export function handleOpenMobileMenu() {
  refs.mobileMenuClose.classList.remove('hidden');
  refs.mobileMenuOpen.classList.add('hidden');
  refs.mobileMenuList.classList.add('open');
  refs.mobileMenuClose.addEventListener('click', handleCloseMobileMenu);
  refs.mobileMenuList.addEventListener('click', handleNavMenu);

  document.body.style.overflow = 'hidden';
}

function handleNavMenu(e) {
  if (e.target.nodeName !== 'A') return;
  handleCloseMobileMenu();
}

function handleCloseMobileMenu() {
  document.body.style.overflow = '';
  refs.mobileMenuClose.classList.add('hidden');
  refs.mobileMenuOpen.classList.remove('hidden');
  refs.mobileMenuList.classList.remove('open');
  refs.mobileMenuClose.removeEventListener('click', handleCloseMobileMenu);
  refs.mobileMenuList.removeEventListener('click', handleNavMenu);
}
