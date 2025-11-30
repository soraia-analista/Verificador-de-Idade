function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano= document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')

    }else {
        var fsex = document.getElementsByName('radisex')
        var idade = ano - Number(fano.value) 
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'masculino'
            if(idade >=0 && idade <10){
                // criança
                img.setAttribute('src', 'imagem/menino.jpg' )
            }else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'imagem/rapaz.jpg' )
            }else if(idade <60) {
                // adulto
                img.setAttribute('src', 'imagem/homem.jpg' )
            }else {
                // idoso
                img.setAttribute('src', 'imagem/idoso.jpg' )
            }
        } else if (fsex[1].checked){
            genero = 'feminino'
            if(idade >=0 && idade <10){
                // criança
                img.setAttribute('src', 'imagem/menina.jpg' )
            }else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'imagem/moca.jpg' )
            }else if(idade <60) {
                // adulto
                img.setAttribute('src', 'imagem/mulher.jpg' )
            }else {
                // idoso
                img.setAttribute('src', 'imagem/idosa.jpg' )
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Percebemos que você é uma pessoa do gênero ${genero} e possui ${idade} anos.`
        res.appendChild(img)
    }
}
