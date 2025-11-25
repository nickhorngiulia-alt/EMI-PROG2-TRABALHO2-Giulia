var listaGrupos = JSON.parse(localStorage.getItem("listaGrupos")) || [];
var listaContatos = JSON.parse(localStorage.getItem("listaContatos")) || [];
listaGrupos = listaGrupos.map(g => new Grupo(g.nome, g.cor, g.descricao));
listaContatos = listaContatos.map(c => new Contato(c.nome, c.numero, c.email, g => new Grupo(g.nome, c.g.cor, g.descricao)));
contadores();
carregarGrupos();
carregarContatos();

document.querySelector("#btnCadastrarGrupo").addEventListener("click", cadastrarGrupo);
function cadastrarGrupo(evento){
evento.preventDefault();
let gruNome = document.querySelector("#gruNome").value;
let gruCor = document.querySelector("#gruCor").value;
let gruDescricao = document.querySelector("#gruDescricao").value
let objGrupo = new Grupo (gruNome, gruCor, gruDescricao);
listaGrupos.push(objGrupo);
localStorage.setItem("listaGrupos", JSON.stringify(listaGrupos));
contadores();
carregarGrupos();
limparGrupos();
location.hash = "#listas";

};

function carregarGrupos(){
    const ul = document.querySelector("#listaGrupos");
    const select = document.querySelector("#selectGrupo");
    ul.innerHTML = "";
    select.innerHTML = "";
    listaGrupos.forEach(function(cada, i){
        let li = document.createElement("li");
        li.innerHTML = listaGrupos[i].toString();
        let btnRemover = document.createElement("button");
        btnRemover.innerHTML = "Remover";
        btnRemover.setAttribute("onclick", `removerGru(${i})`);
        li.appendChild(btnRemover);
        ul.appendChild(li);
        let btnInfo = document.createElement("button");
        btnInfo.innerHTML = "Info";
        btnInfo.setAttribute("onclick", `btnInfoGru(${i})`);
        li.appendChild(btnInfo);

        let grupo = listaGrupos[i];
        let opt = document.createElement("option");
        opt.value = i;
        opt.innerHTML = grupo.toString();
        select.appendChild(opt);
    })
}

function removerGru(i){
    listaGrupos.splice(i,1);
    localStorage.setItem("listaGrupos", JSON.stringify(listaGrupos));
    contadores();
    carregarGrupos();
}
function btnInfoGru(i){
    alert(listaGrupos[i].exibirDados());
}

document.querySelector("#btnCadastrarContato").addEventListener("click", cadastrarContato);
function cadastrarContato(evento){
evento.preventDefault();
let contNome = document.querySelector("#contNome").value;
let contNumero = document.querySelector("#contNumero").value;
let contEmail = document.querySelector("#contEmail").value;
let grupoIndex = document.querySelector("#selectGrupo").value;
let grupo = listaGrupos[grupoIndex];
let objContato = new Contato (contNome, contNumero, contEmail, grupo);
listaContatos.push(objContato);
localStorage.setItem("listaContatos", JSON.stringify(listaContatos));
contadores();
carregarContatos();
limparContatos();
location.hash = "#listas";
};

function carregarContatos(){
    const ul = document.querySelector("#listaContatos");
    ul.innerHTML = "";
    listaContatos.forEach(function(cada, i){
        let li = document.createElement("li");
        li.innerHTML = listaContatos[i].toString();
        let btnRemover = document.createElement("button");
        btnRemover.innerHTML = "Remover";
        btnRemover.setAttribute("onclick", `removerCont(${i})`);
        li.appendChild(btnRemover);
        ul.appendChild(li);
        let btnInfo = document.createElement("button");
        btnInfo.innerHTML = "Info";
        btnInfo.setAttribute("onclick", `btnInfoCont(${i})`);
        li.appendChild(btnInfo);
    });
}
function removerCont(i){
    listaContatos.splice(i,1);
    localStorage.setItem("listaContatos", JSON.stringify(listaContatos));
    contadores();
    carregarContatos();
}
function btnInfoCont(i){
    alert(listaContatos[i].exibirDados());
}
//limpar campos
function limparGrupos(){
    document.querySelector("#gruNome").value = "";
    document.querySelector("#gruDescricao").value = "";
}
function limparContatos(){
    document.querySelector("#contNome").value = "";
    document.querySelector("#contNumero").value = "";
    document.querySelector("#contEmail").value = "";
}
var contadorCont;
var contadorGru;
function contadores(){
    contadorCont = listaContatos.length;
    contadorGru = listaGrupos.length;
    document.querySelector("#contadorCont").innerHTML = `Contatos (${contadorCont})`;
    document.querySelector("#contadorGru").innerHTML = `Grupos (${contadorGru})`;
}
