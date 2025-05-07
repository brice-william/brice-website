// Mobile menu functionality
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const dropdowns = document.querySelectorAll('.dropdown');
const body = document.body;

hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    
    // Toggle hamburger animation
    const spans = hamburger.querySelectorAll('span');
    spans.forEach(span => span.classList.toggle('active'));
});

// Handle dropdown menus on mobile
dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('a');
    
    link.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            dropdown.classList.toggle('active');
        }
    });
});

// Close menu when clicking outside
document.addEventListener('click', function(e) {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        body.style.overflow = '';
        
        // Reset hamburger animation
        const spans = hamburger.querySelectorAll('span');
        spans.forEach(span => span.classList.remove('active'));
    }
});

// Add animation to hamburger spans
const spans = hamburger.querySelectorAll('span');
spans.forEach((span, index) => {
    span.style.transition = `transform ${0.3 + index * 0.1}s ease`;
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        body.style.overflow = '';
        
        // Reset hamburger animation
        const spans = hamburger.querySelectorAll('span');
        spans.forEach(span => span.classList.remove('active'));
    });
});

// Highlight active navigation link based on current page
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Add animation classes to elements
    addAnimationClasses();
    
    // Initialize scroll animations
    initScrollAnimations();
});

// Add animation classes to elements
function addAnimationClasses() {
    // Add animation classes to sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const title = section.querySelector('h2');
        if (title) {
            title.classList.add('animate');
        }
        
        // Add animation to content based on section
        if (section.id === 'about') {
            const aboutImage = section.querySelector('.about-image');
            const aboutText = section.querySelector('.about-text');
            
            if (aboutImage) aboutImage.classList.add('animate-left');
            if (aboutText) aboutText.classList.add('animate-right');
        } else if (section.id === 'skills') {
            const skillCategories = section.querySelectorAll('.skill-category');
            skillCategories.forEach((category, index) => {
                category.classList.add('animate');
                category.style.animationDelay = `${index * 0.2}s`;
            });
        } else if (section.id === 'projects') {
            const projectCards = section.querySelectorAll('.project-card');
            projectCards.forEach((card, index) => {
                card.classList.add('animate');
                card.style.animationDelay = `${index * 0.2}s`;
            });
        } else if (section.id === 'contact') {
            const contactInfo = section.querySelector('.contact-info');
            const contactForm = section.querySelector('.contact-form');
            
            if (contactInfo) contactInfo.classList.add('animate-left');
            if (contactForm) contactForm.classList.add('animate-right');
        }
    });
}

// Initialize scroll animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate, .animate-left, .animate-right');
    
    // Check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    // Handle scroll animation
    function handleScrollAnimation() {
        animatedElements.forEach(element => {
            if (isInViewport(element) && !element.classList.contains('animated')) {
                element.classList.add('animated');
            }
        });
    }
    
    // Initial check
    handleScrollAnimation();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAnimation);
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Form submission handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Simulate form submission
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            submitButton.textContent = 'Message Sent!';
            submitButton.style.backgroundColor = '#4CAF50';
            
            // Reset form
            contactForm.reset();
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.style.backgroundColor = '';
                submitButton.disabled = false;
            }, 3000);
        }, 1500);
    });
}

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Tab Navigation
document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    let currentTab = 'education';
    let isAnimating = false;

    function switchTab(tabId) {
        if (isAnimating || currentTab === tabId) return;
        isAnimating = true;

        // Update buttons
        tabBtns.forEach(btn => {
            if (btn.getAttribute('data-tab') === tabId) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Fade out current content
        const currentPane = document.querySelector(`#${currentTab}`);
        const newPane = document.querySelector(`#${tabId}`);

        if (currentPane && newPane) {
            // Fade out current content
            currentPane.style.opacity = '0';
            currentPane.style.display = 'none';
            
            // Fade in new content
            newPane.style.opacity = '1';
            newPane.style.display = 'block';
            
            currentTab = tabId;
            isAnimating = false;
        }
    }

    // Add click event listeners to tab buttons
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            switchTab(tabId);
        });
    });

    // Initialize with education tab
    switchTab('education');
}); 