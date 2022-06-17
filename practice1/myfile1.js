displayDate = () => {
  return Date.now().toString();
};

let time = new Date();

const formatAMPM = (date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes.toString().padStart(2, "0");
  let strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
};

console.log(formatAMPM(new Date(2021, 1, 1)));

function displayDay() {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let d = new Date();
  let day = weekday[d.getUTCDay()];
  //   d.getDate();
  return day;
}

function displayCurrentTime() {
  let t = new Date();
  return t.getHours;
}

console.log(`Today day is ${displayDay()}`);
console.log(
  "Current Time is " +
    time.getHours() +
    ":" +
    time.getMinutes() +
    ":" +
    time.getSeconds() +
    "/n" +
    formatAMPM(new Date(2021, 1, 1))
);
