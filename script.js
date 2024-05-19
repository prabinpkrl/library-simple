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

 
 
});



function addBookToLibrary(newbook){
    myLibrary.push(newbook);
    
    displayBooks();
    clearform();
        
}

function clearform(){
    const bookTitle = document.querySelector('#booktitle').value='';
    const bookAuthor = document.querySelector('#bookauthor').value='';
}


function displayBooks(){
    const tbody = document.querySelector('#table-body');
    tbody.innerHTML= '';

    myLibrary.forEach((book,index) => {
        createrow(book,index)
    });
}

function createrow(book,index){
    const tbody = document.querySelector('#table-body');
    const row = document.createElement('tr');

    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td><button class="delete" data-index="${index}">Delete</button></td>  
    `;
    tbody.appendChild(row);

document.querySelector('table').addEventListener('click', Event =>{
    if(Event.target.textContent === 'Delete'){
        const index = Event.target.getAttribute("data-index")
        deleteBook(index);
    }
});

}

function deleteBook(index){
    console.log(index);
    myLibrary.splice(index, 1)
    displayBooks();
        
}