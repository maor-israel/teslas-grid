const createArrayFromNumber = (num) => {
  return Array.from(num.toString()).map((item) => parseInt(item));
};

const recursion = (arr) => {
  let DigitSum = 0;

  for (let j = 0; j < arr.length; j++) {
    const current = arr[j];
    DigitSum = current + DigitSum;
  }

  if (DigitSum > 9) {
    const array = createArrayFromNumber(DigitSum);
    return recursion(array);
  } else {
    return DigitSum;
  }
};

const calc = (multiplier, itterations) => {
  let result = multiplier;
  let outputArray = [];
  for (let i = 0; i < itterations; i++) {
    result = multiplier * result;
    const oldAray = createArrayFromNumber(result);
    outputArray.push(recursion(oldAray));
  }

  return outputArray;
};

// Get the canvas element
const canvas = document.getElementById("circleCanvas");
const ctx = canvas.getContext("2d");

// Set the center and radius of the circle
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 150;

// Number of points
const numberOfPoints = 9;

// Calculate the angle between each point
const angleIncrement = (2 * Math.PI) / numberOfPoints;

// Draw the circle with border
ctx.beginPath();
ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
ctx.strokeStyle = "#000"; // Set border color
ctx.lineWidth = 1; // Set border width
ctx.stroke();

// Draw the points
let pointsArray = [];

for (let i = 0; i < numberOfPoints; i++) {
  const angle = i * angleIncrement;
  const x = centerX + radius * Math.cos(angle);
  const y = centerY + radius * Math.sin(angle);

  pointsArray[i] = { x, y };
  // Draw a point at each (x, y) coordinate
  ctx.beginPath();
  ctx.arc(x, y, 5, 0, 2 * Math.PI);
  ctx.fill();
  // Close the path for the point
  ctx.closePath();
}

// Draw lines connecting points
const numbersArray = calc(2, 10);

for (let j = 0; j < numbersArray.length; j++) {
  const current = numbersArray[j];
  const next = numbersArray[j + 1];

  pointsArray[current].x;
  pointsArray[current].y;
  pointsArray[next].x;
  pointsArray[next].y;

  ctx.beginPath();
  ctx.moveTo(pointsArray[current].x, pointsArray[current].y);
  ctx.lineTo(pointsArray[next].x, pointsArray[next].y);
  ctx.stroke();
}
