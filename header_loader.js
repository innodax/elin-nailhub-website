document.addEventListener("DOMContentLoaded", function () {
  fetch("header.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((data) => {
      const headerContainer = document.getElementById("header-container");
      headerContainer.innerHTML = data;
      document.querySelector(".header-sticky-wrapper").classList.add("loaded");
    })
    .catch((error) => {
      console.error("Error while retrieving header:", error);
    });
});
