document.addEventListener('DOMContentLoaded',async () => {

  await peticionManifiestoSpirit();
  await peticionManifiestoOpportunity();
  await peticionManifiestoCuriosity();

})



  peticionManifiestoSpirit = async () => {
    URL = `https://api.nasa.gov/mars-photos/api/v1/manifests/spirit/?api_key=djvbjhSv4mrdfVwhRsMAwEKxoSXbIq6v96KSShQg`
    settings = {}
    const data = await fetch(URL)
      .then((response) => response.json())
      .then(data => {
        console.log(data);
        let rover = document.getElementById("mission1");
        rover.classList.add("redColor");
        let launch = document.getElementById("launch1");
        launch.classList.add("redColor");
        let landed = document.getElementById("landed1");
        landed.classList.add("redColor");
        let sols = document.getElementById("sols1");
        sols.classList.add("redColor");
        let lastDay = document.getElementById("lastDay1")
        lastDay.classList.add("redColor");
        let status = document.getElementById("status1");
        status.classList.add("redColor");
        rover.innerHTML = (data.photo_manifest.name);
        launch.innerHTML = (data.photo_manifest.launch_date);
        landed.innerHTML = (data.photo_manifest.landing_date);
        sols.innerText = (data.photo_manifest.max_sol + " sols");
        lastDay.innerText = (data.photo_manifest.max_date);
        status.innerText = (data.photo_manifest.status);
      });
  }
  peticionManifiestoOpportunity = async () => {
    URL = `https://api.nasa.gov/mars-photos/api/v1/manifests/opportunity/?api_key=djvbjhSv4mrdfVwhRsMAwEKxoSXbIq6v96KSShQg`
    settings = {}
    const data = await fetch(URL)
      .then((response) => response.json())
      .then(data => {
        console.log(data);
        let rover = document.getElementById("mission2");
        rover.classList.add("redColor");
        let launch = document.getElementById("launch2");
        launch.classList.add("redColor");
        let landed = document.getElementById("landed2");
        landed.classList.add("redColor");
        let sols = document.getElementById("sols2");
        sols.classList.add("redColor");
        let lastDay = document.getElementById("lastDay2")
        lastDay.classList.add("redColor");
        let status = document.getElementById("status2");
        status.classList.add("redColor");
        rover.innerHTML = (data.photo_manifest.name);
        launch.innerHTML = (data.photo_manifest.launch_date);
        landed.innerHTML = (data.photo_manifest.landing_date);
        sols.innerText = (data.photo_manifest.max_sol + " sols");
        lastDay.innerText = (data.photo_manifest.max_date);
        status.innerText = (data.photo_manifest.status);
      });
  }
  peticionManifiestoCuriosity = async () => {
    URL = `https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity/?api_key=djvbjhSv4mrdfVwhRsMAwEKxoSXbIq6v96KSShQg`
    settings = {}
    const data = await fetch(URL)
      .then((response) => response.json())
      .then(data => {
        console.log(data);
        let rover = document.getElementById("mission3");
        rover.classList.add("redColor");
        let launch = document.getElementById("launch3");
        launch.classList.add("redColor");
        let landed = document.getElementById("landed3");
        landed.classList.add("redColor");
        let sols = document.getElementById("sols3");
        sols.classList.add("redColor");
        let lastDay = document.getElementById("lastDay3")
        lastDay.classList.add("redColor");
        let status = document.getElementById("status3");
        status.classList.add("redColor");
        rover.innerHTML = (data.photo_manifest.name);
        launch.innerHTML = (data.photo_manifest.launch_date);
        landed.innerHTML = (data.photo_manifest.landing_date);
        sols.innerText = (data.photo_manifest.max_sol + " sols");
        lastDay.innerText = (data.photo_manifest.max_date);
        status.innerText = (data.photo_manifest.status);
      });
  }


