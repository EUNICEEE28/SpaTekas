document.addEventListener('DOMContentLoaded', function() {
  // 1. Identificamos el enlace 'Servicios' que contiene el submenú.
  const serviciosLink = Array.from(document.querySelectorAll('nav > ul > li > a'))
      .find(a => a.textContent.trim() === 'Servicios');

  // 2. Definimos la Media Query para saber si estamos en móvil (max-width: 782px).
  const mobileMediaQuery = window.matchMedia("(max-width: 782px)");

  if (serviciosLink) {
      serviciosLink.addEventListener('click', function(event) {
          const parentLi = this.closest('li');

          // Solo aplicamos la lógica de despliegue si estamos en móvil
          if (mobileMediaQuery.matches) {
              
              // Si el submenú NO está abierto, prevenimos la navegación.
              // Esto hace que el primer toque abra el menú.
              if (!parentLi.classList.contains('activo')) {
                  event.preventDefault(); 
              }
              
              // Alterna la clase 'activo' (muestra/oculta el submenú).
              parentLi.classList.toggle('activo');

              // Si el submenú acaba de cerrarse, también prevenimos la navegación,
              // para evitar un salto inesperado a servicios.html al cerrar.
              if (!parentLi.classList.contains('activo')) {
                   event.preventDefault();
              }
          }
      });
  }
  });
