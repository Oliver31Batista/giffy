const apiKey = '6lfmV62ldahvUc0206wH5EQ3UmBo5CpN';

export const getGifs = ({keyword = 'rick and morty'} = {}) => {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=15&offset=0&rating=g&lang=en`;
  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      const gifs = data.map((image) => image.images.downsized_medium.url);
      return gifs;
    });
};
