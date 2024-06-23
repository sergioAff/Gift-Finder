export const getGif = async (category) => {
    try {
      const url = `https://api.giphy.com/v1/gifs/search?api_key=ERFmClN1aQr20nkBOhATZSn3EFaq5cZW&q=${category}&limit=10`;
  
      const resp = await fetch(url);
  
      if (!resp.ok) {
        throw new Error(`Error: ${resp.status}`);
      }
  
      const { data } = await resp.json();
  
      const gifs = data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url,
      }));
      
      return gifs;
    } catch (error) {
      console.error('Error fetching gifs:', error);
      return [];
    }
  };
  