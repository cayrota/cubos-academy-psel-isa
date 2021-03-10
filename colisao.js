function solucao(velocidade, aceleracao, distanciaObjeto) {
    //seu código aqui
      const d = (-velocidade*velocidade)/(2*aceleracao);
      if (distanciaObjeto < d) {
          console.log("COLISAO A FRENTE");
      } else if (distanciaObjeto === d) {
          console.log("NAO ACELERE");
      } else {
          console.log("CAMINHO SEGURO");
      }
  }