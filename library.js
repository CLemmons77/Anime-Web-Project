// API: https://api.jikan.moe/v4/anime

let results

const animeList = document.querySelector("#results");

async function onSearchChange(event) {
    const results = event.target.value
    renderAnime(results);
}

async function renderAnime(results) {
    const animes = await fetch("https://api.jikan.moe/v4/anime");
    const animesInfo = await animes.json()

  
}

function animeHTML(anime) {
    return `<div class="anime__card">
    <div class="anime__card--container">
      <figure class="anime__poster--wrapper">
        <img src="${data.images.jpg.image_url}" alt="" class="anime__poster" />
      </figure>
      <h3 class="anime__title">${data.title}</h3>
      <p><b>Episodes:</b> ${data.episodes}</p>
      <p><b>Rating:</b> ${data.rating}</p>
      <p><b>Score:</b> ${data.score}</p>
      <p>
        <b>Synopsis:</b> ${data.synopsis}
      </p>
    </div>
  </div>`
}

renderAnime(results);