const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2022, 9, 18, 9, 50, 0);
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${date} ${month} (${weekday}), ${year} at ${hours}:${minutes} am`;

// future time in ms
const futureTIme = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTIme - today;

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  //calculate values
  let days = Math.trunc(t / oneDay);
  let hours = Math.trunc((t % oneDay) / oneHour);
  let minutes = Math.trunc((t % oneHour) / oneMinute);
  let seconds = Math.trunc((t % oneMinute) / 1000);
  const values = [days, hours, minutes, seconds];

  items.forEach((item, idx) => {
    item.innerHTML = values[idx] < 10 ? `0${values[idx]}` : values[idx];
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class='expired'>Sorry this giveaway has expired</h4>`;
  }
}

// countdown
let countdown = setInterval(getRemainingTime, 1000);
