
const pubCloseBtn=document.querySelector(".mainPageBtn")
const pubMain=document.getElementById("backgroundBtn")
const body = document.querySelector("#main")

//!!-----------------------------------------------------------

const changer = document.querySelector(".temaChanger")
const copy = document.querySelector(".copy")
const made = document.querySelector(".made")

let thema = true

changer.addEventListener("click",tema)

function tema(){

    if(thema==true){
    console.log("works");
    changer.style.left ="45px"
    thema=false
    changer.style.background="black"
    copy.style.color="black";
    made.style.color="black";
    pubMain.style.color="yellow";
    body.style.filter= "drop-shadow(16px 15px 20px orange) invert(99%)";
}else{
    changer.style.left ="0"
    thema = true
    changer.style.background="rgb(226, 229, 231)"
    body.style.filter= "none";
    copy.style.color="white";
    made.style.color="white";

}
}

//!!-----------------------------------------------------------

const ddClick = document.querySelector(".main-li")
const ddMenuList = document.querySelectorAll(".drop-down-li")
const ddUl =document.querySelector(".drop-down-ul")


ddClick.addEventListener("click", ddMaker)

let menu = true ;

function ddMaker(){

    if(menu == true ){
        ddUl.style.transform="translateY(240px)"
        menu = false;
    } else {
        ddUl.style.transform="translateY(5px)"
        menu = true;
    }
}

//!!-----------------------------------------------------------





