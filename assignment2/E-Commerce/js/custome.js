document.addEventListener("DOMContentLoaded", function () {
    // Initialize the application
    initApp();
  });
  
  function initApp() {
    // Set up navigation functionality
    setupNavigation();
  
    // Set up option cards
    setupOptionCards();
  
    // Set up try now buttons
    setupTryNowButtons();
  
    // Add subtle animations
    addAnimations();
  }
  
  function setupNavigation() {
    const navItems = document.querySelectorAll(".nav-item");
  
    navItems.forEach((item) => {
      item.addEventListener("click", function () {
        // Remove active class from all nav items
        navItems.forEach((navItem) => {
          navItem.classList.remove("active");
        });
  
        // Add active class to clicked item
        this.classList.add("active");
  
        // Get the navigation destination from the text
        const destination = this.querySelector(".nav-label")
          .textContent.trim()
          .toLowerCase();
  
        // Show a message for navigation (in a real app, this would navigate to a new page)
        showMessage(`Navigating to ${destination}...`);
      });
    });
  
    // Set Home as active by default
    navItems[0].classList.add("active");
  }
  
  function setupOptionCards() {
    const optionCards = document.querySelectorAll(
      ".option-card, .option-card-large",
    );
  
    optionCards.forEach((card) => {
      card.addEventListener("click", function () {
        // Add a ripple effect
        addRippleEffect(this);
  
        // Get the option name
        const optionName = this.textContent.trim();
  
        // Show a message
        showMessage(`Selected option: ${optionName}`);
      });
    });
  }
  
  function setupTryNowButtons() {
    const tryNowButtons = document.querySelectorAll(".try-now-button");
  
    tryNowButtons.forEach((button) => {
      button.addEventListener("click", function (e) {
        // Prevent event bubbling to parent card
        e.stopPropagation();
  
        // Add a ripple effect
        addRippleEffect(this);
  
        // Get the feature name from the parent card
        const featureName = this.closest(".feature-card")
          .querySelector(".feature-title")
          .textContent.trim();
  
        // Show a message
        showMessage(`Trying ${featureName} feature...`);
      });
    });
  }
  
  function addAnimations() {
    // Add hover effects to cards
    const cards = document.querySelectorAll(
      ".option-card, .option-card-large, .feature-card",
    );
  
    cards.forEach((card) => {
      card.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-2px)";
        this.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
      });
  
      card.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0)";
        this.style.boxShadow = "none";
      });
    });
  
    // Add fade-in animation to sections
    const sections = document.querySelectorAll(
      ".section-title, .option-row, .option-grid, .feature-grid",
    );
  
    sections.forEach((section, index) => {
      section.style.opacity = "0";
      section.style.transform = "translateY(20px)";
  
      setTimeout(() => {
        section.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        section.style.opacity = "1";
        section.style.transform = "translateY(0)";
      }, 100 * index);
    });
  }
  
  function addRippleEffect(element) {
    // Create ripple element
    const ripple = document.createElement("span");
    ripple.classList.add("ripple-effect");
  
    // Position the ripple
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
  
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
  
    // Add ripple to element
    element.appendChild(ripple);
  
    // Remove ripple after animation
    setTimeout(() => {
      ripple.remove();
    }, 600);
  }
  
  function showMessage(message) {
    // Check if a message container already exists
    let messageContainer = document.querySelector(".message-container");
  
    // If not, create one
    if (!messageContainer) {
      messageContainer = document.createElement("div");
      messageContainer.classList.add("message-container");
      document.body.appendChild(messageContainer);
    }
  
    // Create message element
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.textContent = message;
  
    // Add message to container
    messageContainer.appendChild(messageElement);
  
    // Animate message in
    setTimeout(() => {
      messageElement.classList.add("show");
    }, 10);
  
    // Remove message after delay
    setTimeout(() => {
      messageElement.classList.remove("show");
  
      setTimeout(() => {
        messageElement.remove();
  
        // Remove container if empty
        if (messageContainer.children.length === 0) {
          messageContainer.remove();
        }
      }, 300);
    }, 3000);
  }
  
  // Add swipe functionality for mobile
  function setupSwipeGestures() {
    let touchStartX = 0;
    let touchEndX = 0;
  
    document.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.changedTouches[0].screenX;
      },
      false,
    );
  
    document.addEventListener(
      "touchend",
      (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
      },
      false,
    );
  
    function handleSwipe() {
      const navItems = document.querySelectorAll(".nav-item");
      const activeIndex = Array.from(navItems).findIndex((item) =>
        item.classList.contains("active"),
      );
  
      if (touchEndX < touchStartX - 50 && activeIndex < navItems.length - 1) {
        // Swipe left - go to next tab
        navItems[activeIndex + 1].click();
      }
  
      if (touchEndX > touchStartX + 50 && activeIndex > 0) {
        // Swipe right - go to previous tab
        navItems[activeIndex - 1].click();
      }
    }
  }
  
  // Call this function to set up swipe gestures
  setupSwipeGestures();
  