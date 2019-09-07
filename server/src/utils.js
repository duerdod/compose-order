require('dotenv').config({ path: '../.env' });
const axios = require('axios');

// HEHE...
async function getImage(term) {
  const url = `https://pixabay.com/api/?key=${
    process.env.PIXBAY_KEY
  }&q=${encodeURIComponent(term.replace(/ .*/, ''))}&per_page=20`;
  try {
    const { data } = await axios.get(url);
    const { hits, totalHits } = data;
    // const index = Math.floor(Math.random() * Math.floor(hits.length));
    if (totalHits < 3) {
      return null;
    }
    const extractedImages = hits
      .slice(0, 3)
      .map(image => image.largeImageURL)
      .join(',');

    return extractedImages;
  } catch (err) {
    console.log(err);
    return null;
  }
}

module.exports = getImage;
