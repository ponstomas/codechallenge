const URL = "https://jsonplaceholder.typicode.com/users";

form1.addEventListener('submit', evento => {
    evento.preventDefault();
    let datos = {
        "Nombre": document.querySelector('#nombre').value ,
        "Apellido": document.querySelector('#apellido').value ,
        "Fecha de nacimiento": document.querySelector('#fecha').value
    };

    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)

    })
});




