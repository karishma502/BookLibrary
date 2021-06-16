console.log('class for prjoect 2');

class Book {
    constructor(bookName, author, type) {
        this.bookName = bookName;
        this.author = author;
        this.type = type;
    }
}
class Display{
    add(book){

        tableBody = document.getElementById('tableBody')
    
        let uiString = `
                        <tr>
                            
                            <td>${book.bookName}</td>
                            <td>${book.author}</td>
                            <td>${book.type}</td>
                        </tr> `;
        tableBody.innerHTML += uiString;
    
    }

    clear () {
        let libraryForm = document.getElementById("libraryForm");
        libraryForm.reset();
    }

    function (book) {
        if (book.bookName.length < 2 || book.author.length < 2) {
            return false;
        }
        else {
            return true;
        }
    }

    show (type, displayMessage) {
        let message = document.getElementById('message');
        let boldText;
        if(type==='success'){
            boldText = 'success';
        }
        else{
            boldText = 'Error';
        }
           
        
        message.innerHTML = `
        <div class="alert alert-${type}alert-dismissible fade show" role="alert">
        <strong>${boldText}:</strong> ${displayMessage}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
        </button>
      </div>`;
    
      setTimeout (function(){
          message.innerHTML = ''
    
      },5000);
    
    }

    //Add submit event listner to the libraryForm

    let libraryForm = document.getElementById("libraryForm");
    libraryForm.addEventListener('submit', libraryFormSubmit);

    function libraryFormSubmit(e) {

    console.log('You have submitted the forms');

    let bookName = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;

    let fiction = document.getElementById('fiction');
    let Programming = document.getElementById('Programming');
    let datastructure = document.getElementById('datastructure');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (Programming.checked) {
        type = Programming.value;
    }
    else if (datastructure.checked) {
        type = datastructure.value;
    }

    let book = new Book(bookName, author, type);
    console.log(book);

    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', 'Your book has been Successfully added.');
    }
    else {
        // show error
        display.show('Error', ' Sorry You Cannot add this book.')
    }


    e.preventDefault();
}

}

