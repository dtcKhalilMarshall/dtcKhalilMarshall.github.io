const tracks = [
  { title: "Steve Lacy - Dark Red", url: "https://www.youtube.com/embed/Q6FarZpy67M?si=83k3oUx6dYD5AtQk" },
  { title: "Steve Lacy - C U Girl", url: "https://www.youtube.com/embed/t0fn0Q0DB0E?si=LbWg4r_BJVdMfYI_" },
  { title: "Steve Lacy - Ryd", url: "https://www.youtube.com/embed/BCV_vlRDrsQ?si=LstQmGucR-P0hN2E" },
];

let currentTrackIndex = 0;

function loadVideo(index) {
  const video = tracks[index];
  const container = document.getElementById('youtube-player');

  // Clear previous iframe
  container.innerHTML = '';

  // Create new iframe
  const iframe = document.createElement('iframe');
  iframe.width = '560';
  iframe.height = '315';
  iframe.src = video.url;
  iframe.title = 'YouTube video player';
  iframe.frameBorder = '0';
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  iframe.allowFullscreen = true;
  iframe.referrerPolicy = 'strict-origin-when-cross-origin';

  container.appendChild(iframe);

  // Update track title
  document.getElementById('track-title').textContent = `Now Playing: ${video.title}`;
}

// Load initial video
loadVideo(currentTrackIndex);

// Event listeners for buttons
document.getElementById('nextVideo').addEventListener('click', () => {
  currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
  loadVideo(currentTrackIndex);
});

document.getElementById('prevVideo').addEventListener('click', () => {
  currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
  loadVideo(currentTrackIndex);
});

// List of artists with their names and Spotify links
const artists = [
  { name: "Steve Lacy", spotify: "https://open.spotify.com/artist/57vWImR43h4CaDao012Ofp" },
  { name: "Rihanna", spotify: "https://open.spotify.com/artist/5pKCCKE2ajJHZ9KAiaK11H" },
  { name: "Melody Bloom", spotify: "https://open.spotify.com/search/melodybloom" },
  { name: "Chenayder", spotify: "https://open.spotify.com/artist/0BXnfQpsxFevtKePq6eX4y" },
  { name: "Laila!", spotify: "https://open.spotify.com/artist/7tHTnyrdTNM152slc8aQ3t" },
  { name: "Willow Smith", spotify: "https://open.spotify.com/artist/3rWZHrfrsPBxVy692yAIxF" },
  { name: "Essosa", spotify: "https://open.spotify.com/artist/6fn7JM8daBvCxpTkYyqtGY" },
  { name: "Sade", spotify: "https://open.spotify.com/artist/47zz7sob9NUcODy0BTDvKx" },
  { name: "MOIO", spotify: "https://open.spotify.com/artist/4D35LiRbeEHboAHa0bYUJb" },
  { name: "keltiey", spotify: "https://open.spotify.com/artist/6ffRXY5wKedZhPTMa6WGys" },
  { name: "Lil Hero", spotify: "https://open.spotify.com/artist/2imvddeWiv58tUPKh8q3kO" },
  { name: "Aya Nakamura", spotify: "https://open.spotify.com/artist/7IlRNXHjoOCgEAWN5qYksg" },
  { name: "Luci4", spotify: "https://open.spotify.com/artist/1CbA4z6JauNQnHzOErDQL6" },
  { name: "Kanii", spotify: "https://open.spotify.com/artist/1S82w4yw9TYIHZ889mPPaW" },
  { name: "Frank Ocean", spotify: "https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM" },
  { name: "Pink Pantheress", spotify: "https://open.spotify.com/artist/78rUTD7y6Cy67W1RVzYs7t" },
  { name: "Miguel", spotify: "https://open.spotify.com/artist/360IAlyVv4PCEVjgyMZrxK" },
  { name: "Megan Thee Stallion", spotify: "https://open.spotify.com/artist/181bsRPaVXVlUKXrxwZfHK" },
  { name: "Kehlani", spotify: "https://open.spotify.com/artist/0cGUm45nv7Z6M6qdXYQGTX" },
  { name: "Cookiee Kawaii", spotify: "https://open.spotify.com/artist/0DbBBj0ScPumRqKXswGQH1" },
  { name: "Tyler The Creator", spotify: "https://open.spotify.com/artist/4V8LLVI7PbaPR0K2TGSxFF" },
  { name: "SZA", spotify: "https://open.spotify.com/artist/7tYKF4w9nC0nq9CsPZTHyP" },
  { name: "A$AP Rocky", spotify: "https://open.spotify.com/artist/13ubrt8QOOCPljQ2FL1Kca" },
  { name: "Kendrick Lamar", spotify: "https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg" },
  { name: "Drake", spotify: "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4" },
  { name: "Childish Gambino", spotify: "https://open.spotify.com/artist/73sIBHcqh3Z3NyqHKZ7FOL" },
  { name: "Tyla", spotify: "https://open.spotify.com/artist/3SozjO3Lat463tQICI9LcE" },
  { name: "Doja Cat", spotify: "https://open.spotify.com/artist/5cj0lLjcoR7YOSnhnX0Po5" },
  { name: "Leon Thomas", spotify: "https://open.spotify.com/artist/0nnBZ8FXWjG9wZgM2cpfeb" },
  { name: "Beyoncé", spotify: "https://open.spotify.com/artist/6vWDO969PvNqNYHIOW5v0m" },
  { name: "Doechii", spotify: "https://open.spotify.com/artist/4E2rKHVDssGJm2SCDOMMJB" },
  { name: "Olivia Dean", spotify: "https://open.spotify.com/artist/00x1fYSGhdqScXBRpSj3DW" },
  { name: "Ravyn Lenae", spotify: "https://open.spotify.com/artist/5RTLRtXjbXI2lSXc6jxlAz" },
  { name: "Rochelle Jordan", spotify: "https://open.spotify.com/artist/3MM3uKNdJbvefUael12dl3" },
  { name: "Solange", spotify: "https://open.spotify.com/artist/2auiVi8sUZo17dLy1HwrTU" },
  { name: "Tinashe", spotify: "https://open.spotify.com/artist/0NIIxcxNHmOoyBx03SfTCD" },
  { name: "Tems", spotify: "https://open.spotify.com/artist/687cZJR45JO7jhk1LHIbgq" },
  { name: "Victoria Monet", spotify: "https://open.spotify.com/artist/63XBtGSEZINSyXylZxEUbv" },
  { name: "Flo", spotify: "https://open.spotify.com/artist/0s4kXsjYeH0S1xRyVGN4NO" },
  { name: "Say Now", spotify: "https://open.spotify.com/artist/1p6HheoJqfYMiMC62yQIWn" },
  { name: "3Quency", spotify: "https://open.spotify.com/artist/0Im6nZsuvL1W8yJg39xROA" },
  { name: "SZN4", spotify: "https://open.spotify.com/artist/3aVcen0IJtz6svz8DVlpfc" },
  { name: "Soulidified", spotify: "https://open.spotify.com/artist/3nE9FhhwfDdyuObjky2v55" },
  { name: "Bryson Tiller", spotify: "https://open.spotify.com/artist/2EMAnMvWE2eb56ToJVfCWs" },
  { name: "Brent Faiyaz", spotify: "https://open.spotify.com/artist/3tlXnStJ1fFhdScmQeLpuG" },
  { name: "PARTYNEXTDOOR", spotify: "https://open.spotify.com/artist/2HPaUgqeutzr3jx5a9WyDV" },
  { name: "Don Toliver", spotify: "https://open.spotify.com/artist/4Gso3d4CscCijv0lmajZWs" },
  { name: "Swae Lee", spotify: "https://open.spotify.com/artist/1zNqQNIdeOUZHb8zbZRFMX" },
  { name: "Jhené Aiko", spotify: "https://open.spotify.com/artist/5ZS223C6JyBfXasXxrRqOk" },
  { name: "Baby Storme", spotify: "https://open.spotify.com/artist/7cwYKm54nTTbnm0UnH0xBe" },
];

// Search function
document.getElementById('searchButton').addEventListener('click', () => {
  const input = document.getElementById('searchInput').value.trim().toLowerCase();
  const artist = artists.find(a => a.name.toLowerCase() === input);
  if (artist) {
    window.open(artist.spotify, '_blank');
  } else {
    alert('Artist not found. Please check the spelling.');
  }
});
