window.onload = () => {
  this.sessionStorage.setItem("usuario","usuario")
  this.sessionStorage.setItem("password","12345")
}

//variables 
let input = document.getElementsByTagName('input')
let login = document.getElementById('login')
let form = document.querySelector('form')





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



  