const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const progress = document.getElementById("progress");

const cover = document.getElementById("cover");
const title = document.getElementById("title");
const artist = document.getElementById("artist");

// 🎵 SONG DATA
const songs = [
  {
    name: "DREAMY SPRING",
    artist: "Artist One",
    src: "audio/dreamy-spring-314730.mp3",
    cover: "covers/cover2.png"
  },
  {
    name: "PERFECT(FEMALE VERSION)",
    artist: "Artist Two",
    src: "audio/Emma_Heesters_-_Perfect_(mp3.pm) (1).mp3",
    cover: "covers/cover1.png"
  },
  {
    name: "CAN'T HELP FALLING IN LOVE",
    artist: "Artist Two",
    src: "audio/Gaither_Music_-_Cant_Help_Falling_In_Love_CeeNaija.com_.mp3",
    cover: "covers/cover4.png"
  },
  {
      
    name: "I THINK THEY CALL THIS LOVE",
    artist: "Artist Two",
    src: "audio/I_Think_They_Call_This_Love_Cover.mp3",
    cover: "covers/cover3.png"
  
  }


];

let songIndex = 0;

// Load song
function loadSong(index) {
  const song = songs[index];
  title.textContent = song.name;
  artist.textContent = song.artist;
  audio.src = song.src;
  cover.src = song.cover;
}

// Play / Pause
playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸";
  } else {
    audio.pause();
    playBtn.textContent = "▶";
  }
});

// Next song
nextBtn.addEventListener("click", () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songIndex);
  audio.play();
  playBtn.textContent = "⏸";
});

// Previous song
prevBtn.addEventListener("click", () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songIndex);
  audio.play();
  playBtn.textContent = "⏸";
});

// Progress bar
audio.addEventListener("timeupdate", () => {
  progress.max = audio.duration;
  progress.value = audio.currentTime;
});

progress.addEventListener("input", () => {
  audio.currentTime = progress.value;
});

// Load first song on start
loadSong(songIndex);
