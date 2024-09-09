import { fetchListing } from "../api";
import { getRefIds, getTitles } from "../utils";
import { store } from "../store";
import { Listing } from "../components";

export const render = (listings) => {
  const listingIds = getRefIds(listings);

  const backgroundPlayer = document.createElement("video");
  backgroundPlayer.id = "player";
  document.getElementById("root").appendChild(backgroundPlayer);

  // Render each section with loading state
  listingIds.forEach((_, setIndex) => {
    const collectionRowView = document.createElement("div");
    collectionRowView.id = `set-${setIndex}`;
    collectionRowView.classList.add("row");
    collectionRowView.classList.add("loading");
    document.getElementById("root").appendChild(collectionRowView);
  });

  // Fetch API assets on render and render when loaded.
  Promise.all(
    listingIds.map(async (id, setIndex) =>
      fetchListing(id).then((set) => renderSet(set, setIndex)),
    ),
  );
};

export const renderSet = (set, setIndex) => {
  const collectionRowView = document.getElementById(`set-${setIndex}`);

  const setTitle =
    set?.data?.CuratedSet?.text?.title?.full?.set?.default?.content ||
    "You might like...";

  const titles = getTitles(set);
  const itemViews = titles.map(({ title, imageUrl, videoArt }, titleIndex) => {
    const highlighted =
      store.setIndex === `${setIndex}` && store.titleIndex === `${titleIndex}`;
    return Listing({
      highlighted,
      titleIndex,
      setIndex,
      title,
      imageUrl,
      videoArt,
    });
  });

  collectionRowView.classList.remove("loading");

  const titleRow = document.createElement("div");
  titleRow.className = "title-row";
  titleRow.innerText = setTitle;
  collectionRowView.insertBefore(titleRow, collectionRowView.firstChild);

  const clipContainer = document.createElement("div");
  clipContainer.className = "clip-container";

  itemViews.forEach((title) => clipContainer.appendChild(title));
  collectionRowView.appendChild(clipContainer);
};
