const myLibrary = [];

function Book(title, author, pages, read) {
    if (!new.target){
        throw new Error("Book must be called with new");
    }   
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    }
}

function addBookToLibrary() {
    let title = prompt("Title:");
    let author = prompt("Author:");
    let pages = prompt("Pages:");
    let read = prompt("Read:");
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

addBookToLibrary();