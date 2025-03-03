const myLibrary = [];

function Book(title, author, pages, img, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.img = img;
}

Book.prototype.info = function () {
    console.log(this.title + " by " + this.author + ", " + this.pages + " pages, " + (read ? "already read" : "not read yet"));
}

function addBookToLibrary(title, author, pages, img, read) {
    const book = new Book(title, author, pages, img, read);
    myLibrary.push(book);
}


// Six books to start with
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 300, "https://m.media-amazon.com/images/I/712cDO7d73L.jpg", 1);
addBookToLibrary("Mere Christianity", "C.S. Lewis", 227, "https://m.media-amazon.com/images/I/81TFg-mLHAL._SY466_.jpg", 0);
addBookToLibrary("The Three-Body Problem", "Cixin Liu", 416, "https://m.media-amazon.com/images/I/818l7Ujz5-L._SY466_.jpg", 1);
addBookToLibrary("Les Miserables", "Victor Hugo", 1232, "https://m.media-amazon.com/images/I/61j5Du0EzAL._SY466_.jpg", 0);
addBookToLibrary("The Martian: A Novel", "Andy Weir", 384, "https://m.media-amazon.com/images/I/51QimqeXMXL._SY466_.jpg", 1);
addBookToLibrary("Twilight (The Twilight Saga, Book 1)", "Stephenie Meyer", 544, "https://m.media-amazon.com/images/I/615ZIxEDozL._SY466_.jpg", 1);

console.table(myLibrary);
