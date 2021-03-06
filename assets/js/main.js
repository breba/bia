var jogadorDaVez = "o";
var jogoEncerrado = false;
var posicoes;
var verificacao;
var table = document.getElementById("table").cloneNode(true);
var countUnchecked = 0;
var pontuacao = {
	"o": 0,
	"x": 0
}

function createPosicoes(){
	var posicoes = {
	"c11": "unchecked",
	"c12": "unchecked",
	"c13": "unchecked",

	"c21": "unchecked",
	"c22": "unchecked",
	"c23": "unchecked",

	"c31": "unchecked",
	"c32": "unchecked",
	"c33": "unchecked"
	};
	return posicoes;
}

function createVerificacao(){
	var verificacao = [
		["c11","c12","c13"], 
		["c21","c22","c23"],
		["c31","c32","c33"],
		["c11","c21","c31"],
		["c12","c22","c32"],
		["c13","c23","c33"],
		["c11","c22","c33"],
		["c13","c22","c31"]];
	return verificacao;
}

posicoes = createPosicoes();
verificacao = createVerificacao();

function jogada(element){
	var img = document.getElementById(element.id + "i");
	if(img == null && !jogoEncerrado){
		var aux = document.createElement("img");
		aux.setAttribute("src", "assets/imagens/" + jogadorDaVez + ".png");
		aux.setAttribute("id", element.id + "i");
		element.appendChild(aux);
		var informacaoJogadorVez = document.getElementById("imgJogador");
		informacaoJogadorVez.setAttribute("src", "assets/imagens/" + (jogadorDaVez == "o" ? "x" : "o") + ".png");
		posicoes[element.id] = jogadorDaVez;
		countUnchecked++;	
		if(verificaGanhador()){
			jogoEncerrado = true;
			document.getElementById("imgJogador").setAttribute("src", "assets/imagens/" + jogadorDaVez + ".png");
			document.getElementById("textoInformativo").innerHTML = "Jogador Vencedor da Partida !!!";			
			//document.getElementById("reiniciar").style.display = "block";
			pontuacao[jogadorDaVez]++;
			document.getElementById("pontuacao" + jogadorDaVez.toUpperCase()).innerHTML = pontuacao[jogadorDaVez];
			return;
		}else if(countUnchecked == 9) {
			jogoEncerrado = true;
			document.getElementById("textoInformativo").innerHTML = "Empate";
			document.getElementById("imgJogador").setAttribute("src", "assets/imagens/empate.png");
		}
		jogadorDaVez = (jogadorDaVez == "o" ? "x" : "o");		
	}
}

function verificaGanhador(){
	for(var i = 0; i < verificacao.length; i++){
		var aux = verificacao[i];
		if(posicoes[aux[0]] === jogadorDaVez &&
			posicoes[aux[1]] === jogadorDaVez &&
			posicoes[aux[2]] === jogadorDaVez){
				document.getElementById(aux[0]).style.background = "#C8E6C9";
				document.getElementById(aux[1]).style.background = "#C8E6C9";
				document.getElementById(aux[2]).style.background = "#C8E6C9";
				return true;
		}
	}return false;
}

function reiniciar(){
	jogadorDaVez = "o";
	jogoEncerrado = false;
	posicoes =  createPosicoes();
	document.getElementById("imgJogador").setAttribute("src", "assets/imagens/" + jogadorDaVez + ".png");
	document.getElementById("textoInformativo").innerHTML = "Jogador da vez é:";			
	//document.getElementById("reiniciar").style.display = "none";
	document.getElementById("table").remove();
	document.getElementById("tabuleiro").appendChild(table.cloneNode(true));
	countUnchecked = 0;
}
