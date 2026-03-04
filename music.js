// SORT / FILTER FUNCTION
function filterMusic(music) {
  const filterElement = document.querySelector("#filter");
  if (!filterElement) return music;

  const filterValue = filterElement.value;

  // copy array so original data is untouched
  let sortedMusic = [...music];

  if (filterValue === "LOW_TO_HIGH") {
    sortedMusic.sort((a, b) => a.salePrice - b.salePrice);
  }

  if (filterValue === "HIGH_TO_LOW") {
    sortedMusic.sort((a, b) => b.salePrice - a.salePrice);
  }

  if (filterValue === "RATING") {
    sortedMusic.sort((a, b) => b.rating - a.rating);
  }

  return sortedMusic;
}


// RENDER FUNCTION
function rendermusic() {
  const musicWrapper = document.querySelector("#musicContainer");

  if (!musicWrapper) return;

  let music = getmusic();

  // apply sorting
  music = filterMusic(music);

  const musicHTML = music.map((album) => {
    return `
      <div class="hiphop-album">
        <figure class="hiphop__img--wrapper">
          <img class="hiphop__img" src="${album.url}" alt="${album.title}">
        </figure>

        <div class="album__artist">
          ${album.id}
        </div>

        <div class="album__title">
          <em>${album.title}</em>
        </div>

        <div class="album__price">
          <span class="album__price--normal">$${album.originalPrice}</span>
          <span class="album__price--sale">$${album.salePrice}</span>
        </div>
      </div>
    `;
  }).join("");

  musicWrapper.innerHTML = musicHTML;
}


// WAIT UNTIL PAGE LOADS
document.addEventListener("DOMContentLoaded", () => {

  rendermusic();

  const filterElement = document.querySelector("#filter");

  filterElement.addEventListener("change", () => {
    rendermusic();
  });

});
// FAKE DATA
function getmusic() {
    return [
    {
    albumId: 1,
    id: "Drake",
    title: "Scorpion",
    url: "/Assets/HipHopRap/Drake_Scorpion.jpeg",
    originalPrice: 55.00,
    salePrice: 37.99,
    rating: 4.5
    },
    {
    albumId: 1,
    id: "Kendrick Lamar",
    title: "GNX",
    url: "/Assets/HipHopRap/Kendrick Lamar_GNX.png",
    originalPrice: 34.99,
    salePrice: 29.99,
    rating: 4.5
    },
    {
    albumId: 1,
    id: "Jay-Z",
    title: "The Black Album",
    url: "/Assets/HipHopRap/Jay-Z_The Black Album.jpeg",
    originalPrice: 45.00,
    salePrice: 38.00,
    rating: 5.0
    },
    {
    albumId: 1,
    id: "50 Cent",
    title: "Get Rich Or Die Tryin'",
    url: "/Assets/HipHopRap/50 Cent_Get Rich Or Die Tryin'.jpeg",
    originalPrice: 45.00,
    salePrice: 38.00,
    rating: 5.0
    },
    {
    albumId: 1,
    id: "Tupac",
    title: "All Eyez on Me",
    url: "/Assets/HipHopRap/Tupac_All Eyez on Me.jpeg",
    originalPrice: 95.00,
    salePrice: 80.00,
    rating: 5.0
    },
    {
    albumId: 1,
    id: "The Notorious B.I.G.",
    title: "Life After Death",
    url: "/Assets/HipHopRap/Notorious B.I.G._Life After Death.jpeg",
    originalPrice: 80.00,
    salePrice: 60.00,
    rating: 5.0
    },
    {
    albumId: 1,
    id: "Schoolboy Q",
    title: "Oxymoron",
    url: "/Assets/HipHopRap/Schoolboy Q_Oxymoron.jpeg",
    originalPrice: 50.98,
    salePrice: 39.99,
    rating: 5.0
    },
    {
    albumId: 1,
    id: "Nicki Minaj",
    title: "Pink Friday",
    url: "/Assets/HipHopRap/Nicki Minaj_Pink Friday .jpeg",
    originalPrice: 59.98,
    salePrice: 37.99,
    rating: 4.5
    },
    {
    albumId: 1,
    id: "Remy Ma",
    title: "There's Something About Remy",
    url: "/Assets/HipHopRap/Remy Ma_There's Something About Remy.jpeg",
    originalPrice: 35.00,
    salePrice: 25.00,
    rating: 4.5
    },
    {
    albumId: 1,
    id: "Mobb Deep",
    title: "The Infamous",
    url: "/Assets/HipHopRap/Mobb Deep_The Infamous 1995.jpeg",
    originalPrice: 100.00,
    salePrice: 60.00,
    rating: 5
    },
    {
    albumId: 1,
    id: "Vince Staples",
    title: "Summertime '06",
    url: "/Assets/HipHopRap/Vince Staples_Summertime 06'.jpeg",
    originalPrice: 29.99,
    salePrice: 25.00,
    rating: 4.5
    },
    {
    albumId: 1,
    id: "T.I.",
    title: "Papertrail",
    url: "/Assets/HipHopRap/T.I._Papertrail.jpg",
    originalPrice: 33.99,
    salePrice: 24.98,
    rating: 5.0
    },
    {
    albumId: 1,
    id: "A$AP Rocky",
    title: "LONG.LIVE.A$AP",
    url: "/Assets/HipHopRap/A$AP Rocky_Long.Live.ASAP.jpeg",
    originalPrice: 45.00,
    salePrice: 37.99,
    rating: 5.0
    },
    {
    albumId: 1,
    id: "Eve",
    title: "Let There Be Eve...Ruff Ryders' First Lady",
    url: "/Assets/HipHopRap/Eve_Let There Be Eve...Ruff Ryders' First Lady.jpeg",
    originalPrice: 17.00,
    salePrice: 14.99,
    rating: 3.5
    },
    {
    albumId: 1,
    id: "Nas",
    title: "King's Disease",
    url: "/Assets/HipHopRap/Nas_King's Disease.jpeg",
    originalPrice: 36.00,
    salePrice: 26.00,
    rating: 5.0
    },
    {
    albumId: 1,
    id: "Old Dirty Bastard",
    title: "Return to the 36 Chambers:The Dirty Version",
    url: "/Assets/HipHopRap/Old Dirty Bastard_Return to the 36 Chambers - The Dirty Version.jpeg",
    originalPrice: 55.99,
    salePrice: 42.98,
    rating: 4.5
    },
    {
    albumId: 1,
    id: "Jeezy",
    title: "Let's Get It: Thug Motivation 101",
    url: "/Assets/HipHopRap/Young Jeezy_Let's Get It-Thug Motivation 101.jpeg",
    originalPrice: 60.00,
    salePrice: 30.00,
    rating: 4.0
    },
    {
    albumId: 1,
    id: "Lil Wayne",
    title: "Tha Carter III",
    url: "/Assets/HipHopRap/Lil Wayne_Tha CarterIII.jpeg",
    originalPrice: 44.99,
    salePrice: 39.98,
    rating: 4.5
    },
    {
    albumId: 1,
    id: "Cardi B",
    title: "Invasion of Privacy",
    url: "/Assets/HipHopRap/Cardi B_Invasion of Privacy.png",
    originalPrice: 47.99,
    salePrice: 37.98,
    rating: 4.5
    },
    {
    albumId: 1,
    id: "Glorilla",
    title: "Anyways, Life's Great",
    url: "/Assets/HipHopRap/Glorilla_Anyways Lifes Great.jpeg",
    originalPrice: 59.00,
    salePrice: 37.00,
    rating: 3.5
    },
    {
    albumId: 1,
    id: "JID",
    title: "DiCaprio 2",
    url: "/Assets/HipHopRap/JID_DiCaprio 2.jpeg",
    originalPrice: 38.00,
    salePrice: 25.00,
    rating: 4.0
    },
    {
    albumId: 1,
    id: "Doechii",
    title: "Alligator Bites Never Heal",
    url: "/Assets/HipHopRap/Doechii_Alligator Bites Never Heal.png",
    originalPrice: 29.99,
    salePrice: 27.99,
    rating: 4.5
    },
    {
    albumId: 1,
    id: "Lil Kim",
    title: "Hard Core",
    url: "/Assets/HipHopRap/Lil Kim_Hard Core.png",
    originalPrice: 37.99,
    salePrice: 27.98,
    rating: 4.0
    },
    {
    albumId: 2,
    id: "Mary J. Blidge",
    title: "My Life",
    url: "/Assets/R&B/Mary J Blige_My Life.jpeg",
    originalPrice: 50.00,
    salePrice: 35.00,
    rating: 5.0
    },
    {
    albumId: 2,
    id: "TLC",
    title: "CrazySexyCool",
    url: "/Assets/R&B/TLC_CrazySexyCool.png",
    originalPrice: 71.99,
    salePrice: 33.99,
    rating: 4.5
    },
    {
    albumId: 2,
    id: "Mariah Carey",
    title: "Daydream",
    url: "/Assets/R&B/Mariah Carey_Daydream.png",
    originalPrice: 32.51,
    salePrice: 24.98,
    rating: 4.5
    },
    {
    albumId: 2,
    id: "Boyz II Men",
    title: "II",
    url: "/Assets/R&B/Boyz II Men_II.jpg",
    originalPrice: 44.95,
    salePrice: 29.99,
    rating: 5.0
    },
    {
    albumId: 2,
    id: "Usher",
    title: "CONFESSIONS",
    url: "/Assets/R&B/Usher_CONFESSIONS.jpeg",
    originalPrice: 44.99,
    salePrice: 39.98,
    rating: 5.0
    },
    {
    albumId: 2,
    id: "Beyoncé",
    title: "Beyoncé",
    url: "/Assets/R&B/Beyoncé_Beyoncé.png",
    originalPrice: 60.00,
    salePrice: 35.00,
    rating: 5.0
    },
    {
    albumId: 2,
    id: "Brandy Norwood",
    title: "Brandy",
    url: "/Assets/R&B/Brandy Norwood_Brandy.jpeg",
    originalPrice: 43.99,
    salePrice: 33.99,
    rating: 5.0
    },
    {
    albumId: 2,
    id: "Chris Brown",
    title: "F.A.M.E. ForgivingAllMyEnemies",
    url: "/Assets/R&B/Chris Brown_F.A.M.E. ForgivingAllMyEnemies.png",
    originalPrice: 30.00,
    salePrice: 25.00,
    rating: 4.0
    },
    {
    albumId: 2,
    id: "Bryson Tiller",
    title: "Trapsoul",
    url: "/Assets/R&B/Bryson Tiller_Trapsoul.jpeg",
    originalPrice: 37.99,
    salePrice: 27.99,
    rating: 5.0
    },
    {
    albumId: 2,
    id: "Victoria Monét",
    title: "Jaguar II",
    url: "/Assets/R&B/Victoria Monet_Jaguar_II.png",
    originalPrice: 32.99,
    salePrice: 29.99,
    rating: 5.0
    },
    {
    albumId: 2,
    id: "Aaliyah",
    title: "One in a Million",
    url: "/Assets/R&B/Aaliyah_One in a Million.png",
    originalPrice: 60.00,
    salePrice: 50.00,
    rating: 4.0
    },
    {
    albumId: 2,
    id: "Lauryn Hill",
    title: "The Miseducation of Lauryn Hill",
    url: "/Assets/R&B/Lauryn Hill_The Miseducation of Lauryn Hill.png",
    originalPrice: 60.00,
    salePrice: 29.99,
    rating: 5.0
    },
    {
    albumId: 2,
    id: "Ginuwine",
    title: "100% Ginuwine",
    url: "/Assets/R&B/Ginuwine_100 Percent Ginuwine.jpeg",
    originalPrice: 48.50,
    salePrice: 39.95,
    rating: 4.0
    },
    {
    albumId: 2,
    id: "Total",
    title: "Total",
    url: "/Assets/R&B/Total_Total.jpeg",
    originalPrice: 34.98,
    salePrice: 20.00,
    rating: 3.5
    },
    {
    albumId: 2,
    id: "Tyrese",
    title: "Tyrese",
    url: "/Assets/R&B/Tyrese_Tyrese.jpeg",
    originalPrice: 49.98,
    salePrice: 29.99,
    rating: 4.0
    },
    {
    albumId: 2,
    id: "Whitney Houston",
    title: "Whitney: The Greatest Hits",
    url: "/Assets/R&B/Whitney Houston_The Greatest Hits.png",
    originalPrice: 30.00,
    salePrice: 25.00,
    rating: 4.0
    },
    {
    albumId: 2,
    id: "August Alsina",
    title: "Testimony",
    url: "/Assets/R&B/August Alsina_Testimony.jpeg",
    originalPrice: 49.99,
    salePrice: 36.99,
    rating: 5.0
    },
    {
    albumId: 2,
    id: "SZA",
    title: "SOS Deluxe: Lana",
    url: "/Assets/R&B/SZA_Lana (SOS_Deluxe).png",
    originalPrice: 89.99,
    salePrice: 79.99,
    rating: 4.5
    },
    {
    albumId: 2,
    id: "Tory Lanez",
    title: "Sorry 4 What",
    url: "/Assets/R&B/Tory Lanez_Sorry 4 What.jpeg",
    originalPrice: 39.99,
    salePrice: 32.99,
    rating: 4.0
    },
    {
    albumId: 2,
    id: "Keyshia Cole",
    title: "The Way It Is",
    url: "/Assets/R&B/Keyshia Cole_The Way It Is.jpeg",
    originalPrice: 37.99,
    salePrice: 34.99,
    rating: 5.0
    },
    {
    albumId: 3,
    id: "The Weeknd",
    title: "Hurry Up Tomorrow",
    url: "/Assets/R&B/The Weeknd_Hurry Up Tomorrow.png",
    originalPrice: 50.99,
    salePrice: 45.99,
    rating: 4.5
    },
    {
    albumId: 3,
    id: "Lady Gaga",
    title: "The Fame",
    url: "/Assets/Pop/Lady Gaga_The Fame.png",
    originalPrice: 33.00,
    salePrice: 26.99,
    rating: 5.0
    },
    {
    albumId: 3,
    id: "Rihanna",
    title: "Anti",
    url: "/Assets/Pop/Rihanna_Anti.png",
    originalPrice: 40.00,
    salePrice: 25.00,
    rating: 5.0
    },
    {
    albumId: 3,
    id: "Adele",
    title: "21",
    url: "/Assets/Pop/Adele_21.png",
    originalPrice: 27.00,
    salePrice: 24.00,
    rating: 5.0
    },
    {
    albumId: 3,
    id: "Christina Aguilera",
    title: "Christina Aguilera",
    url: "/Assets/Pop/Christina Aguilera_Christina Aguilera.jpeg",
    originalPrice: 60.00,
    salePrice: 30.00,
    rating: 5.0
    },
    {
    albumId: 3,
    id: "Black Eyed Peas",
    title: "The E.N.D.",
    url: "/Assets/Pop/Black Eyed Peas_The E.N.D..png",
    originalPrice: 65.45,
    salePrice: 42.35,
    rating: 5.0
    },
    {
    albumId: 3,
    id: "Brittany Spears",
    title: "Oops!... I Did It Again",
    url: "/Assets/Pop/Britney Spears_Oops!...I Did It Again.png",
    originalPrice: 38.00,
    salePrice: 32.00,
    rating: 5.0
    },
    {
    albumId: 3,
    id: "Taylor Swift",
    title: "Red",
    url: "/Assets/Pop/Taylor Swift_Red.png",
    originalPrice: 50.00,
    salePrice: 30.00,
    rating: 4.5
    },
    {
    albumId: 3,
    id: "Justin Timberlake",
    title: "FutureSex/LoveSounds",
    url: "/Assets/Pop/Justin Timberlake_FutureSex:LoveSounds.png",
    originalPrice: 50.00,
    salePrice: 41.49,
    rating: 5.0
    },
    {
    albumId: 3,
    id: "Maroon 5",
    title: "V",
    url: "/Assets/Pop/Maroon 5_V.png",
    originalPrice: 45.00,
    salePrice: 41.49,
    rating: 5.0
    },
    {
    albumId: 3,
    id: "Michael Jackson",
    title: "Thriller",
    url: "/Assets/Pop/Michael Jackson_Thriller.png",
    originalPrice: 35.00,
    salePrice: 20.00,
    rating: 5.0
    },
    {
    albumId: 3,
    id: "Foster the People",
    title: "Torches",
    url: "/Assets/Pop/Foster the People_Torches.jpeg",
    originalPrice: 30.00,
    salePrice: 22.00,
    rating: 5.0
    },
    {
    albumId: 3,
    id: "Janet Jackson",
    title: "Rhythm Nation",
    url: "/Assets/Pop/Janet Jackson_Rhythm Nation.png",
    originalPrice: 50.00,
    salePrice: 43.00,
    rating: 5.0
    },
    {
    albumId: 3,
    id: "Backstreet's Back",
    title: "Backstreet's Back",
    url: "/Assets/Pop/Backstreet Boys_Backstreet's Back.jpeg",
    originalPrice: 60.00,
    salePrice: 45.00,
    rating: 4.5
    },
    {
    albumId: 3,
    id: "Doja Cat",
    title: "Scarlet",
    url: "/Assets/Pop/Doja Cat_Scarlet.png",
    originalPrice: 60.00,
    salePrice: 45.00,
    rating: 4.5
    },
    {
    albumId: 4,
    id: "Metallica",
    title: "Metallica/The Black Album",
    url: "/Assets/Rock&Roll/Metallica_Metallica.jpeg",
    originalPrice: 50.00,
    salePrice: 35.00,
    rating: 5.0
    },
    {
    albumId: 4,
    id: "The Black Crowes",
    title: "Shake Your Money Maker",
    url: "/Assets/Rock&Roll/The Black Crowes_Shake Your Money Maker.png",
    originalPrice: 50.00,
    salePrice: 30.00,
    rating: 4.5
    },
    {
    albumId: 4,
    id: "Billy Idol",
    title: "Rebel Yell",
    url: "/Assets/Rock&Roll/Billy Idol_Rebel Yell.jpeg",
    originalPrice: 39.99,
    salePrice: 29.99,
    rating: 5.0
    },
    {
    albumId: 4,
    id: "Red Hot Chilli Peppers",
    title: "Californication",
    url: "/Assets/Rock&Roll/Red Hot Chili Peppers_Californication.jpeg",
    originalPrice: 45.00,
    salePrice: 36.00,
    rating: 5.0
    },
    {
    albumId: 4,
    id: "Aerosmith",
    title: "Get a Grip",
    url: "/Assets/Rock&Roll/Aerosmith_Get A Grip.jpeg",
    originalPrice: 63.00,
    salePrice: 50.00,
    rating: 5.0
    },
    {
    albumId: 4,
    id: "Linken Park",
    title: "Hybrid Theory",
    url: "/Assets/Rock&Roll/Linkin Park_Hybrid Theory.jpeg",
    originalPrice: 35.00,
    salePrice: 24.00,
    rating: 5.0
    },
    {
    albumId: 4,
    id: "Foo Fighters",
    title: "The Colour and the Shape",
    url: "/Assets/Rock&Roll/Foo Fighters-_The Colour And The Shape.jpeg",
    originalPrice: 37.99,
    salePrice: 27.99,
    rating: 5.0
    },
    {
    albumId: 4,
    id: "Imagine Dragons",
    title: "Night Visions",
    url: "/Assets/Rock&Roll/Imagine Dragons_Night Visions.jpeg",
    originalPrice: 40.00,
    salePrice: 32.00,
    rating: 4.5
    },
    {
    albumId: 4,
    id: "No Doubt",
    title: "Don’t Speak",
    url: "/Assets/Rock&Roll/No Doubt_Tragic Kingdom.png",
    originalPrice: 30.00,
    salePrice: 25.00,
    rating: 4.0
    },
    {
    albumId: 4,
    id: "Guns N' Roses",
    title: "Appetite For Destruction",
    url: "/Assets/Rock&Roll/Guns N' Roses_Appetite for Destruction.jpeg",
    originalPrice: 43.00,
    salePrice: 35.00,
    rating: 5.0
    },
    {
    albumId: 4,
    id: "The Rolling Stones",
    title: "Sticky Fingers",
    url: "/Assets/Rock&Roll/The Rolling Stones_Sticky Fingers.png",
    originalPrice: 45.00,
    salePrice: 35.00,
    rating: 4.5
    },
    {
    albumId: 4,
    id: "The Beatles",
    title: "Abbey Road",
    url: "/Assets/Rock&Roll/The Beatles_Abbey Road.jpeg",
    originalPrice: 80.51,
    salePrice: 50.00,
    rating: 5.0
    },
    {
    albumId: 4,
    id: "Pink Floyd",
    title: "The Dark Side of the Moon",
    url: "/Assets/Rock&Roll/Pink Floyd_Dark Side of the Moon.png",
    originalPrice: 40.00,
    salePrice: 35.00,
    rating: 5.0
    },
    {
    albumId: 4,
    id: "Led Zeppelin",
    title: "Led Zeppelin IV",
    url: "/Assets/Rock&Roll/Led Zeppelin_Zeppelin IV.jpeg",
    originalPrice: 35.89,
    salePrice: 24.99,
    rating: 5.0
    },
    ];
}