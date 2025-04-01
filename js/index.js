

document.addEventListener('DOMContentLoaded', function() {
// Get the navbar element
const navbar = document.querySelector('.navbar');

// Function to handle scroll event
function handleScroll() {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  console.log("hello")
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Call once on page load to set initial state
handleScroll();
});

// Counter animation function
document.addEventListener('DOMContentLoaded', function() {
  // Select all counter elements
  const counters = document.querySelectorAll('.counter_head');
  
  // Function to animate counter
  function animateCounter(counter) {
      // Get the target number from the counter text
      const targetNumber = parseInt(counter.textContent);
      // Remove the '+' sign for calculation
      counter.textContent = '0';
      
      // Set duration for the counter animation
      const duration = 2000; // 2 seconds
      const frameDuration = 1000 / 60; // 60fps
      const totalFrames = Math.round(duration / frameDuration);
      
      // Counter increment per frame
      const incrementPerFrame = targetNumber / totalFrames;
      
      let currentNumber = 0;
      let frame = 0;
      
      // Animation function
      const animate = () => {
          frame++;
          currentNumber += incrementPerFrame;
          
          // Update the counter text
          counter.textContent = Math.floor(currentNumber);
          
          // Add the '+' sign back when animation completes
          if (frame === totalFrames) {
              counter.textContent = targetNumber + '+';
              return;
          }
          
          // Request next frame
          requestAnimationFrame(animate);
      };
      
      // Start animation
      animate();
  }
  
  // Intersection Observer to trigger counter animation when visible
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              animateCounter(entry.target);
              // Unobserve after animation starts
              observer.unobserve(entry.target);
          }
      });
  }, { threshold: 0.5 });
  
  // Observe each counter
  counters.forEach(counter => {
      // Store the original text with '+' sign
      const originalText = counter.textContent;
      counter.setAttribute('data-target', parseInt(originalText));
      observer.observe(counter);
  });
});


