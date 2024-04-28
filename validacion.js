const formulario = document.forms['form'];
const campos = formulario.querySelectorAll('.formcontato__input, .formcontato__textarea');
const campoEmail = document.getElementById('email');

// Función para validar la longitud del texto
function validarLongitud(evento) {
  const campo = evento.target;
  if (campo.value.length > 50) {
    campo.value = campo.value.substring(0, 50);
    alert('El campo no puede tener más de 50 caracteres.');
  }
}

// Asignar la función de validación a cada campo
campos.forEach(campo => campo.addEventListener('input', validarLongitud));

// Mostrar formato de email al enfocar
campoEmail.addEventListener('focus', (evento) => {
  if (evento.target.value === '') {
    evento.target.value = 'nombre@dominio.com';
  }
});

campoEmail.addEventListener('blur', (evento) => {
  if (evento.target.value === 'nombre@dominio.com') {
    evento.target.value = '';
  }
});

// Función para validar si todos los campos están completos
function validarFormulario(evento) {
  evento.preventDefault(); // Prevenir envío del formulario
  let completo = true;
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para email

  campos.forEach(campo => {
    if (campo.value.trim() === '') {
      completo = false;
      campo.classList.add('error');
    } else {
      campo.classList.remove('error');
    }

    // Validación adicional para el campo email
    if (campo.id === 'email' && !regexEmail.test(campo.value)) {
      completo = false;
      campo.classList.add('error');
      alert('Por favor, ingresa un email válido.');
    }
  });

  if (completo) {
    // Aquí puedes enviar el formulario
    alert('¡Formulario enviado correctamente!');
    formulario.submit();
  } else {
    alert('Por favor, completa todos los campos del formulario.');
  }
}

// Asignar la función de validación al evento submit del formulario
formulario.addEventListener('submit', validarFormulario);