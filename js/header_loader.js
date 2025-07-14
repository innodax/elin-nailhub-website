document.addEventListener("DOMContentLoaded", function () {
  fetch("header.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((data) => {
      // loading header
      const headerContainer = document.getElementById("header-container");
      headerContainer.innerHTML = data;

      // mobile navigation
      const btnNavEl = document.querySelector(".header__btn-mobile-nav");
      const headerEl = document.querySelector(".header");
      btnNavEl.addEventListener("click", function () {
        headerEl.classList.toggle("nav-open");
      });

      // sticky header
      window.addEventListener("scroll", function () {
        const offset = 80;
        if (window.scrollY > window.innerHeight - offset) {
          document.body.classList.add("sticky");
        } else {
          document.body.classList.remove("sticky");
        }
      });
    })

    .catch((error) => {
      console.error("Error while retrieving header:", error);
    });
});
