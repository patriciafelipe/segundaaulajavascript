function trocaImagem(){
	document.getElementById("myImage").src="img/html-logo-badge-512.png";
}
function imagemTroca(){
	document.getElementById("myImage").src="img/js-logo-badge-512.png";
}
function trocaFonte(){
	document.getElementById("demo").style.fontSize="35px";
}
function fonteTroca(){
	document.getElementById("demo").style.fontSize="20px";
}
function ocultarElemento(){
	document.getElementById("demo").style.display="none";
}
function elementoOcultar(){
	document.getElementById("demo").style.display="block";
}
function calcular(){
	var total = parseFloat(document.getElementById("num1").value) + parseFloat(document.getElementById("num2").value);
	window.alert(total);
}