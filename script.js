function loadRandomImage() {
    // URL de la API
    const apiUrl = 'https://dog.ceo/api/breeds/image/random';

    // Realizar una solicitud GET a la API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Obtener la URL de la imagen aleatoria
            const imageUrl = data.message;

            // Mostrar la imagen en el elemento de la imagen
            const randomImage = document.getElementById('random-image');
            randomImage.src = imageUrl;
        })
        .catch(error => {
            console.error('Error al cargar la imagen:', error);
        });
}

// Manejar el clic del botón para cargar una imagen
const loadImageButton = document.getElementById('load-image');
loadImageButton.addEventListener('click', loadRandomImage);

// Cargar una imagen aleatoria al cargar la página
loadRandomImage();