"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let width = context.canvas.width;
let height = context.canvas.height;
let place = 25;




randomrect(25,25,400);
randomrect(50,50,350);
randomrect(75,75,300);
randomrect(100,100,250);
randomrect(125,125,200);
randomrect(150,150,150);
randomrect(175,175,100);
randomrect(200,200,50);
function randomrect(x,y,size){
let r = Math.floor(Math.random()* 255);
let g = Math.floor(Math.random()* 255);
let b = Math.floor(Math.random()* 255);
let color = "rgb(" + r +"," + g + "," + b +")";
console.log(r,g,b);
context.fillStyle = color;
context.fillRect(x ,y ,size,size);
}
