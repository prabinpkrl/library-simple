const myLibrary = [];

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        // this.id = id;
    }
}

const form = document.querySelector('form');
form.addEventListener("submit", Event => {
    Event.preventDefault();

    const bookTitle = document.querySelector('#booktitle').value;
    const bookAuthor = document.querySelector('#bookauthor').value;

    const newbook = new Book(bookTitle, bookAuthor);

    addBookToLibrary(newbook);
});



function addBookToLibrary(newbook) {
    myLibrary.push(newbook);

    displayBooks();
    clearform();

}

function clearform() {
    const bookTitle = document.querySelector('#booktitle').value = '';
    const bookAuthor = document.querySelector('#bookauthor').value = '';
}


function displayBooks() {
    const tbody = document.querySelector('#table-body');
    tbody.innerHTML = '';

    myLibrary.forEach((book, index) => {
        createrow(book, index)
    });
}

function createrow(book, index) {
    const tbody = document.querySelector('#table-body');
    const row = document.createElement('tr');
    let serialNumber= index+1;

    row.innerHTML = `
    <td>${serialNumber}</td>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td><button class="delete" data-index="${index}" onclick="deleteBook(${index})">Delete</button></td>  
    `;
    tbody.appendChild(row);

    //another way
    // document.querySelector('table').onclick( Event =>{
    //     if(Event.target.textContent === 'Delete'){
    //         const index = Event.target.getAttribute("data-index")
    //         deleteBook(index);
    //     }
    // });
}

function deleteBook(index) {
    myLibrary.splice(index, 1)
    displayBooks();

}

//show dialog
const dialog = document.querySelector('dialog');
const showBtn = document.querySelector('.showformbtn');
const closeBtn = document.querySelector('.sumbitbtn')

showBtn.addEventListener('click', () => {
    dialog.showModal();
});

closeBtn.addEventListener('click', () => {
    dialog.close();
});