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

// Dark mode toggle functionality
function toggleTheme(event) {
  // Prevent menu toggle when clicking theme button on mobile
  if (event) {
    event.stopPropagation();
  }
  
  const body = document.body;
  const isDarkMode = body.classList.toggle('dark-mode');
  
  // Save preference to localStorage
  localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
}

// Check for saved theme preference and apply it
function applyThemePreference() {
  const savedTheme = localStorage.getItem('darkMode');
  
  if (savedTheme === 'enabled') {
    document.body.classList.add('dark-mode');
  }
}

// Initialize theme
document.addEventListener('DOMContentLoaded', () => {
  // Apply saved preference
  applyThemePreference();
  
  // Add event listeners to theme toggles
  const desktopToggle = document.getElementById('theme-toggle');
  const mobileToggle = document.getElementById('mobile-theme-toggle');
  
  if (desktopToggle) {
    desktopToggle.addEventListener('click', toggleTheme);
  }
  
  // The mobile toggle already has the event handler in the HTML
});