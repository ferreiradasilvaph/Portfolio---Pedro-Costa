const titulo = document.querySelector('.digitando');
const titulo2 = document.querySelector('.digitando2');


function ativarLetra(elemento){
    const arrText = elemento.innerHTML.split('');

    elemento.innerHTML = '' || null;

    arrText.forEach((letra, i) => {
        setTimeout(()=>{
            elemento.innerHTML += letra;
        }, 100 * i)
    });
};
function ativarLetras(e){
    const caracteres = e.innerHTML.split('');

    e.innerHTML = '' || null;

    caracteres.forEach((l, i) => {
        setTimeout(() =>{
            e.innerHTML += l;
        }, 150 * i)
    });
};
ativarLetra(titulo);
ativarLetras(titulo2); // a função recebe os dados que estão inseridos na classe digitando, que em js é representada pela variavel que declaramos como titulo.

// Escrutinação a funcionalidade setTimeout