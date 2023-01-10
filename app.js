const allQuestion = document.querySelectorAll(".question");

allQuestion.forEach((question) =>
  question.addEventListener("click", () => {
    if (question.parentNode.classList.contains("active")) {
      question.parentNode.classList.toggle("active");
    } else {
      allQuestion.forEach((question) =>
        question.parentNode.classList.remove("active")
      );
      question.parentNode.classList.add("active");
    }
  })
);
