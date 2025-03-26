
// Feature data for the features section
const featureData = [
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0066FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>',
    title: 'Secure Distribution',
    description: 'Tokens are distributed securely through smart contracts with complete transparency.',
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0066FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
    title: 'Instant Transfer',
    description: 'Receive your tokens instantly in your wallet after verification.',
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0066FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m23 6-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/></svg>',
    title: 'Growth Potential',
    description: 'Our tokens have shown consistent growth since launch.',
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0066FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    title: 'Limited Time',
    description: 'This giveaway is available for a limited time only.',
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0066FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
    title: 'Verified Project',
    description: 'Our project has been verified by leading blockchain security firms.',
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0066FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>',
    title: 'Community Rewards',
    description: 'Active community members receive additional bonuses and rewards.',
  },
];

// DOM elements
const mobileMenuButton = document.getElementById('mobile-menu-button');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const mobileMenu = document.getElementById('mobile-menu');
const navbar = document.querySelector('.navbar');
const heroContent = document.getElementById('hero-content');
const featuresGrid = document.getElementById('features-grid');
const claimSection = document.getElementById('claim-section');
const copyButton = document.getElementById('copy-button');
const contractAddress = document.getElementById('contract-address');
const currentYearElement = document.getElementById('currentYear');
const claimButton = document.getElementById('claim-button');
const claimForm = document.getElementById('claim-form');

// Set current year in footer
if (currentYearElement) {
  currentYearElement.textContent = new Date().getFullYear();
}

// Mobile menu toggle
if (mobileMenuButton) {
  mobileMenuButton.addEventListener('click', () => {
    if (mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.remove('hidden');
      menuIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
    } else {
      mobileMenu.classList.add('hidden');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    }
  });
}

// Close mobile menu when clicking on a menu item
document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Copy contract address to clipboard
if (copyButton && contractAddress) {
  copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(contractAddress.textContent);
    const originalHTML = copyButton.innerHTML;
    copyButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';
    setTimeout(() => {
      copyButton.innerHTML = originalHTML;
    }, 2000);
  });
}

// Initialize animations and content when page loads
document.addEventListener('DOMContentLoaded', () => {
  // Show hero content with animation
  setTimeout(() => {
    if (heroContent) {
      heroContent.classList.add('visible');
    }
  }, 300);
  
  // Populate features grid
  if (featuresGrid) {
    populateFeatures();
  }
  
  // Initialize particles.js
  initParticles();
  
  // Initialize intersection observers for scroll animations
  initIntersectionObservers();
});

// Populate features grid with feature cards
function populateFeatures() {
  featureData.forEach((feature, index) => {
    const featureCard = document.createElement('div');
    featureCard.className = 'feature-card';
    featureCard.innerHTML = `
      <div class="feature-icon">${feature.icon}</div>
      <h3>${feature.title}</h3>
      <p>${feature.description}</p>
    `;
    featuresGrid.appendChild(featureCard);
  });
}

// Initialize particles.js for the animated background
function initParticles() {
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#0066FF'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000'
          }
        },
        opacity: {
          value: 0.3,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#0066FF',
          opacity: 0.2,
          width: 1
        },
        move: {
          enable: true,
          speed: 1,
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'grab'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 0.8
            }
          },
          push: {
            particles_nb: 4
          }
        }
      },
      retina_detect: true
    });
  }
}

// Initialize intersection observers for scroll animations
function initIntersectionObservers() {
  // Check if IntersectionObserver is supported
  if ('IntersectionObserver' in window) {
    // Features observer
    const featuresObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.feature-card');
            elements.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, i * 150);
            });
            featuresObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // Claim section observer
    const claimObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (claimSection) {
              claimSection.classList.add('visible');
            }
            claimObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // Observe elements
    if (featuresGrid) featuresObserver.observe(featuresGrid);
    if (claimSection) claimObserver.observe(claimSection);
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    if (featuresGrid) {
      const featureCards = featuresGrid.querySelectorAll('.feature-card');
      featureCards.forEach((card) => {
        card.classList.add('visible');
      });
    }
    
    if (claimSection) {
      claimSection.classList.add('visible');
    }
  }
}
