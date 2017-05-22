function agregar(){

var tareas = document.getElementById('tarea').value;
document.getElementById('tarea').value = "";

var cont = document.getElementById('contenedor');

var nuevasTareas = document.createElement('div');
var textoNuevaTarea = document.createTextNode('tareas');
var elementoContenedor = document.createElement('span');

elementoContenedor.appendChild(textoNuevaTarea);
nuevasTareas.appendChild(elementoContenedor);
cont.appendChild(nuevasTareas);

var chck = document.createElement('input');
chck.type = 'checkbox';
chck.setAttribute('class', 'check');
var basura = document.createElement('span');
basura.classList.add('fa', 'fa-trash-o');
var cora = document.createElement('span');
cora.classList.ad('fa', 'fa-heart');

nuevasTareas.appendChild(chck);
nuevasTareas.appendChild(basura);
nuevasTareas.appendChild(cora);

chck.addEventListener('click', function(){
	elementoContenedor.classList.toggle('tachado');
});

basura.addEventListener('click', function(){
	cont.removeChild(nuevasTareas);
});

cora.addEventListener('click', function(){
	cora.classList.toggle('red');
});

if(tareas == null || tareas.length == 0){
	alert('Error! debe ingresar tarea');
	return false;
}

window.onload = function(){
	document.getElementById('boton').addEventListener('click', agregar);
}

}







