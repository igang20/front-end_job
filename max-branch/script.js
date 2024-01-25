//const toggleFavorite = (element) => {
//  if (element.classList.contains('unLiked')) {
//    element.src = "./img/like-on.svg";
//    element.alt = "favorite";
//    element.classList.remove('unLiked');
//    element.classList.add('isLiked');
//  } else if (element.classList.contains('isLiked')) {
//    element.src = "./img/like-off.svg";
//    element.alt = "unfavorite";
//    element.classList.remove('isLiked');
//    element.classList.add('unLiked');
//  }
//};
// сделать объектную модель и передавать параметры isLiked == True
//
//
//document.addEventListener('click', (event) => {
//  const clickedElement = event.target;
//  if (clickedElement.classList.contains('isLiked') || clickedElement.classList.contains('unLiked')) {
//    toggleFavorite(clickedElement);
//  }
//});


const createVacancyButton = document.getElementById('createVacancyButton');

createVacancyButton.onclick = () => {

  const newVacancyCard = new VacancyCard(
    companyInput = document.getElementById('companyInput').value,
    positionInput = document.getElementById('positionInput').value,
    locationInput = document.getElementById('locationSelect').value,
    dateInput = document.getElementById('dateInput').value,
    false
  )

  if (companyInput !== "" && 
      positionInput !== "" && 
      locationInput !== "" &&
      dateInput !== "") {
    newVacancyCard.displayCard();
    } else {
      alert('Введите данные в форму')
    }
}