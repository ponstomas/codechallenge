const URL = "https://jsonplaceholder.typicode.com/users";
const form1 = document.querySelector('#form1');

form1.addEventListener('submit', evento => {
    evento.preventDefault();
    const datosForm = new FormData(form1);

    fetch(URL, {
        method: 'POST',
        body: datosForm
    })
    .then(respuesta => respuesta.json())
    .then(usuario => {
        console.log(JSON.parse(JSON.stringify(usuario)))

    })
});



