// Toggle mobile menu (optional enhancement)
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// Contact form validation
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');

  if (form) {
    form.addEventListener('submit', function (e) {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      let errors = [];

      if (name.length < 2) {
        errors.push("Name must be at least 2 characters.");
      }

      if (!email.includes("@") || !email.includes(".")) {
        errors.push("Please enter a valid email address.");
      }

      if (message.length < 10) {
        errors.push("Message must be at least 10 characters.");
      }

      if (errors.length > 0) {
        alert(errors.join("\n"));
        e.preventDefault();
      } else {
        alert("Thank you! Your message has been sent.");
      }
    });
  }
});