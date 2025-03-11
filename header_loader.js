console.log("JS načteno...");

document.addEventListener("DOMContentLoaded", function() {
    console.log("JS načteno, zkouším fetch...");
    
    fetch("header.html")
        .then(response => {
            console.log("Odpověď z serveru:", response);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.text();
        })
        .then(data => {
            const headerContainer = document.getElementById("header-container");
            headerContainer.innerHTML = data;
            document.querySelector(".header-sticky-wrapper").classList.add("loaded");
        })
        .catch(error => {
            console.error("Chyba při načítání hlavičky:", error);
        });
});