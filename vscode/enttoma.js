const titulo = document.querySelector ('.digitando')

function ativarLetra(elemento){
    const arrText = elemento.innerHTML.split('');
    elemento.innerHTML = '' || null ;
    arrText.forEach((letra, i)=>{
        setTimeout(()=>{
            elemento.innerHTML += letra;
        }, 75 * i)
    })
}
ativarLetra(titulo)

// Escrutinação a funcionalidade setTimeout


