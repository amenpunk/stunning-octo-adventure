
const bus = ["u","m","g"];

window.onload = function () {

    var letras = ['a', 'b', 'c', 'd', "e", 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', "n", "ñ", 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var posx = 0;
    var posy = 0;
    var cont = 0;

    for (x = 0; x <= letras.length - 1; x++) {

        var area = document.getElementById('area');
        var nuevaLetra = document.createElement('button');
//        nuevaLetra.innerHTML = letras[x];
        nuevaLetra.classList.add(letras[x].value)
        nuevaLetra.className = 'letra';

        if (x == 8) {
            posy = 63;
            //console.log(cont)
            cont = 0;
            posx = 0;
        } if (x == 16) {
            posy = 126;
            //console.log(cont)
            cont = 0;
            posx = 0;
        } if (x == 24) {
            posy = 189;
            //console.log(cont)
            cont = 0;
            posx = 0;
        }
        var valor = letras[x];
        nuevaLetra.style.backgroundPosition = '-' + posx + 'px ' + '-' + posy + 'px';
        nuevaLetra.setAttribute("name", valor);
        area.appendChild(nuevaLetra);

        cont = cont + 1;
        posx = (cont) * 62;


    }

    var cont = 0;
    var index =0;

    lo = document.getElementsByTagName('button')
    while (cont < letras.length) {
        lo[cont].onclick = function () {
            factor = this.name;
            console.log(factor);
            if(factor === bus[index] ){
                index++;
                if(index === bus.length){
                    alert("ENCONTRASTE UMG !!");
                }
            }else{
                index=0;
            }
            
        }
        cont++;
    }


} 
