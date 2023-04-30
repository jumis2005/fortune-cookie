function getFortune() {
  const fortunes = [
    "A beautiful, smart, and loving person will be coming into your life.",
    "A dubious friend may be an enemy in camouflage.",
    "A faithful friend is a strong defense.",
    "A fresh start will put you on your way.",
    "A golden egg of opportunity falls into your lap this month.",
    "A good time to finish up old tasks."
  ];

  const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  document.getElementById("fortune").innerHTML = fortune;

  const crackingSound = document.getElementById("cracking-sound");
  crackingSound.currentTime = 0;
  crackingSound.play();
}

