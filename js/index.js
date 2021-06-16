console.log(`welcome to project 2`);

//constructor
function Book(bookName, author, type) {
    this.bookName = bookName;
    this.author = author;
    this.type = type;
}

// display constuctor

function Display() {

}

//add method to display protocole

Display.prototype.add = function (book) {

    tableBody = document.getElementById('tableBody')

    let uiString = `
                    <tr>
                        
                        <td>${book.bookName}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr> `;
    tableBody.innerHTML += uiString;

}


//implement clear function
Display.prototype.clear = function () {
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
}

//implement validate function
Display.prototype.validate = function (book) {
    if (book.bookName.length < 2 || book.author.length < 2) {
        return false;
    }
    else {
        return true;
    }
}

//implement clear function
Display.prototype.show = function (type, displayMessage) {
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


// add books to localstorage

// let addBtn = document.getElementById('addBtn');
// addBtn.addEventListener('click',function(e){

//     let bookName = document.getElementById('bookName');
//     let author = document.getElementById('author');
//     let typpe= document.getElementById('typpe');

//     let tableBody = document.getElementById('tableBody');
//     tableBody = localStorage.getItem("tableBody");
//     if (tableBody == null) {
//         tableObj = [];
//     }
//     else {
//         tableObj = JSON.parse(tableBody);
//     }
//     let myObj = {
//         bookName:bookName.value,
//         author:author.value
       
//     }
//     tableObj.push(myObj);
//     localStorage.setItem("tableBody", JSON.stringify(tableObj));
//     bookName.value = "";
//     author.value = "";
//     console.log(tableObj);

//     showNotes();


// });

// function to show tablebody from localstorage
// function showNotes() {
//     let tableBody = localStorage.getItem("tableBody");
//     if (tableBody == null) {
//         tableObj = [];
//     }
//     else {
//         tableObj = JSON.parse(tableBody);
//     }

//     let html = "";
//     tableObj.forEach(function (element) {
//         html += `
//                      <tr>
//                          <td>${element.bookName}</td>
//                         <td>${element.author}</td>
//                         <td>${element.typpe}</td>
//                     </tr>`;
//     });
//     let tableElm = document.getElementById('tableBody');
//     if (tableObj.length != 0) {

//         tableElm.innerHTML = html;
//     }
//     else {
//         tableElm.innerHTML = `Nothing to show ! Use "Add a Note " Section above to add note. `
//     }
// }