$(document).ready(function(){
    let burger = document.querySelector('.burger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.Mobile-Nav');

    burger.addEventListener('.click', function(){
        mobileNav.classList.add(' open');
    });
    times.addEventListener('.click',function(){
        mobileNav.classList.remove(' open');
    });
});