function solucao(precos) {
    // seu código aqui
      function menorNumero(numeros){
          let n = numeros[0];
          for (let i = 1; i < numeros.length; i++) {
              if (numeros[i] < n){
                  n = numeros[i];
              }
          }
          console.log(n);
      }
      let resultados = [], r = 0, k = 0;
      for (let i = 0; i < precos.length; i++) {
          for (let j = i+1; j < precos.length; j++) {
              if (precos[i] > precos[j]) {
                  r = precos[i] - precos[j];
                  resultados[k] = r;
                  k++;
              }
          }
      }
      menorNumero(resultados);
  }