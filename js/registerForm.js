
function validarRegister(e){
    

    let errors =0;

    if(inputEmail.value ==''|| !validar_email(inputEmail.value)){
        inputEmail.classList.add("is-invalid");
        document.getElementById("errorEmail").textContent = "El campo es obligatorio y ha de ser un email válido";
        errors++;
    }
    if(inputPassword.value ==''||!hasNumber(inputPassword.value)||!hasMayus(inputPassword.value)||inputPassword.value.length<8){
        inputPassword.classList.add("is-invalid");
        document.getElementById("errorPassword").textContent = "El campo es obligatorio. Tiene que contener mínimo 8 caracteres, un dígito y una mayúscula.";
        errors++;
    }
    if(inputPassword.value!=inputPassword1.value){
        inputPassword1.classList.add("is-invalid");
        document.getElementById("errorPassword1").textContent = "Repite la contraseña";
        errors++;
    }
    if(inputProvince.value == "") {
		inputProvince.classList.add("is-invalid");
		document.getElementById("errorProvince").textContent = "La provincia es obligatoria";
		errors++;
	}
	
	if(inputCity.value == "") {
		inputCity.classList.add("is-invalid");
		document.getElementById("errorCity").textContent = "Falta la ciudad";
		errors++;
	}
	
	if(inputZip.value == "" || inputZip.length!=5) {
		inputZip.classList.add("is-invalid");
		document.getElementById("errorZip").textContent = "El codigo postal no cumple los requisitos";
		errors++;
	}
	
	if(!gridCheck.checked) {
		gridCheck.classList.add("is-invalid");
		document.getElementById("errorCheck").textContent = "Acepta las bases";
		errors++;
	}

    if(errors>0){
        
        return false;
    }else{
        /* e.preventDefault();
        registerModal();  */
        return true;
    }

}

//Función para validar emails
function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}

//Función para saber si un string contiene un número
function hasNumber(myString) {
    return /\d/.test(myString);
}

//Funcion para saber si el string tiene una mayúscula
function hasMayus(myString){
    return /[A-Z]/.test(myString);
}

//Pasamos los valores introducidos en el formulario al modal y lo mostramos
function registerModal(){
        
        email.innerHTML = inputEmail.innerHTML;
        city.innerHTML = inputCity.innerHTML;
        zip.innerHTML = inputZip.innerHTML;

        $("#register").modal('show');
       
}