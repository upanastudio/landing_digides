// function menampilkan kategori

for (var i = 1; i <= 7; i++) {
    if (i !== 7) {
        document.getElementById('div' + i).style.display = "none";
    } else {
        document.getElementById('div' + i).style.display = "block";
    }
}

function muncul1() {
    for (var i = 1; i < 7; i++) {
        aktif = document.querySelector('.pertanyaan' + i);
        if (i !== 1) {
            aktif.classList.remove('aktif');
        } else {
            aktif.classList.add('aktif');
        }
    }
    for (var i = 1; i < 8; i++) {
        if (i !== 1) {
            document.getElementById('div' + i).style.display = "none";
        } else {
            document.getElementById('div' + i).style.display = "block";
        }
    }
    for (var i = 1; i < 7; i++) {
        if (i !== 1) {
            document.querySelector('.logo' + i).src = "assets/img/iconCard/city-hall.svg";
        } else {
            document.querySelector('.logo' + i).src = "assets/img/iconCard/city-hall-hover.svg";
        }
    }
}

function muncul2() {
    for (var i = 1; i < 7; i++) {
        aktif = document.querySelector('.pertanyaan' + i);
        if (i !== 2) {
            aktif.classList.remove('aktif');
        } else {
            aktif.classList.add('aktif');
        }
    }
    for (var i = 1; i < 8; i++) {
        if (i !== 2) {
            document.getElementById('div' + i).style.display = "none";
        } else {
            document.getElementById('div' + i).style.display = "block";
        }
    }
    for (var i = 1; i < 7; i++) {
        if (i !== 2) {
            document.querySelector('.logo' + i).src = "assets/img/iconCard/city-hall.svg";
        } else {
            document.querySelector('.logo' + i).src = "assets/img/iconCard/city-hall-hover.svg";
        }
    }
}

function muncul3() {
    for (var i = 1; i < 7; i++) {
        aktif = document.querySelector('.pertanyaan' + i);
        if (i !== 3) {
            aktif.classList.remove('aktif');
        } else {
            aktif.classList.add('aktif');
        }
    }
    for (var i = 1; i < 8; i++) {
        if (i !== 3) {
            document.getElementById('div' + i).style.display = "none";
        } else {
            document.getElementById('div' + i).style.display = "block";
        }
    }
    for (var i = 1; i < 7; i++) {
        if (i !== 3) {
            document.querySelector('.logo' + i).src = "assets/img/iconCard/city-hall.svg";
        } else {
            document.querySelector('.logo' + i).src = "assets/img/iconCard/city-hall-hover.svg";
        }
    }
}

function muncul4() {
    for (var i = 1; i < 7; i++) {
        aktif = document.querySelector('.pertanyaan' + i);
        if (i !== 4) {
            aktif.classList.remove('aktif');
        } else {
            aktif.classList.add('aktif');
        }
    }
    for (var i = 1; i < 8; i++) {
        if (i !== 4) {
            document.getElementById('div' + i).style.display = "none";
        } else {
            document.getElementById('div' + i).style.display = "block";
        }
    }
    for (var i = 1; i < 7; i++) {
        if (i !== 4) {
            document.querySelector('.logo' + i).src = "assets/img/iconCard/city-hall.svg";
        } else {
            document.querySelector('.logo' + i).src = "assets/img/iconCard/city-hall-hover.svg";
        }
    }
}

function muncul5() {
    for (var i = 1; i < 7; i++) {
        aktif = document.querySelector('.pertanyaan' + i);
        if (i !== 5) {
            aktif.classList.remove('aktif');
        } else {
            aktif.classList.add('aktif');
        }
    }
    for (var i = 1; i < 8; i++) {
        if (i !== 5) {
            document.getElementById('div' + i).style.display = "none";
        } else {
            document.getElementById('div' + i).style.display = "block";
        }
    }
    for (var i = 1; i < 7; i++) {
        if (i !== 5) {
            document.querySelector('.logo' + i).src = "assets/img/iconCard/city-hall.svg";
        } else {
            document.querySelector('.logo' + i).src = "assets/img/iconCard/city-hall-hover.svg";
        }
    }
}

function muncul6() {
    for (var i = 1; i < 7; i++) {
        aktif = document.querySelector('.pertanyaan' + i);
        if (i !== 6) {
            aktif.classList.remove('aktif');
        } else {
            aktif.classList.add('aktif');
        }
    }
    for (var i = 1; i < 8; i++) {
        if (i !== 6) {
            document.getElementById('div' + i).style.display = "none";
        } else {
            document.getElementById('div' + i).style.display = "block";
        }
    }
    for (var i = 1; i < 7; i++) {
        if (i !== 6) {
            document.querySelector('.logo' + i).src = "assets/img/iconCard/city-hall.svg";
        } else {
            document.querySelector('.logo' + i).src = "assets/img/iconCard/city-hall-hover.svg";
        }
    }
}
// merubaha warna pertanyaan umum

$('.aktif1').on('mouseenter', function() {
    $('.pertanyaan1').addClass('card-hover');
});
$('.aktif1').on('mouseleave', function() {
    $('.pertanyaan1').removeClass('card-hover');
});
$('.aktif1').on('click', function() {
    $('.pertanyaan1').removeClass('card-hover');
    $('.pertanyaan1').off('mouseenter mouseleave');
});
$('.aktif2').on('mouseenter', function() {
    $('.pertanyaan2').addClass('card-hover');
});
$('.aktif2').on('mouseleave', function() {
    $('.pertanyaan2').removeClass('card-hover');
});
$('.aktif2').on('click', function() {
    $('.pertanyaan2').removeClass('card-hover');
    $('.pertanyaan2').off('mouseenter mouseleave');
});
$('.aktif3').on('mouseenter', function() {
    $('.pertanyaan3').addClass('card-hover');
});
$('.aktif3').on('mouseleave', function() {
    $('.pertanyaan3').removeClass('card-hover');
});
$('.aktif3').on('click', function() {
    $('.pertanyaan3').removeClass('card-hover');
    $('.pertanyaan3').off('mouseenter mouseleave');
});
$('.aktif4').on('mouseenter', function() {
    $('.pertanyaan4').addClass('card-hover');
});
$('.aktif4').on('mouseleave', function() {
    $('.pertanyaan4').removeClass('card-hover');
});
$('.aktif4').on('click', function() {
    $('.pertanyaan4').removeClass('card-hover');
    $('.pertanyaan4').off('mouseenter mouseleave');
});
$('.aktif5').on('mouseenter', function() {
    $('.pertanyaan5').addClass('card-hover');
});
$('.aktif5').on('mouseleave', function() {
    $('.pertanyaan5').removeClass('card-hover');
});
$('.aktif5').on('click', function() {
    $('.pertanyaan5').removeClass('card-hover');
    $('.pertanyaan5').off('mouseenter mouseleave');
});
$('.aktif6').on('mouseenter', function() {
    $('.pertanyaan6').addClass('card-hover');
});
$('.aktif6').on('mouseleave', function() {
    $('.pertanyaan6').removeClass('card-hover');
});
$('.aktif6').on('click', function() {
    $('.pertanyaan6').removeClass('card-hover');
    $('.pertanyaan6').off('mouseenter mouseleave');
});
// acordion