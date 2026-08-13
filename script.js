document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu");
  const nav = document.querySelector(".nav-links");

  if (menu && nav) {
    menu.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menu.setAttribute("aria-expanded", String(open));
    });

    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menu.setAttribute("aria-expanded", "false");
      });
    });
  }

  const form = document.getElementById("enquiryForm");
  const status = document.getElementById("formStatus");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const data = new FormData(form);
      const name = (data.get("name") || "").trim();
      const company = (data.get("company") || "").trim();
      const email = (data.get("email") || "").trim();
      const phone = (data.get("phone") || "").trim();
      const service = (data.get("service") || "").trim();
      const message = (data.get("message") || "").trim();

      if (!name || !email || !message) {
        status.textContent = "Please complete the required fields.";
        return;
      }

      const subject = encodeURIComponent(`Business Enquiry — ${service}`);
      const body = encodeURIComponent(
        `New website enquiry\n\n` +
        `Name: ${name}\n` +
        `Company: ${company}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone}\n` +
        `Service: ${service}\n\n` +
        `Requirement:\n${message}\n`
      );

      status.textContent = "Opening your email application…";
      window.location.href = `mailto:info@expertsassociate.com?subject=${subject}&body=${body}`;

      setTimeout(() => {
        status.textContent = "If your email application did not open, please email info@expertsassociate.com directly.";
      }, 2500);
    });
  }
});
