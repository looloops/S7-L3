fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => {
    console.log(response);
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("ERRORE NEL REPERIMENTO DATI");
    }
  })
  .then((books) => {
    renderData(books);
  })
  .catch((error) => console.log(error));

function renderData(books) {
  if (!books || books.length === 0) {
    return;
  }

  const booksContainer = document.getElementById("books-cards");

  books.forEach((book, index) => {
    let bookCard = document.createElement("div");
    bookCard.setAttribute("class", "col-12 col-md-6 col-lg-4 col-xl-3");
    bookCard.setAttribute("id", book.asin);
    bookCard.innerHTML = `<div class="card" > 
      <img src="${book.img}" class="card-img-top w-100" style="object-fit:cover; height:460px " alt="...">
      <div class="card-body" >
      <h5 class="card-title" style="height:100px">${book.title}</h5>
      <p class="card-text justify-content-end" >${book.price} €</p>
      <button onclick="deleteCard('${book.asin}')" class="delete btn bg-warning">Delete</a>
      </div>
      </div>`;

    booksContainer.appendChild(bookCard);
  });
}

function deleteCard(id) {
  document.getElementById(id).remove();
}
