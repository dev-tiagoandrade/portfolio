let site = document.querySelector('.html');

//PEGA O CSS MEDIA RESPONSÁVEL POR VERIFICAR O MODO PADRÃO DO SISTEMA
const temaescuro = window.matchMedia('(prefers-color-scheme: dark)');

//VERIFICAR O MODO DE COR PADRÃO DO USUÁRIO
function trocatema(){
    //LAÇO DE REPETIÇÃO PARA EFETUAR A VERIFICAÇÃO TANTO NO MODO DESKTOP QUANTO NO MOBILE
    for (let x = 0; x <= 1; x++){
        //SE O MODO ESCURO ESTVER ATIVADO ELE VERIFICA QUAL O MODO SELECIONADO ANTERIORMENTE PELO USUÁRIO (SE NÃO HOUVER NENHUM ELE APLICA O MODO PADÃO DO SISTEMA)
        if (temaescuro.matches) {
            //SE O MODO SELECIONADO ANTERIORMENTE FOR O MODO ESCURO, ELE APLICA O MODO ESCURO AO SITE
            if (localStorage.temaUser === '1') {
                site.classList.add('dark');
                document.querySelectorAll('.theme')[x].innerHTML = '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.55 18.09L3.96 19.5L5.76 17.71L4.34 16.29M11 5C7.69 5 5 7.69 5 11C5 14.31 7.69 17 11 17C14.31 17 17 14.31 17 11C17 7.68 14.31 5 11 5ZM19 12H22V10H19M16.24 17.71L18.04 19.5L19.45 18.09L17.66 16.29M19.45 4L18.04 2.6L16.24 4.39L17.66 5.81M12 0H10V3H12M5.76 4.39L3.96 2.6L2.55 4L4.34 5.81L5.76 4.39ZM0 12H3V10H0M12 19H10V22H12" fill="#FCFCFC"/></svg>'
            } 
            if (localStorage.temaUser === '0') {
                //SE O MODO SELECIONADO ANTERIORMENTE FOR O MODO CLARO, ELE APLICA O MODO CLARO AO SITE
                site.classList.remove('dark');
            document.querySelectorAll('.theme')[x].innerHTML = '<svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.0003 15.1608C2.7853 16.5206 3.87948 17.6765 5.19426 18.5349C6.50903 19.3932 8.00746 19.9299 9.56821 20.1014C11.129 20.273 12.7082 20.0746 14.178 19.5224C15.6479 18.9701 16.967 18.0795 18.0286 16.9227C15.9512 17.3853 13.7804 17.173 11.8319 16.3168C9.88341 15.4605 8.25894 14.0049 7.19478 12.1617C6.13062 10.3186 5.68229 8.18395 5.91499 6.06839C6.14769 3.95284 7.04929 1.9667 8.48863 0.398899C6.95595 0.739878 5.5251 1.43698 4.31192 2.43377C3.09874 3.43056 2.13733 4.69902 1.50553 6.13645C0.873728 7.57389 0.589293 9.1399 0.675251 10.7077C0.761209 12.2755 1.21514 13.801 2.0003 15.1608Z" fill="#1B1B1F"/></svg>'
            } else {
                //SE NÃO HOUVER MODO SELECIONADO, APLICA O MODO ESCURO
                site.classList.add('dark');
                document.querySelectorAll('.theme')[x].innerHTML = '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.55 18.09L3.96 19.5L5.76 17.71L4.34 16.29M11 5C7.69 5 5 7.69 5 11C5 14.31 7.69 17 11 17C14.31 17 17 14.31 17 11C17 7.68 14.31 5 11 5ZM19 12H22V10H19M16.24 17.71L18.04 19.5L19.45 18.09L17.66 16.29M19.45 4L18.04 2.6L16.24 4.39L17.66 5.81M12 0H10V3H12M5.76 4.39L3.96 2.6L2.55 4L4.34 5.81L5.76 4.39ZM0 12H3V10H0M12 19H10V22H12" fill="#FCFCFC"/></svg>'
            }
        } else {
            if (localStorage.temaUser === '1') {
                site.classList.add('dark');
                document.querySelectorAll('.theme')[x].innerHTML = '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.55 18.09L3.96 19.5L5.76 17.71L4.34 16.29M11 5C7.69 5 5 7.69 5 11C5 14.31 7.69 17 11 17C14.31 17 17 14.31 17 11C17 7.68 14.31 5 11 5ZM19 12H22V10H19M16.24 17.71L18.04 19.5L19.45 18.09L17.66 16.29M19.45 4L18.04 2.6L16.24 4.39L17.66 5.81M12 0H10V3H12M5.76 4.39L3.96 2.6L2.55 4L4.34 5.81L5.76 4.39ZM0 12H3V10H0M12 19H10V22H12" fill="#FCFCFC"/></svg>'
            } else {
                site.classList.remove('dark');
            document.querySelectorAll('.theme')[x].innerHTML = '<svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.0003 15.1608C2.7853 16.5206 3.87948 17.6765 5.19426 18.5349C6.50903 19.3932 8.00746 19.9299 9.56821 20.1014C11.129 20.273 12.7082 20.0746 14.178 19.5224C15.6479 18.9701 16.967 18.0795 18.0286 16.9227C15.9512 17.3853 13.7804 17.173 11.8319 16.3168C9.88341 15.4605 8.25894 14.0049 7.19478 12.1617C6.13062 10.3186 5.68229 8.18395 5.91499 6.06839C6.14769 3.95284 7.04929 1.9667 8.48863 0.398899C6.95595 0.739878 5.5251 1.43698 4.31192 2.43377C3.09874 3.43056 2.13733 4.69902 1.50553 6.13645C0.873728 7.57389 0.589293 9.1399 0.675251 10.7077C0.761209 12.2755 1.21514 13.801 2.0003 15.1608Z" fill="#1B1B1F"/></svg>'
            } 
        }
    }
}

//ADICIONAR UM LISTENER PARA ESCUTAR SE HOUVER TROCA DE MODO PADRÃO DO SISTEMA
temaescuro.addEventListener('change', () => {
    trocatema();
    localStorage.clear("temaUser")
});
trocatema(temaescuro.matches);

//TROCAR O MODO DE COR DE ACORDO COM A PREFERÊNCIA DO USUÁRIO
function tema(){
    //ADICIONA OU REMOVE A CLASSE "DARK" NO HTML
    site.classList.toggle('dark');
    
    //LAÇO DE REPETIÇÃO PARA EFETUAR A VERIFICAÇÃO TANTO NO MODO DESKTOP QUANTO NO MOBILE
    for (let x = 0; x <=1; x++){
        //VERIFICA QUAL MODO FOI APLICADO
        if (site.classList.contains('dark')){
            //SE FOI O MODO ESCURO, ELE TROCA O ICONE DO BOTÃO DE ESCOLHER O TEMA PARA O SOL E ADICIONA A PREFERECIA DO USUÁRIO NO LOCALSTORAGE
            document.querySelectorAll('.theme')[x].innerHTML = '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.55 18.09L3.96 19.5L5.76 17.71L4.34 16.29M11 5C7.69 5 5 7.69 5 11C5 14.31 7.69 17 11 17C14.31 17 17 14.31 17 11C17 7.68 14.31 5 11 5ZM19 12H22V10H19M16.24 17.71L18.04 19.5L19.45 18.09L17.66 16.29M19.45 4L18.04 2.6L16.24 4.39L17.66 5.81M12 0H10V3H12M5.76 4.39L3.96 2.6L2.55 4L4.34 5.81L5.76 4.39ZM0 12H3V10H0M12 19H10V22H12" fill="#FCFCFC"/></svg>'
            localStorage.setItem("temaUser", '1')
        } else {
            //SE FOR O MODO CLARO, ELE TROCA O ICONE DO BOTÃO DE ESCOLHER O TEMA PARA A LUA E ADICIONA A PREFERECIA DO USUÁRIO NO LOCALSTORAGE
            document.querySelectorAll('.theme')[x].innerHTML = '<svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.0003 15.1608C2.7853 16.5206 3.87948 17.6765 5.19426 18.5349C6.50903 19.3932 8.00746 19.9299 9.56821 20.1014C11.129 20.273 12.7082 20.0746 14.178 19.5224C15.6479 18.9701 16.967 18.0795 18.0286 16.9227C15.9512 17.3853 13.7804 17.173 11.8319 16.3168C9.88341 15.4605 8.25894 14.0049 7.19478 12.1617C6.13062 10.3186 5.68229 8.18395 5.91499 6.06839C6.14769 3.95284 7.04929 1.9667 8.48863 0.398899C6.95595 0.739878 5.5251 1.43698 4.31192 2.43377C3.09874 3.43056 2.13733 4.69902 1.50553 6.13645C0.873728 7.57389 0.589293 9.1399 0.675251 10.7077C0.761209 12.2755 1.21514 13.801 2.0003 15.1608Z" fill="#1B1B1F"/></svg>'
            localStorage.setItem("temaUser", '0')
        }
    }   
}

//ABRIR E FECHAR MENU DE NAVEGAÇÃO
let menu = document.querySelector('.nav-icon');
let nav = document.querySelector('#nav')

function AbreMenu() {
    //ADCIONA OU REMOVE A CLASSE "CLOSE" DO MENU
    nav.classList.toggle('close');

    //ADICIONA OU REMOVE A CLASSE "STATIC" NO BODY PARA IMPEDIR MOVIMENTO DE SCOLL DA TELA ENQUANTO O MENU ESTIVER ABERTO
    document.body.classList.toggle('static')
    
    //VERIFICA SE O MENU ESTÁ ABERTO OU FECHADO
    if (nav.classList.contains('close')){
        //SE ESTIVER FECHADO, ABRE O MENU E SUBSTITUI O ICONE DE MENU POR UM X
        menu.innerHTML = '<svg width="33" height="29" viewBox="0 0 33 29" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="25.52" width="33" height="3.48" rx="1.74" fill="#1B1B1F"/><rect width="33" height="3.48" rx="1.74" fill="#1B1B1F"/><rect x="9" y="12.76" width="24" height="3.48" rx="1.74" fill="#1B1B1F"/></svg>'
    } else {
        //SE ESTIVER ABERTO, FECHA O MENU E SUBSTITUI O ICONE DE X NO MENU PELO PADÃO
        menu.innerHTML = '<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.602539" y="24.1768" width="33" height="3.48" rx="1.74" transform="rotate(-45 0.602539 24.1768)" fill="#FCFCFC"/><rect x="23.937" y="26.6376" width="33" height="3.48" rx="1.74" transform="rotate(-135 23.937 26.6376)" fill="#FCFCFC"/></svg>'
    }
    
}

//ADICIONAR BACKGROUND NO HEADER QUANDO O SCROLL Y DA TELA PASSAR DE 80PX E O BOTÃO DE VOLTAR AO TOPO
let header = document.querySelector("#header")
let btnTopo = document.querySelector('.btn-topo');

window.onscroll = function() {
    //VERIFICA A POSIÇÃO DE SCROLL Y DA TELA
    if (window.scrollY > 80) {
        //SE FOR MAIOR QUE 80PX ADICIONA BACKGROUND AO HEADER
        header.style.backgroundColor = "var(--backgrond-color)";
    } else {
        //SE FOR MENOR QUE 80PX REMOVE O BACKGROUND DO HEADER
        header.style.backgroundColor = "transparent";
    }

    //VERIFICA A POSIÇÃO DE SCROLL Y DA TELA
    if (window.scrollY > 1000){
        //SE FOR MAIOR QUE 1000PX ADICIONA O BOTÃO DE VOLTAR AO TOPO
        btnTopo.style.display = "flex";
    } else {
        //SE FOR MENOR QUE 1000PX REMOVE O BOTÃO DE VOLTAR AO TOPO
        btnTopo.style.display = "none";
    }

}

//ALTERA VERSÃO DE VISUALIZAÇÃO
function AlteraVersao(){
    var projeto = document.querySelector(".projeto-img");
    var spantexto = document.querySelector(".spantexto")
    if (projeto.src.match('nm-01.png')){
        projeto.src = 'nm-02.png';
        projeto.classList.add("small")
        spantexto.innerHTML = "Versão Mobile"
    } else {
        projeto.src = 'nm-01.png';
        projeto.classList.remove("small")
        spantexto.innerHTML = "Versão Desktop"
    }
}