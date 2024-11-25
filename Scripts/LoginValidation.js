document.getElementById("formBox").addEventListener("submit", function(event) {
  event.preventDefault();

  const email = document.getElementById("emailField").value;
  const senha = document.getElementById("passwordField").value;

  const tratamentoEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,6}$/;

  if (!tratamentoEmail.test(email)) {
    alert("Ensira um E-Mail válido");
    return;
  }

  if (senha === "") {
    alert("Ensira Sua Senha.");
    return;
  }

  const passEmail = "lunarLivros@gmail.com";
  const passSenha = "1234";


  if (email === passEmail && senha === passSenha) {
    window.location.href = "./Pages/catalogo.html";
  }
})