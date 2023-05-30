const btn = document.querySelector('.btn');

const background = document.querySelector('.background');

const icon = document.querySelector('.fa');

const preloader = document.querySelector('.preloader');


btn.addEventListener('click', () => {
    if (btn.classList.contains("pause")) {
        btn.classList.remove("pause");
        background.play();
        icon.classList.add('fa-pause');
        icon.classList.remove('fa-play');
    } else {
        btn.classList.add("pause");
        background.pause();
        icon.classList.add('fa-play');
        icon.classList.remove('fa-pause');
    }
});


window.addEventListener('load', () => {
    preloader.style.zIndex = -2;
});



