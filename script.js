function downloadResume() {
    const link = document.createElement("a");
    link.href = "resume.pdf";     // Your resume file
    link.download = "Lekhana_Resume.pdf";
    link.click();
}
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("formStatus").style.color = "cyan";
    document.getElementById("formStatus").innerText = "Your message has been sent! (Demo Only)";
    
    this.reset();
});
function animateOnScroll() {
  const elements = document.querySelectorAll(".animate-on-scroll, .fade-in, .slide-left, .slide-right, .zoom-in");

  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("animate-show");
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);
// Scroll reveal animation
const elements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});
function downloadResume() {
    const link = document.createElement('a');
    link.href = 'resume.pdf';  // Path to your resume file
    link.download = 'resume.pdf';
    link.click();
}


elements.forEach(el => observer.observe(el));
