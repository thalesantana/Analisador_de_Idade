function calculo(){
    var now = new Date()
    var ano = now.getFullYear()
    var fano =  window.document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    var genero = document.getElementsByName("radsex")[0].checked ? "Homem":"Mulher"
    
    
       
    if(fano.value == 0 || fano.value >= ano )
    {
        alert("Digite um ano de nascimento válido!")
    }
    
    else {
        
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        
    }
    if(idade >= 0 && idade < 12)
        {
            img.setAttribute("src",`img/crianca${genero}.png`)
        }
        else if(idade <= 21)
        {
            img.setAttribute("src",`img/jovem${genero}.png`)
        }
        else if(idade <= 50 )
        {
            img.setAttribute("src",`img/adulto${genero}.png`)
        }
        else 
        {
            img.setAttribute("src",`img/velho${genero}.png`)
        }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
    
}


        

       

        


            
     