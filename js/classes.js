// Класс с формой для отправки на сервер
class filterform {
  constructor(
    sity,
    flexDay,
    fullDay,
    remoteWork,
    fullBusy,
    participalBusy,
    projectWork,
    studyCours,
    noExp,
    oneToThreeYearsExp,
    threeToSixYearsExp,
    moreSixYearsParametr,
    salary
  ) {
    this.sity = sity;
    this.workTimeFilter = {
      flexDay: flexDay,
      fullDay: fullDay,
      remoteWork: remoteWork,
    };
    this.typeOfBusyFilter = {
      fullBusy: fullBusy,
      participalBusy: participalBusy,
      projectWork: projectWork,
      studyCours: studyCours,
    };
    this.workExpFilter = {
      noExp: noExp,
      oneToThreeYearsExp: oneToThreeYearsExp,
      threeToSixYearsExp: threeToSixYearsExp,
      moreSixYearsParametr: moreSixYearsParametr,
    };
    this.salary = salary;
  }
}
