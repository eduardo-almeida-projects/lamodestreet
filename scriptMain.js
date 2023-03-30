var camisa1 = document.getElementById('camisaUmBox');
var camisa2 = document.getElementById('camisaDoisBox')

function scrollToElement() {
    console.log('FUNCIONANDO')
    var elemento = document.getElementById("camisaUmPrice"); //INSIRA ALGO AQUI APÓS CRIAR O CORPO DO SITE
    elemento.scrollIntoView({ behavior: "smooth" });
}

//CAMISA UM 1111
function shineCamisaUmEnter() {
    camisa1.style = 'border: 1px solid rgb(166, 255, 0)'
}
function shineCamisaUmLeave() {
    camisa1.style = 'border: 0px'
}

//CAMISA DOIS 2222
function shineCamisaDoisEnter() {
    camisa2.style = 'border: 1px solid rgb(166, 255, 0)'
}
function shineCamisaDoisLeave() {
    camisa2.style = 'border: 0px'
}
