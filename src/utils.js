export const bound = (value, min, max) => Math.min(Math.max(value, min), max);

export const getTitles = (set) => {
  const data = Object.entries(set.data);
  const titleSet = data.map(([_, set]) => set.items.map((item) => item));
  return titleSet.map((titles) =>
    titles.map(
      ({
        image: { tile },
        videoArt,
        text: {
          title: { full },
        },
      }) => ({
        imageUrl: tile?.["1.78"]?.series
          ? tile?.["1.78"]?.series?.default?.url
          : tile?.["1.78"]?.program?.default?.url,
        title: full?.series
          ? full?.series?.default?.content
          : full?.program?.default?.content,
        videoArt: videoArt?.[0]?.mediaMetadata?.urls?.[0]?.url,
      }),
    ),
  )[0];
};

export const getRefIds = (listings) => {
  let listingIds = [];
  listings?.data?.StandardCollection?.containers.map((listing) => {
    if (listing?.set?.refId) {
      listingIds.push(listing.set.refId);
    }
  });
  return listingIds;
};
