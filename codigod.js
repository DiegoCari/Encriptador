const mensajeToEncriptar = document.querySelector(".texto-incriptado");
const mensajeEncriptado = document.querySelector(".resultado-incriptado");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar(){
	const textoEncriptado=encriptar(mensajeToEncriptar.value);
	mensajeEncriptado.value= textoEncriptado;
	mensajeEncriptado.style.backgroundImage="none";
	mensajeToEncriptar.value="";
}

function btnDesencriptar(){
	const textoDesencriptado=desencriptar(mensajeToEncriptar.value);
	mensajeEncriptado.value= textoDesencriptado;
	mensajeEncriptado.style.backgroundImage="none";
	mensajeToEncriptar.value="";
}

function encriptar(stringEncriptada){
		let matriz=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
		stringEncriptada=stringEncriptada.toLowerCase();

		for (let i = 0; i < matriz.length; i++) {
			if (stringEncriptada.includes(matriz[i][0])) {
				stringEncriptada= stringEncriptada.replaceAll(matriz[i][0],matriz[i][1]);
			}
		}
		return stringEncriptada
	}

function desencriptar(stringDesencriptada){
		let matriz=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
		stringDesencriptada=stringDesencriptada.toLowerCase();

		for (let i = 0; i < matriz.length; i++) {
			if (stringDesencriptada.includes(matriz[i][0])) {
				stringDesencriptada= stringDesencriptada.replaceAll(matriz[i][1],matriz[i][0]);
			}
		}
		return stringDesencriptada
	}

function copiar(){
	mensajeEncriptado.select();
	navigator.clipboard.writeText(mensajeEncriptado.value);
}
























