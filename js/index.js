document.addEventListener('DOMContentLoaded', function() {
  // Get the navbar element
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Function to handle scroll event
  function handleScroll() {
      if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
          // No need to modify classes on individual links
          // as we'll handle this in CSS
      } else {
          navbar.classList.remove('scrolled');
          // Ensure links have the newcolor class when at the top
          navLinks.forEach(link => {
              link.classList.add('newcolor');
          });
      }
  }

  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);

  // Call once on page load to set initial state
  handleScroll();
});

// Rest of your JavaScript remains unchanged

function updateCountdown() {
    const targetDate = new Date("June 2, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;
  
    // Calculate days, hours, minutes, seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Update the DOM
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  
    // Stop countdown if reached
    if (distance < 0) {
      clearInterval(countdownTimer);
      document.querySelector(".counter_section").innerHTML = "<h2>June 2, 2025, has arrived! 🎉</h2>";
    }
  }
  
  // Run every second
  const countdownTimer = setInterval(updateCountdown, 1000);
  updateCountdown(); // Initialize immediately