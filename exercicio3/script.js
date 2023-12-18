const infosPessoa = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}
const funcUpperCase = (objeto) => {
    for (index in objeto) {
        objeto[index] = objeto[index].toUpperCase();
    }
    return objeto;
}
//console.log(funcUpperCase(infosPessoa));

const functexto = (objeto) => {
    let element = [];
    for (index in objeto) {
        console.log(`O valor da propriedade ${index} é ${objeto[index]}.`);
    };
}
//console.log(functexto(infosPessoa));

const executaOperacao = (dados, callback) => {
    for (index in dados) {
        dados[index] = dados[index].toUpperCase();
    }
    callback(dados);

}

const minhaCallBack = (resultado_Ex_Op) => {
    let element = [];
    for (index in resultado_Ex_Op) {
        console.log(`O valor da propriedade ${index} é ${resultado_Ex_Op[index]}.`);
    };
}


executaOperacao(infosPessoa, minhaCallBack)