var typed = new Typed('#element', {
    strings: ['<i> Web</i> Developer.', 'Full Stack Developer.', 'AI/ML Enthusiast.', 'Problem Solver.', 'Passionate Programmer.'],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 300,
    loop:true
});
function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling
  });
}

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

// Close the menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
      const navLinksContainer = document.querySelector('.nav-links');
      navLinksContainer.classList.remove('active'); // Close the menu
  });
});

document.getElementById("year").innerHTML = new Date().getFullYear();

