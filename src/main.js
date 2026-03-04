const myLibrary = [];

function askField(label) {
    const value = prompt(label);
    if (value === null) return null;
    return value.trim();
}

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
    let title = askField("Title:");
    if (title === null || title === "") return;

    let author = askField("Author:");
    if (author === null || author === "") return;

    let pagesInput = askField("Pages:");
    if (pagesInput === null || pagesInput === "") return;
    let pages = Number.parseInt(pagesInput, 10);
    if (Number.isNaN(pages)) pages = 0;

    let read = askField("Read:");
    if (read === null || read === "") read = "not read";

    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

addBookToLibrary();
for (const book of myLibrary) {
    console.log(book.info());
}