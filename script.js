function clickSim(){
    alert("Então vamos dar uns amassos gatinha")
}

function clickNao(){
    let botaoNao = document.querySelector("#nao")
    botaoNao.style.position = "absolute"
    botaoNao.style.top = `${Math.floor(Math.random() * 96)}%`
    botaoNao.style.left = `${Math.floor(Math.random() * 97)}%`
}