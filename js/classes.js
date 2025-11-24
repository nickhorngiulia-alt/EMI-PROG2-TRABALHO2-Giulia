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
        return `       Nome: ${this.nome} \n
        Cor: ${this.cor} \n
        Descrição: ${this.descricao}`;
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
        return `       Nome: ${this.nome}\n
       Número: ${this.numero}\n
       Email: ${this.email}\n
       Grupo: ${this.grupo.cor} ${this.grupo.nome}\n`;
    }

}