// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
// @todo: DOM узлы
const placesList = document.querySelector('.places__list');
// @todo: Функция создания карточки


function cardCreate(element, cardDelete) {
  const cardContent = cardTemplate.querySelector('.places__item').cloneNode(true); 
  const deleteButton = cardContent.querySelector('.card__delete-button');
  cardContent.querySelector('.card__image').src = element.link;
  cardContent.querySelector('.card__image').alt = element.name;
  cardContent.querySelector('.card__title').textContent = element.name;
  deleteButton.addEventListener('click', cardDelete);
return cardContent
}


// @todo: Функция удаления карточки
function cardDelete(evt) {
    evt.target.closest('.places__item').remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach(function (element) {
    placesList.append(cardCreate(element, cardDelete));
    })