// Definição da interface Produto
export interface Produto {
    id: number;
    nome: string;
    preco: number;
    desconto?: number; // Desconto é opcional
    categoria: string;
    quantidadeEmEstoque: number;
}

// Função para calcular o preço final
export function calcularPrecoFinal(produto: Produto): number {
    if (produto.quantidadeEmEstoque >= 5) { // venda com desconto ou preço normal apenas acima de 5 unidades
        if (produto.desconto) {
            return produto.preco * (1 - produto.desconto / 100);
        } else {
            return produto.preco;
        }
    }
    else {
        return produto.preco * 1.2; //acréscimo de 20% ao preço do produto em função do estoque baixo e não será aplicado o desconto
    }
}

