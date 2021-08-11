console.log("🤖 O programa foi carregado");

let pegarParametros = window.location.search;
console.log("Parametros: ", pegarParametros);
let parametros = new URLSearchParams(pegarParametros);
let parametroValor = parametros.get('valor');
console.log("Valor: ", parametroValor)

function validar(valor) {
  if (isNaN(valor)) {
    alert("Valor inválido!")
    return 0.50
  } 

  if (typeof (valor) === "number") {
    return Math.abs(valor)
  } else {
    alert("Valor inválido!")

    return 0.50
  }
}


// Aqui abaixo vai o resto do programa / script

let bolso = document.getElementById("bolso");

bolso.innerHTML = validar(Number(parametroValor)).toFixed(2);
