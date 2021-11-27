function linkAction(){
    const navMenu = document.getElementById('navArea')
    
    navMenu.classList.remove('custom')
}

function closeMenuOnLinkClick(){
    const navLink = document.querySelectorAll('.nav-link')

    if(navLink !== null){
        navLink.forEach(n => n.addEventListener('click', linkAction))
    }
}

function showMenu(){
    let menu = document.querySelector('.navArea');
    let btnMenu = document.querySelector('.btnMenu');

    if(btnMenu !== null){
        btnMenu.addEventListener('click', () => {
            menu.classList.add('custom');
        });
    }
}

function closeMenu(){
    let menu = document.querySelector('.navArea');
    let btnClose = document.querySelector('.btnClose');

    if(btnClose !== null){
        btnClose.addEventListener('click', () => {
            menu.classList.remove('custom');
        });
    }
}

function scrollToTop(){

    var btn_BTT = document.getElementById("btn_BTT");

    if(btn_BTT !== null){
        window.onscroll = function() { scrollFunction() }
    }

    if(btn_BTT !== null){
        btn_BTT.addEventListener('click', () => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });
    }
}

function scrollFunction() {
    
    var btn_BTT = document.getElementById("btn_BTT");

    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        btn_BTT.style.visibility = "visible";
    } else {
        btn_BTT.style.visibility = "hidden";
    }
}

function showNavigationMenu(){
    let navbarToggle = document.querySelector('.navbar-toggler');
    let collapseNav = document.querySelector('.collapse');
    
    if(navbarToggle !== null){
        navbarToggle.addEventListener('click', () => {
            if(collapseNav.classList.contains('show')){
                collapseNav.classList.remove('show')
            }
            else{
                collapseNav.classList.add('show');
            }
        })
    }
}