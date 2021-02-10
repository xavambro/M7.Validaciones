
let errors =0;
function validarRegister(e){

    if(inputEmail.value ==''|| !validar_email(inputEmail.value)){
        showErrors(inputEmail,"errorEmail","El campo es obligatorio y ha de ser un email válido",errors);   
    }
    if(inputPassword.value ==''||!hasNumber(inputPassword.value)||!hasMayus(inputPassword.value)||inputPassword.value.length<8){
        showErrors(inputPassword,"errorPassword","El campo es obligatorio. Tiene que contener mínimo 8 caracteres, un dígito y una mayúscula.");
    }
    if(inputPassword.value!=inputPassword1.value){
        showErrors(inputPassword1,"errorPassword1","Repite la contraseña");
    }
    if(inputProvince.value == "") {
        showErrors(inputProvince,"errorProvince","La provincia es obligatoria");
	}
	
	if(inputCity.value == "") {
        showErrors(inputCity,"errorCity","Falta la ciudad.");
	}
	
	if(inputZip.value == "" || inputZip.value.length!=5) {
        showErrors(inputZip,"errorZip","El codigo postal no cumple los requisitos");
	}
	
	if(!gridCheck.checked) {
        showErrors(gridCheck,"errorCheck","Acepta las bases");
	}

    if(errors>0){
        errors =0;
        return false;
    }else{
        e.preventDefault();
        registerModal(); 
        return true;
    }

}

function showErrors(input,error,message){
    input.classList.add("is-invalid");
	document.getElementById(error).textContent = message;
	errors++;

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
        
        email.innerHTML = inputEmail.value;
        city.innerHTML = inputCity.value;
        zip.innerHTML = inputZip.value;

        $("#register").modal('show');
       
}