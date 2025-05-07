// Hamburger menu functionality
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Close menu when clicking outside
document.addEventListener('click', function(event) {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const isMenuOpen = menu.classList.contains("open");
  
  if (isMenuOpen && !event.target.closest('.hamburger-menu')) {
    menu.classList.remove("open");
    icon.classList.remove("open");
  }
});

// Function to toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  
  // Save preference to localStorage
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);
  
  // Update aria-label for accessibility
  const themeToggles = document.querySelectorAll('.theme-toggle');
  themeToggles.forEach(button => {
    button.setAttribute('aria-label', isDarkMode ? 'Toggle light mode' : 'Toggle dark mode');
  });
}

// Check for saved user preference
document.addEventListener('DOMContentLoaded', () => {
  // Check if user has a saved preference
  const savedDarkMode = localStorage.getItem('darkMode');
  
  // Apply dark mode if saved preference exists
  if (savedDarkMode === 'true') {
    document.body.classList.add('dark-mode');
  }
  
  // Add event listeners to all theme toggle buttons
  const themeToggles = document.querySelectorAll('.theme-toggle');
  themeToggles.forEach(button => {
    button.addEventListener('click', toggleDarkMode);
  });

  // Fix for mobile menu toggle to prevent toggling theme
  document.getElementById('mobile-theme-toggle').onclick = (e) => {
    e.stopPropagation();
    toggleDarkMode();
  };
});