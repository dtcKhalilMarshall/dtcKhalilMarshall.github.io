const tracks = [
  { title: "Steve Lacy - Dark Red", url: "https://www.youtube.com/embed/Q6FarZpy67M?si=83k3oUx6dYD5AtQk" },
  { title: "Steve Lacy - C U Girl", url: "https://www.youtube.com/embed/t0fn0Q0DB0E?si=LbWg4r_BJVdMfYI_" },
  { title: "Steve Lacy - Ryd", url: "https://www.youtube.com/embed/BCV_vlRDrsQ?si=LstQmGucR-P0hN2E" },
];

let currentIndex = 0;
const container = document.getElementById('youtube-player');
const nextBtn = document.getElementById('nextVideo');
const prevBtn = document.getElementById('prevVideo');

function showVideo(index) {
  const track = tracks[index];
  // Clear previous iframe and title
  container.innerHTML = '';

  // Create new iframe with autoplay
  const iframe = document.createElement('iframe');
  iframe.width = "100%";
  iframe.height = "315";
  iframe.src = `${track.url}&autoplay`;
  iframe.frameBorder = "0";
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
  iframe.allowFullscreen = true;

  container.appendChild(iframe);
  // Add title below the video
  container.innerHTML += `<p style="text-align:center; margin-top:10px;">${track.title}</p>`;
}

// Initialize first video
showVideo(currentIndex);

// Event listeners for controls
document.getElementById('nextVideo').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % tracks.length;
  showVideo(currentIndex);
});
document.getElementById('prevVideo').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + tracks.length) % tracks.length;
  showVideo(currentIndex);
});

// Google Search for Artist
document.getElementById('searchButton').addEventListener('click', () => {
  const artistName = document.getElementById('searchInput').value.trim();
  if (artistName) {
    const query = encodeURIComponent(artistName);
    const url = `https://www.google.com/search?q=${query}`;
    window.open(url, '_blank');
  }
});

document.getElementById('searchInput').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    document.getElementById('searchButton').click();
  }
});
