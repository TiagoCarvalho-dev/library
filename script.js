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
  myLibrary.forEach(book => {
    document.querySelector('.book-cards').appendChild(document.createElement('div')).classList.add('book-card');
    document.querySelector('.book-card').appendChild(document.createElement('h4')).textContent = book.title;
    document.querySelector('.book-card').appendChild(document.createElement('p')).textContent = book.author;
    document.querySelector('.book-card').appendChild(document.createElement('p')).textContent = book.observation;
    document.querySelector('.book-card').appendChild(document.createElement('p')).textContent = book.genre;
    document.querySelector('.book-card').appendChild(document.createElement('div')).classList.add('card-buttons-container');
    document.querySelector('.card-buttons-container').appendChild(document.createElement('button')).setAttribute('type', 'button');
    document.querySelector('.card-buttons-container').appendChild(document.createElement('button')).setAttribute('type', 'button');
    event.preventDefault();
  });
}