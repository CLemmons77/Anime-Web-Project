// API: https://api.jikan.moe/v4/anime

const animeList = document.querySelector(".anime__cards");
const resultLoading = document.querySelector(".result")

async function renderAnime(results) {
    resultLoading.classList += ' results__loading'
    
    const response = await fetch(`https://api.jikan.moe/v4/anime?q=${results || "no search results"}`);
    const animesInfo = await response.json();
    
    resultLoading.classList.remove('results__loading')

    animeList.innerHTML = animesInfo.data
    .slice(0, 9)
    .map((anime) => animeHTML(anime))
    .join("");

}

async function intialAnime() {
    resultLoading.classList += ' results__loading'
    
    const response = await fetch(`https://api.jikan.moe/v4/anime?q=${`One Piece`}`);
    const animesInfo = await response.json();
    
    resultLoading.classList.remove('results__loading')

    animeList.innerHTML = animesInfo.data
    .slice(0, 9)
    .map((anime) => animeHTML(anime))
    .join("");
}

intialAnime();

async function filterAnime(event) {
    const filterValue = event.target.value;
    const animeCards = [...document.querySelector(".anime__cards")];

    animeCards.sort((a,b) => {
        const titleA = a.querySelector(".anime__title").textContent;
        const titleB = b.querySelector(".anime__title").textContent;
        const scoreA = parseFloat(a.querySelector(".anime__score").textContent);
        const scoreB = parseFloat(b.querySelector(".anime__score").textContent);

        if (filterValue === "ALPHABET_ASCEND") {
            return titleA.localeCompare(titleB);
        }
        else if (filterValue === "ALPHABET_DESCEND") {
            return titleB.localeCompare(titleA);
        }
        else if (filterValue === "RATING") {
            return scoreB - scoreA;
        }
    });

    animeList.innerHTML = "";
    animeCards.forEach((card) => animeList.appendChild(card));
}

function onSearchButtonClick(event) {
    event.preventDefault();
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