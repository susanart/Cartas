async function leerJSON(url) {
    try {
      let response = await fetch(url);
      let user = await response.json();
      return user;
    } catch (err) {
      alert(err);
    }
  }

  function mostrar() {
    var url = "https://raw.githubusercontent.com/susanart/Cartas/main/cartas.json";
    var table = "";
        leerJSON(url).then((cartas) => {
        cartas.forEach((cartas1) => {
          
            table += `
                <tr>
                  <td>${cartas1.numero}</td>
                  <td>${cartas1.carta}</td>
                  <td>${cartas1.cantidad}</td>
                </tr>
             
            `;
        });
        document.getElementById("contenido").innerHTML = table;
      })
  }

  mostrar();



  