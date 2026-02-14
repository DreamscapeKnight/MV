const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("question");
const gif = document.getElementById("valentine-gif");

// 💕 YES BUTTON
yesBtn.addEventListener("click", () => {
  question.textContent = "💖 I love you Bunny!!!";
  gif.src = "giphy2.gif"; // replace with your new GIF file
});

// 😈 NO BUTTON
noBtn.addEventListener("click", () => {
  const maxX = 500;
  const maxY = 200;

  const randomX = Math.random() * maxX * (Math.random() < 0.5 ? -1 : 1);
  const randomY = Math.random() * maxY * (Math.random() < 0.5 ? -1 : 1);

  noBtn.style.position = "absolute";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
