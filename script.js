// Hardcoded books used for developing

let book1 = new Book('Book0', 'Author0', 'genre0', 'this book is nice', true, false);
let book2 = new Book('Book1', 'Author1', 'genre1', 'this book sucks', false, false);
let book3 = new Book('Book2', 'Author2', 'genre2', 'this book is alright', false, true);

// End

let myLibrary = [book1, book2, book3];

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

showAllCards();

const form = document.querySelector('.add-book-form');

document.querySelector('.add-book-button').addEventListener('click', addBook);

document.querySelector('.new-button').addEventListener('click', () => form.classList.toggle('hidden'));

function addBook() {
  let book = new Book(form.elements['title'].value, form.elements['author'].value, form.elements['genre'].value, form.elements['observation'].value);
  myLibrary.push(book);
  console.log(myLibrary);
  makeBookCard();
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

function showAllCards() {
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