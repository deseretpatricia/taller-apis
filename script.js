function loadBreedImage() {
    const breedInput = document.getElementById('breed-input');
    const breedName = breedInput.value.trim();

    if (breedName === '') {
        alert('Por favor, ingresa el nombre de la raza.');
        return;
    }

    const breedImageUrl = `https://dog.ceo/api/breed/${breedName}/images/random`;

    fetch(breedImageUrl)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'error') {
                alert('Raza no encontrada. Verifica el nombre de la raza.');
                return;
            }

            const imageUrl = data.message;
            const breedImage = document.getElementById('breed-image');
            breedImage.src = imageUrl;
        })
        .catch(error => {
            console.error('Error al cargar la imagen de la raza:', error);
        });
}

const loadBreedImageButton = document.getElementById('load-breed-image');
loadBreedImageButton.addEventListener('click', loadBreedImage);



function loadRandomImage() {

    const apiUrl = 'https://dog.ceo/api/breeds/image/random';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const imageUrl = data.message;
            const randomImage = document.getElementById('random-image');
            randomImage.src = imageUrl;
        })
        .catch(error => {
            console.error('Error al cargar la imagen:', error);
        });
}

const loadImageButton = document.getElementById('load-random-image');
loadImageButton.addEventListener('click', loadRandomImage);

