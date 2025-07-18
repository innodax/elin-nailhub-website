document.addEventListener("DOMContentLoaded", function () {
  fetch("footer.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((data) => {
      const footerContainer = document.getElementById("footer-container");
      footerContainer.innerHTML = data;

      const yearEl = document.querySelector(".footer__year");
      if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
      }
    })

    .catch((error) => {
      console.error("Error while retrieving footer:", error);
    });
});
