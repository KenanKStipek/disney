import { bound, getTitles, getRefIds } from "../src/utils.js";

console.log("Testing bound");
console.log(bound(5, 1, 10) === 5);
console.log(bound(0, 1, 10) === 1);
console.log(bound(15, 1, 10) === 10);
console.log(bound(-5, -10, 0) === -5);

console.log("Testing getTitles");
const set = {
  data: {
    set1: {
      items: [
        {
          image: {
            tile: {
              1.78: {
                series: {
                  default: {
                    url: "https://example.com/series-image",
                  },
                },
              },
            },
          },
          videoArt: [
            {
              mediaMetadata: {
                urls: [
                  {
                    url: "https://example.com/video-art",
                  },
                ],
              },
            },
          ],
          text: {
            title: {
              full: {
                series: {
                  default: {
                    content: "Series Title",
                  },
                },
              },
            },
          },
        },
      ],
    },
  },
};
console.log(
  JSON.stringify(getTitles(set)) ===
    JSON.stringify([
      {
        imageUrl: "https://example.com/series-image",
        title: "Series Title",
        videoArt: "https://example.com/video-art",
      },
    ]),
);

console.log("Testing getRefIds");
const listings = {
  data: {
    StandardCollection: {
      containers: [{ set: { refId: "ref123" } }, { set: { refId: "ref456" } }],
    },
  },
};

console.log(
  JSON.stringify(getRefIds(listings)) === JSON.stringify(["ref123", "ref456"]),
);
const emptyListings = {
  data: { StandardCollection: { containers: [{ set: {} }] } },
};
console.log(JSON.stringify(getRefIds(emptyListings)) === JSON.stringify([]));
console.log(JSON.stringify(getRefIds(null)) === JSON.stringify([]));
