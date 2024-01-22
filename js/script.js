//     ПАНЕЛЬ С ФИЛЬТРАМИ

let sityFilter = document.getElementById("locationFilter");

let workTimeFilter = document.getElementById("workTimeFilter");

let busyFilter = document.getElementById("typeOfBusyFilter");

let expFilter = document.getElementById("WorkExpFilter");

let salaryFilter = document.getElementById("salaryFilter");

let submintForm = document.getElementById("submitFilterForm");

let filtresOpenerNode = document.querySelectorAll(".filtresOpener");

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


// Класс с формой для отправки на сервер
class filterform {
    constructor(
        sity,
        flexDay,
        fullDay,
        remoteWork,
        // fullBusy,
        // participalBusy,
        // projectWork,
        // studyCours,
        // noExp,
        // oneToThreeYearsExp,
        // threeToSixYearsExp,
        // moreSixYearsParametr,
        // salary
    ) {
        this.sity = sity;
        this.workTimeFilter = {
            flexDay: this.flexDay = flexDay,
            fullDay: this.fullDay = fullDay,
            remoteWork: this.remoteWork = remoteWork,
        }


    }
}

let flterParametrs = new filterform('москва', true, false, false)
console.log(flterParametrs)
    //           ----------------------