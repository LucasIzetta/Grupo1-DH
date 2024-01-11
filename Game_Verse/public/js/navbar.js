function toggleNavLinks() {
  const navLinks = document.querySelectorAll('.nav-links');
  
  navLinks.forEach(function(navLink) {
    navLink.style.display = (navLink.style.display === 'none' || navLink.style.display === '') ? 'block' : 'none';
  });
}