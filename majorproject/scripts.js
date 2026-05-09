const tracks = [
  // Steve Lacy
  { title: "Steve Lacy - Dark Red", url: "https://www.youtube.com/embed/Q6FarZpy67M?si=83k3oUx6dYD5AtQk" },
  { title: "Steve Lacy - C U Girl", url: "https://www.youtube.com/embed/t0fn0Q0DB0E?si=LbWg4r_BJVdMfYI_" },
  { title: "Steve Lacy - Ryd", url: "https://www.youtube.com/embed/BCV_vlRDrsQ?si=LstQmGucR-P0hN2E" },

  // Rihanna
  { title: "Rihanna - Consideration ft. SZA", url: "https://www.youtube.com/embed/WSSShAOKYfo?si=mMdmLfg7ORAAwC13" },
  { title: "Rihanna - James Joint", url: "https://www.youtube.com/embed/EDNaJ1ou71Y?si=kuZLDQNafNTMoG0A" },
  { title: "Rihanna - Woo", url: "https://www.youtube.com/embed/i0S40arGfCQ?si=kEy2udIPeesr16yy" },

  // Melody Bloom
  { title: "Melody Bloom - strangers (with proderics)", url: "https://www.youtube.com/embed/POcZqfP3Ja4?si=C1Zg8RPZV5vOKkXe" },
  { title: "Melody Bloom - wasted time (with proderics)", url: "https://www.youtube.com/embed/-UG5dNVKWEU?si=9pydHO_cfQYR_AVn" },
  { title: "Melody Bloom - (with nafeesisboujee)", url: "https://www.youtube.com/embed/PM33ozfRtAo?si=0eZQlmvYLCtUDNKo" },

  // Chenayder
  { title: "Chenayder - Colors (with MAVI)", url: "https://www.youtube.com/embed/E4IPwBbdm7M?si=ETXPNiRr2KKE8WA6" },
  { title: "Chenayder - Strawberry Perfume", url: "https://www.youtube.com/embed/nhS6tyxLoMU?si=dcqMPS3sLHRCDCPa" },
  { title: "Chenayder - Wonder", url: "https://www.youtube.com/embed/gd0f2KKhtHc?si=ge50RdMwybenUMpx" },

  // Laila!
  { title: "Laila! - Not My Problem", url: "https://www.youtube.com/embed/AUf2n2R4fI8?si=jBYq--Loh1nxOMwi" },
  { title: "Laila! - Like That!", url: "https://www.youtube.com/embed/9qPH9FuKp4M?si=GQGiaYbN_baFJ-Ju" },
  { title: "Laila! - Want 2", url: "https://www.youtube.com/embed/PiVqASJrFVU?si=YzLAb5MXQtnn_9QJ" },

  // Willow Smith
  { title: "Willow Smith - Meet Me At Our Spot", url: "https://www.youtube.com/embed/2dTMIH5gCHg?si=iy0iHk26wkcX3ap1" },
  { title: "Willow Smith - Wait a Minute!", url: "https://www.youtube.com/embed/1Xfdjqa5dfY?si=gSoM4NfO1Z82yD12" },
  { title: "Willow Smith - transparentsoul ft. Travis Barker", url: "https://www.youtube.com/embed/eG9KzyVO638?si=OsU5qg0qjZBd0WXj" },

  // Essosa
  { title: "Essosa - Waste My Time", url: "https://www.youtube.com/embed/sKEGKuIScCI?si=KPgdGN3rlOeE6Go1" },
  { title: "Essosa - Tell Nobody", url: "https://www.youtube.com/embed/GOU8b7mkIVM?si=Rjz28_axQvql_NTA" },
  { title: "Essosa - Muse", url: "https://www.youtube.com/embed/yV7rq2UVumQ?si=-etdcXeB24s-9hE3" },

  // Sade
  { title: "Sade - Smooth Operator", url: "https://www.youtube.com/embed/4TYv2PhG89A?si=SBW7o8QzQXCqdUfk" },
  { title: "Sade - No Ordinary Love", url: "https://www.youtube.com/embed/_WcWHZc8s2I?si=3t6El0Mbu1Ww0a1A" },
  { title: "Sade - Kiss Of Life", url: "https://www.youtube.com/embed/MmOau-PMWJk?si=Y-ki1Fm3B_AuGEM8" },

  // MOIO
  { title: "MOIO - Moments", url: "https://www.youtube.com/embed/cacviihAqao?si=KK28A2qi7ZLZoeNI" },
  { title: "MOIO - Figures On The Wall", url: "https://www.youtube.com/embed/SDFz70N1MYc?si=CMuiEUlOn-2JNj4w" },
  { title: "MOIO - Figure It Out", url: "https://www.youtube.com/embed/JJCnboIo6ag?si=dZ3vSpF22IUiDTP9" },

  // Keltiey
  { title: "Keltiey - Need", url: "https://www.youtube.com/embed/94oeJlfI0x8?si=WquZIIL4so2rrYQe" },
  { title: "Keltiey - goingoutsad", url: "https://www.youtube.com/embed/up5lObSLhVw?si=zhaT9--vcu9_AwRx" },
  { title: "Keltiey - Kn0 (with Skaiwater)", url: "https://www.youtube.com/embed/bRL3rNLO23I?si=NkgKjPY9GcRB4QRW" },

  // Lil Hero
  { title: "Lil Hero - gun show", url: "https://www.youtube.com/embed/d128wLMMOnc?si=vOmY5yZ3-9Bkrx76" },
  { title: "Lil Hero - radar", url: "https://www.youtube.com/embed/K2MIvqTxK94?si=ka2xVgJ40VFAK7sU" },
  { title: "Lil Hero - easy going down", url: "https://www.youtube.com/embed/4PM9qreKm0c?si=awBRhBzsiO_k_S_Y" },

  // Aya Nakamura
  { title: "Aya Nakamura - Djadja", url: "https://www.youtube.com/embed/iPGgnzc34tY?si=BGu-CirmQPouWzMX" },
  { title: "Aya Nakamura - Copines", url: "https://www.youtube.com/embed/EkGiGf8utCM?si=WJstRDL7sqCeQVdB" },
  { title: "Aya Nakamura - Pookie", url: "https://www.youtube.com/embed/_bPa-VG0AWo?si=6vBJLVqXMvNsPVul" },

  // Luci4
  { title: "Luci4 - Song 1", url: "#" },
  { title: "Luci4 - Song 2", url: "#" },
  { title: "Luci4 - Song 3", url: "#" },

  // Kanii
  { title: "Kanii - Song 1", url: "#" },
  { title: "Kanii - Song 2", url: "#" },
  { title: "Kanii - Song 3", url: "#" },

  // Frank Ocean
  { title: "Frank Ocean - Pink + White", url: "https://www.youtube.com/embed/uzS3WG6__G4?si=WCkojpktDVaK_E6x" },
  { title: "Frank Ocean - Chanel", url: "https://www.youtube.com/embed/XnbsIl2BnWw?si=HaPm20ARyAYit73d" },
  { title: "Frank Ocean - Nights", url: "https://www.youtube.com/embed/r4l9bFqgMaQ?si=LoorNzkFSsKhd8tW" },

  // PinkPantheress
  { title: "PinkPantheress - Just a Waste", url: "https://www.youtube.com/embed/gOBT9Z7UMLs?si=gX_TMMvWfj7Ssh95" },
  { title: "PinkPantheress - Passion", url: "https://www.youtube.com/embed/0Szr5Dcwn4Y?si=2VWzhyiTJ-aLAiqA" },
  { title: "PinkPantheress - I must apologize", url: "https://www.youtube.com/embed/QrcrrIlKen0?si=rmm6emalE4U6V3ik" },

  // Miguel
  { title: "Miguel - Adorn", url: "https://www.youtube.com/embed/8dM5QYdTo08?si=0MZst6HhSUN5gvvd" },
  { title: "Miguel - Girl With The Tattoo Enter.lewd", url: "https://www.youtube.com/embed/XDOaT7nqqvI?si=2aozves8kirQq7Uj" },
  { title: "Miguel - Lotus Flower Bomb (with Wale)", url: "https://www.youtube.com/embed/ZKvhkcJDbzY?si=5E6-vXNpbHfr4dZK" },

  // Megan Thee Stallion
  { title: "Megan Thee Stallion - Song 1", url: "#" },
  { title: "Megan Thee Stallion - Song 2", url: "#" },
  { title: "Megan Thee Stallion - Song 3", url: "#" },

  // Kehlani
  { title: "Kehlani - Song 1", url: "#" },
  { title: "Kehlani - Song 2", url: "#" },
  { title: "Kehlani - Song 3", url: "#" },

  // Cookiee Kawaii
  { title: "Cookiee Kawaii - Song 1", url: "#" },
  { title: "Cookiee Kawaii - Song 2", url: "#" },
  { title: "Cookiee Kawaii - Song 3", url: "#" },

  // Tyler The Creator
  { title: "Tyler The Creator - Song 1", url: "#" },
  { title: "Tyler The Creator - Song 2", url: "#" },
  { title: "Tyler The Creator - Song 3", url: "#" },

  // SZA
  { title: "SZA - The Weekend", url: "https://www.youtube.com/embed/cMD63TwzB1o?si=kXapuf_OQ0GaGWAs" },
  { title: "SZA - Love Galore ft. Travis Scott", url: "https://www.youtube.com/embed/hHXfCOjb3fk?si=xwBllQHvC2aHzsPN" },
  { title: "SZA - Hit Different", url: "https://www.youtube.com/embed/qJlMkMtK7-8?si=n0Rj_Flxg_Epe1Ec" },

  // A$AP Rocky
  { title: "A$AP Rocky - Song 1", url: "#" },
  { title: "A$AP Rocky - Song 2", url: "#" },
  { title: "A$AP Rocky - Song 3", url: "#" },

  // Kendrick Lamar
  { title: "Kendrick Lamar - Song 1", url: "#" },
  { title: "Kendrick Lamar - Song 2", url: "#" },
  { title: "Kendrick Lamar - Song 3", url: "#" },

  // Drake
  { title: "Drake - Song 1", url: "#" },
  { title: "Drake - Song 2", url: "#" },
  { title: "Drake - Song 3", url: "#" },

  // Childish Gambino
  { title: "Childish Gambino - Song 1", url: "#" },
  { title: "Childish Gambino - Song 2", url: "#" },
  { title: "Childish Gambino - Song 3", url: "#" },

  // Tyla
  { title: "Tyla - Water", url: "https://www.youtube.com/embed/XoiOOiuH8iI?si=UNy3N-rJ3top5YdX" },
  { title: "Tyla - PUSH 2 START", url: "https://www.youtube.com/embed/uLK2r3sG4lE?si=eZToizRCubtrJk0z" },
  { title: "Tyla - SHE DID IT AGAIN ft. Zara Larsson", url: "https://www.youtube.com/embed/rtwpk9rb1Dc?si=IOJWrG_lG_dIjgtj" },

  // Doja Cat
  { title: "Doja Cat - Say So", url: "https://www.youtube.com/embed/pok8H_KF1FA?si=86_P0rhdK8elMr81" },
  { title: "Doja Cat - Kiss Me More ft. SZA", url: "https://www.youtube.com/embed/0EVVKs6DQLo?si=iE09_afgbFJlACPD" },
  { title: "Doja Cat - Streets", url: "https://www.youtube.com/embed/jJdlgKzVsnI?si=yPYpjq0B30qqd9Iv" },

  // Leon Thomas
  { title: "Leon Thomas - Mutt", url: "https://www.youtube.com/embed/ejEzHE5ZMT8?si=zwQJMeNNWhK7IS0z" },

  // Beyoncé
  { title: "Beyoncé - Crazy In Love ft. JAY Z", url: "https://www.youtube.com/embed/ViwtNLUqkMY?si=9T1bw2kOC_Xn3BGv" },
  { title: "Beyoncé - Beautiful Liar (with Shakira)", url: "https://www.youtube.com/embed/QrOe2h9RtWI?si=QBWR0iCKC_sh27ER" },
  { title: "Beyoncé - AMERICA HAS A PROBLEM ft. Kendrick Lamar", url: "https://www.youtube.com/embed/Q0E4wVF2a4k?si=W1k79mmPjyj6HdIM" },

  // Doechii
  { title: "Doechii - Persuasive ft. SZA", url: "https://www.youtube.com/embed/ES9CqKPkdeU?si=lOOOaXPTYO-LvKJN" },
  { title: "Doechii - NISSAN ALTIMA", url: "https://www.youtube.com/embed/iGbeZNqklic?si=z2mgPOiwItfK9pwi" },
  { title: "Doechii - Alter Ego ft. JT", url: "https://www.youtube.com/embed/tJkPh2vluFQ?si=0nBFGlqqUxY9scd0" },

  // Olivia Dean
  { title: "Olivia Dean - Man I Need", url: "https://www.youtube.com/embed/oIv_Y2RPQ_A?si=X2t9XwEaivlTXtrc" },
  { title: "Olivia Dean - So Easy (To Fall In Love)", url: "https://www.youtube.com/embed/3sur4BmjQt8?si=bjIvqjoFB0_1eP3b" },
  { title: "Olivia Dean - Dive", url: "https://www.youtube.com/embed/NM4e606yFJg?si=sOUmSH58BCLEp5Uc" },

  // Ravyn Lenae
  { title: "Ravyn Lenae - Song 1", url: "#" },
  { title: "Ravyn Lenae - Song 2", url: "#" },
  { title: "Ravyn Lenae - Song 3", url: "#" },

  // Rochelle Jordan
  { title: "Rochelle Jordan - Lowkey", url: "https://www.youtube.com/embed/JyqCj8D2Wzw?si=-o1zuZwywBgnSxHB" },
  { title: "Rochelle Jordan - Doing It Too", url: "https://www.youtube.com/embed/VIKQBN6mckQ?si=0bUhC9x4loPoo7g9" },
  { title: "Rochelle Jordan - Song 3", url: "#" },

  // Solange
  { title: "Solange - Song 1", url: "#" },
  { title: "Solange - Song 2", url: "#" },
  { title: "Solange - Song 3", url: "#" },

  // Tinashe
  { title: "Tinashe - Song 1", url: "#" },
  { title: "Tinashe - Song 2", url: "#" },
  { title: "Tinashe - Song 3", url: "#" },

  // Tems
  { title: "Tems - Free Mind", url: "https://www.youtube.com/embed/e8GzTXRAJ30?si=ZeLciIdjZQzGEguU" },
  { title: "Tems - Higher", url: "https://www.youtube.com/embed/Qa1IaUywiO8?si=jz-nClXHRHlUE8eT" },
  { title: "Tems - Me & U", url: "https://www.youtube.com/embed/1JltlSJH5bY?si=mNCt-8C7LzwPgoXI" },

  // Victoria Monet
  { title: "Victoria Monet - Song 1", url: "#" },
  { title: "Victoria Monet - Song 2", url: "#" },
  { title: "Victoria Monet - Song 3", url: "#" },

  // Flo
  { title: "Flo - Song 1", url: "#" },
  { title: "Flo - Song 2", url: "#" },
  { title: "Flo - Song 3", url: "#" },

  // Say Now
  { title: "Say Now - Song 1", url: "#" },
  { title: "Say Now - Song 2", url: "#" },
  { title: "Say Now - Song 3", url: "#" },

  // 3Quency
  { title: "3Quency - Song 1", url: "#" },
  { title: "3Quency - Song 2", url: "#" },
  { title: "3Quency - Song 3", url: "#" },

  // SZN4
  { title: "SZN4 - Song 1", url: "#" },
  { title: "SZN4 - Song 2", url: "#" },
  { title: "SZN4 - Song 3", url: "#" },

  // Soulidified
  { title: "Soulidified - Song 1", url: "#" },
  { title: "Soulidified - Song 2", url: "#" },
  { title: "Soulidified - Song 3", url: "#" },

  // Bryson Tiller
  { title: "Bryson Tiller - Song 1", url: "#" },
  { title: "Bryson Tiller - Song 2", url: "#" },
  { title: "Bryson Tiller - Song 3", url: "#" },

  // Brent Faiyaz
  { title: "Brent Faiyaz - Song 1", url: "#" },
  { title: "Brent Faiyaz - Song 2", url: "#" },
  { title: "Brent Faiyaz - Song 3", url: "#" },

  // PARTYNEXTDOOR
  { title: "PARTYNEXTDOOR - Song 1", url: "#" },
  { title: "PARTYNEXTDOOR - Song 2", url: "#" },
  { title: "PARTYNEXTDOOR - Song 3", url: "#" },

  // Don Toliver
  { title: "Don Toliver - Song 1", url: "#" },
  { title: "Don Toliver - Song 2", url: "#" },
  { title: "Don Toliver - Song 3", url: "#" },

  // Swae Lee
  { title: "Swae Lee - Song 1", url: "#" },
  { title: "Swae Lee - Song 2", url: "#" },
  { title: "Swae Lee - Song 3", url: "#" },

  // Jhené Aiko
  { title: "Jhené Aiko - Song 1", url: "#" },
  { title: "Jhené Aiko - Song 2", url: "#" },
  { title: "Jhené Aiko - Song 3", url: "#" },

  // Baby Storme
  { title: "Baby Storme - Song 1", url: "https://www.youtube.com/embed/DHWKGi1S5Fk?si=Hs7Dlwl6bbdx-jNN" },
  { title: "Baby Storme - Song 2", url: "https://www.youtube.com/embed/8kBIBQhALvk?si=Ld4xKrSknbzRek_x" },
  { title: "Baby Storme - Song 3", url: "https://www.youtube.com/embed/KyPSAExMQs4?si=IgPexkR5cF9wafSY" },
];

let currentTrackIndex = 0;

function loadVideo(index) {
  const video = tracks[index];
  const container = document.getElementById('youtube-player');

  // Clear previous iframe
  container.innerHTML = '';

  // Create new iframe
  const iframe = document.createElement('iframe');

  // Responsive styling
  iframe.style.width = '90%';
  iframe.style.maxWidth = '700px';
  iframe.style.height = '400px';
  iframe.style.borderRadius = '12px';

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

// List of artists with their Spotify links
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
  { name: "PinkPantheress", spotify: "https://open.spotify.com/artist/78rUTD7y6Cy67W1RVzYs7t" },
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
  { name: "BabyStorme", spotify: "https://open.spotify.com/artist/7cwYKm54nTTbnm0UnH0xBe" },
];

// Search function
document.getElementById('searchButton').addEventListener('click', () => {
  const input = document.getElementById('searchInput').value.trim().toLowerCase();

  const artist = artists.find(a =>
    a.name.toLowerCase().includes(input)
  );

  if (artist) {
    window.open(artist.spotify, '_blank');
  } else {
    alert('Artist not found. Please check the spelling.');
  }
});

// Allow Enter key to search
document.getElementById('searchInput').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    document.getElementById('searchButton').click();
  }
});
