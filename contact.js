document.getElementById('hamburger').addEventListener('click', function() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
});
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && phone && email && message) {
    alert(`Thank you, ${name}! We'll contact you soon.`);
    this.reset(); 
  } else {
    alert("Please fill in all fields.");
  }
});