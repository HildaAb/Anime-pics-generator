const btnEl = document.querySelector("#btn");
const animeContainerEl = document.querySelector("#anime-container");
const animeImgEl = document.querySelector("#anime-img");
const animeNameEl = document.querySelector("#anime-name");

btnEl.addEventListener("click", async function () {
  try {
    const response = await fetch(
      "https://ghibli-api-v1.azurewebsites.net/api/v1/movies/randomMovie"
    );
    const data = await response.json();

    animeImgEl.src = data.data.image;
    animeNameEl.innerHTML = data.data.title.en;
  } catch (error) {
    return null;
  }
});
