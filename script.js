document.getElementById('toggleSwitch').addEventListener('click', function() {
//Cambiar el modo del cuerpo
document.body.classList.toggle('dark-mode');

//Alternar clases de las secciones individualmente sin forEach
let section1 = document.getElementById('section1');
let section2 = document.getElementById('section2');

section1.classList.toggle('light-mode-section');
section1.classList.toggle('dark-mode-section');

section2.classList.toggle('light-mode-section');
section2.classList.toggle('dark-mode-section');

});