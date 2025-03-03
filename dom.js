
function refresh() {
    const section = document.querySelector(".bottom-section");
    section.innerHTML = "";
    myLibrary.forEach((element) => {
        const bookCard = document.createElement("div");
        if (element.read) {
            bookCard.setAttribute("class", "book-card read");
        }
        else {
            bookCard.setAttribute("class", "book-card");
        }

        bookCard.setAttribute("style", `background-image: url('${element.img}')`)

        const deleteButton = document.createElement("button");
        const infoButton = document.createElement('button');
        const deleteIcon = document.createElement('img');
        const infoIcon = document.createElement('img');
        deleteIcon.src = "icons/delete-outline.svg";
        infoIcon.src = "icons/information-outline.svg";
        deleteButton.setAttribute("class", "delete-button");
        infoButton.setAttribute("class", "info-button");
        deleteButton.setAttribute("title", `${element.title}`)
        infoButton.setAttribute("title", `${element.title}`)

        deleteButton.appendChild(deleteIcon);
        infoButton.appendChild(infoIcon);

        bookCard.appendChild(deleteButton);
        bookCard.appendChild(infoButton);

        section.appendChild(bookCard);
    })

    console.table(myLibrary);
    attachDeleteButtonListeners();


}

//.bottom-section
//      <div .book-card>
//          <button>
//          <button>

refresh();

//Receiving from the Form

const form = document.querySelector("#addNewBook");

form.addEventListener("submit", (event) => {

    event.preventDefault();
    if (form.book_cover.value == "") {
        form.book_cover.value = "https://edit.org/images/cat/book-covers-big-2019101610.jpg"
    }
    addBookToLibrary(form.book_title.value, form.book_author.value, form.book_pages.value, form.book_cover.value, form.book_read.checked);
    refresh();
    console.table(myLibrary);
})


function attachDeleteButtonListeners() {
    //dialog box creation:
    const del = document.querySelectorAll(".delete-button");
    const dialog = document.querySelector(".deleting");
    const closeButton = document.querySelectorAll("#cancel, #close");
    const deleteButton = document.querySelector("#delete")



    closeButton.forEach((element) => {
        element.addEventListener("click", () => {
            dialog.close();
        })
    });

    del.forEach((element) => {
        element.addEventListener("click", (e) => {
            // alert("clicked");
            dialog.showModal();
            deleteButton.setAttribute("title", e.currentTarget.title); // Set dialog button's title here
        });
    });

    deleteButton.addEventListener("click", () => {
        myLibrary.splice(myLibrary.findIndex(obj => obj.title === deleteButton.title), 1);
        refresh(); // Update the DOM
        dialog.close();
    });
}