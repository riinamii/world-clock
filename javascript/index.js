function updateTime() {
  let cities = document.querySelectorAll(".city");
  if (cities) {
    cities.forEach((city) => {
      let cityTimeZone = city.dataset.timezone;
      let date = moment().tz(cityTimeZone).format("MMMM Do YYYY");
      let time = moment().tz(cityTimeZone).format("h:mm:ss A");

      let updateTime = city.querySelector(".time");
      let updateDate = city.querySelector(".date");

      updateTime.innerHTML = time;
      updateDate.innerHTML = date;
    });
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityTime = moment().tz(cityTimeZone);
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
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
citySelectElement.addEventListener("change", updateCity);
