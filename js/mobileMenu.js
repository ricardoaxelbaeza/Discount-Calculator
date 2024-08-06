const hamburgerIcon = document.getElementById("hamburger-icon");
const webPageBody = document.getElementById("calculator");
const mobileNavMenu = document.getElementById("mobile-nav");

hamburgerIcon.addEventListener("click",(menu)=>{
    toggleMobileMenu(mobileNavMenu);
});   

// Exits mobile menu if user presses anywhere other than menu
webPageBody.addEventListener("click",()=>{
    if(mobileNavMenu.classList.contains('open')){
        mobileNavMenu.classList.remove('open');
    }
});


function toggleMobileMenu(menu){
    menu.classList.toggle('open');
}