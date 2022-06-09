function ul(){
    let longin = document.getElementById("nome").value;
    if(longin == "") {
        alert("Informe seu nome");
    }
    else{        
        sessionStorage.setItem("Nome",longin)
        window.location = "cartaz.html"
    }
}
function rj(){
    document.getElementById('maria').value = "Bem Vindo(a) " + sessionStorage.getItem("Nome") + "!";
} 