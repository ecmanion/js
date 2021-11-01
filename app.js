var toggle = false;

document.body.querySelector(".dropdown").addEventListener("Click", function (){
    toggle=!toggle;
if (toggle){
    document.body.querySelector(".menu").style.right="0";
}else {
    document.body.querySelector(".menu").style.right="-150px";
}
})
