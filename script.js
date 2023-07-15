let myLibrary = [];

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

const form = document.querySelector('.add-book-form');

document.querySelector('.add-book-button').addEventListener('click', addBook);

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
    document.querySelector('.card-buttons-container-' + (myLibrary.length - 1)).appendChild(document.createElement('button')).setAttribute('type', 'button');
}