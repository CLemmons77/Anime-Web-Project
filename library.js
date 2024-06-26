// API: https://api.jikan.moe/v4/anime

const animeList = document.querySelector(".anime__cards");

async function renderAnime(results) {
    const response = await fetch(`https://api.jikan.moe/v4/anime?q=${results}`);
    const animesInfo = await response.json();
    
    if (results === "ALPHABET_ASCEND") {
        return anime.sort((a, b) => a.title - b.title)
    }    
    else if (results === "ALPHABET_DESCEND") {
        return anime.sort((a, b) => b.title - a.title)
    }    
    else if (results === "RATING") {
        return anime.sort((a, b) => a.rating - b.rating)
    }    

  animeList.innerHTML = animesInfo.data
    .map((anime) => animeHTML(anime))
    .join("");
}

function onSearchButtonClick() {
    const query = document.querySelector('#search').value;
    renderAnime(query)
}

function filterAnime(event) {
    renderAnime(event.target.value)
}

function animeHTML(anime) {
  return `<div class="anime__card">
        <div class="anime__card--container">
            <figure class="anime__poster--wrapper">
                <img src="${anime.images.jpg.image_url}" alt="" class="anime__poster" />
            </figure>
            <h3 class="anime__title">${anime.title}</h3>
                <p><b>Episodes:</b> ${anime.episodes}</p>
                <p><b>Rating:</b> ${anime.rating}</p>
                <p><b>Score:</b> ${anime.score}</p>
                <p>
                    <b>Synopsis:</b> ${anime.synopsis}
                </p>
        </div>
    </div>`;
}