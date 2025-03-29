function lerNumero1() {
  let numero1 = parseFloat(document.getElementById("entrada1").value);
  return numero1;
}

function lerNumero2() {
  let numero2 = parseFloat(document.getElementById("entrada2").value);
  return numero2;
}

function somar() {
  let resultado = lerNumero1() + lerNumero2();
  document.getElementById("resultado").textContent = resultado;
}

function dividir() {
  if (lerNumero2() === 0) {
    document.getElementById("resultado").innerText = "Divisão por zero.";
  } else {
    let resultado = lerNumero1() / lerNumero2();
    document.getElementById("resultado").innerText = resultado;
  }
}
