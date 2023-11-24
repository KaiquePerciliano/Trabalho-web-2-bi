function changeBackgroundColor() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked').length;
    const idade = parseInt(document.getElementById("idade").value);
    const radiosNacionalidade = document.querySelectorAll('input[name="nacionalidade"]:checked').length;
    const nome = document.getElementById("nome").value;
    const radiosSexo = document.querySelectorAll('input[name="sexo"]:checked').length;
    const body = document.body;

    if (nome == "Juliana" && idade == 52 && radiosSexo == 1 && radiosNacionalidade == 1 && checkboxes == 5) {
        body.style.backgroundColor = "pink";
    } else {
        body.style.backgroundColor = ""
    }

    if(nome == "Julio" && idade == 30 && radiosSexo == 1 && radiosNacionalidade == 1 && checkboxes == 3) {
        body.style.backgroundColor = "blue";
    } else {
        body.style.backgroundColor = ""
    }
}