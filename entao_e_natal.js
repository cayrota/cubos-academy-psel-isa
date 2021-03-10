function solucao(produtos, distanciaRestaurante, cupomDesconto, ehPrimeiraCompra) {
    // seu código aqui
      let totalAPagar = 0, totalParcial0 = 0, totalParcial1 = 0;
      for (let i = 0; i < produtos.length; i++) {
          const produto = produtos[i];
          if (produto.categoria === "SALGADO") {
              totalParcial0 += (produto.valor * produto.quantidade) - ((produto.valor * produto.quantidade) * (10 / 100));
          } else if (produto.categoria === "DOCE") {
              totalParcial0 += (produto.valor * produto.quantidade) - ((produto.valor * produto.quantidade) * (15 / 100));
          } else if (produto.categoria === "BEBIDA") {
              totalParcial0 += (produto.valor * produto.quantidade) - ((produto.valor * produto.quantidade) * (30 / 100));
          }        
      }
      
      if (totalParcial0 >= 3000 && cupomDesconto === "NATAL10" && ehPrimeiraCompra === true) {
          totalParcial1 = totalParcial0 - (totalParcial0 * (10 / 100));
      } else if (totalParcial0 >= 4500 && cupomDesconto === "NATAL20" && ehPrimeiraCompra === true) {
          totalParcial1 = totalParcial0 - (totalParcial0 * (20 / 100));
      } else if (totalParcial0 >= 6000 && cupomDesconto === "NATAL30" && ehPrimeiraCompra === true) {
          totalParcial1 = totalParcial0 - (totalParcial0 * (30 / 100));
      } else if (totalParcial0 >= 8000 && cupomDesconto === "NATALSUPREMO" && ehPrimeiraCompra === true) {
          totalParcial1 = totalParcial0 - (totalParcial0 * (30 / 100));
      } else {
          totalParcial1 = totalParcial0;
      }
      
      
      if (totalParcial0 >= 8000 && ehPrimeiraCompra === true && cupomDesconto === "NATALSUPREMO") {
          totalAPagar = totalParcial1;
      } else {
          totalAPagar = totalParcial1 + (distanciaRestaurante * 120);
      }    
      console.log(totalAPagar);
  }