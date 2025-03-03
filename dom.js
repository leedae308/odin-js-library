
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

        deleteButton.appendChild(deleteIcon);
        infoButton.appendChild(infoIcon);

        bookCard.appendChild(deleteButton);
        bookCard.appendChild(infoButton);

        section.appendChild(bookCard);
    })
}

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

