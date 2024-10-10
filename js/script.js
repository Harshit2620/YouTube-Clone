const iframe = document.getElementById('ytVideo');
    const originalSrc = iframe.src;

    // Add autoplay to video on mouseover
    iframe.addEventListener('mouseover', function() {
      iframe.src = originalSrc + "&autoplay=1"; // Add autoplay parameter
    });

    // Remove autoplay on mouseout to stop video
    iframe.addEventListener('mouseout', function() {
      iframe.src = originalSrc; // Reset the source to stop video playback
    });