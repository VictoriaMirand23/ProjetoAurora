// Verifica a posição da página para exibir ou ocultar o botão
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// Função para rolar a página de volta ao topo
function topFunction() {
  document.body.scrollTop = 0; // Para o Safari
  document.documentElement.scrollTop = 0; // Para o Chrome, Firefox, IE e Opera
}

window.scroll({
  top:0,
  behavior:'smooth',
})