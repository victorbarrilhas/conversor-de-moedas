//Adicionar outras moedas para converter

function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorDolar = parseFloat(valor);

  var valorReal = valorDolar * 5.26;
  console.log(valorReal);
  var elementoValorConvertidoReal = document.getElementById(
    "valorConvertidoReal"
  );
  var valorConvertidoReal = "O resultado em Real é R$ " + valorReal;
  elementoValorConvertidoReal.innerHTML = valorConvertidoReal;

  var valorEuro = valorDolar * 0.85;
  console.log(valorEuro);
  var elementoValorConvertidoEuro = document.getElementById(
    "valorConvertidoEuro"
  );
  var valorConvertidoEuro = "O resultado em Euro é € " + valorEuro;
  elementoValorConvertidoEuro.innerHTML = valorConvertidoEuro;

  var valorIene = valorDolar * 109.64;
  console.log(valorIene);
  var elementoValorConvertidoIene = document.getElementById(
    "valorConvertidoIene"
  );
  var valorConvertidoIene = "O resultado em Iene é ¥ " + valorIene;
  elementoValorConvertidoIene.innerHTML = valorConvertidoIene;
}
