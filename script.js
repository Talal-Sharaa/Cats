

window.addEventListener("DOMContentLoaded", () => {
  const catImage = document.getElementById("catImage");
  const loveBtn = document.querySelector(".loveBtn");
  const nopeBtn = document.querySelector(".nopeBtn");
  fetch('https://api.thecatapi.com/v1/images/search')
  .then(response => response.json())
  .then(data => {
      const catImage = document.getElementById('catImage');
      const image = document.createElement('img');
      image.src = data[0].url;
      catImage.appendChild(image);
  })
  function fetchCatImage() {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((response) => response.json())
      .then((data) => {
        const image = document.createElement("img");
        image.src = data[0].url;
        catImage.innerHTML = "";
        catImage.appendChild(image);
      })
      .catch((error) => console.error(error));
  }

  loveBtn.addEventListener("click", fetchCatImage);
  nopeBtn.addEventListener("click", fetchCatImage);
});
