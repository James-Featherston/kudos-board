const searchGifs = async (search_param) => {
  let data = null;
  try {
    const API_KEY = import.meta.env.VITE_GIFFY_API_KEY;
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${search_param}&limit=6`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    data = await response.json();
  } catch (error) {
    console.error(error);
  }
  return data;
};

export { searchGifs };
