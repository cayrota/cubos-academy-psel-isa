function solucao(produtos, valorMaximo, avaliacaoMinima) {
    // seu código aqui
        let d = [], a = [];
        for (let i = 0; i < produtos.length; i++){
            const produtosAvaliados = produtos[i];
            if (produtosAvaliados.valor <= valorMaximo && produtosAvaliados.avaliacao >= avaliacaoMinima){
                d[i] = produtosAvaliados;
            }
        }
        let e = 0;
        for (let b of d){
            if (b !== undefined){
                a[e]= b;
                e++;
            } else {
                continue;
            }
        }
        console.log(a)
    }