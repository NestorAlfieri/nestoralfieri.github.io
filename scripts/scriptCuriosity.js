





document.addEventListener('DOMContentLoaded', () => {
  const curiosity="curiosity"
  peticionManifiesto(curiosity);
  obtenerDiaDeMison(curiosity);
  
  const btnApod = document.querySelector(".btn3");
  btnApod.addEventListener('click', e => {
    location.replace('./index.html')
  })
  



})