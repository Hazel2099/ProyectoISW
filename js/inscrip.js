function validateEmail() 
{
    var email = document.getElementById("email").value;
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validarVacio(str)
{
    return str.length === 0
}

function validarCampos() 
{
    var nombre = document.getElementById("name").value;
    var apellidos = document.getElementById("apll").value;
    var grado = document.getElementById("exampleSelect2").value;
    var genero = $('#txtgenero').val();
    var fecha = document.getElementById("datebirth").value;


    var validEmail = validateEmail();
    if(validEmail === false){
        alert("Su correo electrónico tiene un formato incorrecto");
        document.getElementById("email").focus();
        return;
    }else
    {
        var isValid = validarVacio(nombre);
        if(isValid === true){ 
            alert("Completar el campo Nombre"); 
            document.getElementById("name").focus();
            return;
        }

        isValid = validarVacio(apellidos);
        if(isValid === true){ 
            alert("Completar el campo Apellidos"); 
            document.getElementById("apll").focus();
            return;
        }

        isValid = validarVacio(fecha);
        if(isValid === true){ 
            alert("Seleccionar una fecha de nacimiento"); 
            document.getElementById("datebirth").focus();
            return;
        }


        isValid = validarVacio(grado);
        if(isValid === true){ 
            alert("Seleccionar uno o más grados académicos"); 
            document.getElementById("exampleSelect2").focus();
            return;
        }

        isValid = validarVacio(genero);
        if(isValid === true){ 
            alert("Seleccionar un genero"); 
            document.getElementById("genero").focus();
            return;
        }
    }

    alert("Se ha completado la suscripción al boletín de noticias."); 
    return;
}