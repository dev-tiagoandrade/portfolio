console.log(localStorage.getItem("temaEscuro"))
let menu = document.querySelector('.nav-icon');
let nav = document.querySelector('#nav')
function AbreMenu() {
    nav.classList.toggle('close');
    document.body.classList.toggle('static')
    
    if (nav.classList.contains('close')){
        menu.innerHTML = '<svg width="33" height="29" viewBox="0 0 33 29" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="25.52" width="33" height="3.48" rx="1.74" fill="#1B1B1F"/><rect width="33" height="3.48" rx="1.74" fill="#1B1B1F"/><rect x="9" y="12.76" width="24" height="3.48" rx="1.74" fill="#1B1B1F"/></svg>'
    } else {
        menu.innerHTML = '<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.602539" y="24.1768" width="33" height="3.48" rx="1.74" transform="rotate(-45 0.602539 24.1768)" fill="#FCFCFC"/><rect x="23.937" y="26.6376" width="33" height="3.48" rx="1.74" transform="rotate(-135 23.937 26.6376)" fill="#FCFCFC"/></svg>'
    }
    
}

let header = document.querySelector("#header")
window.onscroll = function() {
    if (window.scrollY > 80) {
        header.style.backgroundColor = "var(--backgrond-color)";
    } else {
        header.style.backgroundColor = "transparent";
    }
}

let site = document.querySelector('.html');

const temaescuro = window.matchMedia('(prefers-color-scheme: dark)').matches;

function trocatema(){
    for (let x = 0; x <= 1; x++){
        if (temaescuro) {
            if (localStorage.temaEscuro === '1') {
                site.classList.add('dark');
                document.querySelectorAll('.theme')[x].innerHTML = '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.55 18.09L3.96 19.5L5.76 17.71L4.34 16.29M11 5C7.69 5 5 7.69 5 11C5 14.31 7.69 17 11 17C14.31 17 17 14.31 17 11C17 7.68 14.31 5 11 5ZM19 12H22V10H19M16.24 17.71L18.04 19.5L19.45 18.09L17.66 16.29M19.45 4L18.04 2.6L16.24 4.39L17.66 5.81M12 0H10V3H12M5.76 4.39L3.96 2.6L2.55 4L4.34 5.81L5.76 4.39ZM0 12H3V10H0M12 19H10V22H12" fill="#FCFCFC"/></svg>'
            } else {
                site.classList.remove('dark');
            document.querySelectorAll('.theme')[x].innerHTML = '<svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.0003 15.1608C2.7853 16.5206 3.87948 17.6765 5.19426 18.5349C6.50903 19.3932 8.00746 19.9299 9.56821 20.1014C11.129 20.273 12.7082 20.0746 14.178 19.5224C15.6479 18.9701 16.967 18.0795 18.0286 16.9227C15.9512 17.3853 13.7804 17.173 11.8319 16.3168C9.88341 15.4605 8.25894 14.0049 7.19478 12.1617C6.13062 10.3186 5.68229 8.18395 5.91499 6.06839C6.14769 3.95284 7.04929 1.9667 8.48863 0.398899C6.95595 0.739878 5.5251 1.43698 4.31192 2.43377C3.09874 3.43056 2.13733 4.69902 1.50553 6.13645C0.873728 7.57389 0.589293 9.1399 0.675251 10.7077C0.761209 12.2755 1.21514 13.801 2.0003 15.1608Z" fill="#1B1B1F"/></svg>'
            } 
        } else {
            if (localStorage.temaEscuro === '1') {
                site.classList.add('dark');
                document.querySelectorAll('.theme')[x].innerHTML = '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.55 18.09L3.96 19.5L5.76 17.71L4.34 16.29M11 5C7.69 5 5 7.69 5 11C5 14.31 7.69 17 11 17C14.31 17 17 14.31 17 11C17 7.68 14.31 5 11 5ZM19 12H22V10H19M16.24 17.71L18.04 19.5L19.45 18.09L17.66 16.29M19.45 4L18.04 2.6L16.24 4.39L17.66 5.81M12 0H10V3H12M5.76 4.39L3.96 2.6L2.55 4L4.34 5.81L5.76 4.39ZM0 12H3V10H0M12 19H10V22H12" fill="#FCFCFC"/></svg>'
            } else {
                site.classList.remove('dark');
            document.querySelectorAll('.theme')[x].innerHTML = '<svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.0003 15.1608C2.7853 16.5206 3.87948 17.6765 5.19426 18.5349C6.50903 19.3932 8.00746 19.9299 9.56821 20.1014C11.129 20.273 12.7082 20.0746 14.178 19.5224C15.6479 18.9701 16.967 18.0795 18.0286 16.9227C15.9512 17.3853 13.7804 17.173 11.8319 16.3168C9.88341 15.4605 8.25894 14.0049 7.19478 12.1617C6.13062 10.3186 5.68229 8.18395 5.91499 6.06839C6.14769 3.95284 7.04929 1.9667 8.48863 0.398899C6.95595 0.739878 5.5251 1.43698 4.31192 2.43377C3.09874 3.43056 2.13733 4.69902 1.50553 6.13645C0.873728 7.57389 0.589293 9.1399 0.675251 10.7077C0.761209 12.2755 1.21514 13.801 2.0003 15.1608Z" fill="#1B1B1F"/></svg>'
            } 
        }
    }
}

temaescuro.addListener(trocatema());
trocatema(temaescuro);


function tema(){
    site.classList.toggle('dark');
    for (let x = 0; x <=1; x++){
        if (site.classList.contains('dark')){
            document.querySelectorAll('.theme')[x].innerHTML = '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.55 18.09L3.96 19.5L5.76 17.71L4.34 16.29M11 5C7.69 5 5 7.69 5 11C5 14.31 7.69 17 11 17C14.31 17 17 14.31 17 11C17 7.68 14.31 5 11 5ZM19 12H22V10H19M16.24 17.71L18.04 19.5L19.45 18.09L17.66 16.29M19.45 4L18.04 2.6L16.24 4.39L17.66 5.81M12 0H10V3H12M5.76 4.39L3.96 2.6L2.55 4L4.34 5.81L5.76 4.39ZM0 12H3V10H0M12 19H10V22H12" fill="#FCFCFC"/></svg>'
            
        } else {
            document.querySelectorAll('.theme')[x].innerHTML = '<svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.0003 15.1608C2.7853 16.5206 3.87948 17.6765 5.19426 18.5349C6.50903 19.3932 8.00746 19.9299 9.56821 20.1014C11.129 20.273 12.7082 20.0746 14.178 19.5224C15.6479 18.9701 16.967 18.0795 18.0286 16.9227C15.9512 17.3853 13.7804 17.173 11.8319 16.3168C9.88341 15.4605 8.25894 14.0049 7.19478 12.1617C6.13062 10.3186 5.68229 8.18395 5.91499 6.06839C6.14769 3.95284 7.04929 1.9667 8.48863 0.398899C6.95595 0.739878 5.5251 1.43698 4.31192 2.43377C3.09874 3.43056 2.13733 4.69902 1.50553 6.13645C0.873728 7.57389 0.589293 9.1399 0.675251 10.7077C0.761209 12.2755 1.21514 13.801 2.0003 15.1608Z" fill="#1B1B1F"/></svg>'
            localStorage.setItem("temaEscuro", '0')
        }
    }
    if (site.classList.contains('dark')){
        localStorage.setItem("temaEscuro", '1')
    } else {
        localStorage.setItem("temaEscuro", '0')
    }
    console.log(localStorage.getItem("temaEscuro"))
    
}

