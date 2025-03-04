
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

//dialog box creation:
const del = document.querySelectorAll(".delete-button");
const dialogDel = document.querySelector(".deleting");
const deleteBtn = document.querySelector("#delete");
const cancelBtn = document.querySelectorAll("#cancel, #close");

del.forEach((element) => {
    element.addEventListener("click", (e) => {
        // alert("clicked");
        dialogDel.showModal();
        // alert(e.currentTarget.classList)
    });
});


cancelBtn.forEach((element) => {
    element.addEventListener("click", () => {
        dialogDel.close();
        dialogInfo.close();
    })
});

const dialogInfo = document.querySelector(".information");
const info = document.querySelectorAll(".info-button")

info.forEach((element) => {
    element.addEventListener("click", (e) => {
        let arrayIndex = myLibrary.findIndex((book) => {
            return book.title.trim() === e.currentTarget.title.trim();
        })
        const titleSection = document.querySelector(".information .dialog-title-section");

        if (titleSection.lastElementChild.classList.value == "book-title") {
            const oldTitle = document.querySelector("div.book-title");
            titleSection.removeChild(oldTitle);
        };
        const title = document.createElement("div");
        title.setAttribute("class", "book-title");
        title.textContent = myLibrary[arrayIndex].title;
        titleSection.appendChild(title);

        const messageSection = document.querySelector(".messages");
        const author = document.createElement("div");
        author.setAttribute("class", "message");
        author.innerHTML=`<strong>Author: </strong>${myLibrary[arrayIndex].author}`;
        const pages = document.createElement("div");
        pages.setAttribute("class", "message");
        pages.innerHTML=`<strong> Pages: </strong>${myLibrary[arrayIndex].pages}`;
        const coverImg = document.createElement("div");
        coverImg.setAttribute("class", "message");
        coverImg.innerHTML=`<strong> Cover URL: </strong>${myLibrary[arrayIndex].img}`;
        messageSection.appendChild(author);
        messageSection.appendChild(pages);




        dialogInfo.showModal();
    });
});