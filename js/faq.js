const questions = document.querySelectorAll(".faq-question");

questions.forEach((btn) => {
  const icon = btn.querySelector("ion-icon");
  const answer = btn.nextElementSibling;

  btn.addEventListener("click", function () {
    btn.classList.toggle("active");
    answer.classList.toggle("displayed");
  });
});
