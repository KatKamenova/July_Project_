const heroButton = document.getElementById("heroButton");
const contactForm = document.getElementById("contactForm");

heroButton?.addEventListener("click", () => {
  alert("Thanks for trying the July Project demo site!\nUse the form below to simulate a contact submission.");
});

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const name = formData.get("name") || "Visitor";
  alert(`Thanks, ${name}! Your message is ready to send.`);
  contactForm.reset();
});
