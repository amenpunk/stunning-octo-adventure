window.onload = function () {
    var letras = ['a', 'b', 'c', 'd', "e", 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', "n", 'o', 'p', 'k', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    //console.log(letras.length);

    //btn.onclick = function () {

    var posx = 0;
    var posy = 0;
    var cont =0;

    for (x = 0; x <= letras.length; x++) {
        //var area = document.getElementsById('area');
        var area = document.getElementById('area');
        var nuevaLetra = document.createElement('div');
        nuevaLetra.innerHTML = x;
        nuevaLetra.className = 'letra';

        //if(cont==1)
        //posx = (cont+1)*62;
        //if(cont!=1)
        posx = (cont)*62;

        if (cont == 8) {
            posy = 63;
            cont=0;
        } if (cont == 16) {
            posy = 126;
            cont=0;
        } if (cont == 23) {
            posy = 189;
            cont=0;
        }
        nuevaLetra.style.backgroundPosition = '-'+posx + 'px ' + '-'+posy + 'px';
        area.appendChild(nuevaLetra);
        //area.i

        cont=cont+1;

        console.log(cont)
    }
    //            nuevaLetra.style.backgroundPosition = posx + 'px ' + posy + 'px';
    //            area.appendChild(nuevaLetra);
    //    }
} 
