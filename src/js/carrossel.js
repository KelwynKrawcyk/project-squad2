const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel() {
  idx++;

  if (idx > img.length - 1) {
    idx = 0;
  }

// esse vw é o tamanho q vai pular pro lado

  imgs.style.transform = `translatex(${-idx * 70}vw)`;
}

// esse 5000 é o tempo que a img vai ficar na tela

setInterval(carrossel, 5000);
