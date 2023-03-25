var camisa1 = document.getElementById('camisaUmBox');

function scrollToElement() {
    console.log('FUNCIONANDO')
    var elemento = document.getElementById("#"); //INSIRA ALGO AQUI APÓS CRIAR O CORPO DO SITE
    elemento.scrollIntoView({ behavior: "smooth" });
}
function shineCamisaUmEnter() {
    camisa1.style = 'border: 1px solid rgb(166, 255, 0)'
}
function shineCamisaUmLeave() {
    camisa1.style = 'border: 0px'
}
