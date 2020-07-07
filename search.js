const img = document.querySelector('img');
const button = document.querySelector('button');
button.addEventListener('click', getCats);

async function getCats() {
  const response = await fetch(
    'https://api.giphy.com/v1/gifs/translate?api_key=SoxusHXbUvTCUnm4QkdbcKCTfPFlXDE1&s=cats',
    { mode: 'cors' }
  );
  const catData = await response.json();
  img.src = catData.data.images.original.url;
}
