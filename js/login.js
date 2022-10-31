function validarUsu() {
    user = document.getElementById("user");
    senha = document.getElementById("senha");

    if (user.value == "") {
        alertWifi("Usuário em branco! Favor preenchê-lo", false, 0, "../img/toupeira.gif", 30);
        user.focus();
    }
    else if (senha.value == "") {
        alertWifi("Senha em branco!  Favor preenchê-la", false, 0, "../img/toupeira.gif", 30);
        senha.focus();
    }
    else readJSON(user.value, senha.value);
}

function readJSON(usuario, senha) {
    var file = "https://wilton-filho.github.io/JS-GitHub/aulas/jogo/login/json/users2.json";
    fetch(file)
        .then(response => response.json())
        .then(content => checkUser(content, usuario, senha))
        .catch(err => console.log("erro na leitura do JSON"));
}

function checkUser(content, usuario, senha) {
    var verifica = false;
    for (i = 0; i < content.usuarios.length; i++) {
        if ((content.usuarios[i].user == usuario) && (content.usuarios[i].pwd == senha)) {
            verifica = true;
            break;
        }
    }
    if (verifica)
        alertWifi("Usuário valido!", false, 0, "../img/toupeira.gif", 30);
    else
        alertWifi("Usuário invalido!", false, 0, "../img/toupeira.gif", 30);
}