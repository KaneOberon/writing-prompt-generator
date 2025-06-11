const prompts = [
  "Write about a character who discovers a hidden room in their house.",
  "Describe a day in the life of a space explorer stranded on a distant planet.",
  "Write a story that begins with a mysterious letter arriving in the mail.",
  "Create a tale about a world where dreams can be recorded and watched.",
  "Write about a conversation between two strangers stuck in an elevator.",
  "Imagine a future where humans can communicate telepathically. How does society change?",
  "Write a story centered on a lost artifact with magical powers.",
  "Describe a city where time moves backward for one hour each day.",
  "Write about someone who wakes up with the ability to hear other people's thoughts.",
  "Create a narrative where a character has to choose between two impossible futures."
];

const generateBtn = document.getElementById('generate-btn');
const promptDisplay = document.getElementById('prompt-display');

generateBtn.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * prompts.length);
  const prompt = prompts[randomIndex];
  promptDisplay.textContent = prompt;
});
