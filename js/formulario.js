
        onload = () => {
            $("form").submit(function (e) {
                e.preventDefault();

                if (todovalido()) {
                    $("form").hide();
                    $(".enviado").removeClass("invisible");
                }

            });

        }

        function todovalido() {
            var valido = true;
            var nombre = $("input[id=nombre]").val();
            var email = $("input[id=email]").val();
            var asunto = $("input[id=asunto]").val();
            var mensaje = $("textarea[id=mensaje]").val();
            console.log(mensaje)
            if (nombre.trim() == "") {
                valido = false;
                muestraError("nombre");
            } else {
                ocultaError("nombre")
            }
            if (email.trim() == "") {
                valido = false;
                muestraError("email");
            } else {
                ocultaError("email")
            }
            if (asunto.trim() == "") {
                valido = false;
                muestraError("asunto");
            } else {
                ocultaError("asunto")
            }
            if (mensaje.trim() == "") {
                valido = false;
                muestraError("mensaje");
            } else {
                ocultaError("mensaje")
            }



            return valido;
        }

        function muestraError(campo) {
            $(document.getElementById("error" + campo)).removeClass("invisible")
        }
        function ocultaError(campo) {
            $(document.getElementById("error" + campo)).addClass("invisible")
        }
