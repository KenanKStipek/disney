const API_URL = "https://cd-static.bamgrid.com";

export const fetchListings = async () => {
  const response = await fetch(`${API_URL}/dp-117731241344/home.json`);
  return await response.json();
};

export const fetchListing = async (refId) => {
  const response = await fetch(`${API_URL}/dp-117731241344/sets/${refId}.json`);
  return await response.json();
};
