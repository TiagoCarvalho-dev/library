// Hardcoded books used for developing

let book0 = new Book('Book0', 'Author0', 'fantasy', 'this book is nice', true, false);
let book1 = new Book('Book1', 'Author1', 'fiction', 'this book sucks', false, false);
let book2 = new Book('Book2', 'Author2', 'biography', 'this book is alright', false, true);

// End

let myLibrary = [book0, book1, book2];

function Book(title, author, genre, observation) {
  this.title = title,
  this.author = author,
  this.genre = genre,
  this.observation = observation,
  this.read = false,
  this.favorite = false
}

Book.prototype.toggleReadStatus = function() {
  this.read ? this.read = false : this.read = true;
}

Book.prototype.toggleFavoriteStatus = function (){
  this.favorite ? this.favorite = false : this.favorite = true;
}

showAllBookCards();

const form = document.querySelector('.add-book-form');

document.querySelector('.new-book-button').addEventListener('click', () => form.classList.toggle('hidden'));
document.querySelector('.add-book-button').addEventListener('click', addBook);
document.querySelector('.apply-button').addEventListener('click', () => {
  if (document.querySelector('#filter').value === 'a-z') {
    showAllBookCards();
  } else if (document.querySelector('#filter').value === 'z-a') {
    showAllBookCardsReversed();
  } else if (document.querySelector('#filter').value === 'genre') {
    showGenreBookCards();
  } else if (document.querySelector('#filter').value === 'read') {
    showReadBookCards();
  } else if (document.querySelector('#filter').value === 'favorite') {
    showFavoriteBookCards();
  }
});
document.querySelector('.search-button').addEventListener('click', showSearchedBookCards);

function clearAllCards() {
  while (document.querySelector('.book-cards').firstChild) {
    document.querySelector('.book-cards').removeChild(document.querySelector('.book-cards').lastChild);
  }
}

function addBook() {
  let book = new Book(form.elements['title'].value, form.elements['author'].value, form.elements['genre'].value, form.elements['observation'].value);
  myLibrary.push(book);
  console.log(myLibrary);
  makeBookCard();
  form.elements['title'].value = '';
  form.elements['author'].value = '';
  form.elements['genre'].value = 'biography';
  form.elements['observation'].value = '';
  event.preventDefault();
}

function makeBookCard() {
  document.querySelector('.book-cards').appendChild(document.createElement('div')).classList.add('book-card-' + (myLibrary.length - 1));
  document.querySelector('.book-card-' + (myLibrary.length - 1)).appendChild(document.createElement('h4')).textContent = myLibrary[(myLibrary.length - 1)].title;
  document.querySelector('.book-card-' + (myLibrary.length - 1)).appendChild(document.createElement('p')).textContent = myLibrary[(myLibrary.length - 1)].author;
  document.querySelector('.book-card-' + (myLibrary.length - 1)).appendChild(document.createElement('p')).textContent = myLibrary[(myLibrary.length - 1)].observation;
  document.querySelector('.book-card-' + (myLibrary.length - 1)).appendChild(document.createElement('p')).textContent = myLibrary[(myLibrary.length - 1)].genre;
  document.querySelector('.book-card-' + (myLibrary.length - 1)).appendChild(document.createElement('div')).classList.add('card-buttons-container-' + (myLibrary.length - 1));
  document.querySelector('.card-buttons-container-' + (myLibrary.length - 1)).appendChild(document.createElement('button')).setAttribute('type', 'button');
  document.querySelector('.card-buttons-container-' + (myLibrary.length - 1)).firstChild.textContent = 'READ';
  document.querySelector('.card-buttons-container-' + (myLibrary.length - 1)).appendChild(document.createElement('button')).setAttribute('type', 'button');
  document.querySelector('.card-buttons-container-' + (myLibrary.length - 1)).firstChild.nextSibling.textContent = 'FAVORITE';
  document.querySelector('.card-buttons-container-' + (myLibrary.length - 1)).appendChild(document.createElement('button')).setAttribute('type', 'button');
  document.querySelector('.card-buttons-container-' + (myLibrary.length - 1)).lastChild.textContent = 'ERASE';
}

function showAllBookCards() {
  clearAllCards();
  for (let i = 0; i < myLibrary.length; i++) {
    document.querySelector('.book-cards').appendChild(document.createElement('div')).classList.add('book-card-' + i);
    document.querySelector('.book-card-' + i).appendChild(document.createElement('h4')).textContent = myLibrary[i].title;
    document.querySelector('.book-card-' + i).appendChild(document.createElement('p')).textContent = myLibrary[i].author;
    document.querySelector('.book-card-' + i).appendChild(document.createElement('p')).textContent = myLibrary[i].observation;
    document.querySelector('.book-card-' + i).appendChild(document.createElement('p')).textContent = myLibrary[i].genre;
    document.querySelector('.book-card-' + i).appendChild(document.createElement('div')).classList.add('card-buttons-container-' + i);
    document.querySelector('.card-buttons-container-' + i).appendChild(document.createElement('button')).setAttribute('type', 'button');
    document.querySelector('.card-buttons-container-' + i).firstChild.textContent = 'READ';
    document.querySelector('.card-buttons-container-' + i).appendChild(document.createElement('button')).setAttribute('type', 'button');
    document.querySelector('.card-buttons-container-' + i).firstChild.nextSibling.textContent = 'FAVORITE';
    document.querySelector('.card-buttons-container-' + i).appendChild(document.createElement('button')).setAttribute('type', 'button');
    document.querySelector('.card-buttons-container-' + i).lastChild.textContent = 'ERASE';
  }
}

function showAllBookCardsReversed() {
  clearAllCards();
  for (let i = myLibrary.length - 1; i >= 0; i--) {
    document.querySelector('.book-cards').appendChild(document.createElement('div')).classList.add('book-card-' + i);
    document.querySelector('.book-card-' + i).appendChild(document.createElement('h4')).textContent = myLibrary[i].title;
    document.querySelector('.book-card-' + i).appendChild(document.createElement('p')).textContent = myLibrary[i].author;
    document.querySelector('.book-card-' + i).appendChild(document.createElement('p')).textContent = myLibrary[i].observation;
    document.querySelector('.book-card-' + i).appendChild(document.createElement('p')).textContent = myLibrary[i].genre;
    document.querySelector('.book-card-' + i).appendChild(document.createElement('div')).classList.add('card-buttons-container-' + i);
    document.querySelector('.card-buttons-container-' + i).appendChild(document.createElement('button')).setAttribute('type', 'button');
    document.querySelector('.card-buttons-container-' + i).firstChild.textContent = 'READ';
    document.querySelector('.card-buttons-container-' + i).appendChild(document.createElement('button')).setAttribute('type', 'button');
    document.querySelector('.card-buttons-container-' + i).firstChild.nextSibling.textContent = 'FAVORITE';
    document.querySelector('.card-buttons-container-' + i).appendChild(document.createElement('button')).setAttribute('type', 'button');
    document.querySelector('.card-buttons-container-' + i).lastChild.textContent = 'ERASE';
  }
}

function showReadBookCards() {
  clearAllCards();
  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].read) {
      document.querySelector('.book-cards').appendChild(document.createElement('div')).classList.add('book-card-' + i);
      document.querySelector('.book-card-' + i).appendChild(document.createElement('h4')).textContent = myLibrary[i].title;
      document.querySelector('.book-card-' + i).appendChild(document.createElement('p')).textContent = myLibrary[i].author;
      document.querySelector('.book-card-' + i).appendChild(document.createElement('p')).textContent = myLibrary[i].observation;
      document.querySelector('.book-card-' + i).appendChild(document.createElement('p')).textContent = myLibrary[i].genre;
      document.querySelector('.book-card-' + i).appendChild(document.createElement('div')).classList.add('card-buttons-container-' + i);
      document.querySelector('.card-buttons-container-' + i).appendChild(document.createElement('button')).setAttribute('type', 'button');
      document.querySelector('.card-buttons-container-' + i).firstChild.textContent = 'READ';
      document.querySelector('.card-buttons-container-' + i).appendChild(document.createElement('button')).setAttribute('type', 'button');
      document.querySelector('.card-buttons-container-' + i).firstChild.nextSibling.textContent = 'FAVORITE';
      document.querySelector('.card-buttons-container-' + i).appendChild(document.createElement('button')).setAttribute('type', 'button');
      document.querySelector('.card-buttons-container-' + i).lastChild.textContent = 'ERASE';
    }
  }
}

function showFavoriteBookCards() {
  clearAllCards();
  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].favorite) {
      document.querySelector('.book-cards').appendChild(document.createElement('div')).classList.add('book-card-' + i);
      document.querySelector('.book-card-' + i).appendChild(document.createElement('h4')).textContent = myLibrary[i].title;
      document.querySelector('.book-card-' + i).appendChild(document.createElement('p')).textContent = myLibrary[i].author;
      document.querySelector('.book-card-' + i).appendChild(document.createElement('p')).textContent = myLibrary[i].observation;
      document.querySelector('.book-card-' + i).appendChild(document.createElement('p')).textContent = myLibrary[i].genre;
      document.querySelector('.book-card-' + i).appendChild(document.createElement('div')).classList.add('card-buttons-container-' + i);
      document.querySelector('.card-buttons-container-' + i).appendChild(document.createElement('button')).setAttribute('type', 'button');
      document.querySelector('.card-buttons-container-' + i).firstChild.textContent = 'READ';
      document.querySelector('.card-buttons-container-' + i).appendChild(document.createElement('button')).setAttribute('type', 'button');
      document.querySelector('.card-buttons-container-' + i).firstChild.nextSibling.textContent = 'FAVORITE';
      document.querySelector('.card-buttons-container-' + i).appendChild(document.createElement('button')).setAttribute('type', 'button');
      document.querySelector('.card-buttons-container-' + i).lastChild.textContent = 'ERASE';
    }
  }
}

function showSearchedBookCards() {
  clearAllCards();
  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].title === document.querySelector('#search').value || myLibrary[i].author == document.querySelector('#search').value) {
      document.querySelector('.book-cards').appendChild(document.createElement('div')).classList.add('book-card-' + i);
      document.querySelector('.book-card-' + i).appendChild(document.createElement('h4')).textContent = myLibrary[i].title;
      document.querySelector('.book-card-' + i).appendChild(document.createElement('p')).textContent = myLibrary[i].author;
      document.querySelector('.book-card-' + i).appendChild(document.createElement('p')).textContent = myLibrary[i].observation;
      document.querySelector('.book-card-' + i).appendChild(document.createElement('p')).textContent = myLibrary[i].genre;
      document.querySelector('.book-card-' + i).appendChild(document.createElement('div')).classList.add('card-buttons-container-' + i);
      document.querySelector('.card-buttons-container-' + i).appendChild(document.createElement('button')).setAttribute('type', 'button');
      document.querySelector('.card-buttons-container-' + i).firstChild.textContent = 'READ';
      document.querySelector('.card-buttons-container-' + i).appendChild(document.createElement('button')).setAttribute('type', 'button');
      document.querySelector('.card-buttons-container-' + i).firstChild.nextSibling.textContent = 'FAVORITE';
      document.querySelector('.card-buttons-container-' + i).appendChild(document.createElement('button')).setAttribute('type', 'button');
      document.querySelector('.card-buttons-container-' + i).lastChild.textContent = 'ERASE';
    }
  }
}

function showGenreBookCards() {
  clearAllCards();
  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].genre === document.querySelector('#filter-genre').value) {
      document.querySelector('.book-cards').appendChild(document.createElement('div')).classList.add('book-card-' + i);
      document.querySelector('.book-card-' + i).appendChild(document.createElement('h4')).textContent = myLibrary[i].title;
      document.querySelector('.book-card-' + i).appendChild(document.createElement('p')).textContent = myLibrary[i].author;
      document.querySelector('.book-card-' + i).appendChild(document.createElement('p')).textContent = myLibrary[i].observation;
      document.querySelector('.book-card-' + i).appendChild(document.createElement('p')).textContent = myLibrary[i].genre;
      document.querySelector('.book-card-' + i).appendChild(document.createElement('div')).classList.add('card-buttons-container-' + i);
      document.querySelector('.card-buttons-container-' + i).appendChild(document.createElement('button')).setAttribute('type', 'button');
      document.querySelector('.card-buttons-container-' + i).firstChild.textContent = 'READ';
      document.querySelector('.card-buttons-container-' + i).appendChild(document.createElement('button')).setAttribute('type', 'button');
      document.querySelector('.card-buttons-container-' + i).firstChild.nextSibling.textContent = 'FAVORITE';
      document.querySelector('.card-buttons-container-' + i).appendChild(document.createElement('button')).setAttribute('type', 'button');
      document.querySelector('.card-buttons-container-' + i).lastChild.textContent = 'ERASE';
    }
  }
}