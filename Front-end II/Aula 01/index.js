// let valorEscolhido = confirm("você deseja sair da aplicação?");
//     console.log(valorEscolhido)
// if (valorEscolhido) {
//     alert("você contina na aplicação!")
// } else {
//     alert("você saiu da aplicaçõa!")
// }




const password = "senha123";
let inputPassword = "";


while (true) {
    inputPassword = prompt("Digite a senha:");
  
    if (inputPassword === password) {
      alert("Senha correta!");
      break;
    } else {
      alert("Senha incorreta. Tente novamente.");
    }
  }
