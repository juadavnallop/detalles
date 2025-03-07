// Initialize AOS animations
document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });

  // Initialize Swiper
  const testimonialSwiper = new Swiper('.testimonials-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    }
  });

  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu');
  const menu = document.querySelector('.menu');

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      menu.classList.toggle('active');
      mobileMenuBtn.querySelector('i').classList.toggle('fa-bars');
      mobileMenuBtn.querySelector('i').classList.toggle('fa-times');
    });
  }

  // Cart Functionality
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  let cartCount = 0;
  const cartCountDisplay = document.querySelector('.cart-count');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      cartCount++;
      cartCountDisplay.textContent = cartCount;
      
      // Animation for button
      button.classList.add('clicked');
      setTimeout(() => {
        button.classList.remove('clicked');
      }, 200);
      
      // Show success message
      showNotification('Producto añadido al carrito');
    });
  });

  // Notification System
  function showNotification(message) {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => {
        notification.remove();
      }, 300);
    }, 3000);
  }

  // Smooth Scroll for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      if (this.getAttribute('href') !== '#') {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Sticky Header
  const header = document.querySelector('header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
      header.classList.remove('scroll-up');
      return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
      header.classList.remove('scroll-up');
      header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
      header.classList.remove('scroll-down');
      header.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
  });

  // Fix duplicate testimonials section
  const testimonialsSections = document.querySelectorAll('.testimonials');
  if (testimonialsSections.length > 1) {
    testimonialsSections[0].remove();
  }
});