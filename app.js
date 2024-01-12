const navList = document.querySelector("#nav");
const navBtn = document.querySelector("#nav__button");
const navImg = document.querySelector("#nav__image");


navBtn.onclick = () => {
    navImg.style.backgraund = "#fff"
    if(navList.classList.toggle('open')) {
        navImg.src = "./img/nav__btn/NAV CLOSE.svg"
    } else {

        navImg.src = "./img/nav__btn/NAV.svg"
    }
}


