// API: https://api.jikan.moe/v4/anime

const animeList = document.querySelector(".anime__cards");

async function renderAnime(results) {
    animeList.classList += ' results__loading'
    
    const response = await fetch(`https://api.jikan.moe/v4/anime?q=${results}`);
    const animesInfo = await response.json();
    
    animeList.classList.remove('results__loading')
    
    animeList.innerHTML = animesInfo.data
    .map((anime) => animeHTML(anime))
    .join("");
    
    
    
    
}

async function filterAnime(event) {
    if (event === "ALPHABET_ASCEND") {
        return results.sort((a, b) => a.anime.title - b.anime.title)
    }    
    else if (event === "ALPHABET_DESCEND") {
        return anime.sort((a, b) => b.anime.title - a.anime.title)
    }    
    else if (event === "RATING") {
        return anime.sort((a, b) => a.anime.score - b.anime.score)
    }    
    console.log(event)
}

function onSearchButtonClick() {
    const query = document.querySelector('#search').value;
    renderAnime(query)
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