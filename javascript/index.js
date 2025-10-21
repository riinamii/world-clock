let selectedTimeZone = null;

function updateTime() {
  document.querySelectorAll(".city").forEach((city) => {
    let cityTimeZone = city.dataset.timezone;
    let date = moment().tz(cityTimeZone).format("MMMM Do YYYY");
    let time = moment().tz(cityTimeZone).format("h:mm:ss A");

    city.querySelector(".time").innerHTML = time;
    city.querySelector(".date").innerHTML = date;
  });

  if (selectedTimeZone) {
    updateCity();
  }
}

function updateCity() {
  if (!selectedTimeZone) return;

  let cityTimeZone =
    selectedTimeZone === "current" ? moment.tz.guess() : selectedTimeZone;

  let cityTime = moment().tz(cityTimeZone);
  let cityName = cityTimeZone.split("/")[1];

  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `  
  <div class="selected-city">
    <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
        <div class="time">${cityTime.format(
          "h:mm:ss"
        )} <small>${cityTime.format("A")}</small></div>
    </div>
    <a href="/" class="all-cities-btn">All cities</a>
    `;
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", function (event) {
  selectedTimeZone = event.target.value;

  updateCity();
});
