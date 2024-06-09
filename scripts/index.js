// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
// @todo: DOM узлы
const placesList = document.querySelector('.places__list');
// @todo: Функция создания карточки


function cardCreate(element, cardDelete) {
  const cardCopy = cardTemplate.cloneNode(true);
  const deleteButton = cardCopy.querySelector('.card__delete-button');
  cardCopy.querySelector('.card__image').src = element.link;
  cardCopy.querySelector('.card__title').textContent = element.name;
  deleteButton.addEventListener('click', cardDelete);
return cardCopy
}


// @todo: Функция удаления карточки
function cardDelete(element) {
    element.target.closest('.places__item').remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach(function (element) {
    placesList.append(cardCreate(element, cardDelete));
    })

