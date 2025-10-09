// Capturamos el formulario
const form = document.getElementById('formContacto');
const msgExito = document.getElementById('msgExito');
// Evento al enviar el formulario
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que la página se recargue
  // Obtenemos valores
  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();
  // Validación simple
  if(nombre === "" || email === "" || mensaje === "") {
    alert("⚠️ Por favor completa todos los campos.");
    return;
  }
  // Validar email con expresión regular
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!regexEmail.test(email)) {
    alert("⚠️ Ingresa un correo electrónico válido.");
    return;
  }
  // Si pasa la validación mostramos el mensaje de éxito
  msgExito.style.display = "block";
  // Limpiar formulario
  form.reset();
  // Ocultar el mensaje después de 5 segundos
  setTimeout(() => {
    msgExito.style.display = "none";
  }, 5000);
});

//Carrusel
let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function(){
    if(active + 1 > lengthItems){
        active = 0;
    }else{
        active = active + 1;
    }
    reloadSlider();
}
prev.onclick = function(){
    if(active - 1 < 0){
        active = lengthItems;
    }else{
        active = active - 1;
    }
    reloadSlider();
}
let refreshSlider = setInterval(()=> {next.click()}, 500);
function reloadSlider(){
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    refreshSlider = setInterval(()=> {next.click()}, 5000);
}
dots.forEach((li, key) =>{
    li.addEventListener('click', function(){
        active = key;
         reloadSlider();
    })
})
