/*
* Programa-menu responsivo + moda1 popUP
*Autor: Vitor Valles
*Data: 2024/04/11
*Vesão: v1.0
*/

//Menu resposivo usando função publica
//irá manipular a propriedade do displat após um teste condicional
function menu(){
    let menu = document.getElemeteByid("menu");

    if(menu.style.display == "block"){//funão menu.style.display serva para adulterar o display da class="menu"
        menu.style.display = "none";
    }else{
        menu.style.display = "block";
    }
}
//Modal ou popUP
const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector("close-btn");

//função privada ao objeto da classe onde,irá adicionar uma nova classe, via evento click
modalBtn.addEventListener("click",function(){
        modal.classList.add("open-modal");
});
//função privada ao objeto da classe onde, irá remover uma classe
mcloseBtn.addEventListener("click",function(){
    modal.classList.remove("open-modal");
})