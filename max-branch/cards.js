class VacancyCard {
  constructor (companyName, position, location, //filters,
  date, isLiked = false) {
    this.companyName = companyName;
    this.position = position;
    this.location = location;
    //this.filters = filters;
    this.date = date;
    this.isLiked = isLiked;
  }

  displayCard() {

    let dateElem = new Date(this.date)
    let month = dateElem.getMonth();
    month += 1;
    let day = dateElem.getDate();
    let year = dateElem.getFullYear();

    const newCard = document.createElement('div');
    newCard.classList.add('card')
    newCard.innerHTML = 
    `
    <img src="./img/unimaged.svg" alt="internet-people logo">
    <div class="vacancyInfo">
      <div class="companyInfo">
        <span>${this.companyName}</span>
        <h3>${this.position}</h3>
        <span>${this.location}</span>
      </div>
      <div id="filtersContainer" class="filters">
        <span id="jQueryFilter">jQuery</span>
        <span id="JavaScriptFilter">JavaScript</span>
        <span id="CSS3Filter">CSS3</span>
        <span id="ReactFilter">React</span>
        <span id="GitFilter">Git</span>
        <span id="VueFilter">Vue</span>
        <span id="FlexboxFilter">Flexbox</span>
        <span id="HTML5Filter">HTML5</span>
      </div>
    </div>
    <div class="cardAttr">
      <img src="./img/like-on.svg" alt="favorite" class="isLiked">
      <span id="vacancyDate">${day}/${month}/${year}</span>
    </div>
  `;
  document.getElementById('cardsSection').appendChild(newCard)
  }
} // без фильтров