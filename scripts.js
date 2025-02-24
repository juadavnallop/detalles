// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const sections = {
      'showCajitas': 'productos-cajitas',
      'showFlores': 'productos-flores',
      'showDetalles': 'productos-detalles'
    };
  
    // Función para ocultar todas las secciones excepto la actual
    function hideOtherSections(currentSectionId) {
      Object.values(sections).forEach(sectionId => {
        if (sectionId !== currentSectionId) {
          document.getElementById(sectionId).classList.add('d-none');
        }
      });
    }
  
    // Agregar event listeners a todos los botones
    Object.entries(sections).forEach(([buttonId, sectionId]) => {
      document.getElementById(buttonId).addEventListener('click', function() {
        const section = document.getElementById(sectionId);
        if (section.classList.contains('d-none')) {
          hideOtherSections(sectionId);
          section.classList.remove('d-none');
        } else {
          section.classList.add('d-none');
        }
      });
    });
  });