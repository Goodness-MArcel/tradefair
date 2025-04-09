document.addEventListener('DOMContentLoaded', function() {
    // Get all gallery images from the pictures section
    const galleryImages = document.querySelectorAll('.pictures .gallery-img');
    const lightbox = document.getElementById('imageLightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');
    
    let currentIndex = 0;
    const imageUrls = [];
    const imageCaptions = [];
    
    // Collect all image URLs and captions
    galleryImages.forEach((img, index) => {
      imageUrls.push(img.src);
      imageCaptions.push(img.alt);
      
      // Add click event to open lightbox
      img.addEventListener('click', function() {
        currentIndex = parseInt(img.dataset.index);
        openLightbox();
      });
    });
    
    // Open lightbox function
    function openLightbox() {
      lightbox.style.display = 'block';
      updateLightboxContent();
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
    
    // Close lightbox function
    function closeLightbox() {
      lightbox.style.display = 'none';
      document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
    
    // Update lightbox content
    function updateLightboxContent() {
      lightboxImg.src = imageUrls[currentIndex];
      lightboxCaption.textContent = imageCaptions[currentIndex];
    }
    
    // Navigate to previous image
    function prevImage() {
      currentIndex = (currentIndex === 0) ? imageUrls.length - 1 : currentIndex - 1;
      updateLightboxContent();
    }
    
    // Navigate to next image
    function nextImage() {
      currentIndex = (currentIndex === imageUrls.length - 1) ? 0 : currentIndex + 1;
      updateLightboxContent();
    }
    
    // Event listeners
    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', prevImage);
    nextBtn.addEventListener('click', nextImage);
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
      if (lightbox.style.display === 'block') {
        if (e.key === 'Escape') {
          closeLightbox();
        } else if (e.key === 'ArrowLeft') {
          prevImage();
        } else if (e.key === 'ArrowRight') {
          nextImage();
        }
      }
    });
    
    // Close when clicking outside the image
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  });
  