function calcularMedia() {
    let situacao;

    let nome = document.getElementById("nome").value;
    let primeiraNota = document.getElementById("primeiraNota").value;
    let segundaNota = document.getElementById("segundaNota").value;
    let terceiraNota = document.getElementById("terceiraNota").value;

    let media = (primeiraNota + segundaNota + terceiraNota) / 3;

    if (media >= 7) {
        situacao = "aprovado";
    } else if (media > 5 && media < 7) {
        situacao = "recuperação";
    } else if (media < 5) {
        situacao = "reprovado";
    }

    
}