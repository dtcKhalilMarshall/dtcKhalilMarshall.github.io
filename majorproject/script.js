// placeholder for artist data
const artists = [
  { name: "Artist 1", image: "..." },
  { name: "Artist 2", image: "..." },
  { name: "Artist 3", image: "..." },
  { name: "Artist 4", image: "..." },
];

// Function to display artists
function displayArtists(artistsToDisplay) {
  const container = document.getElementById('artistsGrid');
  container.innerHTML = ''; 
  artistsToDisplay.forEach(artist => {
    const card = document.createElement('div');
    card.className = 'artist-card';

    const img = document.createElement('img');
    img.src = artist.image;
    img.alt = artist.name;

    const nameDiv = document.createElement('div');
    nameDiv.className = 'artist-name';
    nameDiv.textContent = artist.name;

    card.appendChild(img);
    card.appendChild(nameDiv);
    container.appendChild(card);
  });
}

// Initial display
displayArtists(artists);

// Search filter
document.getElementById('searchInput').addEventListener('input', function() {
  const query = this.value.toLowerCase();
  const filteredArtists = artists.filter(artist => 
    artist.name.toLowerCase().includes(query)
  );
  displayArtists(filteredArtists);
});
