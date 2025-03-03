
function refresh() {
    myLibrary.forEach((element) => {
        const section = document.querySelector(".bottom-section");
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