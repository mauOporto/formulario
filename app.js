const formulario = document.getElementById('formulario')
const userName = document.getElementById('userName')
const userEmail = document.getElementById('userEmail')

const alertName = document.getElementById('alertName')
const alertEmail = document.getElementById('alertEmail')
const alertSuccess = document.getElementById('alertSuccess')

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
//Son los parametros necesarios para validar un nombre
const regUserEmail =  /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/; 
//Son los parametros necesarios para validar un email

const pintarMensajeExito = () => {
    alertSuccess.classList.remove('d-none');
    alertSuccess.textContent = 'Mensaje enviado con exito'
//Lo que ocurre aca es con el remove removemos el d-none del alertSucess y 
//se agrega el mensaje que pusimos con textContent, pero hay que agregar 
//la const al formulario
}

const pintarMensajeError = (errores) => {
    errores.forEach((item)=>{
        item.tipo.classList.remove('d-none');
        //Hacemos un recorrido por el forEach en el cual removemos el d-none de los alert
        //para cuando sea un formato no valido, nos aparezca el mensaje de error. 
        item.tipo.textContent = item.msg;
        //agregamos el msg que pusimos de error con el textContent
    })
}


formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    alertSuccess.classList.add('d-none');
//Aqui se agrega el d-none con add para cuando se vuelva a poner una nueva informacion 
// y esta sea una informacion invaldia, desaparezca el mensaje de alertSuccess

    const errores = [];
    
    if(!regUserName.test(userName.value) || !userName.value.trim()){
        //El trim arroja un true si lo que se ejecuta solo contiene espacio,
        //lo que haria aca es la validacion de que si el nombre solo contiene espacios 
        //el formato seria invalido
        userName.classList.add('is-invalid');
        //Lo que hace el is-invalid es agregar un icono de error, esto claro gracias a 
        //boostrap
        errores.push({
            tipo: alertName,
            msg: 'Formato no valido, solo letras'
        })
// Lo que ocurre aca es que si no agregamos los parametros necesarios para el nombre me va aparecer
// el mensaje de Formato no valido, pero si si agregamos los parametros correspondidos
// me va aparecer el mensaje de Formulario enviado
    }else{
        alertName.classList.add('d-none');
        userName.classList.remove('is-invalid')
        userName.classList.add('is-valid')
    }

    if(!regUserEmail.test(userEmail.value) || !userName.value.trim()){
        userEmail.classList.add('is-invalid')

        errores.push({
            tipo: alertEmail,
            msg: 'Ingrese un correo valido'
        })
    }else{
        userEmail.classList.remove('is-invalid');
        //lo que hace aca es que si ingresa los datos correctos se va desaparecer los datos de 
        //alertName ya que agregamos le d-none
        //como se agregaron datos correctos se remueve el is-invalid
        userEmail.classList.add('is-valid');
        //si los datos son correctos se agrega simbolo de bien hecho
        alertEmail.classList.add('d-none');
    }

    if(errores.length !== 0){
        pintarMensajeError(errores);
        return;
    }

    console.log('Formulado enviado')
    pintarMensajeExito()
    
})