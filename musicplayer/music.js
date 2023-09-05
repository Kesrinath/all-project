// backgroundimages for song
const bgc = [
  "https://img.freepik.com/free-vector/hand-draw-peacock-feathers-set-design_1035-20730.jpg?w=826&t=st=1689569020~exp=1689569620~hmac=c3f73bca3cca14c167be3af763d2b3d3f54847f9e043d9d46028d0ab8024a643",
  "https://e1.pxfuel.com/desktop-wallpaper/162/596/desktop-wallpaper-pin-on-nagjiji-krishna-with-flute.jpg",
  "https://img.freepik.com/free-vector/hindu-festival-maha-shivratri-lord-shiva-hand-holding-damru-card-design_1035-22170.jpg?w=740&t=st=1689569150~exp=1689569750~hmac=689e02df2d1951597c63cb928090931285025f918ec52ee096dd4313e731a8ff",
  "https://img.freepik.com/premium-vector/ram-navami-hindi-calligraphy-greeting-with-lord-ram-outline-illustration_428817-186.jpg?w=740",
  "https://img.freepik.com/free-vector/hand-draw-peacock-feathers-set-design_1035-20730.jpg?w=826&t=st=1689569020~exp=1689569620~hmac=c3f73bca3cca14c167be3af763d2b3d3f54847f9e043d9d46028d0ab8024a643",
  "https://e1.pxfuel.com/desktop-wallpaper/162/596/desktop-wallpaper-pin-on-nagjiji-krishna-with-flute.jpg",
  "https://img.freepik.com/free-vector/hand-draw-peacock-feathers-set-design_1035-20730.jpg?w=826&t=st=1689569020~exp=1689569620~hmac=c3f73bca3cca14c167be3af763d2b3d3f54847f9e043d9d46028d0ab8024a643",
  "https://e1.pxfuel.com/desktop-wallpaper/162/596/desktop-wallpaper-pin-on-nagjiji-krishna-with-flute.jpg",
  "https://img.freepik.com/free-vector/hindu-festival-maha-shivratri-lord-shiva-hand-holding-damru-card-design_1035-22170.jpg?w=740&t=st=1689569150~exp=1689569750~hmac=689e02df2d1951597c63cb928090931285025f918ec52ee096dd4313e731a8ff",
  "https://img.freepik.com/premium-vector/ram-navami-hindi-calligraphy-greeting-with-lord-ram-outline-illustration_428817-186.jpg?w=740",
  "https://img.freepik.com/free-vector/hand-draw-peacock-feathers-set-design_1035-20730.jpg?w=826&t=st=1689569020~exp=1689569620~hmac=c3f73bca3cca14c167be3af763d2b3d3f54847f9e043d9d46028d0ab8024a643",
  "https://e1.pxfuel.com/desktop-wallpaper/162/596/desktop-wallpaper-pin-on-nagjiji-krishna-with-flute.jpg",
];

//calling id's
let playlist = document.querySelector("#playlist");
let playlistlist = document.querySelectorAll("li");
let audioPlayer = document.querySelector("#audioPlayer");
let next = document.querySelector("#nextButton");
let prev = document.querySelector("#prevButton");
let playbutton = document.querySelector("#playButton");
let currentSong = 0;

// for loop for each song and also play song and also setting active class to song list
for (let i = 0; i < playlistlist.length; i++) {
  playlistlist[i].addEventListener("click", function () {
    currentSong = Array.prototype.indexOf.call(playlistlist, this);
    (document.body.style.backgroundImage = "url( " + bgc[currentSong]), " )";
    playSong(currentSong);
    playPause();
    setActiveSong();
  });
}

// this function is responsible for play song
function playSong(index) {
  let dataSrc = playlistlist[index].getAttribute("data-src");
  audioPlayer.src = dataSrc;
  audioPlayer.play();
}
// next song button working
next.addEventListener("click", () => {
  currentSong = currentSong + 1;
  (document.body.style.backgroundImage = "url( " + bgc[currentSong]), " )";
  playSong(currentSong);
  setActiveSong();
});

// previous song button working
prev.addEventListener("click", () => {
  currentSong = currentSong - 1;
  (document.body.style.backgroundImage = "url( " + bgc[currentSong]), " )";
  playSong(currentSong);
  setActiveSong();
});
// after clicking the play button it will be pause show vice versa
playbutton.addEventListener("click", function () {
  playPause();
});
// it's playpause for song
function playPause() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playbutton.innerText = "Pause";
  } else {
    audioPlayer.pause();
    playbutton.innerText = "Play";
  }
}
/// seting active class to song
function setActiveSong() {
  for (let i = 0; i < playlistlist.length; i++) {
    if (i === currentSong) {
      playlistlist[i].classList.add("active");
    } else {
      playlistlist[i].classList.remove("active");
    }
  }
}

// adding favourite list song

let fav = document.querySelectorAll(".fav");
fav.forEach(function (button) {
  button.addEventListener("click", function () {
    let song = document.getElementById("s" + button.id);
    localStorage.setItem(song.id, song.innerText.trim());
  });
});

// click event for show favorite button

let popupbtn = document.querySelector("#popup-btn");
let popupOverlay = document.querySelector("#popup-overlay");
let popupContent = document.querySelector("#popup-content");
let popupClose = document.querySelector("#popup-close");
let songList = document.querySelector("#song-list");

popupbtn.addEventListener("click", function () {
  popupOverlay.style.display = "flex";
  let keys = Object.keys(localStorage);
  console.log(keys);
  songList.innerHTML = "";
  keys.forEach(function (key) {
    let songName = localStorage.getItem(key);

    let p = document.createElement("p");
    p.innerText = songName;
    songList.appendChild(p);
  });
});

popupClose.addEventListener("click", function () {
  popupOverlay.style.display = "none";
});
