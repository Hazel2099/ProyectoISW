
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
    var fecha = document.getElementById("datebirth").value;
    var competencia = $('#txtselect1').val();
    var genero = $('#txtgenero').val();

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

        isValid = validarVacio(competencia);
        if(isValid === true){ 
            alert("Seleccionar una competencia"); 
            document.getElementById("select1").focus();
            return;
        }

        isValid = validarVacio(genero);
        if(isValid === true){ 
            alert("Seleccionar un genero"); 
            document.getElementById("genero").focus();
            return;
        }
    }

    window.location.href = "./inscripCorrecta.html";
    return;
}