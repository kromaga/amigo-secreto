let amigos = [];

function adicionar(){
    let amigo = document.getElementById('nome-amigo');
    if (amigo.value == '') {
        alert('Informe o nome do amigo')
        return
    }
    let lista = document.getElementById('lista-amigos');
    amigos.push(amigo.value)

    if (lista.textContent == ''){
        lista.textContent = amigo.value;
    } else{
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    amigo.value = '';
}

function sortear(){
    embaralha(amigos);
    for (let i = 0; i < amigos.length; i++){
        let sorteio = document.getElementById('lista-sorteio')
        if (i == amigos.length - 1){
             sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[0] + '<br>'
        }else{
             sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[i + 1] + '<br>'
        }
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        const elemento = lista[indice - 1];
        lista[indice - 1] = lista[indiceAleatorio];
        lista[indiceAleatorio] = elemento;
    }
}

function reiniciar(){
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}