var divEsquerda = document.createElement("div");
divEsquerda.style.backgroundColor = "#F00";
divEsquerda.style.width = "49.9%";
divEsquerda.style.height = "150px";
divEsquerda.style.float = "left";
divEsquerda.style.display = "inline-block";
divEsquerda.style.margin ="100px auto";

var divDireita = document.createElement("div");
divDireita.style.backgroundColor = "#00F";
divDireita.style.width = "49.9%";
divDireita.style.height = "150px";
divDireita.style.float = "right";
divDireita.style.display = "inline-block";
divDireita.style.margin ="100px auto";

var btn = document.createElement("button");
btn.style.display = "block";
btn.style.margin = "0 auto";
btn.innerText = "IIIII UOOOOOO";
btn.addEventListener("click", sirene);


document.body.append(divEsquerda);
document.body.append(divDireita);
document.body.append(btn);

var ativoBtn = false;
var ativoDiv = false;
var intervalo;
function sirene() {
  if(!ativoBtn){
    intervalo = setInterval(change, 500);
    ativoBtn = true;
  } else {
    clearInterval(intervalo);
    ativoBtn = false;
  }
}
function change() {
  if(!ativoDiv) {
    divEsquerda.style.backgroundColor = "#00F";
    divDireita.style.backgroundColor = "#F00";
    ativoDiv = true;
  } else {
    divEsquerda.style.backgroundColor = "#F00";
    divDireita.style.backgroundColor = "#00F";
    ativoDiv = false;
  }
}
