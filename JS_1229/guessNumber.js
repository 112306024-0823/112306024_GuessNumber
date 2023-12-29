// Global variables
let secretNumber = generateRandomNumber();

// Function to generate a random number between 1 and 10
function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// Function to check the user's guess
function checkGuess() {
  // Local variable
  let userGuess = document.getElementById("userGuess").value;
  let resultElement = document.getElementById("result");

  // Here should be an if-else statement.
  if (userGuess == secretNumber) {
    // Correct guess
    showImageAndPlaySound("picture2.jpeg", 'music2.mp3');
    // Update the message after a delay
    setTimeout(function () {
      resultElement.innerHTML = "Congratulations! You guessed the correct number!";
    }, 1000); // Adjust the delay as needed

    // Generate a new random number for the next round
    secretNumber = generateRandomNumber();
  } else {
    showImageAndPlaySound("picture1.jpeg", 'music1.mp3');
    setTimeout(function () {
      resultElement.innerHTML = "Sorry, try again!";
    }, 1500); // Adjust the delay as needed
  }

  document.getElementById("userGuess").value = "";
}

// Function to show image and play sound
function showImageAndPlaySound(imageSource, soundSource) {
  let imageElement = document.createElement("img");
  imageElement.src = imageSource;

  let soundElement = document.createElement("audio");
  soundElement.src = soundSource;

  let resultContainer = document.getElementById("result");
  resultContainer.innerHTML = "";
  resultContainer.appendChild(imageElement);
  resultContainer.appendChild(soundElement);

  // Play the sound in response to a user action (button click or Enter key press)
  soundElement.play();
}

// Function to handle key press (outside of other functions)
function handleKeyPress(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // Prevent the default form submission behavior
    checkGuess();
  }
}
