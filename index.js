/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

// Generates a random freelancer object.
function generateFreelancer() {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const occupation =
    OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const rate = Math.floor(
    Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1) + PRICE_RANGE.min
  );
  return { name, occupation, rate };
}

//
//
// Generate an array of freelancers by calling generateFreelancer multiple times.
const freelancers = Array.from({ length: NUM_FREELANCERS }, generateFreelancer);

//
//
// Calculates the average rate of the given array of freelancers.
function calculateAverageRate(freelancers) {
  const totalRate = freelancers.reduce(
    (sum, freelancer) => sum + freelancer.rate,
    0
  );
  return totalRate / freelancers.length;
}

// Renders a freelancer card component.
function freelancerCard(freelancer) {
  return (
    `<div class = "freeLancer-card">` +
    `<h2>${freelancer.name}</h2>` +
    `<p> Occupation: ${freelancer.occupation} </p>` +
    `<p> Rate: $${freelancer.rate} per hour </p>` +
    `</div>`
  );
}

// Renders the average rate component.
function averageRateComponent(averageRate) {
  return (
    `<div class = "average-rate">` +
    `<p> The average rate is: $${averageRate.toFixed(2)}.</p>` +
    `</div>`
  );
}

// Renders the application.
function render() {
  const appElement = document.getElementById("app");
  const averageRate = calculateAverageRate(freelancers);
}

const averageRate = calculateAverageRate(freelancers);

function freelancerListComponent(list) {
  return list.map((freelancer) => freelancerCard(freelancer)).join("");
}

function render() {
  const appElement = document.getElementById("app");
  appElement.innerHTML =
    `<h1>Freelancer Forum</h1>` +
    averageRateComponent(averageRate) +
    `<div class = "freelancers">${freelancerListComponent(freelancers)}</div>`;
}

render();
