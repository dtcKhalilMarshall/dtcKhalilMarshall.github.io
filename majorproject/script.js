const tracks = [
  { title: "Steve Lacy - Dark Red", url: "https://www.youtube.com/embed/Q6FarZpy67M?si=83k3oUx6dYD5AtQk" },
  { title: "Steve Lacy - C U Girl", url: "https://www.youtube.com/embed/t0fn0Q0DB0E?si=LbWg4r_BJVdMfYI_" },
  { title: "Steve Lacy - Ryd", url: "https://www.youtube.com/embed/BCV_vlRDrsQ?si=LstQmGucR-P0hN2E" },
  { title: "Beyoncé - Halo", url: "https://www.youtube.com/embed/bnVUHWCynig" },
  { title: "Beyoncé - Crazy In Love", url: "https://www.youtube.com/embed/ViwtNLUqkMY" },
  { title: "Beyoncé - Irreplacable", url: "https://www.youtube.com/embed/3iTnJX7aU5E" },
  { title: "Kendrick Lamar - HUMBLE.", url: "https://www.youtube.com/embed/tvTRZJ-4EyI" },
  { title: "Kendrick Lamar - All The Stars", url: "https://www.youtube.com/embed/4iGIl8V5C9k" },
  { title: "Kendrick Lamar - DNA.", url: "https://www.youtube.com/embed/ktvTqknDobU" },
  { title: "Frank Ocean - Chanel", url: "https://www.youtube.com/embed/7E2fFzU7g8I" },
  { title: "Frank Ocean - Lost", url: "https://www.youtube.com/embed/Vp7gqEgQb5E" },
  { title: "Frank Ocean - Thinkin Bout You", url: "https://www.youtube.com/embed/9f6e7Ojh0zQ" },
  { title: "PinkPantheress - Just for me", url: "https://www.youtube.com/embed/0p8lLsF7Hes" },
  { title: "PinkPantheress - Break It Off", url: "https://www.youtube.com/embed/U7u4U2VY7dQ" },
  { title: "PinkPantheress - Passion", url: "https://www.youtube.com/embed/jidV2N6DH1c" },
  { title: "Miguel - Adorn", url: "https://www.youtube.com/embed/3MFp9E3W7SI" },
  { title: "Miguel - Sure Thing", url: "https://www.youtube.com/embed/8rCzM0hE7wE" },
  { title: "Miguel - Waves", url: "https://www.youtube.com/embed/0f4QYEGzIEk" },
  { title: "Megan Thee Stallion - Savage", url: "https://www.youtube.com/embed/8dWLZy3P27o" },
  { title: "Megan Thee Stallion - Body", url: "https://www.youtube.com/embed/SGk5_K7X9E0" },
  { title: "Megan Thee Stallion - Thot Shit", url: "https://www.youtube.com/embed/7M0LJQwGd8k" },
  { title: "Kehlani - Gangsta", url: "https://www.youtube.com/embed/7aNPSsUQKk0" },
  { title: "Kehlani - Honey", url: "https://www.youtube.com/embed/7-5WvXxQm8k" },
  { title: "Kehlani - Nights Like This", url: "https://www.youtube.com/embed/1K4V5XoC4o4" },
  { title: "Doechii - Persuasive", url: "https://www.youtube.com/embed/4Ff3K6lY6pk" },
  { title: "Doechii - Crazy", url: "https://www.youtube.com/embed/xU1h3fF7H9U" },
  { title: "Doechii - Yucky Blucky Fruitcake", url: "https://www.youtube.com/embed/8h7F8sL1VYk" },
  { title: "Olivia Dean - Dive", url: "https://www.youtube.com/embed/0V0B8U9O7Kk" },
  { title: "Olivia Dean - The Hardest Part", url: "https://www.youtube.com/embed/0U78V7W7l8E" },
  { title: "Olivia Dean - Echo", url: "https://www.youtube.com/embed/1Vx3FtHkKH0" },
  { title: "Ravyn Lenae - Sticky", url: "https://www.youtube.com/embed/0R9b7XKX3iY" },
  { title: "Ravyn Lenae - Something To Feel", url: "https://www.youtube.com/embed/s8V1zU7mQos" },
  { title: "Ravyn Lenae - Love Like This", url: "https://www.youtube.com/embed/5Dq3u8p1iH4" },
  { title: "Rochelle Jordan - Come Back", url: "https://www.youtube.com/embed/7f7p7QMi8hI" },
  { title: "Rochelle Jordan - DAYONE", url: "https://www.youtube.com/embed/4XhA2NwBk4g" },
  { title: "Rochelle Jordan - No Time", url: "https://www.youtube.com/embed/7rG2A8sH8mY" },
  { title: "Solange - Cranes in the Sky", url: "https://www.youtube.com/embed/4D1xycK5dP4" },
  { title: "Solange - Losing You", url: "https://www.youtube.com/embed/7zUe1d8UfE4" },
  { title: "Solange - Almeda", url: "https://www.youtube.com/embed/4yF5U7zXfWk" },
  { title: "Tinashe - 2 On", url: "https://www.youtube.com/embed/5hG9j2Rz2uY" },
  { title: "Tinashe - No Drama", url: "https://www.youtube.com/embed/3U7BMI0z5U0" },
  { title: "Tinashe - Flame", url: "https://www.youtube.com/embed/7sU_6gS6o40" },
  { title: "Tems - Free Mind", url: "https://www.youtube.com/embed/0Xy7hZp7iPg" },
  { title: "Tems - Crazy Tings", url: "https://www.youtube.com/embed/mg7z6r3Y3OQ" },
  { title: "Tems - Damages", url: "https://www.youtube.com/embed/l4V6S6b5VhE" },
  { title: "Victoria Monet - Moment", url: "https://www.youtube.com/embed/Zp0j0-R4x_k" },
  { title: "Victoria Monet - Feelings", url: "https://www.youtube.com/embed/6a2z-pzA6A4" },
  { title: "Victoria Monet - Experience", url: "https://www.youtube.com/embed/7KzWJH9X0xQ" },
  { title: "Flo - Cardboard Box", url: "https://www.youtube.com/embed/6F7A7gz2_W8" },
  { title: "Flo - Not My Job", url: "https://www.youtube.com/embed/4WfVnVj6I4g" },
  { title: "Flo - Immature", url: "https://www.youtube.com/embed/cDEYI4sH4W4" }
];

 let currentTrackIndex = 0;

  function loadVideo(index) {
    const video = tracks[index];
    const container = document.getElementById('youtube-player');
    container.innerHTML = `
     <iframe width="560" height="315" src="https://www.youtube.com/embed/BCV_vlRDrsQ?si=67necbl5WKSiGB1k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    `;
    document.getElementById('track-title').textContent = `Now Playing: ${video.title}`;
  }

  // Load first video
  loadVideo(currentTrackIndex);

  document.getElementById('nextVideo').addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadVideo(currentTrackIndex);
  });
  document.getElementById('prevVideo').addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadVideo(currentTrackIndex);
  });
