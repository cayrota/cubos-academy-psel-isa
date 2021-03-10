function solucao(jogadas) {
    //seu código aqui
      let quantidadeDe0 = 0, quantidadeDe1 = 0;
      for (let i of jogadas) {
          if (i === 0){
              quantidadeDe0++;            
          } else {
              quantidadeDe1++;
          }
      }
      const divisaoCorreta = quantidadeDe0 === quantidadeDe1;
      console.log(divisaoCorreta);
  }