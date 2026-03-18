/**
 * Each question stores the correct answer text separately.
 * Options are shuffled at load time so the correct answer
 * lands in a random position every playthrough.
 */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildQuestion(question, correctAnswer, wrongAnswers) {
  const options = shuffle([correctAnswer, ...wrongAnswers]);
  return { question, options, correct: options.indexOf(correctAnswer) };
}

const questions = [
  buildQuestion(
    "What has Dan never seen?",
    "His mum's curly hair",
    ["The Atacama Desert", "The Interstellar", "Adi on a skateboard"]
  ),
  buildQuestion(
    "Who is Dan's favourite Dog?",
    "Tony",
    ["Loki", "Garfield", "Scooby Doo"]
  ),
  buildQuestion(
    "What is Dan's favourite football team?",
    "Manchester United",
    ["Arsenal", "Chelsea", "Barcelona"]
  ),
  buildQuestion(
    "Who is Dan's favourite child?",
    "He loves all of them equally",
    ["Ron", "Adi", "Hili"]
  ),
  buildQuestion(
    "What does Dan pretend not to like but secretly loves?",
    "Shopping",
    ["The Kardashians", "Rollerblades", "Cocktails"]
  ),
];

export const correctFeedback = [
  "Correct. As expected.",
  "Verified.",
  "Strong answer.",
  "Confirmed.",
  "That checks out.",
];

export const wrongFeedback = [
  "That's concerning.",
  "We'll ignore that.",
  "Not your best moment.",
  "Noted. Moving on.",
  "Interesting choice…",
];

export default questions;
