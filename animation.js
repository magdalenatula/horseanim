"use strict";

// window.addEventListener("DOMContentLoaded", SVGloading);
window.addEventListener("DOMContentLoaded", loadSVG);

let playBtn = document.querySelector('#playBtn');
let firstPage = document.querySelector('#svg_firstpage');
let main_headline = document.querySelector('.main_headline');
let instructions = document.querySelector('#instructions');
instructions.style.display = "none";



function SVGloading() {
    fetch("loading.svg")
        .then(response => response.text())
        .then(svgdata => {
            document
                .querySelector("#loading")
                .insertAdjacentHTML("afterbegin", svgdata);
        });
}


function loadSVG() {
    fetch("firstpage.svg")
        .then(response => response.text())
        .then(svgdata => {
            document
                .querySelector("#svg_firstpage")
                .insertAdjacentHTML("afterbegin", svgdata);

        });
}

function secondSVG() {
    fetch("pointer.svg")
        .then(response => response.text())
        .then(svgdata => {
            document
                .querySelector("#pointer")
                .insertAdjacentHTML("afterbegin", svgdata);
        });
}


playBtn.addEventListener("click", nextPage);
let counter = 0;

function nextPage() {
    counter++;

    if (counter == 1) {
        console.log("one click");
        firstPage.remove();
        main_headline.classList.add('hide');
        secondSVG();
        instructions.style.display = "block";
    }

    else if (counter == 2) {
        console.log("second click");
        instructions.remove();
    }
}

