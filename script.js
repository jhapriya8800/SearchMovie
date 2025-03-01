const searchBtn = document.querySelector("#searchBtn");
const searchInput = document.querySelector("#search-input");
let apiKey = "ed87e916"; // Your API key

async function GetMovieName(movieName) {
    if (!movieName) {
        alert("Please enter a movie name!");
        return;
    }
    
    let apiUrl = `http://www.omdbapi.com/?s=${movieName}&apikey=${apiKey}`;

    try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        
        if (data.Response === "True") {
            document.querySelector(".movies").innerHTML = data.Search
                .map(movie => `<p>${movie.Title} (${movie.Year})</p>`)
                .join("");
        } else {
            document.querySelector(".movies").innerHTML = `<p>No movies found!</p>`;
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        document.querySelector(".movies").innerHTML = `<p>Something went wrong!</p>`;
    }
}

searchBtn.addEventListener("click", () => {
    GetMovieName(searchInput.value.trim());
});
