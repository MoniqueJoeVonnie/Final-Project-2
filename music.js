/* =========================
   JAMENDO CONFIG
========================= */

const CLIENT_ID = "1f3613a7";
const BASE_URL = "https://api.jamendo.com/v3.0";

/* =========================
   APP STATE
========================= */

const state = {
  albums: [],
  searchQuery: "hip hop",
  sortType: "",
  maxPrice: 80
};

/* =========================
   DOM ELEMENTS
========================= */

const musicContainer = document.querySelector("#musicContainer");
const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchInput");
const sortFilter = document.querySelector("#filter");
const priceRange = document.querySelector("#priceRange");
const priceValue = document.querySelector("#priceValue");

/* Mobile Navigation */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

/* =========================
   GENRE NORMALIZATION
========================= */

function normalizeGenre(query){

  const genres = {
    "hip hop":"hiphop",
    "rap":"hiphop",
    "pop":"pop",
    "r&b":"rnb",
    "r & b":"rnb",
    "rock":"rock",
    "rock & roll":"rock"
  };

  const lower = query.toLowerCase();

  if(genres[lower]) return genres[lower];

  return query;
}

/* =========================
   FETCH MUSIC
========================= */

async function fetchMusic(query){

  const normalized = normalizeGenre(query);
  const encoded = encodeURIComponent(normalized);

  const response = await fetch(
    `${BASE_URL}/tracks/?client_id=${CLIENT_ID}&format=json&limit=24&search=${encoded}&include=musicinfo`
  );

  const data = await response.json();

  return data.results.map(track => {

    const originalPrice = Math.floor(Math.random()*50)+30;
    const salePrice = Math.floor(originalPrice * 0.6);

    return {
      artist: track.artist_name,
      title: track.name,
      image: track.album_image || track.image || "https://via.placeholder.com/300x300?text=Music",
      rating: Math.floor(Math.random()*5)+1,
      price: salePrice,
      originalPrice: originalPrice
    };

  });

}

/* =========================
   FILTER BY PRICE
========================= */

function filterByPrice(albums){
  return albums.filter(album => album.price <= state.maxPrice);
}

/* =========================
   SORT MUSIC
========================= */

function sortMusic(albums){

  if(state.sortType === "LOW_TO_HIGH"){
    return [...albums].sort((a,b)=>a.price-b.price);
  }

  if(state.sortType === "HIGH_TO_LOW"){
    return [...albums].sort((a,b)=>b.price-a.price);
  }

  if(state.sortType === "RATING"){
    return [...albums].sort((a,b)=>b.rating-a.rating);
  }

  return albums;

}

/* =========================
   STAR RENDER
========================= */

function renderStars(rating){

  return Array(rating)
  .fill('<i class="fa-solid fa-star"></i>')
  .join("");

}

/* =========================
   RENDER MUSIC
========================= */

function renderMusic(albums){

  if(!albums.length){
    musicContainer.innerHTML = "<p>No music found.</p>";
    return;
  }

  musicContainer.innerHTML = albums.map(album=>{

    const stars = renderStars(album.rating);

    return `
      <div class="hiphop-album">

        <img
          class="hiphop__img"
          src="${album.image}"
          alt="${album.artist}"
        />

        <div class="album__artist">
          ${album.artist}
        </div>

        <div class="album__title">
          ${album.title}
        </div>

        <div class="album__ratings">
          ${stars}
        </div>

        <div class="album__price">

          <span class="album__price--normal">
            $${album.originalPrice}
          </span>

          <span class="album__price--sale">
            $${album.price}
          </span>

        </div>

      </div>
    `;

  }).join("");

}

/* =========================
   MAIN LOAD FUNCTION
========================= */

async function loadMusic(){

  musicContainer.innerHTML = "<p>Loading music...</p>";

  let albums = await fetchMusic(state.searchQuery);

  albums = filterByPrice(albums);

  albums = sortMusic(albums);

  state.albums = albums;

  renderMusic(albums);

}

/* =========================
   SEARCH EVENT
========================= */

searchForm.addEventListener("submit",(e)=>{

  e.preventDefault();

  const query = searchInput.value.trim();

  if(!query) return;

  state.searchQuery = query;

  loadMusic();

});

/* =========================
   SORT EVENT
========================= */

sortFilter.addEventListener("change",()=>{

  state.sortType = sortFilter.value;

  const sorted = sortMusic([...state.albums]);

  renderMusic(sorted);

});

/* =========================
   PRICE SLIDER
========================= */

priceRange.addEventListener("input",()=>{

  state.maxPrice = Number(priceRange.value);

  priceValue.textContent = `0 to ${state.maxPrice}`;

  const filtered = filterByPrice([...state.albums]);

  renderMusic(filtered);

});

/* =========================
   INITIAL LOAD
========================= */

loadMusic();