// variaveis
var guardar = document.getElementById("input1"); 
var titulo = document.getElementById("titulo"); 
var guardar1 = document.getElementById("input2");
var subtitulo = document.getElementById("subtitulo");
var guardar2 = document.getElementById("input3"); 
var sobre = document.getElementById("editarSobre")
var guardar3 = document.getElementById("input4");
var consultas = document.getElementById("Consultas");


//Armazzenamento de valores
var Armazena = localStorage.getItem("dbKey");
var Armazena1 = localStorage.getItem("dbKey1"); 
var Armazena2 = localStorage.getItem("dbKey2");
var Armazena3 = localStorage.getItem("dbKey3"); 


//botões salval 
var salvar = document.getElementById("botao-confirmar");
var salvar1 = document.getElementById("botao-confirmar2");
var salvar2 = document.getElementById("botao-confirmar3"); 
var salvar3 = document.getElementById("botao-confirmar4");


//botões de cancelar
var Cancelar = document.getElementById("botao-cancela");
var Cancelar1 = document.getElementById("botao-cancela2");
var Cancelar2 = document.getElementById("botao-cancela2");
var Cancelar3 = document.getElementById("botao-cancela4");



//funçoões
salvar.addEventListener("click",() => { 
var valor = guardar.value;
localStorage.setItem("dbKey", valor);});
titulo.innerText = Armazena;  

Cancelar.addEventListener("click", () => { 
localStorage.setItem("dbKey", "Hospital Panaceia")})
//---------------------------------------
salvar1.addEventListener("click",() => { 
var valor1 = guardar1.value; 
localStorage.setItem("dbKey1", valor1);});  
subtitulo.innerText = Armazena1;  
    
Cancelar1.addEventListener("click",() =>{ 
localStorage.setItem("dbKey1", "Desde 1947 salvando vidas");})
//--------------------------------------

salvar2.addEventListener("click",() => { 
var valor2 = guardar2 .value; 
localStorage.setItem("dbKey2", valor2);}); 
sobre.innerText = Armazena2; 

Cancelar2.addEventListener("click",() => { 
localStorage.setItem("dbKey2", "Construído em  1947, o Hospital Panaceia tem como objetivo o conforto e segurança para seus pacientes.  Há 74 anos mantemos nosso lema sobre que a transformação é algo natural para todos. Sempre com muito conforto recebemos diversos pacientes não só do estado, mas também do país inteiro. Os melhores profissionais do país estão aqui. Venha logo marcar sua consulta.");})
//--------------------------------------

salvar3.addEventListener("click", () =>{ 
var valor3 = guardar3.value; 
localStorage.setItem("dbKey3", valor3);});
consultas.innerText = Armazena3;  
     
Cancelar3.addEventListener("click",() =>{ 
localStorage.setItem("dbKey3", "Consultas: especialidades disponiveis");
})


const openModal1 = () => {
    document.querySelector('.modal1')
    .classList.add('active')}

const closeModal1 = () => {
    clearFields()
    document.querySelector('.modal1').classList.remove('active')
}

document.getElementById('cadastrarCliente')
    .addEventListener('click',  function(event) {
        event.preventDefault();
        openModal1()
    })

document.querySelector("#modalClose1")
  .addEventListener("click", function (event) {
    closeModal1();
  });


    