function somar(){
    let entrada1 = 
    parseFloat(document.getElementById('entrada1').value); //parse transforma uma variavel em outraparse //
        

    let entrada2 = 
    parseFloat(document.getElementById('entrada2').value);

    let resultado = entrada1 + entrada2;

    document.getElementById('resultado').textContent = resultado;
}