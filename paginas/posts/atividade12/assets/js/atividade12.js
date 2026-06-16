function calcularMedia() {
    let nome = document.getElementById("nome").value;
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);

    let media = (nota1 + nota2 + nota3)/3;

    let classe;

    if (media >= 7) {
        resultado = `Nome: ${nome}; <br>Situação: aprovado; <br>Média: ${media.toFixed(2)};`;
        classe = "aprovado";
    } else if (media >= 4 && media <= 6.9) {
        resultado = `Nome: ${nome}; <br>Situação: recuperação; <br>Média: ${media.toFixed(2)};`
        classe = "recuperacao";
    } else {
        resultado = `Nome: ${nome}; <br>Situação: reprovado; <br>Média: ${media.toFixed(2)};`
        classe = "reprovado";
    }

    let div = document.getElementById("resultado");
    div.innerHTML = resultado;
    div.className = classe;
}