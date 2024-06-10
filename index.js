const apiUrl = ' https://rickandmortyapi.com/api';
fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parsear la respuesta como JSON
    })
    .then(data => {
        // Manejar los datos de la respuesta
        console.log(data);
    })
    .catch(error => {
        // Manejar los errores
        console.error('There was a problem with the fetch operation:', error);
    });

    fetch(apiUrl, {
        method: 'GET', // Método HTTP (POST, PUT, DELETE, etc.)
        headers: {
            'Content-Type': 'https://rickandmortyapi.com/api/character'
        },
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
        
        