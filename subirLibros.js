document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.custom-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const titulo = document.getElementById('titulo').value;
        const autor = document.getElementById('autor').value;
        const celular = document.getElementById('celular').value;
        const fileInput = document.getElementById('portada');

        if (fileInput.files.length > 0) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const portada = e.target.result;

                // Obtener la lista de libros del Local Storage o inicializarla si es la primera vez
                let libros = JSON.parse(localStorage.getItem('libros')) || [];

                // Agregar el nuevo libro a la lista
                const nuevoLibro = { titulo, autor, portada, celular };
                libros.push(nuevoLibro);

                // Guardar la lista actualizada en el Local Storage
                localStorage.setItem('libros', JSON.stringify(libros));

                alert('Libro subido exitosamente');
                
            };

            reader.readAsDataURL(fileInput.files[0]);
        } else {
            alert('Por favor selecciona una imagen para la portada del libro.');
        }
    });
});