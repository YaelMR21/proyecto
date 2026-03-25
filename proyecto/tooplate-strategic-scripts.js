// JavaScript Document

// Tooplate 2149 Strategic Consulting

// https://www.tooplate.com/view/2149-strategic-consulting

// Mobile Menu Toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
   navLinks.classList.toggle('active');

   // Animate hamburger menu
   const spans = mobileMenu.querySelectorAll('span');
   spans.forEach((span, index) => {
      span.style.transform = navLinks.classList.contains('active') ?
         (index === 0 ? 'rotate(45deg) translate(5px, 5px)' :
            index === 1 ? 'opacity(0)' :
            'rotate(-45deg) translate(7px, -6px)') : 'none';
   });
});

// Active Menu Highlight
function updateActiveMenu() {
   const sections = document.querySelectorAll('section[id]');
   const navLinks = document.querySelectorAll('.nav-links a');

   let current = 'home'; // Default to home

   // Only update current if user has scrolled past the hero section
   if (window.scrollY > 100) {
      sections.forEach(section => {
         const sectionTop = section.offsetTop;
         if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
         }
      });
   }

   navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === current) {
         link.classList.add('active');
      }
   });
}

window.addEventListener('scroll', updateActiveMenu);

// Initialize with only home active on page load
document.addEventListener('DOMContentLoaded', () => {
   const navLinks = document.querySelectorAll('.nav-links a');
   const homeLink = document.querySelector('.nav-links a[href="#home"]');

   // Remove active from all links first
   navLinks.forEach(link => link.classList.remove('active'));

   // Add active only to home
   if (homeLink) {
      homeLink.classList.add('active');
   }
});

updateActiveMenu();

// --- Texto rotativo de la sección Inicio ---
document.addEventListener('DOMContentLoaded', () => {
   const headline = document.getElementById('hero-headline');
   const paragraph = document.getElementById('hero-paragraph');

   if (headline && paragraph) {
      // Se coloca el nombre de las 3 carreras
      const textSets = [{
            h1: "ISTII",
            p: "Ni el mejor firewall detiene nuestra pasión por innovar."
         },
         {
            h1: "IAA",
            p: "Nuestra meta no tiene límites, nuestro motor es la excelencia."
         },
         {
            h1: "IPGI",
            p: "Minimizando errores, maximizando el éxito."
         },
         {
            h1: "ISTII",
            p: "Las noches de estudio han merecido la pena, ya casi eres un profesional."
         },
         {
            h1: "IAA",
            p: "Cada desafío es una oportunidad disfrazada. Tu esfuerzo de hoy es tu éxito de mañana."
         },
         {
            h1: "IPGI",
            p: "Hoy cierras un capítulo, pero las páginas que siguen están llenas de oportunidades."
         },
         {
            h1: "ISTII",
            p: "En nuestro código, el error no es una opción, es una oportunidad de optimización."
         },
         {
            h1: "IAA",
            p: "Nuestra meta no tiene límites, nuestro motor es la excelencia."
         },
         {
            h1: "IPGI",
            p: "Donde otros ven caos, nosotros diseñamos sistemas de flujo perfecto."
         }
      ];

      let currentIndex = 0;

      // Function to change the text
      function changeText() {
         // Add fade-out class
         headline.classList.add('text-fade-out');
         paragraph.classList.add('text-fade-out');

         // Wait for the fade-out to finish before changing the text
         setTimeout(() => {
            // Move to the next text set
            currentIndex = (currentIndex + 1) % textSets.length;

            // Update the text
            headline.innerHTML = textSets[currentIndex].h1;
            paragraph.innerHTML = textSets[currentIndex].p;

            // Remove fade-out class to trigger fade-in
            headline.classList.remove('text-fade-out');
            paragraph.classList.remove('text-fade-out');
         }, 500); // This should match the CSS transition duration
      }

      // Set the interval for text rotation (e.g., every 5 seconds)
      setInterval(changeText, 5000);
   }
});

// Services Tab Functionality
const serviceTabs = document.querySelectorAll('.service-tab');
const serviceDetails = document.querySelectorAll('.service-details');

serviceTabs.forEach(tab => {
   tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-target');

      // Remove active class from all tabs and details
      serviceTabs.forEach(t => t.classList.remove('active'));
      serviceDetails.forEach(d => d.classList.remove('active'));

      // Add active class to clicked tab and corresponding detail
      tab.classList.add('active');
      document.querySelector(`.service-details[data-service="${target}"]`).classList.add('active');
   });
});

// Smooth Scrolling
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
      navLinks.classList.remove('active');
   });
});

// Advanced Scroll Animations
const observerOptions = {
   threshold: 0.15,
   rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
   entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
         setTimeout(() => {
            entry.target.classList.add('animate');

            // Counter animation
            if (entry.target.classList.contains('counter')) {
               animateCounter(entry.target);
            }
         }, index * 100); // Stagger animations
      }
   });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.fade-in, .service-tab, .team-member, .testimonial, .counter').forEach(el => {
   observer.observe(el);
});

// Animación de los numeros de información general 
function animateCounter(element) {
   if (element.classList.contains('animated')) return;
   element.classList.add('animated');

   const target = parseInt(element.getAttribute('data-count'));
   const increment = target / 80;
   let current = 0;

   const timer = setInterval(() => {
      current += increment;
      const value = Math.floor(current);
      element.textContent = value;

      if (current >= target) {
         element.textContent = value;
         clearInterval(timer);
      }
   }, 25);
}

// Enhanced Navbar scroll effect
window.addEventListener('scroll', () => {
   const navbar = document.querySelector('.navbar');
   const scrolled = window.scrollY;

   if (scrolled > 50) {
      navbar.style.background = '#FFFFFF'; /* Changed to solid white */
      navbar.style.borderBottomColor = 'rgba(71, 85, 105, 0.2)';
   } else {
      navbar.style.background = '#FFFFFF'; /* Changed to solid white */
      navbar.style.borderBottomColor = 'rgba(71, 85, 105, 0.1)';
   }
});

// Enhanced Form submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
   //e.preventDefault();

   const submitBtn = contactForm.querySelector('.submit-btn');
   const originalText = submitBtn.textContent;

   submitBtn.textContent = 'Enviando';
   submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
   submitBtn.classList.add('loading');

   setTimeout(() => {
      submitBtn.textContent = 'Enviado';
      submitBtn.classList.remove('loading');
      setTimeout(() => {
         submitBtn.textContent = originalText;
         submitBtn.style.background = 'linear-gradient(135deg, #005B8F, #005B8F)';
         contactForm.reset();
      }, 3000);
   }, 2000);
});

// Enhanced hover effects for service tabs
document.querySelectorAll('.service-tab').forEach((tab, index) => {
   tab.addEventListener('mouseenter', () => {
      if (!tab.classList.contains('active')) {
         tab.style.transform = 'translateX(5px)';
         tab.style.boxShadow = '0 10px 25px rgba(71, 85, 105, 0.1)';
      }
   });

   tab.addEventListener('mouseleave', () => {
      if (!tab.classList.contains('active')) {
         tab.style.transform = 'translateX(0)';
         tab.style.boxShadow = 'none';
      }
   });
});

// Parallax effect for hero and other sections
window.addEventListener('scroll', () => {
   const scrolled = window.pageYOffset;
   const parallaxElements = document.querySelectorAll('.geometric-shapes, .hero-content');

   parallaxElements.forEach((element, index) => {
      const speed = 0.3 + (index * 0.2);
      if (scrolled < window.innerHeight) {
         element.style.transform = `translateY(${scrolled * speed}px)`;
      }
   });

   // Geometric shapes rotation
   const shapes = document.querySelectorAll('.geo-shape');
   shapes.forEach((shape, index) => {
      const rotation = scrolled * 0.05 * (index + 1);
      shape.style.transform += ` rotate(${rotation}deg)`;
   });
});

// Interactive PREGUNTAS


document.addEventListener("DOMContentLoaded", function () {

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");

        question.addEventListener("click", () => {

            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                }
            });

            item.classList.toggle("active");
        });
    });

});
