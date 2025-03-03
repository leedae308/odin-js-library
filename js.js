const myLibrary = [];

function Book(title, author, pages, img, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.img = img;

    this.info() = function () {
        console.log(this.title + " by " + this.author + ", " + this.pages + " pages, " + (read ? "already read" : "not read yet"));
    }
}

function addBookToLibrary(title, author, pages, img, read) {
    const book = new Book(title, author, pages, img, read);
    myLibrary.push(book);
}