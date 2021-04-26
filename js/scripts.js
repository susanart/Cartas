//----------Mostrar JSON-------------//
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
                <td>${cartas1.valor}</td>
              </tr>
           
          `;
      });
      document.getElementById("contenido").innerHTML = table;
    })
}
// Cartas 

function cargarCarta(carta){
  let boton = document.getElementById('guardar')
  let numeroCarta = document.getElementById('numero__carta')
  let nombreCarta = document.getElementById('nombre__carta')
  let cantidad = 1;
  boton.onclick = () => {
    var table = "";
    console.log("entre");
          table += `
              <tr>
                <td>${numeroCarta}</td>
                <td>${nombreCarta}</td>
                <td>${cantidad}</td>
              </tr>
           
          `;
      document.getElementById("contenido").innerHTML = table;
  }
  
}
mostrar();
//----------Inicio de sesión-------------//

window.onload = () => {
  this.sessionStorage.setItem("usuario","admin");
  this.sessionStorage.setItem("password","1234");
}

//variables 
let input = document.getElementsByTagName('input')
let login = document.getElementById('login')
let form = document.querySelector('form')

form.onsubmit = () => {return false}

login.onclick = () => {
  if((input[0].value != "") && (input[1].value != "")){
    if((input[0].value == sessionStorage.getItem("usuario")) && (input[1].value == sessionStorage.getItem("password"))){
      location.replace('./html/cartas.html');
    } else{
      if (input[0].value != sessionStorage.getItem("usuario")){
        input[0].nextElementSibling.textContent = "Usuario incorrecto";
        setTimeout(()=>{
          input[0].nextElementSibling.textContent ="";
        },2000);
      }
      if (input[1].value != sessionStorage.getItem("password")){
        input[1].nextElementSibling.textContent = "Contraseña incorrecta";
        setTimeout(()=>{
          input[1].nextElementSibling.textContent ="";
        },2000);
      }
    }

  } else{
    if(input[0].value == ""){
        input[0].nextElementSibling.textContent = "Digite Usuario";
        setTimeout(()=>{
          input[0].nextElementSibling.textContent ="";
        },2000);
    }
    if(input[1].value == ""){
        input[1].nextElementSibling.textContent = "Digite Contraseña";
        setTimeout(()=>{
          input[1].nextElementSibling.textContent ="";
        },2000);
    }
  }
}


