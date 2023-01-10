
const wrapper = document.querySelector(".wrapper");
let arrayImagenes = [];
let earthDate = "";
let diaMision = "";

peticion = async (mision) => {
  URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/${mision}/photos?sol=${input}&api_key=djvbjhSv4mrdfVwhRsMAwEKxoSXbIq6v96KSShQg`
  settings = {}
  const data = await fetch(URL)
    .then((response) => response.json())
    .then(data => {
      //console.log(data)
      arrayImagenes = data.photos;
     // console.log(arrayImagenes)
      //return data.photos
      renderizarArrayImagenes(arrayImagenes);
    });
};
obtenerDiaDeMison = (mision) => {
  const inputDiaMision = document.querySelector("#input");
  const diaMision = document.querySelector("#diaMision");
  
  diaMision.addEventListener("submit", e => {
    e.preventDefault();
    input = inputDiaMision.value
    peticion(mision);
  })
}
peticionManifiesto = async (mision) => {
  URL = `https://api.nasa.gov/mars-photos/api/v1/manifests/${mision}/?api_key=djvbjhSv4mrdfVwhRsMAwEKxoSXbIq6v96KSShQg`
  settings = {}
  const data = await fetch(URL)
    .then((response) => response.json())
    .then(data => {
      //console.log(data);
      let rover = document.getElementById("mission");
      let launch = document.getElementById("launch");
      let landed = document.getElementById("landed");
      let sols=document.getElementById("sols");
      let lastDay=document.getElementById("lastDay")
      let status=document.getElementById("status");
      rover.innerHTML=(data.photo_manifest.name);
      launch.innerHTML=(data.photo_manifest.launch_date);
      landed.innerHTML=(data.photo_manifest.landing_date);
      sols.innerText=(data.photo_manifest.max_sol+" sols");
      lastDay.innerText=(data.photo_manifest.max_date);
      status.innerText=(data.photo_manifest.status);
    });
};





renderizarArrayImagenes = (arrayImagenes) => {
  const solDay = document.getElementById("solDay");
  solDay.innerHTML = "";
  let getImagesText=document.getElementById('getImagesText');
  getImagesText.innerHTML="";
  const encabezadoDiv = document.createElement('div');
  const about = document.querySelector('.about');
  let contenedor = document.querySelector('.container');
  encabezadoDiv.innerHTML = '';
  contenedor.innerHTML = ``;
  if (arrayImagenes.length === 0) {
    //console.log("el array esta vacio");
    //const formShowed=document.
    const mensajeArrayVacio = document.createElement("div");
    mensajeArrayVacio.classList.add("mensajeArrayVacio");
    mensajeArrayVacio.innerHTML = `
    <p>No images for mission day ${input}.</p>
    `;
    contenedor.appendChild(mensajeArrayVacio);

  } else {
    contenedor.innerHTML = "";
    arrayImagenes.forEach(imagen => {
      earthDate = imagen.earth_date
      diaMision = imagen.sol;
      let imgSrc = imagen.img_src
      let cam = imagen.camera.full_name
      const div = document.createElement("div");
      div.innerHTML = `   
    <p>${cam}</p> 
    <a class="imgContainer"><img class="imgRover zoomOut" src=${imgSrc}></a>
    `;
      contenedor.appendChild(div)
    });
    
    encabezadoDiv.classList.add("encabezadoDiv")
    encabezadoDiv.innerHTML = `
   <br>
    <p>Earth Date: <span class="redColor">${earthDate}</span></p>    
    `;
    solDay.appendChild(encabezadoDiv);
   zoomFunction();
  }
}

zoomFunction = () => {
  let imgs = document.querySelectorAll(".imgRover")
    imgs.forEach(img => {    
    img.addEventListener('click', e => {
      e.preventDefault();
      img.classList.toggle("zoom");
      img.classList.toggle("zoomOut")      
    })
    
   
  })
}



