function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss A");

  let lisbonElement = document.querySelector("#lisbon");
  let lisbonDateElement = lisbonElement.querySelector(".date");
  let lisbonTimeElement = lisbonElement.querySelector(".time");
  let lisbonTime = moment().tz("Europe/Lisbon");

  lisbonDateElement.innerHTML = lisbonTime.format("MMMM Do YYYY");
  lisbonTimeElement.innerHTML = lisbonTime.format("h:mm:ss A");

  let kyivElement = document.querySelector("#kyiv");
  let kyivDateElement = kyivElement.querySelector(".date");
  let kyivTimeElement = kyivElement.querySelector(".time");
  let kyivTime = moment().tz("Europe/Kyiv");

  kyivDateElement.innerHTML = kyivTime.format("MMMM Do YYYY");
  kyivTimeElement.innerHTML = kyivTime.format("h:mm:ss A");

  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss A");
}

updateTime();
setInterval(updateTime, 1000);
