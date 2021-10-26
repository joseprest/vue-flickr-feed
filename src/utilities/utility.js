// config for Flickr API requests
const config = {
  lang: "en-US",
  format: "json",
  tagmode: "all",
};

export const getPhotos = async (tags = "") => {
  const { tagmode, lang, format } = config;
  const query = `tagmode=${tagmode}&lang=${lang}&format=${format}&=tags=${tags}`;
  const result = await fetch(
    `https://www.flickr.com/services/feeds/photos_public.gne?${query}`
  );
  const jsonRes = await result.json();

  return jsonRes;
};

export const getBetweenBy = (str, char1, char2) => {
  return str.substring(str.lastIndexOf(char1) + 1, str.lastIndexOf(char2));
};
