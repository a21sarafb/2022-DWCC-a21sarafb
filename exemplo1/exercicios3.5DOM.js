/*● O elemento con id “input2”.*/
console.log("O elemento con id “input2”");
let input2 = document.getElementById("input2");
console.log(input2);
/*● A colección de parágrafos*/
console.log("A colección de parágrafos");
let parrafos = document.getElementsByTagName("p");
console.log(parrafos);
/*● Todos os parágrafos dentro do div con id “lipsum”.*/
console.log("Todos os parágrafos dentro do div con id “lipsum”.");
let lipsum = document.getElementById("lipsum");
let parrafosLipsum = lipsum.getElementsByTagName("p");
console.log(parrafosLipsum);
/*● O formulario*/
console.log("O formulario");
let formulario = document.getElementsByTagName("form");
console.log(formulario[0]);
/*● Todos os inputs*/
console.log("Todos os inputs");
let inputs = document.getElementsByTagName("input");
for (const input of inputs) {
	console.log(input);
}
/*● Só os inputs con nome “sexo”.*/
console.log("Só os inputs con nome “sexo”.");
let sexo = document.getElementsByName("sexo");
console.log(sexo[0]);
console.log(sexo[1]);
/*● Os items da lista con clase “important”.*/
console.log("Os items da lista con clase “important”.");
let importante = document.getElementsByClassName("important");
for (const important of importante) {
	console.log(important);
}
