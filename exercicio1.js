// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

//criar evento de click no botão calcular
let click = document.querySelector("#calcular");
click.addEventListener("click", function () {
    //criar variáveis para armazenar os valores dos inputs
    let massa1 = document.querySelector("#massa1").value;
    let massa2 = document.querySelector("#massa2").value;
    let distancia = document.querySelector("#distancia").value;
    //constante gravitacional universal
    let G = 6.67 * Math.pow(10, -11);
    //calcular a força gravitacional
    let forca = G * massa1 * massa2 / Math.pow(distancia, 2);
    //exibir o resultado na tela
    document.querySelector("#resultado").value = "" + forca;
});

