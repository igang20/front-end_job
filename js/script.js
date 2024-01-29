//     ПАНЕЛЬ С ФИЛЬТРАМИ

let sityFilter = document.querySelector("#locationFilter input");

let workTimeFilter = document.getElementById("workTimeFilter");

let busyFilter = document.getElementById("typeOfBusyFilter");

let expFilter = document.getElementById("WorkExpFilter");

let salaryFilter = document.querySelector("#salaryFilter input");

let submintForm = document.getElementById("submitFilterForm");

let inputParentsNode = document.querySelectorAll('.filterItem input')

let busyFilterStatus = false;

let workTimeFilterStatus = false;

let expFilterStatus = false;

busyFilter.addEventListener("click", () => {
    if (busyFilterStatus == false) {
        busyFilter.querySelector(".dropDownMenu").classList.add("visible");
        busyFilterStatus += true;
    } else if (busyFilterStatus == true) {
        busyFilter.querySelector(".dropDownMenu").classList.remove("visible");
        busyFilterStatus = false;
    }
});

workTimeFilter.addEventListener("click", () => {
    if (workTimeFilterStatus == false) {
        workTimeFilter.querySelector(".dropDownMenu").classList.add("visible");
        workTimeFilterStatus += true;
    } else if (workTimeFilterStatus == true) {
        workTimeFilter.querySelector(".dropDownMenu").classList.remove("visible");
        workTimeFilterStatus = false;
    }
});

expFilter.addEventListener("click", () => {
    if (expFilterStatus == false) {
        expFilter.querySelector(".dropDownMenu").classList.add("visible");
        expFilterStatus += true;
    } else if (expFilterStatus == true) {
        expFilter.querySelector(".dropDownMenu").classList.remove("visible");
        expFilterStatus = false;
    }
});

submintForm.addEventListener('click', () => {
    let filterform = new Object();

    for (let inputItem of inputParentsNode) {
        if (inputItem.checked === true)
            filterform[inputItem.name] = inputItem.checked;
    }

    filterform.sityFilter = sityFilter.value;

    filterform.salaryFilter = salaryFilter.value

    fetch("http://ip.jsontest.com/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(filterform)
    })

    busyFilterStatus = false;
    workTimeFilterStatus = false;
    expFilterStatus = false;
    busyFilter.querySelector(".dropDownMenu").classList.remove("visible");
    workTimeFilter.querySelector(".dropDownMenu").classList.remove("visible");
    expFilter.querySelector(".dropDownMenu").classList.remove("visible");

})

console.log(sityFilter)




//           ----------------------