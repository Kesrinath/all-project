console.log("Welcome to Spotify");

let songItem = document.querySelectorAll(".songItemcontainer");
let songlist = document.querySelectorAll(".songlistplay");
let latestSong = 0;
let audio = document.querySelector("#audioPlayers");
function playSongs(index) {
  let songUrl = songlist[index].getAttribute("data-src");
  audio.src = songUrl;
  audio.play();
}
for (let i = 0; i < songItem.length; i++) {
  songItem[i].addEventListener("click", function () {
    latestSong = Array.prototype.indexOf.call(songItem, this);
    playSongs(latestSong);
    pause();
  });
}

let progress = document.querySelector("#myProgressBar");
audio.addEventListener("timeupdate", function () {
  let prog = parseInt((audio.currentTime / audio.duration) * 100);
  progress.value = prog;
});

let Played = document.querySelector("#masterPlay");
Played.addEventListener("click", function () {
  pause();
});

function pause() {
  if (audio.paused) {
    audio.play();
    Played.classList.remove("fa-play-circle");
    Played.classList.add("fa-pause-circle");
  } else {
    audio.pause();
    Played.classList.remove("fa-pause-circle");
    Played.classList.add("fa-play-circle");
  }
}
let previous = document.querySelector(".fa-backward");
previous.addEventListener("click", () => {
  latestSong = latestSong - 1;
  playSongs(latestSong);
});
let nextsong = document.querySelector(".fa-forward");
nextsong.addEventListener("click", () => {
  latestSong = latestSong + 1;
  playSongs(latestSong);
});
