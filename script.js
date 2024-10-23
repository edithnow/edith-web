function learnMore() {
    alert('Thank you for your interest! More details will be coming soon.');
  }
  
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
  });
  
