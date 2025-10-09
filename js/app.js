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

