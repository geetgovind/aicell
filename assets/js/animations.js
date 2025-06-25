// Animations JavaScript

// Initialize parallax effect
document.addEventListener('DOMContentLoaded', function() {
  initParallax();
  initIconAnimations();
});

// Parallax scrolling effect
function initParallax() {
  const parallaxElements = document.querySelectorAll('.parallax-bg');
  
  if (parallaxElements.length === 0) return;
  
  // Check if device supports parallax (not mobile)
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  if (isMobile) {
    // For mobile devices, just set background attachment to scroll
    parallaxElements.forEach(element => {
      element.style.backgroundAttachment = 'scroll';
    });
    return;
  }
  
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset;
    
    parallaxElements.forEach(element => {
      const container = element.closest('.parallax-container');
      const containerTop = container.getBoundingClientRect().top + scrollTop;
      const containerHeight = container.offsetHeight;
      
      // Only apply parallax if the container is in the viewport
      if (
        scrollTop + window.innerHeight > containerTop && 
        scrollTop < containerTop + containerHeight
      ) {
        // Calculate how far the container is from the top of the viewport
        const distance = scrollTop - containerTop;
        
        // Apply parallax effect (adjust the divisor to control the speed)
        const parallaxOffset = distance * 0.4;
        element.style.transform = `translateY(${parallaxOffset}px)`;
      }
    });
  });
}

// Add interactive animations to icons and elements
function initIconAnimations() {
  // Add hover effect to card icons
  const cardIcons = document.querySelectorAll('.card-icon');
  cardIcons.forEach(icon => {
    icon.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.1)';
      this.style.transition = 'transform 0.3s ease';
    });
    
    icon.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });
  
  // Add animation to tool icons
  const toolIcons = document.querySelectorAll('.tool-icon');
  toolIcons.forEach(icon => {
    icon.addEventListener('mouseenter', function() {
      this.style.transform = 'rotate(15deg)';
      this.style.transition = 'transform 0.3s ease';
    });
    
    icon.addEventListener('mouseleave', function() {
      this.style.transform = 'rotate(0deg)';
    });
  });
  
  // Add hover animations to quote block
  const quoteBlock = document.querySelector('.quote-block');
  if (quoteBlock) {
    quoteBlock.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.boxShadow = 'var(--shadow-xl)';
      this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    });
    
    quoteBlock.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = 'var(--shadow-md)';
    });
  }
  
  // Add magnification effect to feature images on hover
  const featureCards = document.querySelectorAll('.feature-card');
  featureCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      const img = this.querySelector('.feature-img');
      if (img) {
        img.style.transform = 'scale(1.05)';
        img.style.transition = 'transform 0.5s ease';
      }
    });
    
    card.addEventListener('mouseleave', function() {
      const img = this.querySelector('.feature-img');
      if (img) {
        img.style.transform = 'scale(1)';
      }
    });
  });
  
  // Add typing effect to the hero title
  addTypingEffect();
}

// Add typing effect to the hero title
function addTypingEffect() {
  const heroTitle = document.querySelector('.hero h1');
  if (!heroTitle) return;
  
  // Store the original text
  const originalText = heroTitle.textContent;
  heroTitle.textContent = '';
  
  // Create a wrapper for the cursor
  const wrapper = document.createElement('span');
  wrapper.className = 'typing-wrapper';
  
  const text = document.createElement('span');
  text.className = 'typing-text';
  
  const cursor = document.createElement('span');
  cursor.className = 'typing-cursor';
  cursor.textContent = '|';
  cursor.style.animation = 'blink 1s step-end infinite';
  
  // Add CSS for the blinking cursor
  const style = document.createElement('style');
  style.textContent = `
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
    .typing-cursor {
      color: var(--color-accent);
      font-weight: bold;
    }
    .typing-wrapper {
      display: inline-flex;
    }
  `;
  document.head.appendChild(style);
  
  // Append elements
  wrapper.appendChild(text);
  wrapper.appendChild(cursor);
  heroTitle.appendChild(wrapper);
  
  // Type the text character by character
  let i = 0;
  const typeInterval = setInterval(() => {
    if (i < originalText.length) {
      text.textContent += originalText.charAt(i);
      i++;
    } else {
      clearInterval(typeInterval);
      
      // Remove cursor after typing is complete (optional)
      setTimeout(() => {
        cursor.style.display = 'none';
      }, 2000);
    }
  }, 100);
}

// Animate elements when they enter the viewport
window.addEventListener('scroll', function() {
  const scrollElements = document.querySelectorAll('.scroll-animate');
  
  scrollElements.forEach(element => {
    if (isElementInViewport(element)) {
      element.classList.add('visible');
    }
  });
});

// Helper function to check if an element is in the viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}

// Add smooth reveal animation to section headings
document.addEventListener('DOMContentLoaded', function() {
  const sectionHeadings = document.querySelectorAll('section h2');
  
  sectionHeadings.forEach(heading => {
    heading.style.opacity = '0';
    heading.style.transform = 'translateY(20px)';
    heading.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          heading.style.opacity = '1';
          heading.style.transform = 'translateY(0)';
        }
      });
    }, {
      threshold: 0.1
    });
    
    observer.observe(heading);
  });
});

// Add confetti effect to CTA button
document.addEventListener('DOMContentLoaded', function() {
  const ctaButton = document.querySelector('.cta-content .btn');
  
  if (ctaButton) {
    ctaButton.addEventListener('click', function(e) {
      const buttonRect = this.getBoundingClientRect();
      const buttonCenterX = buttonRect.left + buttonRect.width / 2;
      const buttonTop = buttonRect.top;
      
      // Create confetti burst
      for (let i = 0; i < 30; i++) {
        createConfettiParticle(buttonCenterX, buttonTop);
      }
    });
  }
});

function createConfettiParticle(x, y) {
  const colors = ['#f59e0b', '#0d9488', '#1a365d', '#10b981', '#ef4444'];
  
  const particle = document.createElement('div');
  particle.style.position = 'fixed';
  particle.style.left = x + 'px';
  particle.style.top = y + 'px';
  particle.style.width = Math.random() * 8 + 4 + 'px';
  particle.style.height = Math.random() * 8 + 4 + 'px';
  particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  particle.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
  particle.style.pointerEvents = 'none';
  particle.style.zIndex = '9999';
  
  document.body.appendChild(particle);
  
  const angle = Math.random() * Math.PI * 2;
  const velocity = Math.random() * 5 + 2;
  const vx = Math.cos(angle) * velocity;
  const vy = Math.sin(angle) * velocity;
  
  let posX = x;
  let posY = y;
  let opacity = 1;
  let gravity = 0.1;
  
  const animate = () => {
    posX += vx;
    posY += vy;
    vy += gravity;
    opacity -= 0.02;
    
    particle.style.left = posX + 'px';
    particle.style.top = posY + 'px';
    particle.style.opacity = opacity;
    
    if (opacity > 0) {
      requestAnimationFrame(animate);
    } else {
      particle.remove();
    }
  };
  
  requestAnimationFrame(animate);
}

// Team Section Animations
function initTeamAnimations() {
  const teamCards = document.querySelectorAll('.team-card');
  
  teamCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      const socialLinks = this.querySelectorAll('.social-link');
      socialLinks.forEach((link, index) => {
        link.style.transform = 'translateY(0)';
        link.style.opacity = '1';
        link.style.transitionDelay = `${index * 0.1}s`;
      });
    });
    
    card.addEventListener('mouseleave', function() {
      const socialLinks = this.querySelectorAll('.social-link');
      socialLinks.forEach(link => {
        link.style.transform = 'translateY(10px)';
        link.style.opacity = '0';
        link.style.transitionDelay = '0s';
      });
    });
  });
}

// Add this to your existing DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
  initTeamAnimations();
});
