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

function generateFreelancer() {
  return {
    name: NAMES[Math.floor(Math.random() * NAMES.length)],
    occupation: OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)],
    rate:
      Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) +
      PRICE_RANGE.min,
  };
}

const freelancers = Array.from({ length: NUM_FREELANCERS }, generateFreelancer);
