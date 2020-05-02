var library = [];
var i = 0;
addBookToLibrary('the Hobbit', 'J.R.R. Tolkien', '295', 'not read');
addBookToLibrary('Rise of Empire', 'Michael J Sullivan', '781', 'not read');



const addBookBtn = document.querySelector('#addBook');
addBookBtn.addEventListener('click', () => {
    addBookBtn.remove();
    const container = document.querySelector('#form-container');
    console.log("do the add book thing");
    const title = document.createElement('input');
        title.setAttribute("type", "text");
        title.setAttribute("placeholder", "Add a book title");
        title.classList.add('input');
        title.setAttribute('id', 'title');
        container.appendChild(title);

    const author = document.createElement('input');
        author.setAttribute("type", "text");
        author.setAttribute("placeholder", "Add Author");
        author.classList.add('input');
        author.setAttribute('id', 'author');
        container.appendChild(author);

    const numPages = document.createElement('input');
        numPages.setAttribute("type", "text");
        numPages.setAttribute("placeholder", "Add # pages");
        numPages.classList.add('input');
        numPages.setAttribute('id', 'numPages');
        container.appendChild(numPages);


    const checkboxdiv = document.createElement('div');  
        checkboxdiv.id = "checkboxdiv";  
    const read = document.createElement('input');
        read.setAttribute("type", "checkbox");
        read.setAttribute("value", 1);
        read.classList.add('author');
        read.id = "read";      
        var label = document.createElement('label');
        var tn = document.createTextNode("Read?");
        label.htmlFor='read';    
        label.appendChild(tn);
        checkboxdiv.appendChild(read);
        checkboxdiv.appendChild(label);        
        container.appendChild(checkboxdiv);

    const submitBtn = document.createElement("button");
    submitBtn.id = "submitBtn";
    submitBtn.innerHTML = "Submit";
    container.appendChild(submitBtn);     
    
    
    const submitBook = document.querySelector("#submitBtn")
    submitBook.addEventListener('click', () => {
    console.log("book has been submitted");
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const pages = document.getElementById('numPages');
    const read = document.getElementById('read').checked ? "read" : "not read";
    console.log(`the submitted book is: ${title.value}${author.value}${pages.value}${read}`);
    addBookToLibrary(title.value, author.value, pages.value, read);
        

    render();
    

})
    
})





function book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return "The book is titled: " + title + ", The author is: " + author + ", It has " + pages + " pages, " + read +" yet";
    }
}

function addBookToLibrary(title, author, pages, read) {
    library.push(new book(title, author, pages, read));    
}

function render() {
    const container = document.querySelector('#book-display-container');
    console.log("library Length = " + library.length);
    
    while (i < library.length) {
        console.log(library[i].info());
        const content = document.createElement('div');
        content.classList.add('book');
        content.setAttribute('id', i+1);
        container.appendChild(content);

        const bookContainer = document.querySelector("[id=" + CSS.escape(i+1) + "]");
        const displayTitle = document.createElement('p');
        displayTitle.classList.add('bookTitle');
        displayTitle.textContent = "Title: " + library[i].title;
        bookContainer.appendChild(displayTitle);

        const displayAuthor = document.createElement('p');
        displayAuthor.classList.add('bookAuthor');
        displayAuthor.textContent = "Author: " + library[i].author;
        bookContainer.appendChild(displayAuthor);

        const displayPages = document.createElement('p');
        displayPages.classList.add('bookPages');
        displayPages.textContent = "Pages: " + library[i].pages;
        bookContainer.appendChild(displayPages);

        const displayRead = document.createElement('p');
        displayRead.classList.add('bookRead');
        displayRead.textContent = library[i].read;
        bookContainer.appendChild(displayRead);

        const deleteBtn = document.createElement('button');
        deleteBtn.id = "deleteBtn";
        deleteBtn.innerHTML = "Delete";
        bookContainer.appendChild(deleteBtn);     
        console.log("Current LIBRARY:" + library[i].title + library[i].author + library[i].read);
       
        i++;
        console.log("I is now: " +i);

    }
    document.querySelectorAll("#deleteBtn").forEach(b => b.addEventListener("click", function () {
        var attr = b.parentElement.getAttribute('id');
        console.log("attribute to be removed is: " + attr);
        const remId = document.getElementById(attr);
        library.splice(attr -1, 1);
        remId.remove();

        
        i = attr;
        render();
        //remId.remove();

    }))


}






render();
//addBookToLibrary('the Hobbit', 'J.R.R. Tolkien', '295', 'not read');
//addBookToLibrary('Rise of Empire', 'Michael J Sullivan and all of his friends and family and everyone that ever halped them', '781', 'not read');

//console.log(library[0].info());
//console.log(library[1].info());