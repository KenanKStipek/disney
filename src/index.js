import { fetchListings } from "./api";
import { render } from "./render";
import { Input } from "./components";

const handleInput = () => {
  Input();
};

(async () => {
  const listings = await fetchListings();
  render(listings);
  handleInput();
})();
