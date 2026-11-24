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

// ----- Add a habit -----

// Find the input, button and list on the page
const habitInput = document.getElementById("habit-input");
const addButton = document.getElementById("add-habit");
const habitList = document.getElementById("habit-list");

// Run this when the Add button is clicked
addButton.addEventListener("click", function () {
  // Read the habit name and remove extra spaces
  const habitName = habitInput.value.trim();

  // Stop if nothing was typed
  if (habitName === "") {
    return;
  }

  // Create a new list item
  const habitItem = document.createElement("li");

  // Put the habit name inside it
  habitItem.textContent = habitName;

  // Add it to the list on the page
  habitList.appendChild(habitItem);

  // Clear the input box
  habitInput.value = "";
});