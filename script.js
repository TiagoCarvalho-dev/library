// Hardcoded books used for developing

let book0 = new Book('Book0', 'Author0', 'Fantasy', 'this book is nice');
let book1 = new Book('Book1', 'Author1', 'Fiction', 'this book sucks');
let book2 = new Book('Book2', 'Author2', 'Biography', 'this book is alright');

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
  if (document.querySelector('#read').checked) {
    book.read = true;
  }
  myLibrary.push(book);
  console.log(myLibrary);
  makeBookCard(myLibrary.length - 1);
  showAllBookCards();
  form.elements['title'].value = '';
  form.elements['author'].value = '';
  form.elements['genre'].value = 'biography';
  form.elements['observation'].value = '';
  event.preventDefault();
}

function makeBookCard(i) {
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

function showAllBookCards() {
  clearAllCards();
  myLibrary.sort((a, b) => (a.title.localeCompare(b.title)));
  for (let i = 0; i < myLibrary.length; i++) {
    makeBookCard(i);
    addCardButtonsEventListener(i);
  }
}

function showAllBookCardsReversed() {
  clearAllCards();
  myLibrary.sort((a, b) => (b.title.localeCompare(a.title)));
  for (let i = 0; i < myLibrary.length; i++) {
    makeBookCard(i);
    addCardButtonsEventListener(i);
  }
}

function showReadBookCards() {
  clearAllCards();
  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].read) {
      makeBookCard(i);
      addCardButtonsEventListener(i);
    }
  }
}

function showFavoriteBookCards() {
  clearAllCards();
  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].favorite) {
      makeBookCard(i);
      addCardButtonsEventListener(i);
    }
  }
}

function showSearchedBookCards() {
  clearAllCards();
  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].title === document.querySelector('#search').value || myLibrary[i].author == document.querySelector('#search').value) {
      makeBookCard(i);
      addCardButtonsEventListener(i);
    }
  }
}

function showGenreBookCards() {
  clearAllCards();
  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].genre === document.querySelector('#filter-genre').value) {
      makeBookCard(i);
      addCardButtonsEventListener(i);
    }
  }
}

function addReadEventListener(i) {
  document.querySelector('.card-buttons-container-' + i).firstChild.addEventListener('click', () => {
    if (!myLibrary[i].read) {
      myLibrary[i].read = true;
    } else {
      myLibrary[i].read = false;
    };
  });
}

function addFavoriteEventListener(i) {
  document.querySelector('.card-buttons-container-' + i).firstChild.nextSibling.addEventListener('click', () => {
    if (!myLibrary[i].favorite) {
      myLibrary[i].favorite = true;
    } else {
      myLibrary[i].favorite = false;
    };
  });
}

function addEraseEventListener(i) {
  document.querySelector('.card-buttons-container-' + i).lastChild.addEventListener('click', () => {
    document.querySelector('.book-card-' + i).remove();
    myLibrary.splice(i, 1);
  });
}

function addCardButtonsEventListener(i) {
  addReadEventListener(i);
  addFavoriteEventListener(i);
  addEraseEventListener(i);
}