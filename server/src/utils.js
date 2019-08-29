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
      return 'https://images.unsplash.com/photo-1531097023973-44a8761c85e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80,https://images.unsplash.com/photo-1531097023973-44a8761c85e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80,https://images.unsplash.com/photo-1531097023973-44a8761c85e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80';
    }
    const extractedImages = hits
      .slice(0, 3)
      .map(image => image.largeImageURL)
      .join(',');

    return extractedImages;
  } catch (err) {
    console.log(err);
    return 'https://images.unsplash.com/photo-1531097023973-44a8761c85e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80,https://images.unsplash.com/photo-1531097023973-44a8761c85e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80,https://images.unsplash.com/photo-1531097023973-44a8761c85e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80';
  }
}

module.exports = getImage;
