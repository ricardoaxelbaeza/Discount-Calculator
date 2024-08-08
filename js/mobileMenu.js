const hamburgerIcon = document.getElementById("hamburger-icon");
const webPageBody = document.getElementById("calculator");
const mobileNavMenu = document.getElementById("mobile-nav");
const navCurtain = document.getElementById("nav-curtain");
const body = document.getElementById("body");

hamburgerIcon.addEventListener("click",(menu)=>{
    toggleMobileMenu(mobileNavMenu);
});   

// Exits mobile menu if user presses anywhere other than menu
webPageBody.addEventListener("click",()=>{
    if(mobileNavMenu.classList.contains('open')){
        mobileNavMenu.classList.remove('open');
        navCurtain.style.visibility = "hidden";
        body.style.overflow = "visible"
    }
});


function toggleMobileMenu(menu){
    menu.classList.toggle('open');
    if(mobileNavMenu.classList.contains('open')){
        navCurtain.style.visibility = "visible";
        body.style.overflow = "hidden"
    }else{
        navCurtain.style.visibility = "hidden";
        body.style.overflow = "visible"
    }
}