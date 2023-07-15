let myLibrary = [];

function Books(title, author, genre, observation) {
  this.title = title,
  this.author = author,
  this.genre = genre,
  this.observation = observation,
  this.read = false,
  this.favorite = false
}

Books.prototype.toggleReadStatus = function() {
  this.read ? this.read = false : this.read = true;
}

Books.prototype.toggleFavoriteStatus = function {
  this.favorite ? this.favorite = false : this.favorite = true;
}