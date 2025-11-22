class Grupo{
    constructor(nome, cor, descricao){
        this.nome = nome;
        this.cor = cor;
        this.descricao = descricao;
    }
    toString(){
        return `${this.cor} ${this.nome}`;
    }
    exibirDados(){
        return `${this.cor} ${this.nome} ${this.descricao}`;
    }
}

class Contato{
    constructor(nome, numero, email, grupo){
        this.nome = nome;
        this.numero = numero;
        this.email = email;
        this.grupo = grupo;
    }
    toString(){
       return `${this.grupo.cor} ${this.nome} `;
    }
    exibirDados(){
        return `${this.grupo.cor} ${nome} ${numero} ${email}`;
    }

}