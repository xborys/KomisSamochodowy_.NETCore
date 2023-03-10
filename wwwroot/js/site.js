// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const nameInput = document.querySelector("#imie");
const lastnameInput = document.querySelector("#nazwisko");
const email = document.querySelector("#email");
const phone = document.querySelector("#telefon");
const message = document.querySelector("#wiadomosc");
const succes = document.querySelector("#succes");
const erroeNodes = document.querySelectorAll(".error");

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
});

sr.reveal('.text', { delay: 200, origin: 'top' });
sr.reveal('.heading', { delay: 200, origin: 'top' });
sr.reveal('.services', { delay: 200, origin: 'top' });
sr.reveal('.services-container', { delay: 600, origin: 'right' });
sr.reveal('.about', { delay: 200, origin: 'top' });
sr.reveal('.about-container', { delay: 100, origin: 'top' });
sr.reveal('.warunki', { delay: 200, origin: 'top' });
sr.reveal('.textwar', { delay: 100, origin: 'top' });
sr.reveal('.contact', { delay: 200, origin: 'top' });
sr.reveal('#formularz', { delay: 600, origin: 'right' });


function validateForm() {

    usunBlad();

    let errorFlag = false;

    if (nameInput.value.length < 1) {
        erroeNodes[0].innerText = "Pole nie może być puste";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }

    if (lastnameInput.value.length < 1) {
        erroeNodes[1].innerText = "Poles nie może być puste";
        lastnameInput.classList.add("error-border");
        errorFlag = true;
    }

    if (!emailIsValid(email.value)) {
        erroeNodes[2].innerText = "Nie wpisano poprawnego adresu e-mail";
        email.classList.add("error-border");
        errorFlag = true;
    }

    if (!phoneIsValid(phone.value)) {
        erroeNodes[3].innerText = "Nie wpisano poprawnego numeru telefonu";
        phone.classList.add("error-border");
        errorFlag = true;
    }

    if (message.value.length < 30) {
        erroeNodes[4].innerText = "Wiadomość jest mniejsza niż 30 znaków";
        message.classList.add("error-border");
        errorFlag = true;
    }

    if (!errorFlag) {
        wyslano.innerText = "Dziękujemy za wysłanie formularza";
    }
}

function usunBlad() {
    for (let i = 0; i < erroeNodes.length; i++) {
        erroeNodes[i].innerText = "";
    }
    wyslano.innerText = "";
    nameInput.classList.remove("error-border");
    lastnameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    phone.classList.remove("error-border");
    message.classList.remove("error-border");
}

function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function phoneIsValid(phone) {
    return /^[0-9]{9}$/.test(phone);
}

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('#topBtn').fadeIn();
        } else {
            $('#topBtn').fadeOut();
        }
    });

    $("#topBtn").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1);
    });
});

$(document).ready(function () {
    $('#next1').on('click', function () {
        var currentImg = $('.active1');
        var nextImg = currentImg.next();

        if (nextImg.length) {
            currentImg.removeClass('active1').css('z-index', -10);
            nextImg.addClass('active1').css('z-index', 10);
        }
    });

    $('#prev1').on('click', function () {
        var currentImg = $('.active1');
        var prevImg = currentImg.prev();

        if (prevImg.length) {
            currentImg.removeClass('active1').css('z-index', -10);
            prevImg.addClass('active1').css('z-index', 10);
        }
    });
});

$(document).ready(function () {
    $('#next2').on('click', function () {
        var currentImg = $('.active2');
        var nextImg = currentImg.next();

        if (nextImg.length) {
            currentImg.removeClass('active2').css('z-index', -10);
            nextImg.addClass('active2').css('z-index', 10);
        }
    });

    $('#prev2').on('click', function () {
        var currentImg = $('.active2');
        var prevImg = currentImg.prev();

        if (prevImg.length) {
            currentImg.removeClass('active2').css('z-index', -10);
            prevImg.addClass('active2').css('z-index', 10);
        }
    });
});

$(document).ready(function () {
    $('#next3').on('click', function () {
        var currentImg = $('.active3');
        var nextImg = currentImg.next();

        if (nextImg.length) {
            currentImg.removeClass('active3').css('z-index', -10);
            nextImg.addClass('active3').css('z-index', 10);
        }
    });

    $('#prev3').on('click', function () {
        var currentImg = $('.active3');
        var prevImg = currentImg.prev();

        if (prevImg.length) {
            currentImg.removeClass('active3').css('z-index', -10);
            prevImg.addClass('active3').css('z-index', 10);
        }
    });
});

$(document).ready(function () {
    $('#next4').on('click', function () {
        var currentImg = $('.active4');
        var nextImg = currentImg.next();

        if (nextImg.length) {
            currentImg.removeClass('active4').css('z-index', -10);
            nextImg.addClass('active4').css('z-index', 10);
        }
    });

    $('#prev4').on('click', function () {
        var currentImg = $('.active4');
        var prevImg = currentImg.prev();

        if (prevImg.length) {
            currentImg.removeClass('active4').css('z-index', -10);
            prevImg.addClass('active4').css('z-index', 10);
        }
    });
});

$(document).ready(function () {
    $('#next5').on('click', function () {
        var currentImg = $('.active5');
        var nextImg = currentImg.next();

        if (nextImg.length) {
            currentImg.removeClass('active5').css('z-index', -10);
            nextImg.addClass('active5').css('z-index', 10);
        }
    });

    $('#prev5').on('click', function () {
        var currentImg = $('.active5');
        var prevImg = currentImg.prev();

        if (prevImg.length) {
            currentImg.removeClass('active5').css('z-index', -10);
            prevImg.addClass('active5').css('z-index', 10);
        }
    });
});

$(document).ready(function () {
    $('#next6').on('click', function () {
        var currentImg = $('.active6');
        var nextImg = currentImg.next();

        if (nextImg.length) {
            currentImg.removeClass('active6').css('z-index', -10);
            nextImg.addClass('active6').css('z-index', 10);
        }
    });

    $('#prev6').on('click', function () {
        var currentImg = $('.active6');
        var prevImg = currentImg.prev();

        if (prevImg.length) {
            currentImg.removeClass('active6').css('z-index', -10);
            prevImg.addClass('active6').css('z-index', 10);
        }
    });
});

$(document).ready(function () {
    $('#next7').on('click', function () {
        var currentImg = $('.active7');
        var nextImg = currentImg.next();

        if (nextImg.length) {
            currentImg.removeClass('active7').css('z-index', -10);
            nextImg.addClass('active7').css('z-index', 10);
        }
    });

    $('#prev7').on('click', function () {
        var currentImg = $('.active7');
        var prevImg = currentImg.prev();

        if (prevImg.length) {
            currentImg.removeClass('active7').css('z-index', -10);
            prevImg.addClass('active7').css('z-index', 10);
        }
    });
});

$(document).ready(function () {
    $('#next8').on('click', function () {
        var currentImg = $('.active8');
        var nextImg = currentImg.next();

        if (nextImg.length) {
            currentImg.removeClass('active8').css('z-index', -10);
            nextImg.addClass('active8').css('z-index', 10);
        }
    });

    $('#prev8').on('click', function () {
        var currentImg = $('.active8');
        var prevImg = currentImg.prev();

        if (prevImg.length) {
            currentImg.removeClass('active8').css('z-index', -10);
            prevImg.addClass('active8').css('z-index', 10);
        }
    });
});

$(document).ready(function () {
    $('#next9').on('click', function () {
        var currentImg = $('.active9');
        var nextImg = currentImg.next();

        if (nextImg.length) {
            currentImg.removeClass('active9').css('z-index', -10);
            nextImg.addClass('active9').css('z-index', 10);
        }
    });

    $('#prev9').on('click', function () {
        var currentImg = $('.active9');
        var prevImg = currentImg.prev();

        if (prevImg.length) {
            currentImg.removeClass('active9').css('z-index', -10);
            prevImg.addClass('active9').css('z-index', 10);
        }
    });
});

$(document).ready(function () {
    $('#next10').on('click', function () {
        var currentImg = $('.active10');
        var nextImg = currentImg.next();

        if (nextImg.length) {
            currentImg.removeClass('active10').css('z-index', -10);
            nextImg.addClass('active10').css('z-index', 10);
        }
    });

    $('#prev10').on('click', function () {
        var currentImg = $('.active10');
        var prevImg = currentImg.prev();

        if (prevImg.length) {
            currentImg.removeClass('active10').css('z-index', -10);
            prevImg.addClass('active10').css('z-index', 10);
        }
    });
});

$(document).ready(function () {
    $('#next11').on('click', function () {
        var currentImg = $('.active11');
        var nextImg = currentImg.next();

        if (nextImg.length) {
            currentImg.removeClass('active11').css('z-index', -10);
            nextImg.addClass('active11').css('z-index', 10);
        }
    });

    $('#prev11').on('click', function () {
        var currentImg = $('.active11');
        var prevImg = currentImg.prev();

        if (prevImg.length) {
            currentImg.removeClass('active11').css('z-index', -10);
            prevImg.addClass('active11').css('z-index', 10);
        }
    });
});

$(document).ready(function () {
    $('#next12').on('click', function () {
        var currentImg = $('.active12');
        var nextImg = currentImg.next();

        if (nextImg.length) {
            currentImg.removeClass('active12').css('z-index', -10);
            nextImg.addClass('active12').css('z-index', 10);
        }
    });

    $('#prev12').on('click', function () {
        var currentImg = $('.active12');
        var prevImg = currentImg.prev();

        if (prevImg.length) {
            currentImg.removeClass('active12').css('z-index', -10);
            prevImg.addClass('active12').css('z-index', 10);
        }
    });
});
