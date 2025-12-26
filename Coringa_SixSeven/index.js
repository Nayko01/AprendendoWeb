//esse é o js

const audiosixisevi = new Audio("ArquivoSite/sixseven.mp3");
audiosixisevi.loop = true;

//essa primeira função evita a pagina recarregar duas vezes, tambem eliminando a necessidade 
// do script no body e mantendo ele no head

document.addEventListener('DOMContentLoaded', function() { 

    document.getElementById("confirmar").onclick = function(){
        let valorstring = document.getElementById("resultado").value;
        const sixisevi = 67;

        let valorinteiro = parseInt(valorstring);

        if (valorinteiro===sixisevi){

        alert("SIIIIXIIII SEVIIIIIIIIIII");

        document.body.classList.add("temasixisevi");

        audiosixisevi.play();

        }
        else{

        alert("Errou! Tente novamente.");

        }
    }
});

