document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");
  const intro = document.getElementById("intro");
  const navToggle = document.getElementById("navToggle");
  const nav = document.getElementById("navbar");
  const accountBtn = document.querySelector(".btn-account");
  const accountModal = document.getElementById("accountModal");
  const modalClose = document.querySelector(".close");

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      sections.forEach(s => s.classList.remove("active"));
      const target = link.getAttribute("data-target");
      document.getElementById(target).classList.add("active");
      intro.classList.remove("active");
      nav.classList.remove("open");
    });
  });

  navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  accountBtn.addEventListener("click", () => {
    accountModal.style.display = "flex";
  });

  modalClose.onclick = () => {
    accountModal.style.display = "none";
  };

  window.onclick = (e) => {
    if (e.target === accountModal) {
      accountModal.style.display = "none";
    }
  };

  window.simulateSavings = () => {
    const ctx = document.getElementById("savingsChart").getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Strategy 1", "Strategy 2", "Strategy 3", "Strategy 4"],
        datasets: [{
          label: "Estimated Savings",
          data: [15000, 22000, 18000, 13000],
          backgroundColor: "#1abc9c"
        }]
      },
      options: {
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  };
});
