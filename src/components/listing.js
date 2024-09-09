const Listing = ({
  highlighted,
  titleIndex,
  setIndex,
  title,
  imageUrl,
  videoArt,
}) => {
  const div = document.createElement("div");
  const image = document.createElement("img");
  const player = document.createElement("video");
  const source = document.createElement("source");
  const titleHeader = document.createElement("div");

  titleHeader.textContent = title;
  titleHeader.classList.add("titleHeader");

  div.className = "title";
  div.id = highlighted ? "highlighted" : "";
  div.dataset.titleIndex = titleIndex;
  div.dataset.setIndex = setIndex;
  div.dataset.videoArt = videoArt;
  div.dataset.title = title;

  image.src = imageUrl;
  image.classList.add("image");

  if (videoArt) {
    player.id = videoArt;
    player.className = "video";
    player.width = "200";
    player.autoplay = true;
    player.loop = true;
    source.src = videoArt;
    player.appendChild(source);
    div.appendChild(player);
  } else {
    const backupImage = document.createElement("img");
    backupImage.src = imageUrl;
    backupImage.classList.add("backup-image");
    div.appendChild(backupImage);
  }

  div.appendChild(image);
  div.appendChild(titleHeader);

  return div;
};

export const updateHighlight = (setIndex, titleIndex) => {
  const highlighted = document.getElementById("highlighted");
  const video = highlighted.querySelector("video");
  highlighted.removeAttribute("id");
  const newHighlight = document.querySelector(
    `[data-set-index='${setIndex}'][data-title-index='${titleIndex}']`,
  );
  newHighlight.id = "highlighted";
  newHighlight?.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });

  video.play();
};

export const showTheater = (setIndex, titleIndex) => {
  const selectedVideo = document.querySelector(
    `[data-set-index='${setIndex}'][data-title-index='${titleIndex}']`,
  );
  const videoArt = selectedVideo.dataset?.["videoArt"];
  const player = document.getElementById("player");
  const source = document.createElement("source");
  source.src = videoArt;
  player.appendChild(source);
  player.style.zIndex = "1";
  player.play();
};

export const hideTheater = () => {
  const player = document.getElementById("player");
  const root = document.getElementById("root");

  // Recreate player at root to remove video from view.
  root.removeChild(player);
  const newPlayer = document.createElement("video");
  newPlayer.id = "player";
  root.appendChild(newPlayer);
};
export default Listing;
