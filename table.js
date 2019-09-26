var btn = document.getElementById('btnNombre');
var nombre = document.getElementById('nombre');

btn.onclick = function(){
var tabla = document.getElementById('tabla');
var tbody = document.getElementsByTagName('tbody')[0];
var tr = document.createElement('tr')
    tr.innerHTML = `<tr>
       <td>
        ${nombre.value}
       </td> 
    </tr>`
    tbody.appendChild(tr);
}