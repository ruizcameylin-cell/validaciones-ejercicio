const formulario = document.getElementById("formulario");
const nota1 = document.getElementById("nota1");
const nota2 = document.getElementById("nota2");
const nota3 = document.getElementById("nota3");
const nota4 = document.getElementById("nota4");

formulario.addEventListener("submit", function(valido){
    valido.preventDefault();
});

//tomar informacion de notas igresadas
const valor1 = nota1.value.trim();
const valor2 = nota2.value.trim();
const valor3 = nota3.value.trim();
const valor4 = nota4.value.trim();

if (valor1 === '' || valor2 === '' || valor3 === '' || valor4 === '') {
    alert('todos los campos deben estar llenos');
    mensaje.textContet = 'todos los campos deben estar llenos';
    return false;
}

//conbercion a numerico
const num1 = Number(valor1);
const num2 = Number(valor2);
const num3 = Number(valor3);
const num4 = Number(valor4);

//validacion de datos numericos NaN (not a number)

if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)){
    mensaje.textContet = "todas las notas deben ser numeros";
    return false;
}

if(
    num1 < 0 || num1 > 100 ||
    num2 < 0 || num2 > 100 ||
    num3 < 0 || num3 > 100 ||
    num4 < 0 || num4 > 100 
){
    mensaje.textContet = "las notas deben estar en el rango de 0 a 100";
    return false;
}


const promedio = (num1 + num2 + num3 + num4) / 4;
const promediototal = Math.floor(promedio);


let estado = '';
if (promediototal >= 90 && promediototal < 100) {
    estado = 'A ';
} else if (promediototal >= 70){
    estado = 'B';
} else if (promediototal >= 60){
    estado = 'C';
} else if (promediototal >= 70){
    estado = 'D';
} else {
    estado = 'E';
}

mensaje.textContet = 'el promedio es:' + promediototal + 'clasificado en:' + estado;