const banco = {
    001: "Banco do Brasil S.A.",
    033: "Banco Santander (Brasil) S.A.",
    104: "Caixa Econômica Federal",
    237: "Banco Bradesco S.A.",
    341: "Banco Itaú S.A.",
    356: "Banco Real S.A. (antigo)",
    389: "Banco Mercantil do Brasil S.A.",
    399: "HSBC Bank Brasil S.A.",
    422: "Banco Safra S.A.",
    453: "Banco Rural S.A.",
    633: "Banco Rendimento S.A.",
    652: "Itaú Unibanco Holding S.A.",
    745: "Banco Citibank S.A."
}

const caracter = "840-35";

const cpf = "19001284035";





const nomeDoBanco = (codigo) => {
    const nome = banco[codigo].replace("S.A.", "").replace("(antigo)", "").replace("(Brasil)", "").replace("Holding", "");
    return nome;
};

const removeCaracter = (caracter) => {
    const numeros = caracter.replace("-", "").replace(".", "").replace(".", "");
    return numeros
}

const formatarCPF = (cpf) => {
    const numero = `${cpf.substr(0, 3)}.${cpf.substr(3, 3)}.${cpf.substr(6, 3)}-${cpf.substr(9, 2)}`

    return numero;
}

console.log(formatarCPF(cpf));