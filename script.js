// Function to calculate flying time
function calculateFlyingTime(departure, arrival) {
  const departureDate = new Date(departure);
  const arrivalDate = new Date(arrival);
  const diffMs = arrivalDate - departureDate;
  const diffHrs = Math.floor(diffMs / 3600000);
  const diffMins = Math.round((diffMs % 3600000) / 60000);
  return `${diffHrs}hr(s) ${diffMins}min(s)`;
}

// Function to format dates
function formatDate(dateStr, format) {
  const date = new Date(dateStr);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-US", options);
  if (format === "trip") {
    return `${formattedDate.toUpperCase()}`;
  }
  if (format === "departure") {
    return `${formattedDate.split(",")[0].toUpperCase()} ${formattedDate
      .split(",")[1]
      .trim()
      .toUpperCase()}`;
  }
  return formattedDate;
}

// Function to handle form submission
document
  .getElementById("ticketForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Retrieve form values
    const airLine = document.getElementById("airLine").value;
    const airportDepartureCity = document.getElementById(
      "airportDepartureCity"
    ).value;
    const airportArrivalCity =
      document.getElementById("airportArrivalCity").value;
    const eTicket = document.getElementById("eTicket").value;
    const cabinClass = document.getElementById("cabinClass").value;
    const passengerName = document.getElementById("passengerName").value;
    const reservationCode = document.getElementById("reservationCode").value;
    const departureCity = document.getElementById("departureCity").value;
    const arrivalCity = document.getElementById("arrivalCity").value;
    const departureTime = document.getElementById("departureTime").value;
    const arrivalTime = document.getElementById("arrivalTime").value;
    const flightNumber = document.getElementById("flightNumber").value;
    const weight = document.getElementById("weight").value;
    const Status = document.getElementById("Status").value;
    const seats = document.getElementById("seats").value;
    const Terminal_1 = document.getElementById("Terminal-1").value;
    const Terminal_2 = document.getElementById("Terminal-2").value;
    const Meals = document.getElementById("Meals").value;
    const nameTitles = document.getElementById("nameTitles").value;

    // Update ticket display with form values
    document.getElementById("displayAirLine").innerText = airLine;
    document.getElementById("displayAirportDepartureCity").innerText =
      airportDepartureCity;
    document.getElementById("displayAirportArrivalCity").innerText =
      airportArrivalCity;
    document.getElementById("displayETicket").innerText = eTicket;
    document.getElementById("displayCabinClass").innerText = cabinClass;
    document.getElementById("templateName").textContent = passengerName;
    document.getElementById("displayPassengerName").textContent = passengerName;
    document.getElementById("displayReservationCode").textContent =
      reservationCode;
    document.getElementById("displayDepartureCity").textContent = departureCity;
    document.getElementById("displayArrivalCity").textContent = arrivalCity;
    document.getElementById("displayFlightNumber").textContent = flightNumber;
    document.getElementById("displayWeight").textContent = `${weight} kg`;
    document.getElementById("displayStatus").textContent = Status;
    document.getElementById("displaySeats").textContent = seats;
    document.getElementById("displayTerminal-1").textContent = Terminal_1;
    document.getElementById("displayTerminal-2").textContent = Terminal_2;
    document.getElementById("displayMeals").textContent = Meals;
    document.getElementById("displayTitles").textContent = nameTitles;

    // Store form values in localStorage
    localStorage.setItem("airLine", airLine);
    localStorage.setItem("airportDepartureCity", airportDepartureCity);
    localStorage.setItem("airportArrivalCity", airportArrivalCity);
    localStorage.setItem("eTicket", eTicket);
    localStorage.setItem("passengerName", passengerName);
    localStorage.setItem("reservationCode", reservationCode);
    localStorage.setItem("departureCity", departureCity);
    localStorage.setItem("arrivalCity", arrivalCity);
    localStorage.setItem("departureTime", departureTime);
    localStorage.setItem("arrivalTime", arrivalTime);
    localStorage.setItem("flightNumber", flightNumber);
    localStorage.setItem("cabinClass", cabinClass);
    localStorage.setItem("weight", weight);
    localStorage.setItem("Status", Status);
    localStorage.setItem("seats", seats);
    localStorage.setItem("Terminal-1", Terminal_1);
    localStorage.setItem("Terminal-2", Terminal_2);
    localStorage.setItem("Meals", Meals);
    localStorage.setItem("nameTitles", nameTitles);

    // Calculate and display flying time
    const flyingTime = calculateFlyingTime(departureTime, arrivalTime);
    document.getElementById("displayFlyingTime").textContent = flyingTime;

    // Format departure and arrival dates
    const formattedDeparture = formatDate(departureTime, "trip");
    const formattedArrival = formatDate(arrivalTime, "trip");
    const tripDetails = `${formattedDeparture} ➤ ${formattedArrival} TRIP TO ${airportArrivalCity}`;
    document.getElementById("displayDepartureDetails").textContent =
      tripDetails;

    document.getElementById("displayDepartureDate").textContent =
      formattedDeparture;
    document.getElementById("displayDepartureTime").textContent = new Date(
      departureTime
    ).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
    document.getElementById("displayArrivalTime").textContent = new Date(
      arrivalTime
    ).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });

    // Update document title
    document.title = `${nameTitles} ${passengerName}`;
    document.getElementById("print-btn").classList.remove("disabled");

  });

// Function to populate ticket details from localStorage
document.addEventListener("DOMContentLoaded", function () {
  const airLine = localStorage.getItem("airLine");
  const airportDepartureCity = localStorage.getItem("airportDepartureCity");
  const airportArrivalCity = localStorage.getItem("airportArrivalCity");
  const eTicket = localStorage.getItem("eTicket");
  const passengerName = localStorage.getItem("passengerName");
  const reservationCode = localStorage.getItem("reservationCode");
  const departureCity = localStorage.getItem("departureCity");
  const arrivalCity = localStorage.getItem("arrivalCity");
  const departureTime = localStorage.getItem("departureTime");
  const arrivalTime = localStorage.getItem("arrivalTime");
  const flightNumber = localStorage.getItem("flightNumber");
  const cabinClass = localStorage.getItem("cabinClass");
  const weight = localStorage.getItem("weight");
  const Status = localStorage.getItem("Status");
  const seats = localStorage.getItem("seats");
  const Terminal_1 = localStorage.getItem("Terminal-1");
  const Terminal_2 = localStorage.getItem("Terminal-2");
  const Meals = localStorage.getItem("Meals");
  const nameTitles = localStorage.getItem("nameTitles");

  if (airLine) {
    document.getElementById("displayAirLine").textContent = airLine;
  }
  if (airportDepartureCity) {
    document.getElementById("displayAirportDepartureCity").textContent =
      airportDepartureCity;
  }
  if (airportArrivalCity) {
    document.getElementById("displayAirportArrivalCity").textContent =
      airportArrivalCity;
  }
  if (eTicket) {
    document.getElementById("displayETicket").textContent = eTicket;
  }
  if (passengerName) {
    document.getElementById("templateName").textContent = passengerName;
    document.getElementById("displayPassengerName").textContent = passengerName;
  }
  if (reservationCode) {
    document.getElementById("displayReservationCode").textContent =
      reservationCode;
  }
  if (departureCity) {
    document.getElementById("displayDepartureCity").textContent = departureCity;
  }
  if (arrivalCity) {
    document.getElementById("displayArrivalCity").textContent = arrivalCity;
  }
  if (departureTime) {
    document.getElementById("displayDepartureTime").textContent = new Date(
      departureTime
    ).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
  }
  if (arrivalTime) {
    document.getElementById("displayArrivalTime").textContent = new Date(
      arrivalTime
    ).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
  }
  if (flightNumber) {
    document.getElementById("displayFlightNumber").textContent = flightNumber;
  }
  if (cabinClass) {
    document.getElementById("displayCabinClass").textContent = cabinClass;
  }
  if (weight) {
    document.getElementById("displayWeight").textContent = `${weight} kg`;
  }
  if (Status) {
    document.getElementById("displayStatus").textContent = Status;
  }
  if (seats) {
    document.getElementById("displaySeats").textContent = seats;
  }
  if (Terminal_1) {
    document.getElementById("displayTerminal-1").textContent = Terminal_1;
  }
  if (Terminal_2) {
    document.getElementById("displayTerminal-2").textContent = Terminal_2;
  }
  if (Meals) {
    document.getElementById("displayMeals").textContent = Meals;
  }
  if (nameTitles) {
    document.getElementById("displayTitles").textContent = nameTitles;
  }

  // Calculate and display flying time
  if (departureTime && arrivalTime) {
    const flyingTime = calculateFlyingTime(departureTime, arrivalTime);
    document.getElementById("displayFlyingTime").textContent = flyingTime;

    // Format departure and arrival dates
    const formattedDeparture = formatDate(departureTime, "trip");
    const formattedArrival = formatDate(arrivalTime, "trip");
    const tripDetails = `${formattedDeparture} ➤ ${formattedArrival} TRIP TO ${airportArrivalCity}`;
    document.getElementById("displayDepartureDetails").textContent =
      tripDetails;

    document.getElementById("displayDepartureDate").textContent =
      formattedDeparture;
  }
});

// Function to print the ticket
function Print() {
  const passengerName = localStorage.getItem("passengerName");
  const nameTitles = localStorage.getItem("nameTitles");

  if (passengerName && nameTitles) {
    const uppercaseTitle = `${nameTitles} ${passengerName}`.toUpperCase();
    document.title = uppercaseTitle;
    window.print();
  }
}

function flightLogo() {
  let photo = document.getElementById("photo");
  let flightLogo = document.getElementById("flightLogo");

  flightLogo.onchange = function () {
    photo.src = URL.createObjectURL(flightLogo.files[0]);
  };
}

function initializePage() {
  // جلب بيانات المطارات وتخزينها في airportCodes
  $.get("airports.dat", function (data) {
    const airportCodes = {};

    // تقسيم البيانات إلى أسطر
    const lines = data.split("\n");

    // معالجة كل سطر وإضافة بيانات المطارات إلى الهيكل
    lines.forEach(function (line) {
      const parts = line.split(",");
      if (parts.length >= 12) {
        const airportCode = parts[4].replace(/"/g, ""); // الرمز
        const country = parts[3].replace(/"/g, ""); // البلد
        const city = parts[2].replace(/"/g, ""); // المدينة
        airportCodes[airportCode] = `${country}, ${city}`;
      }
    });

    // تهيئة خاصية autocomplete لحقول المدينة في النموذج
    $(function () {
      $("#departureCity").autocomplete({
        source: Object.keys(airportCodes),
        select: function (event, ui) {
          $("#departureCity").val(ui.item.value);
          fillDepartureCity();
        },
      });

      $("#arrivalCity").autocomplete({
        source: Object.keys(airportCodes),
        select: function (event, ui) {
          $("#arrivalCity").val(ui.item.value);
          fillArrivalCity();
        },
      });
    });

    function fillDepartureCity() {
      const departureCityCode = document
        .getElementById("departureCity")
        .value.toUpperCase();
      const departureCityInfo = airportCodes[departureCityCode] || "";
      document.getElementById("airportDepartureCity").value = departureCityInfo;
    }

    function fillArrivalCity() {
      const arrivalCityCode = document
        .getElementById("arrivalCity")
        .value.toUpperCase();
      const arrivalCityInfo = airportCodes[arrivalCityCode] || "";
      document.getElementById("airportArrivalCity").value = arrivalCityInfo;
    }
  });

  
  
  $(document).ready(function () {
    // Autocomplete for departureCity field
    $("#departureCity").autocomplete({
      source: function (request, response) {
        $.ajax({
          url: "airport_search.php", // Replace with your backend script to fetch airport data
          method: "GET",
          dataType: "json",
          data: {
            term: request.term,
          },
          success: function (data) {
            response(data);
          },
        });
      },
      minLength: 2, // Minimum characters before autocomplete starts
    });

    // Autocomplete for arrivalCity field
    $("#arrivalCity").autocomplete({
      source: function (request, response) {
        $.ajax({
          url: "airport_search.php", // Replace with your backend script to fetch airport data
          method: "GET",
          dataType: "json",
          data: {
            term: request.term,
          },
          success: function (data) {
            response(data);
          },
        });
      },
      minLength: 2, // Minimum characters before autocomplete starts
    });
  });

}

