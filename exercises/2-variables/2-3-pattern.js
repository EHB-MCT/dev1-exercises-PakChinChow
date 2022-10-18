"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let width = context.canvas.width;
let height = context.canvas.height;

console.log(width,height);




pattern(0,0,width,height/6 * 4);
pattern2(0,(height/6*4),width,height);
pattern3((width/3),0,width/3,height);
pattern4(0,(height/6),width,height/4);

function pattern(x,y,width,height){


    context.beginPath();
    context.fillStyle = "#1d2951";
    context.rect(x,y,width,height);
    context.fill();
}
function pattern2(x,y,width,height){


    context.beginPath();
    context.fillStyle = "#007fff";
    context.rect(x,y,width,height);
    context.fill();
}
function pattern3(x,y,width,height){


    context.beginPath();
    context.fillStyle = "#d3d3d3";
    context.rect(x,y,width,height);
    context.fill();
}
function pattern4(x,y,width,height){


    context.beginPath();
    context.fillStyle = "#ff4500";
    context.rect(x,y,width,height);
    context.fill();
}


