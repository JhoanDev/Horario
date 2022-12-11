function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = '1manhã.jpg'
        document.body.style.background = '#87CEEB'
    }
    else if (hora >= 12 && hora < 18){
        //boa tarde
        img.src = '3tarde.jpg'
        document.body.style.background = '#FFA500'
    }
    else{
        //boa noite
        img.src = '2noite.jpg'
        document.body.style.background = '#1C1C1C'
    }
}