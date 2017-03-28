var track = document.getElementById("track");


function controlesDeReproduccion(controles){
  switch (controles) {
    case 'playTrack':
      track.play();
      break;
    case 'pauseTrack':
      track.pause();
      break;
    case 'volMas':
      track.volume+=0.1
      break;
    case 'volMenos':
      track.volume-=0.1
      break;
    case 'stopTrack':
      track.load();
      break;
  }
}

function progreso(){
  document.getElementById("progresoTrack").max = track.duration;
  track.currentTime = document.getElementById("progresoTrack").value;
}

function saltar(valor){
  var cancion = document.getElementById("track");
  track.currentTime += valor;
}



// function progreso(){
//   var tiempoActual = audio.currentTime;
//   var porcentaje = Math.round( (tiempoActual * 100) / duration );
//   progress.style.width = porcentaje + "%";
//   laManija.style.left = porcentaje + "%";
//
// }

// function updateTrack() {
//     curtime = audio.currentTime;
//     percent = Math.round((curtime * 100) / duration);
//     progress.style.width = percent + '%';
//     handler.style.left = percent + '%';
// }
