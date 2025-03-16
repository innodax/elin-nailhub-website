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
      document.querySelector(".header").classList.add("loaded");

      // mobile navigation
      const btnNavEl = document.querySelector(".btn-mobile-nav");
      const headerEl = document.querySelector(".header");
      btnNavEl.addEventListener("click", function () {
        headerEl.classList.toggle("nav-open");
      });

      // sticky header
      const sectionHeroEl = document.querySelector(".section-hero-wrapper");

      const obs = new IntersectionObserver(
        function (entries) {
          const ent = entries[0];
          console.log(ent);
          if (!ent.isIntersecting) {
            document.body.classList.add("sticky");
          }
          if (ent.isIntersecting) {
            document.body.classList.remove("sticky");
          }
        },
        {
          root: null,
          threshold: 0,
          rootMargin: "-80px",
        }
      );
      obs.observe(sectionHeroEl);
    })

    .catch((error) => {
      console.error("Error while retrieving header:", error);
    });
});
