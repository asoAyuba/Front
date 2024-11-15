// Actualizar el año automáticamente en el footer
const yearSpan = document.getElementById('current-year');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// Botón para volver al inicio
const scrollToTopBtn = document.getElementById('scroll-to-top');

// Mostrar el botón cuando el usuario hace scroll hacia abajo
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

// Scroll suave al hacer clic en el botón
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Boton de enviar el formulario.
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Formulario enviado correctamente. Nos pondremos en contacto contigo pronto.');
});

// Función para abrir el modal
function openModal(id) {
    const modal = document.getElementById(`modal-${id}`);
    modal.style.display = 'flex';
}

// Función para cerrar el modal
function closeModal(id) {
    const modal = document.getElementById(`modal-${id}`);
    modal.style.display = 'none';
}

// Cerrar el modal al hacer clic fuera del contenido
window.addEventListener('click', (event) => {
    const modals = document.querySelectorAll('.cat-modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});