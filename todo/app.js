// Función para dibujar la raya
function drawStrikethrough(element) {
    // Obtener el elemento de la tarea
    const task = element.parentNode;
  
    // Crear la raya
    const strikethrough = document.createElement('div');
    strikethrough.classList.add('strikethrough');
    strikethrough.style.height = task.offsetHeight;
  
    // Agregar la raya al elemento de la tarea
    task.appendChild(strikethrough);
  }
  
  // EventListener para el checkbox
  const checkbox = document.querySelector('input[type="checkbox"]');
  checkbox.addEventListener('change', (event) => {
    // Comprobar si el checkbox está seleccionado
    if (event.target.checked) {
      // Dibujar la raya
      drawStrikethrough(event.target);
    } else {
      // Eliminar la raya
      const strikethrough = event.target.parentNode.querySelector('.strikethrough');
      if (strikethrough) {
        strikethrough.remove();
      }
    }
  });
  
  // Importar el código en el archivo HTML
  import './app.js';
  