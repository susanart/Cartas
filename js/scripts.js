// async function leerJSON(url) {
//   try {
//     let response = await fetch(url);
//     let user = await response.json();
//     return user;
//   } catch (err) {
//     alert(err);
//   }
// }

// function mostrar() {
//   var url = "https://raw.githubusercontent.com/susanart/Cartas/main/cartas.json";
//   var table = "";
//       leerJSON(url).then((cartas) => {
//       cartas.forEach((cartas1) => {
        
//           table += `
//               <tr>
//                 <td>${cartas1.numero}</td>
//                 <td>${cartas1.carta}</td>
//                 <td>${cartas1.cantidad}</td>
//               </tr>
           
//           `;
//       });
//       document.getElementById("contenido").innerHTML = table;
//     })
// }
// mostrar();

window.onload = () => {
  this.sessionStorage.setItem("usuario","usuario");
  this.sessionStorage.setItem("password","12345");
}

//variables 
var input = document.getElementsByTagName('input')
var login = document.getElementById('login')
var form = document.querySelector('form')

form.onsubmit = () => {return false}

login.onclick = () => {
  if((input[0].value != "") && (input[1].value != "")){
    if((input[0].value == sessionStorage.getItem("usuario")) && (input[1].value == sessionStorage.getItem("password"))){
      form.onsubmit = () => {return 1}
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


