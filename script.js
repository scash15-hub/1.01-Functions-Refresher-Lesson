// Helper function: writes any HTML into the #out div
function render(html) {
  document.getElementById('out').innerHTML = html
}

/*
  Function 1 — greet()
  ---------------------
  - Prompt the user for their name
  - If they type something, display "Hello, NAME!"
  - If they cancel or leave blank, show a friendly message
*/
function greet() {
  // TODO: Write your code here
  const userName = prompt("What is your name?");
  if (!userName || !userName.trim()) {
    //check for empty or canceled input
    render("<p class='text-muted'>No name entered.</p>");
    return //exit the function early
  } else {
    render(`<p>Hello, ${userName}!</p>`);

  }
}

/*
  Function 2 — averageNumbers()
  ------------------------------
  - Prompt the user for a list of numbers separated by commas
  - Split the input into an array, turn into numbers
  - Calculate the average
  - Display the average AND the list of numbers
*/
function averageNumbers() {
  // TODO: Write your code here
  const nums = prompt('Enter a list of numbers separated by commas');

  if (!nums) {
    render("<p class='text-muted'>No numbers entered.</p>");
    return;
  }

  const numArray = nums
                   .split(',')
                   .map((n) => parseFloat(n.trim()))
                   .filter((n) => !isNaN(n)); //filter out invalid numbers
  
  const sum = numArray.reduce((a,b) => a + b, 0); //for every item combine them into a single value bc gna get average
  const avg = sum / numArray.length;
  
  const list = numArray.map((n) => `<li class="list-group-item">${n}</li>`).join('');

  render(`
    <p> Average:<strong>${avg}</strong></p>
    <ul class="list-group">${list}</ul>
    `);

}

/*
  Function 3 — timeOfDay()
  -------------------------
  - Get the current hour from the computer clock
  - Decide whether it's morning, afternoon, or evening
  - Display a message like "Good morning!"
*/
function timeOfDay() {
  const h = new Date().getHours();
  let msg = '';
  if (h < 12) {
    msg = 'Good morning!';
  } else if (h >= 12 && h < 15) {
    msg = 'Good afternoon!';
  } else if (h >= 15 && h < 18) {
    msg = 'Good evening!';
  } else {
    msg = 'Good night!';
  }
  render(`<p>${msg}</p>`);
}

/*
  Function 4 — randomBetween()
  -----------------------------
  - Prompt the user for a minimum and maximum number
  - Generate a random number between them
  - Display the result
  - Handle invalid input (like blanks or min >= max)
*/
function randomBetween() {
  // TODO: Write your code here
}

/*
  Function 5 — clearOutput()
  ---------------------------
  - Clear whatever is inside #out
  - Replace it with a placeholder message like "Output cleared."
*/
function clearOutput() {
  render("<p class='text-muted'>No numbers entered</p>");
}

// ---- Event listeners for the demo buttons ----
document.getElementById('btnGreet').addEventListener('click', greet)
document.getElementById('btnAvg').addEventListener('click', averageNumbers)
document.getElementById('btnTime').addEventListener('click', timeOfDay)
document.getElementById('btnRandom').addEventListener('click', randomBetween)
document.getElementById('btnClear').addEventListener('click', clearOutput)
document.getElementById('btnChangeTitle').addEventListener('click', changeTitle)
document.getElementById('page-title').addEventListener('click', changeTitle);
document.getElementById('btnRandTextColor').addEventListener('click', changeTextColor);
document.getElementById('btnRandBgColor').addEventListener('click', changeBackgroundColor);
document.getElementById('btnAngry').addEventListener('click', angryMode);
/*
  ------------------------------------------
  Student Challenge Section
  ------------------------------------------
  Add 4 new functions here, each with its own button in index.html:
 
  1) Change the page title text to something new.
  2) Each time you press the button, the output text color cycles through a few choices (red, green, orange, etc.).
  3) Press the button to change the background color of the output box to a random color.
  4) Angry mode
 
  Write each function below, and don’t forget to connect each one
  to a new button in index.html using addEventListener.
*/


function changeTitle() {
  const newTitle = prompt("Enter a new title for the page:");
  if (newTitle && newTitle.trim()) {
    document.title = newTitle;
  }
  const titleElement = document.getElementById('page-title');
  if (newTitle && newTitle.trim()) {
    titleElement.textContent = newTitle;
  }
}

function changeTextColor() {
  const outputElement = document.getElementById('out');
  const colors = ['pink', 'cyan', 'blue', 'purple', 'teal', 'yellow', 'orange'];
  const currentColor = outputElement.style.color;
  const nextColor = colors[(colors.indexOf(currentColor) + 1) % colors.length];
  outputElement.style.color = nextColor;
}

function changeBackgroundColor() {
  const outputElement = document.getElementById('out');
  const randomHex = Math.floor(Math.random() * 16777216)
    .toString(16)
    .padStart(6, '0');

  outputElement.style.backgroundColor = `#${randomHex}`;
}

function angryMode() {
  const outputElement = document.getElementById('out');
  outputElement.style.color = 'red';
  outputElement.style.fontSize = '2em';
  outputElement.style.fontWeight = 'bold';
  outputElement.style.textAlign = 'center';
  outputElement.textContent = 'ANGRY MODE ACTIVATED!';
  document.body.style.backgroundColor = 'black';
  document.body.style.color = 'white';
  document.body.style.fontFamily = 'Impact, Charcoal, sans-serif';
}