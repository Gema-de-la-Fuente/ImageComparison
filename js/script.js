window.onscroll = function(){
    fijarMenu()
    mostrarBtnSubir()
};

function fijarMenu(){
    
    var menu = document.getElementById('menu'); /* Asigno el menú a una variable. */
    
    var headerHegiht = document.getElementById('encabezado').offsetHeight; /* Altura del encabezado. */
    
    /* Cuando el deslizamiento vertical de la pÃ¡gina en píxeles supere la altura del ecabezado, el menÃº pasa a la clase "fijado" que establece el menú a una posición fija.  */
    if(window.scrollY > headerHegiht){ /* También funciona con document.body.scrollTop */
        menu.className = "fijado";
    }else{
        menu.className = "";
    }
};