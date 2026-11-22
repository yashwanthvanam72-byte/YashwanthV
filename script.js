const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "×" : "☰";
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Replace this address with the business email you want enquiries sent to.
  const businessEmail = "yashwanthvanam24@gmail.com";
  const data = new FormData(this);
  const subject = encodeURIComponent("Website enquiry - " + data.get("name"));
  const body = encodeURIComponent(
    "Name: " + data.get("name") + "\n" +
    "Email: " + data.get("email") + "\n" +
    "Phone: " + (data.get("phone") || "Not provided") + "\n" +
    "Service: " + data.get("service") + "\n\n" +
    "Message:\n" + data.get("message")
  );

  document.getElementById("formStatus").textContent =
    "Your email app should open with the enquiry ready to send.";
  window.location.href = `mailto:${businessEmail}?subject=${subject}&body=${body}`;
});
