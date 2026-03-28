document.addEventListener('DOMContentLoaded', function() {
  var menuBtn = document.querySelector('.menu-btn');
  var mobileMenu = document.getElementById('mobile-menu');

  menuBtn.addEventListener('click', function() {
    mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
  });

  var mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      mobileMenu.style.display = 'none';
    });
  });
});
