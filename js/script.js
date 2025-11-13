var listaGrupos = [];
var listaContatos = [];

document.querySelector("#btnCadastrarGrupo").addEventListener("click", cadastrarGrupo);
function cadastrarGrupo(evento){
evento.preventDefault();
let gruNome = document.querySelector("#gruNome").value;
let gruCor = document.querySelector("#gruCor").value;
let gruDescricao = document.querySelector("#gruDescricao").value
let objGrupo = new Grupo (gruNome, gruCor, gruDescricao);
listaGrupos.push(objGrupo);
carregarGrupos();
};
document.querySelector("#btnCadastrarContato").addEventListener("click", cadastrarContato);
function cadastrarContato(evento){
evento.preventDefault();
let contNome = document.querySelector("#contNome").value;
let contNumero = document.querySelector("#contNumero").value;
let contEmail = document.querySelector("#contEmail").value;
let grupo = document.querySelector("#selectGrupo").value;
let objContato = new Contato (contNome, contNumero, contEmail, grupo);
listaContatos.push(objContato);
carregarContatos();
};
function carregarGrupos(){
    const ul = document.querySelector("#listaGrupos");
    const select = document.querySelector("#selectGrupo");
    ul.innerHTML = "";
    select.innerHTML = "";
    listaGrupos.forEach(function(cada, i){
        let li = document.createElement("li");
        li.innerHTML = listaGrupos[i];
        let btnRemover = document.createElement("button");
        btnRemover.innerHTML = "Remover";
        btnRemover.setAttribute("onclick", `removerGru(${i})`);
        li.appendChild(btnRemover);
        ul.appendChild(li);

        let grupo = listaGrupos[i];
        let opt = document.createElement("option");
        opt.value = i;
        opt.innerHTML = grupo.toString();
        select.appendChild(opt);
    })
}
function removerGru(i){
    listaGrupos.splice(i,1);
    carregarGrupos();
}
function carregarContatos(){
    const ul = document.querySelector("#listaContatos");
    ul.innerHTML = "";
    listaGrupos.forEach(function(cada, i){
        let li = document.createElement("li");
        li.innerHTML = listaContatos[i];
        let btnRemover = document.createElement("button");
        btnRemover.innerHTML = "Remover";
        btnRemover.setAttribute("onclick", `removerCont(${i})`);
        li.appendChild(btnRemover);
        ul.appendChild(li);
    })
}
function removerCont(i){
    listaContatos.splice(i,1);
    carregarContatos();
}