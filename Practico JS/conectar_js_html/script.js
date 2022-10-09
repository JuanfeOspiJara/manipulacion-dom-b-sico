const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(h1);
/* Así se imprimen varios objetos */
console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});
/* Así solo se puede agragar texto */
h1.innerText = 'Cambie el h1 en html desde js'; 
/* Así se pueden agragar etiquetas */
p.innerHTML = 'patroncita <br> chiquitito'; 

/* Asi se busca el valor de un atributo */
console.log(h1.getAttribute('class'));

/* así se cambia el valor del atributo */
h1.setAttribute('class','rojo');

/* Asi se añade una clase */
h1.classList.add('azul');

h1.classList.add('naranja');

/* Asi se elimina una clase */
h1.classList.remove('azul');
/* Asi se crea un elemento img span p h1 etc */
const img = document.createElement('img');

img.setAttribute('src', 'https://media.istockphoto.com/photos/track-and-mountains-in-valle-del-lago-somiedo-nature-park-asturias-picture-id1370772148?k=20&m=1370772148&s=612x612&w=0&h=UtId6HL27edD9i1PmcEtethm3d7YMaNfATfjdCzYQ6E=');
console.log(img);
/* Asi se elimina el contenido y se reemplaza con la segunda linea de codigo */
pid.innerHTML = "";
/* Así solo se le agrega el elemento sin eliminar*/
pid.append(img);
