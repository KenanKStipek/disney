import { fetchListings } from "./api/index.js";
import { render } from "./render/index.js";
import { Input } from "./components/index.js";

const handleInput = () => {
  Input();
};

(async () => {
  const listings = await fetchListings();
  render(listings);
  handleInput();
})();
