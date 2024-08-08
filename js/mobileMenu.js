const hamburgerIcon = document.getElementById("hamburger-icon");
const webPageBody = document.getElementById("calculator");
const mobileNavMenu = document.getElementById("mobile-nav");
const navCurtain = document.getElementById("nav-curtain");

hamburgerIcon.addEventListener("click",(menu)=>{
    toggleMobileMenu(mobileNavMenu);
});   

// Exits mobile menu if user presses anywhere other than menu
webPageBody.addEventListener("click",()=>{
    if(mobileNavMenu.classList.contains('open')){
        mobileNavMenu.classList.remove('open');
        navCurtain.style.visibility = "hidden";
    }
});


function toggleMobileMenu(menu){
    menu.classList.toggle('open');
    if(mobileNavMenu.classList.contains('open')){
        navCurtain.style.visibility = "visible";
    }else{
        navCurtain.style.visibility = "hidden";
    }
}