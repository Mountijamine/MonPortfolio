document.addEventListener("DOMContentLoaded", function() {
  // Scroll reveal animation
  window.addEventListener('scroll', revealOnScroll);
  
  function revealOnScroll() {
    var reveals = document.querySelectorAll('.reveal');
    
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var revealTop = reveals[i].getBoundingClientRect().top;
      var revealPoint = 150;
      
      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add('active');
      }
    }
  }
  
  // Navbar background change on scroll
  window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
  
  // Add 'reveal' class to elements that should animate in
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.classList.add('reveal');
  });
  
  // Add staggered animation to article elements
  const articles = document.querySelectorAll('article');
  const observerOptions = {
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.animationDelay = `${index * 0.1}s`;
          entry.target.classList.add('visible');
        }, 100);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  articles.forEach(article => {
    observer.observe(article);
  });
  
  // Toggle menu for mobile navigation
  window.toggleMenu = function() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
  }
});
