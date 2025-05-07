<!-- js/script.js -->
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bookingForm");
  const confirmation = document.getElementById("confirmation");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = form.name.value.trim();
      const email = form.email.value.trim();

      if (name.length < 2) {
        alert("Name must be at least 2 characters long.");
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      confirmation.textContent = `Thank you, ${name}! Your booking for ${form.movie.value} at ${form.time.value} has been confirmed.`;
      confirmation.style.display = "block";
      form.reset();
    });
  }
});
