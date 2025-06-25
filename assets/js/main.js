// Main JavaScript functionality

// DOM Elements
const header = document.querySelector('.header');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.getElementById('nav-links');
const navLinkItems = document.querySelectorAll('.nav-link');
const subscribeForm = document.querySelector('.subscribe-form');

// Initialize AOS
document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
    duration: 800,
    easing: 'ease-out',
    once: false,
    mirror: true,
    offset: 120
  });
  
  // Initialize the timeline items animation observer
  initTimelineObserver();
  
  // Initialize counter animation
  initCounterAnimation();
});

// Header background change on scroll
window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', function() {
  this.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
navLinkItems.forEach(link => {
  link.addEventListener('click', function() {
    mobileMenuBtn.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      const headerHeight = header.offsetHeight;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Subscribe form submission (prevent default for demo)
if (subscribeForm) {
  subscribeForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    
    // In a real application, you would send this to your backend
    // For demo, we'll just show an alert
    alert(`Thanks for subscribing with: ${email}`);
    this.reset();
  });
}

// Initialize Timeline Observer
function initTimelineObserver() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  if (timelineItems.length === 0) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.2
  });
  
  timelineItems.forEach(item => {
    observer.observe(item);
  });
}

// Initialize Counter Animation
function initCounterAnimation() {
  const statElements = document.querySelectorAll('.stat');
  
  if (statElements.length === 0) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const targetValue = parseFloat(target.textContent.replace(/[^\d.-]/g, ''));
        
        if (!isNaN(targetValue)) {
          animateCounter(target, targetValue);
        }
      }
    });
  }, {
    threshold: 0.5
  });
  
  statElements.forEach(stat => {
    observer.observe(stat);
  });
}

function animateCounter(element, targetValue) {
  const duration = 2000; // 2 seconds
  const startTime = performance.now();
  const startValue = 0;
  const isPercentage = element.textContent.includes('%');
  const isNumber = !isNaN(parseInt(element.textContent));
  const hasMPlus = element.textContent.includes('M+');
  
  function updateCounter(currentTime) {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    const easedProgress = easeOutCubic(progress);
    
    const currentValue = startValue + (targetValue - startValue) * easedProgress;
    
    if (isPercentage) {
      element.textContent = `${Math.round(currentValue)}%`;
    } else if (hasMPlus) {
      element.textContent = `${currentValue.toFixed(1)}M+`;
    } else if (isNumber) {
      element.textContent = Math.round(currentValue).toLocaleString();
    }
    
    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    }
  }
  
  requestAnimationFrame(updateCounter);
}

// Easing function for smoother animation
function easeOutCubic(x) {
  return 1 - Math.pow(1 - x, 3);
}

// Refresh AOS animations when window is resized
window.addEventListener('resize', function() {
  AOS.refresh();
});

// When the page is fully loaded, refresh AOS to ensure all animations work correctly
window.addEventListener('load', function() {
  AOS.refresh();
});