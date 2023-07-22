// Hardcoded books used for developing

let book0 = new Book('Eragon', 'Christopher Paolini', 'Fantasy', 'Eragon is the first book in The Inheritance Cycle by American fantasy writer Christopher Paolini.');
let book1 = new Book('A Brief History of Time', 'Stephen Hawking', 'Other', 'A Brief History of Time: From the Big Bang to Black Holes is a book on theoretical cosmology by English physicist Stephen Hawking.');
let book2 = new Book('The Hobbit', 'J. R. R. Tolkien', 'Fantasy', 'The Hobbit, or There and Back Again is a children\'s fantasy novel by English author J. R. R. Tolkien. It was published in 1937 to wide critical acclaim.');

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

const form = document.querySelector('.add-book-form');

document.querySelector('.new-book-button').addEventListener('click', () => form.classList.toggle('hidden'));

document.querySelector('.add-book-button').addEventListener('click', addBook);

document.querySelector('.apply-button').addEventListener('click', handleCardsDisplay);

document.querySelector('.search-button').addEventListener('click', showSearchedBookCards);

document.querySelector('#filter').addEventListener('change', () => {
  if (document.querySelector('#filter').value === 'genre') {
    document.querySelector('.filter-genre-container').classList.remove('hidden');
  } else {
    document.querySelector('.filter-genre-container').classList.add('hidden');
  }
});

function handleCardsDisplay() {
  switch (document.querySelector('#filter').value) {
    case ('z-a'): showAllBookCardsReversed();
                  break;
    case ('genre'): showGenreBookCards();
                  break;
    case ('read'): showReadBookCards();
                  break;
    case ('favorite'): showFavoriteBookCards();
                  break;
    default: showAllBookCards();
                  break;
  }
}

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
  makeBookCard(myLibrary.length - 1);
  handleCardsDisplay();
  form.elements['title'].value = '';
  form.elements['author'].value = '';
  form.elements['genre'].value = 'Biography';
  form.elements['observation'].value = '';
  form.elements['read'].checked = false;
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
  document.querySelector('.card-buttons-container-' + i).firstChild.appendChild(document.createElement('img')).setAttribute('src', './images/eye.svg');
  document.querySelector('.card-buttons-container-' + i).appendChild(document.createElement('button')).setAttribute('type', 'button');
  document.querySelector('.card-buttons-container-' + i).firstChild.nextSibling.appendChild(document.createElement('img')).setAttribute('src', './images/star.svg');
  document.querySelector('.card-buttons-container-' + i).appendChild(document.createElement('button')).setAttribute('type', 'button');
  document.querySelector('.card-buttons-container-' + i).lastChild.appendChild(document.createElement('img')).setAttribute('src', './images/delete.svg');
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
  if (document.querySelector('#search').value === '') {
    showAllBookCards();
  }
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
    document.querySelector('.card-buttons-container-' + i).firstChild.firstChild.classList.toggle('read');
  });
}

function addFavoriteEventListener(i) {
  document.querySelector('.card-buttons-container-' + i).firstChild.nextSibling.addEventListener('click', () => {
    if (!myLibrary[i].favorite) {
      myLibrary[i].favorite = true;
    } else {
      myLibrary[i].favorite = false;
    };
    document.querySelector('.card-buttons-container-' + i).firstChild.nextSibling.firstChild.classList.toggle('favorite');
  });
}

function addEraseEventListener(i) {
  document.querySelector('.card-buttons-container-' + i).lastChild.addEventListener('click', () => {
    document.querySelector('.book-card-' + i).remove();
    myLibrary.splice(i, 1);
    handleCardsDisplay();
  });
}

function addCardButtonsEventListener(i) {
  addReadEventListener(i);
  addFavoriteEventListener(i);
  addEraseEventListener(i);
  handleReadButtonDisplay(i);
  handleFavoriteButtonDisplay(i);
}

function handleReadButtonDisplay(i) {
  if (myLibrary[i].read) {
    document.querySelector('.card-buttons-container-' + i).firstChild.firstChild.classList.add('read');
  } else {
    document.querySelector('.card-buttons-container-' + i).firstChild.firstChild.classList.remove('read');
  }
}

function handleFavoriteButtonDisplay(i) {
  if (myLibrary[i].favorite) {
    document.querySelector('.card-buttons-container-' + i).firstChild.nextSibling.firstChild.classList.add('favorite');
  } else {
    document.querySelector('.card-buttons-container-' + i).firstChild.nextSibling.firstChild.classList.remove('favorite');
  }
}

showAllBookCards();