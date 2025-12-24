//esse é o js

alert("WHY SO SERIOUS?");

//essa primeira função evita a pagina recarregar duas vezes, tambem eliminando a necessidade 
// do script no body e mantendo ele no head

document.addEventListener('DOMContentLoaded', function() { 
    document.getElementById("confirmar").onclick = function(){
        let valorstring = document.getElementById("resultado").value;
        const sixisevi = 67;

        let valorinteiro = parseInt(valorstring);

        if (valorinteiro===sixisevi){

        alert("deu certo");

        }
    }
});

