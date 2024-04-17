document.addEventListener('DOMContentLoaded', function() {
    const libros = JSON.parse(localStorage.getItem('libros'));

    if (libros) {
        const container = document.querySelector('.row');

        libros.forEach(libro => {
            const libroHTML = `
                <div style="background-color:#F5F5F5;padding: 5px;" class="col-3">
                    <img class="zoom" style="width: 300px;height: 390px;" src="${libro.portada}" alt="">
                    <ul>
                        <li>Nombre del libro: ${libro.titulo}</li>
                        <li>Nombre del dueño: ${libro.autor}</li>
                        <li>Número de contacto: ${libro.celular}</li>
                        <li>Estado del libro: <span class="rating">&#9733;&#9733;&#9733;&#9733;&#9733;</span></li>
                    </ul>
                </div>
            `;

            container.innerHTML += libroHTML;
        });
    }
});