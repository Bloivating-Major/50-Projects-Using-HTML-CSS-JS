let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");

let getMovie = () => {
  let movieName = movieNameRef.value;
  let url = `https://www.omdbapi.com/?t=${movieName}&apikey=12899363`;

  if (movieName.length <= 0) {
    result.innerHTML = `<h3 class="msg">Please enter a movie name </h3>`;
  } else {
    fetch(url)
      .then((resp) => resp.json())
      .then(
        ({
          Response,
          Poster,
          Title,
          imdbRating,
          Rated,
          Year,
          Runtime,
          Genre,
          Plot,
          Actors,
          Error,
        }) => {
          if (Response == "True") {
            result.innerHTML = `
                    <div class="info">
                        <img src=${Poster} class="poster">
                        <div>
                            <h2>${Title}</h2>
                            <div class="rating">
                                <img src="star-icon.svg">
                                <h4>${imdbRating}</h4>
                            </div>
                            <div class="details">
                                <span>${Rated}</span>
                                <span>${Year}</span>
                                <span>${Runtime}</span>
                            </div>
                            <div class="genre">
                                <div>${Genre.split(",").join(
                                  "</div><div>"
                                )}</div>
                            </div>
                        </div>
                    </div>
                    <h3>Plot:</h3>
                    <p>${Plot}</p>
                    <h3>Cast:</h3>
                    <p>${Actors}</p>
                `;
          } else {
            result.innerHTML = `<h3 class="msg">${Error}</h3>`;
          }
        }
      )
      .catch(() => {
        result.innerHTML = `<h3 class="msg">Error Occured</h3>`;
      });
  }
};

searchBtn.addEventListener("click", getMovie);
window.addEventListener("load", getMovie);
