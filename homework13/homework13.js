const API_KEY = "6bb5fac4";
const form = document.getElementById("searchForm");
const titleInput = document.getElementById("title");
const typeSelect = document.getElementById("type");
const moviesDiv = document.getElementById("movies");
const paginationDiv = document.getElementById("pagination");
const detailsDiv = document.getElementById("details");
let currentTitle = "";
let currentType = "";
let currentPage = 1;
form.addEventListener("submit", function (e) {
    e.preventDefault();
    currentTitle = titleInput.value.trim();
    currentType = typeSelect.value;
    currentPage = 1;
    searchMovies(currentTitle, currentType, currentPage);
});
async function searchMovies(title, type, page) {
    const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${title}&type=${type}&page=${page}`;
const response = await fetch(url);
const data = await response.json();
moviesDiv.innerHTML = "";
paginationDiv.innerHTML = "";
detailsDiv.innerHTML = "";
if (data.Response === "False") {
    moviesDiv.innerHTML = "<h2>Movie not found</h2>";
    return;
}
for (let i = 0; i < data.Search.length; i++) {
    const movie = data.Search[i];
    const card = document.createElement("div");
    card.style.border = "1px solid black";
    card.style.margin = "10px";
    card.style.padding = "10px";
    card.style.display = "inline-block";
    card.style.width = "200px";
    card.style.verticalAlign = "top";
    card.innerHTML = `
            <img src="${movie.Poster}" width="150">
            <h3>${movie.Title}</h3>
            <p>${movie.Year}</p>
        `;
    const btn = document.createElement("button");
    btn.innerText = "Details";
    btn.addEventListener("click", function () {
        getDetails(movie.imdbID);
    });
    card.append(btn);
    moviesDiv.append(card);
}
const totalResults = Number(data.totalResults);
const totalPages = Math.ceil(totalResults / 10);
for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement("button");
    pageButton.innerText = i;

    if (i === currentPage) {
        pageButton.disabled = true;
    }
    pageButton.addEventListener("click", function () {
        currentPage = i;
        searchMovies(currentTitle, currentType, currentPage);
    });
    paginationDiv.append(pageButton);
}
}
async function getDetails(id) {
    const url = `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`;
    const response = await fetch(url);
    const movie = await response.json();
    detailsDiv.innerHTML = `
        <hr>
        <h2>${movie.Title}</h2>
        <img src="${movie.Poster}" width="250">
        <p>
            <b>Released:</b>
            ${movie.Released}
        </p>
        <p>
            <b>Genre:</b>
            ${movie.Genre}
        </p>
        <p>
            <b>Country:</b>
            ${movie.Country}
        </p>
        <p>
            <b>Director:</b>
            ${movie.Director}
        </p>
        <p>
            <b>Writer:</b>
            ${movie.Writer}
        </p>
        <p>
            <b>Actors:</b>
            ${movie.Actors}
        </p>
        <p>
            <b>Awards:</b>
            ${movie.Awards}
        </p>
    `;
}