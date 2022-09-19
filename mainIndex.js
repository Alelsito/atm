// Bienvenida
bienvenida()

function bienvenida() {
    let welcome = document.getElementById("welcome");
    welcome.textContent = "Bienvenido(a) " + localStorage.getItem("nombre");
    alert("Puedes consultar tu saldo en todo momento, pero solo puedes hacer una accion (depositar o retirar) cada que ingreses a tu cuenta");
}

// Regresar a indexPage
function regresarLogin() {
    window.location.href = "index.html";
}

// Regresar a mainPage
function regresarMain() {
    window.location.href = "mainPage.html";
}

// ElementHides
const hideText = document.getElementById("welcomeText");
const hide1 = document.getElementById("opcion1");
const hide2 = document.getElementById("opcion2");
const hide3 = document.getElementById("opcion3");

// button disabled
const disabled1 = document.getElementById("disabled1");
const disabled2 = document.getElementById("disabled2");
const disabled3 = document.getElementById("disabled3");

//Saldo (variableGlobal)
var saldoGlobal = parseFloat(localStorage.getItem("saldo"));

// Consultar saldo
function consultarSaldo() {
    disabled1.setAttribute("disabled", "true")
    hideText.setAttribute("class", "hide");
    hide2.setAttribute("class", "hide");
    hide3.setAttribute("class", "hide");

    let mostrarSaldo = document.createElement("div");
    mostrarSaldo.innerHTML = 
    `<div class="card mt-2 id=consultaSaldo">
        <div class="card-body">
            <span id="saldo"> </span>
        </div>
    </div>

    <div class="mt-2"> 
        <span id="textoRegresar"> </span>
    </div>
    `
    document.getElementById("itemSaldo").appendChild(mostrarSaldo);
    let saldo = document.getElementById("saldo");
    saldo.textContent = "Tu saldo actual es de: $" + saldoGlobal + ".";
    textoRegresar.textContent = "Volveras a la pagina principal en 5 segundos.";
    window.setTimeout(regresarMain, 5000)
}

// Depositar dinero
function depositarDinero() {
    disabled2.setAttribute("disabled", "true")
    hideText.setAttribute("class", "hide");
    hide1.setAttribute("class", "hide");
    hide3.setAttribute("class", "hide");

    let depositarDinero = document.createElement("div");
    depositarDinero.innerHTML =
    `
    <div class="text1 mt-3">
        <p class="fs-6"> Ingresa la cantidad a depositar: </p>
    </div>
    <form class="input-group mb-2" id="customForm" action="submit">
        <span class="input-group-text">$</span>
        <input type="number" class="form-control" id="monto">
        <span class="input-group-text">.00</span>
        <button type="submit" class="btn btn-dark" id="depositar-disabled" >Depositar</button>
    </form>
    <div> 
        <span id="textoDeposito"> </span>
        <br>
        <span id="textoRegresar"> </span>
    </div>
    `
    document.getElementById("itemDepositarDinero").appendChild(depositarDinero);
    const form = document.getElementById('customForm')

    form.addEventListener('submit', (evento)=>{
        evento.preventDefault();
        let monto = parseFloat(document.getElementById('monto').value);
        const depositarDisabled = document.getElementById("depositar-disabled");
        const textoDeposito = document.getElementById("textoDeposito");
        const textoRegresar = document.getElementById("textoRegresar");

        if (Number.isNaN(monto) || monto <= 0) {
            textoDeposito.textContent = "Necesita ingresar una cantidad mayor a 0 para pode realizar un deposito";
        } else if (monto>2000) {
            textoDeposito.textContent = "El cajero no acepta depositos de mas de $2000, intentalo de nuevo.";
        } else {
            depositarDisabled.setAttribute("disabled", "true")
            saldoGlobal = saldoGlobal + monto;
            localStorage.setItem("saldo", saldoGlobal);
            textoDeposito.style.color = "black";
            textoDeposito.textContent = "Su deposito fue realizado con exito. Su saldo actual es de: $" + saldoGlobal + ".";
            textoRegresar.textContent = "Tu cuenta se cerrara en 10 segundos.";
            window.setTimeout(regresarLogin, 10000)
        }
        
    })
}

// Retirar dinero
function retirarDinero() {
    disabled3.setAttribute("disabled", "true")
    hideText.setAttribute("class", "hide");
    hide1.setAttribute("class", "hide");
    hide2.setAttribute("class", "hide");

    let retirarDinero = document.createElement("div");
    retirarDinero.innerHTML =
    `
    <div class="text1 mt-3">
        <p class="fs-6"> Ingresa la cantidad a retirar: </p>
    </div>
    <form class="input-group mb-3" id="customForm" action="submit">
        <span class="input-group-text">$</span>
        <input type="number" class="form-control" id="monto">
        <span class="input-group-text">.00</span>
        <button type="submit" class="btn btn-secondary" id="retirar-disabled" >Retirar</button>
    </form>
    <div> 
        <span id="textoRetirar"> </span>
        <br>
        <span id="textoRegresar"> </span>
    </div>
    `
    document.getElementById("itemRetirarDinero").appendChild(retirarDinero);
    const form = document.getElementById('customForm')

    form.addEventListener('submit', (evento)=>{
        evento.preventDefault();
        let monto = parseFloat(document.getElementById('monto').value);
        const retirarDisabled = document.getElementById("retirar-disabled");
        const textoRetiro = document.getElementById("textoRetirar");
        const textoRegresar = document.getElementById("textoRegresar");

        if (Number.isNaN(monto) || monto <= 0) {
            textoRetiro.textContent = "Necesita ingresar una cantidad mayor a 0 para pode realizar un deposito";
        } else if (saldoGlobal-monto<10) {
            textoRetiro.textContent = "No puedes dejar con menos de $10 a tu cuenta, intentalo de nuevo.";
        } else {
            retirarDisabled.setAttribute("disabled", "true")
            saldoGlobal = saldoGlobal - monto;
            localStorage.setItem("saldo", saldoGlobal);
            textoRetiro.style.color = "black";
            textoRetiro.textContent = "Su retiro fue realizado con exito. Su saldo es de: $" + saldoGlobal + ".";
            textoRegresar.textContent = "Tu cuenta se cerrara en 10 segundos.";
            window.setTimeout(regresarLogin, 10000)
        }
        
    })
    
}