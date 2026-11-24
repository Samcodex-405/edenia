// List of welcome messages
const messages = [
  "Welcome back. Your garden waited for you.",
  "Nothing here yet. Plant your first thought.",
  "Your thoughts are the seeds of your future.",
  "Karibu nyumbani."
];

// Pick a random message position
const randomIndex = Math.floor(Math.random() * messages.length);

// Find the welcome paragraph on the page
const welcomeParagraph = document.getElementById("welcome");

// Show the chosen message
welcomeParagraph.textContent = messages[randomIndex];