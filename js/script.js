//     ПАНЕЛЬ С ФИЛЬТРАМИ

let sityFilter = document.getElementById("locationFilter");

let busyFilter = document.getElementById("typeOfBusyFilter");

let workTimeFilter = document.getElementById("workTimeFilter");

let expFilter = document.getElementById("WorkExpFilter");

let salaryFilter = document.getElementById("salaryFilter");

let submintForm = document.getElementById("submitFilterForm");

let filtresOpenerNode = document.querySelectorAll(".filtresOpener");

// console.log(filtresOpenerNode);
// for (const filtresopenerItem of filtresOpenerNode) {
//   console.log(filtresopenerItem.checked);
// }
function displayFilterPanel(ev) {
  ev.preventDefault();
}
busyFilter.addEventListener("click", displayFilterPanel(event));

workTimeFilter.addEventListener;
//           ----------------------
