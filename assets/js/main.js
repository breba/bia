var jogadorDaVez = "o";
function jogada(element){
	var img = document.getElementById(element.id + "i");
	if(img == null){
		var aux = document.createElement("img");
		aux.setAttribute("src", "assets/imagens/" + jogadorDaVez + ".png");
		aux.setAttribute("id", element.id + "i");
		element.appendChild(aux);
		jogadorDaVez = (jogadorDaVez == "o" ? "x" : "o");
		var informacaoJogadorVez = document.getElementById("imgJogador");
		informacaoJogadorVez.setAttribute("src", "assets/imagens/" + jogadorDaVez + ".png");
		posicoes[element.id] = true;
	}
}

var posicoes = {
	"c11": false,
	"c12": false,
	"c13": false,

	"c21": false,
	"c22": false,
	"c23": false,

	"c31": false,
	"c32": false,
	"c33": false,
}

function verificaGanhador(){
	
}
