const myLibrary= [];

function Book(title,author){
    this.title= title;
    this.author= author;
    // this.isread= isread;
    // this.genere= genere;
}

const libraryForm = document.querySelector('form');

libraryForm.addEventListener('submit', e => {
    e.preventDefult();

    const name= document.querySelector('#booktitle').value;
    const author= document.querySelector('#bookauthor').value;
    // const genere= document.querySelector('#bookgenere');
    // let name = bookname.value;
    // let author = bookauthor.value;

    const newbook = new Book(name,author);
    console.log(newbook);

    addBookToLibrary(newbook);


});

 function addBookToLibrary(newbook){

    myLibrary.push(newbook);
   
    dispalyBooks();
    clearfield();
 
 }
function dispalyBooks(){
    const tablebody = document.getElementById('table-body');
    tablebody.querySelectorAll('tr').forEach(el => el.remove());

    myLibrary.forEach(newbook => {
        createRow(newbook);
    });

}
function createRow(newbook){
    // let addToHtml;
    const tableBody = document.getElementById('table-body');
    const row = document.createElement('tr');
    row.innerHTML =`
                    <td>${newbook.title}</td>
                    <td>${newbook.author}</td>
                    <td id='delete'>Delete</td>                
            `;
}