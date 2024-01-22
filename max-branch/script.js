const toggleFavorite = (element) => {
  if (element.classList.contains('unLiked')) {
    element.src = "./img/like-on.svg";
    element.alt = "favorite";
    element.classList.remove('unLiked');
    element.classList.add('isLiked');
  } else if (element.classList.contains('isLiked')) {
    element.src = "./img/like-off.svg";
    element.alt = "unfavorite";
    element.classList.remove('isLiked');
    element.classList.add('unLiked');
  }
};

document.addEventListener('click', (event) => {
  const clickedElement = event.target;
  if (clickedElement.classList.contains('isLiked') || clickedElement.classList.contains('unLiked')) {
    toggleFavorite(clickedElement);
  }
});