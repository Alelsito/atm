// LOGIN

var clienteLogeado;

            //nombre,  usuario,  contraseña, saldo
let hugo = ["Hugo", "HugiBugi", "mepksiu", 400];
let valentina = ["Valentina", "TinaBugi", "12nfas92", 1000];
let noe = ["Noe", "ElZezas", "youyoumi", 350];
let saul = ["Saul", "Sj", "jijipuds", 1500];
let abel = ["Abel", "Abelito", "pueblaFC", 3000];

let cliente = [hugo, valentina, noe, saul, abel];

function login() {
    let user = document.getElementById("user").value;
    let password = document.getElementById("password").value;
    clienteLogeado = cliente.find((persona) => user == persona[1]);
    if (clienteLogeado === undefined || clienteLogeado === "") {
        errorLogin(true);
    } else {
        if (password === clienteLogeado[2]) {
            errorLogin(false);
        } else {
            errorLogin(true);
        }
    }
}

function errorLogin(isError) {
    if (isError) {
        let errorMargin = document.getElementById("error");
        errorMargin.setAttribute("class", "mt-2 mb-2")
        let span = document.getElementById("errorLogin");
        span.textContent = "Error, ingresa nuevamente tus datos";
        span.className = "mensajeErrorLogin";
    } else {
        if (localStorage.length === 0) {
            localStorage.setItem("nombre", clienteLogeado[0]);
            localStorage.setItem("user", clienteLogeado[1]);
            localStorage.setItem("password", clienteLogeado[2]);
            localStorage.setItem("saldo", clienteLogeado[3]);
            window.location.href = "mainPage.html";
        } else {
            window.location.href = "mainPage.html";
        }
    }
}