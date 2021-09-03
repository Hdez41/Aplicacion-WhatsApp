document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  let telefono = "14075019418";

  let mes = document.querySelector("#mes").value;
  let decontinuo = document.querySelector("#decontinuo").value;  
  let fecha = document.querySelector("#fecha").value;
  let nombre = document.querySelector("#nombre").value;
  let apellido = document.querySelector("#apellido").value;
  let resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=14075019418&text=
		*_SOLICITUD PARA EL SERVICIO DE PRECURSOR AUXILIAR_*%0A
		*El (los) mes(es) de*%0A
		${mes}%0A
		*De continuo*%0A
		${decontinuo}%0A
    *Fecha*%0A
		${fecha}%0A
    *Nombre*%0A
		${nombre}%0A
    *Apellido*%0A
		${apellido}`;

    if (mes === "" || fecha === "" || apellido=== "" || nombre === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Lo siento ${nombre} faltan algunos datos`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `${nombre}, se ha enviado su aplicación`;

  window.open(url);
});
