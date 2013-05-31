function init(){

var reloj = new Date();
var horas = reloj.getHours();
var minutos  = reloj.getMinutes();
var segundos = reloj.getSeconds();

if (horas    < 10) horas    = "0" + horas;
if (minutos  < 10) minutos  = "0" + minutos;
if (segundos < 10) segundos = "0" + segundos;

document.getElementById('txt').innerHTML = horas+":"+minutos+":"+segundos;

tiempo = setTimeout(function(){init()}, 100); 

}
