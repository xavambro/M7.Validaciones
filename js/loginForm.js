function validarSearch(){
    let inputSearch = document.getElementById('inputSearch');
    //Si el input no existe o tiene menos de 3 caracteres, añadiremos la clase is-invalid y mostraremos un texto de error.
    if(inputSearch.value ==''|| inputSearch.value.length < 3){
        inputSearch.classList.add("is-invalid");
        document.getElementById("errorSearch").textContent = "El campo es obligatorio y ha de tener 3 o más caracteres";
        return false;
    }else{
        return true;
    }
}
function validarLogin(){
    let inputEmail = document.getElementById('inputEmail');
    let inputPassword = document.getElementById('inputPassword');
    let errors =0;

    if(inputEmail.value ==''|| !validar_email(inputEmail.value)){
        inputEmail.classList.add("is-invalid");
        document.getElementById("errorEmail").textContent = "El campo es obligatorio y ha de ser un email válido";
        errors++;
    }
    if(inputPassword.value ==''){
        inputPassword.classList.add("is-invalid");
        document.getElementById("errorPassword").textContent = "El campo es obligatorio.";
        errors++;
    }
    if(errors>0){
        return false;
    }else{
        
        return true;
    }
}

//Función para validar emails
function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}