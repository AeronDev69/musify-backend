const results = document.getElementById('results');
const searchInput = document.getElementById('search');
const searchButton = document.getElementById('search-icon');

searchButton.addEventListener('click', (e) => {
  e.preventDefault();
  results.innerHTML = '<div>Loading</div>';
  (async () => {
    try {
      const res = await fetch(`/api/search?q=${searchInput.value}`);
      if (!res.ok) return;
      const { content } = await res.json();
      content.map((song) => {
        console.log(song);
        const resultDiv = document.createElement('div');
        resultDiv.innerHTML = `
        <div class="result-item">
          <div class="artist">
            <img
              src=${
                Array.isArray(song.thumbnails)
                  ? song.thumbnails[0].url
                  : song.thumbnails.url
              }
              alt=${song.name}
              id="artist"
            />
            <div class="title">
              <h2>${
                Array.isArray(song.artist)
                  ? song.artist[0].name
                  : song.artist.name
              }</h2>
              <hr />
              <h3><span>Song: </span>&nbsp; ${song.name}</h3>
            </div>
          </div>
        </div>
    `;
        results.appendChild(resultDiv);
      });
    } catch (err) {
      console.log(err);
    }
  })();
});
