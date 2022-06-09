const cep = document.querySelector('#cep')


// aqui evento perde o foco e busco os valores do cep e prepara para envio
cep.addEventListener("blur",(e)=>
{
    let search = cep.value.replace("-","")
    const options = {
        method: 'GET', //Solicitação
        mode: 'cors', //acesso externo
        Cache: 'default'
    }



    //aqui envia o cep digitado para o via cep e retorna
    fetch(`https://viacep.com.br/ws/${search}/json`,options)

    // quando se acessa uma url com fatch api retorna se uma promessa
    // se der certo .then()
    // se der errado .catch()


    .then(Response => {Response.json()
        .then(data => mostrarDados(data))
    })
    .catch(e => console.log(`Erro inesperado` + e,message))

})
    

const mostrarDados = (resul)=>{
    for(const campo in resul){ //aqui armazenos todo o retorno na variavel campo

        if(document.querySelector("#"+campo)){
    //verifico swe o  campo  existe
    document.querySelector("#"+campo).value = resul[campo]          
        }

    }
}