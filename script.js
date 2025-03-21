// Pledge Button
document.getElementById("pledge-button").addEventListener("click", function () {
  alert("Thank you for taking the pledge! Every action counts.");
});

// Rotate Earth Animation
const earth = document.querySelector(".earth img");
let rotation = 0;
setInterval(() => {
  rotation += 1;
  earth.style.transform = `rotate(${rotation}deg)`;
}, 30);

// Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Thank you! Your message has been sent.");
});

// Quiz Data
const quizData = [
  { question: "What is the main cause of climate change?", options: ["Natural cycles", "Human activities", "Solar flares"], answer: "Human activities" },
  { question: "Which gas is responsible for global warming?", options: ["Oxygen", "Carbon dioxide", "Nitrogen"], answer: "Carbon dioxide" },
];

const quizContainer = document.getElementById("quiz-questions");
const progressBar = document.getElementById("progress-bar");

// Display Quiz Questions
quizData.forEach((q, index) => {
  const div = document.createElement("div");
  div.innerHTML = `<h3>${q.question}</h3>` +
    q.options.map(opt => `<button class="quiz-option" data-index="${index}" data-answer="${opt}">${opt}</button>`).join("");
  quizContainer.appendChild(div);
});

// Handle Quiz Submission
document.getElementById("submit-quiz").addEventListener("click", function () {
  let score = 0;
  document.querySelectorAll(".quiz-option").forEach(btn => {
    if (btn.classList.contains("selected") && btn.dataset.answer === quizData[btn.dataset.index].answer) {
      score++;
    }
  });
  alert(`You scored ${score} out of ${quizData.length}!`);
});

// Scroll-to-Top Button
const scrollToTopButton = document.getElementById("scroll-to-top");
window.addEventListener("scroll", () => {
  scrollToTopButton.style.display = window.scrollY > 300 ? "block" : "none";
});
scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
