let tNc = document.getElementsByClassName("copyrights")[0]
let thisYear = Number(new Date().getFullYear())

tNc.innerHTML = `© ${thisYear} Probhakar Sarkar`

function sayHi() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const data = JSON.parse(xhttp.response);
            console.log(data);
            const elm = document.getElementById('ttl_wb_visit');
            elm.innerText = `(Visited ${data.totalVisitorCount} times, ${data.todayCount} visits today)`
        }
    };
    xhttp.open("GET", "https://peaceful-fortress-22849.herokuapp.com/hi", true);
    xhttp.send();
}
sayHi()

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

