// Modern CV JavaScript with animations and interactions

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initScrollEffects();
    initSkillAnimations();
    initSkillToggle();
    initParallaxEffects();
    initTypingEffect();
    initParticleBackground();
    initThemeToggle();
    initLanguageToggle(); // Initialize language toggle
});

// Mobile Navigation
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll Effects
function initScrollEffects() {
    const navbar = document.querySelector('.navbar');
    const body = document.body;
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Navbar background change on scroll
        if (scrollTop > 100) {
            if (body.classList.contains('dark-theme')) {
                navbar.style.background = 'rgba(15, 23, 42, 0.98)';
                navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            }
        } else {
            if (body.classList.contains('dark-theme')) {
                navbar.style.background = 'rgba(15, 23, 42, 0.95)';
                navbar.style.boxShadow = 'none';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = 'none';
            }
        }

        // Hide/show navbar on scroll
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Skill Bar Animations
function initSkillAnimations() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const width = skillBar.style.width;
                
                // Reset width to 0 and animate to full width
                skillBar.style.width = '0%';
                setTimeout(() => {
                    skillBar.style.width = width;
                }, 300);
                
                skillObserver.unobserve(skillBar);
            }
        });
    }, observerOptions);

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
}

// Skill Toggle Functionality
function initSkillToggle() {
    const skillHeaders = document.querySelectorAll('.skill-header');

    skillHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const skillCard = this.closest('.skill-card');
            const skillDetails = skillCard.querySelector('.skill-details');

            // Toggle expanded class
            skillCard.classList.toggle('expanded');

            // Toggle visibility with smooth animation
            if (skillCard.classList.contains('expanded')) {
                skillDetails.style.display = 'block';
                // Trigger animation
                skillDetails.style.animation = 'fadeIn 0.3s ease-in-out';
            } else {
                skillDetails.style.animation = 'fadeOut 0.3s ease-in-out';
                setTimeout(() => {
                    skillDetails.style.display = 'none';
                }, 300);
            }
        });
    });
}

// Parallax Effects
function initParallaxEffects() {
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Typing Effect for Hero Title
function initTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;

    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };

    // Start typing effect after a delay
    setTimeout(typeWriter, 1000);
}

// Particle Background Effect
function initParticleBackground() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    // Create particles
    for (let i = 0; i < 50; i++) {
        createParticle(hero);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random properties
    const size = Math.random() * 3 + 1;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = Math.random() * 20 + 10;
    
    particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        left: ${x}%;
        top: ${y}%;
        animation: float ${duration}s infinite linear;
        pointer-events: none;
    `;
    
    container.appendChild(particle);
    
    // Remove particle after animation
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, duration * 1000);
}

// Add CSS for particles
const particleStyles = document.createElement('style');
particleStyles.textContent = `
    @keyframes float {
        0% {
            transform: translateY(0px) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    .particle {
        z-index: 1;
    }
`;
document.head.appendChild(particleStyles);

// Intersection Observer for fade-in effects
function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Smooth reveal animations
function initRevealAnimations() {
    const revealElements = document.querySelectorAll('.skill-card, .contact-card, .soft-skill-card, .timeline-item');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        revealObserver.observe(element);
    });
}

// Initialize reveal animations
initIntersectionObserver();
initRevealAnimations();

// Add some interactive hover effects
document.addEventListener('DOMContentLoaded', function() {
    // Add ripple effect to cards
    const cards = document.querySelectorAll('.skill-card, .contact-card, .soft-skill-card, .social-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            this.style.setProperty('--mouse-x', x + 'px');
            this.style.setProperty('--mouse-y', y + 'px');
        });
    });
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Theme Toggle Functionality
function initThemeToggle() {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;
    
    // Check for saved theme preference or default to light theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeIcon.className = 'fas fa-sun';
    }
    
    // Toggle theme on button click
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        
        // Update icon and save preference
        if (body.classList.contains('dark-theme')) {
            themeIcon.className = 'fas fa-sun';
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.className = 'fas fa-moon';
            localStorage.setItem('theme', 'light');
        }
        
        // Add smooth transition effect
        body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    });
}



// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Scroll-based animations can go here
}, 16)); // ~60fps

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Add entrance animations
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 500);
    }
});

// Language Toggle Functionality
function initLanguageToggle() {
    const languageToggleBtn = document.getElementById('language-toggle-btn');
    const languageText = document.getElementById('language-text');
    const body = document.body;
    
    // Check for saved language preference or default to Polish
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage === 'en') {
        body.classList.add('english');
        languageText.textContent = 'EN';
    }
    
    // Toggle language on button click
    languageToggleBtn.addEventListener('click', () => {
        body.classList.toggle('english');
        
        // Update button text and save preference
        if (body.classList.contains('english')) {
            languageText.textContent = 'EN';
            localStorage.setItem('language', 'en');
        } else {
            languageText.textContent = 'PL';
            localStorage.setItem('language', 'pl');
        }
        
        // Add smooth transition effect
        body.style.transition = 'all 0.3s ease';
    });
}

// Add CSS for loading state
const loadingStyles = document.createElement('style');
loadingStyles.textContent = `
    body:not(.loaded) {
        overflow: hidden;
    }
    
    .hero-content {
        transition: opacity 1s ease, transform 1s ease;
    }
 `;
document.head.appendChild(loadingStyles);

// Copy Email Functionality
function copyEmail() {
    const email = 'miloszszczepaniak@gmail.com';

    if (navigator.clipboard && window.isSecureContext) {
        // Use modern clipboard API
        navigator.clipboard.writeText(email).then(() => {
            showNotification('Adres email został skopiowany!', 'Email address copied!');
        }).catch(err => {
            console.error('Failed to copy email: ', err);
            fallbackCopyTextToClipboard(email);
        });
    } else {
        // Fallback for older browsers
        fallbackCopyTextToClipboard(email);
    }
}

// Copy WhatsApp Functionality
function copyWhatsApp() {
    const whatsappUsername = '@batsnuff';

    if (navigator.clipboard && window.isSecureContext) {
        // Use modern clipboard API
        navigator.clipboard.writeText(whatsappUsername).then(() => {
            showNotification('Nazwa WhatsApp została skopiowana!', 'WhatsApp username copied!');
        }).catch(err => {
            console.error('Failed to copy WhatsApp: ', err);
            fallbackCopyTextToClipboard(whatsappUsername);
        });
    } else {
        // Fallback for older browsers
        fallbackCopyTextToClipboard(whatsappUsername);
    }
}

// Copy Phone Functionality
function copyPhone() {
    const phoneNumber = '+48 666 913 017';

    if (navigator.clipboard && window.isSecureContext) {
        // Use modern clipboard API
        navigator.clipboard.writeText(phoneNumber).then(() => {
            showNotification('Numer telefonu został skopiowany!', 'Phone number copied!');
        }).catch(err => {
            console.error('Failed to copy phone: ', err);
            fallbackCopyTextToClipboard(phoneNumber);
        });
    } else {
        // Fallback for older browsers
        fallbackCopyTextToClipboard(phoneNumber);
    }
}

// Copy Address Functionality
function copyAddress() {
    const address = '(currently) Hengelo, Netherlands';

    if (navigator.clipboard && window.isSecureContext) {
        // Use modern clipboard API
        navigator.clipboard.writeText(address).then(() => {
            showNotification('Adres został skopiowany!', 'Address copied!');
        }).catch(err => {
            console.error('Failed to copy address: ', err);
            fallbackCopyTextToClipboard(address);
        });
    } else {
        // Fallback for older browsers
        fallbackCopyTextToClipboard(address);
    }
}

function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showNotification('Adres email został skopiowany!', 'Email address copied!');
        } else {
            showNotification('Nie udało się skopiować adresu email', 'Failed to copy email address');
        }
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
        showNotification('Nie udało się skopiować adresu email', 'Failed to copy email address');
    }

    document.body.removeChild(textArea);
}

function showNotification(plText, enText) {
    const body = document.body;
    const isEnglish = body.classList.contains('english');
    const message = isEnglish ? enText : plText;

    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;

    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: 'var(--primary-color)',
        color: 'white',
        padding: '1rem 1.5rem',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        zIndex: '9999',
        fontSize: '0.9rem',
        fontWeight: '500',
        opacity: '0',
        transform: 'translateY(-10px)',
        transition: 'all 0.3s ease'
    });

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 10);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}