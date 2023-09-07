async function getobject(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

let url = "https://www.omdbapi.com/?s=thor&apikey=53b4ed65";

function buildVideoCard(data) {
  let main = document.querySelector("#main");
  data = data.Search;
  main.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    let parentDiv = document.createElement("div");
    parentDiv.classList.add("video-card");
    parentDiv.id = i;

    //video thumbnail class
    let videoThumbnail = document.createElement("div");
    videoThumbnail.classList.add("video-thumbnail");
    let img = document.createElement("img");
    img.src = data[i]["Poster"];
    let heartIcon = document.createElement("div");
    heartIcon.classList.add("heart-icon");
    let icon = document.createElement("i");
    icon.classList.add("fas");
    icon.classList.add("fa-heart");
    heartIcon.appendChild(icon);
    videoThumbnail.appendChild(img);
    videoThumbnail.appendChild(heartIcon);

    //videodetails class

    let videoDetails = document.createElement("div");
    videoDetails.classList.add("video-details");
    let videoTitle = document.createElement("div");
    videoTitle.classList.add("video-title");
    videoTitle.innerText = data[i]["Title"];

    let videoDescription = document.createElement("div");
    videoDescription.classList.add("video-description");
    videoDescription.innerText = "video description is here";

    let videoMetadata = document.createElement("div");
    videoMetadata.classList.add("video-metadata");

    let span1 = document.createElement("span");
    let span2 = document.createElement("span");
    span1.classList.add("video-duration");
    span1.innerText = data[i]["Year"];
    span2.classList.add("video-views");
    span2.innerText = data[i]["imdbID"];
    videoMetadata.appendChild(span1);
    videoMetadata.appendChild(span2);
    videoDetails.appendChild(videoTitle);
    videoDetails.appendChild(videoDescription);
    videoDetails.appendChild(videoMetadata);
    parentDiv.appendChild(videoThumbnail);
    parentDiv.appendChild(videoDetails);
    main.appendChild(parentDiv);
  }
}

let button = document.querySelector("#btn");
button.addEventListener("click", function () {
  let search = document.querySelector("#search");

  let userUrl = `https://www.omdbapi.com/?s=${search.value}&apikey=53b4ed65`;
  let data = getobject(userUrl);
  data.then((value) => {
    buildVideoCard(value);
  });
});
