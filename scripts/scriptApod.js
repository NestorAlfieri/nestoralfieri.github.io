peticionGetApod = () => {
  URL = "https://api.nasa.gov/planetary/apod?count=1&api_key=djvbjhSv4mrdfVwhRsMAwEKxoSXbIq6v96KSShQg"
  settings = {}
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      //console.log(data)           
      arrayImagenes = data;
      console.log(arrayImagenes)
      arrayImagenes.forEach(img => {
        renderizarImagen(img)
      })
    });
};


renderizarImagen = (img) => {
  const contenedor = document.querySelector('.container');
  contenedor.innerHTML = ''
  const title = img.title
  const description = img.explanation;
  const imgDate=img.date;
  let imgSrc = img.hdurl
  const div = document.createElement("div");
  div.classList.add("apodDiv")
  div.innerHTML = `
<img src=${imgSrc}>
<div class="apodDescripcion">
  <p>Tittle: ${title}</p>
  <p>Date: ${imgDate}</p>
  <br>
  <p>${description}</p>
</div>
`;
  contenedor.appendChild(div)
}



window.addEventListener('load', function () {

  

  const btnApod = document.querySelector(".btn3");
  btnApod.addEventListener('click', e => {
    peticionGetApod();
  })

  const btnClear = document.querySelector('.btn4');
  btnClear.addEventListener('click', () => {
    const contenedor = document.querySelector('.container');
    contenedor.innerHTML = '';
    location.reload();
  })

})