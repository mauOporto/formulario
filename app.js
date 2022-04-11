const formulario = document.getElementById('formulario')
const userName = document.getElementById('userName')
const userEmail = document.getElementById('userEmail')

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
//Son los parametros necesarios para validar un nombre
const regUserEmail =  /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
//Son los parametros necesarios para validar un email


formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if(!regUserName.test(userName.value)){
        console.log('formato no valido')
        return;
// Lo que ocurre aca es que si no agregamos los parametros necesarios para el nombre me va aparecer
// el mensaje de Formato no valido, pero si si agregamos los parametros correspondidos
// me va aparecer el mensaje de Formulario enviado
    }

    if(!regUserEmail.test(userEmail.value)){
        console.log('formato no valido')
        return
    }

    console.log('Formulado enviado')
    
})