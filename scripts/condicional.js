/*ESTO ES UN COMENTARIO*/
var nombre;
    nombre=prompt("Escribe tu nombre","NOMBRE");
var edad;
    edad=prompt("Escribe tu edad "+nombre);
if (Number(edad)>=18){
    alert(nombre+" Tu votaras en las proximas elecciones");
}else
    alert("Lo siento, no podras elegir a la proxima presidente");