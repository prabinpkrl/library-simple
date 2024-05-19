const myLibrary = [];

function Book(title,author){
    this.title= title;
    this.author= author;
    // this.id = id;
}

const form = document.querySelector('form');
form.addEventListener("submit", Event => {
 Event.preventDefault();

 const bookTitle = document.querySelector('#booktitle').value;
 const bookAuthor = document.querySelector('#bookauthor').value;

 const newbook = new Book(bookTitle,bookAuthor);

 addBookToLibrary(newbook);

 form.reset;
 
});



function addBookToLibrary(newbook){
    myLibrary.push(newbook);
    
    displayBooks();
        
}


function displayBooks(){
    const tbody = document.querySelector('#table-body');
    tbody.innerHTML= '';

    myLibrary.forEach(book => {
        createrow(book)
    });
}

function createrow(book){
    const tbody = document.querySelector('#table-body');
    const row = document.createElement('tr');

    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>  
    `;
    tbody.appendChild(row);

}