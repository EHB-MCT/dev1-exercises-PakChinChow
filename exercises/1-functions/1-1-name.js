"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawName();

function drawName(){

    context.lineWidth =5;
    context.strokeStyle ="red";
    context.beginPath();
    context.moveTo(50,25);
    context.lineTo(100, 25);
    context.moveTo(100,25);
    context.lineTo(100, 50);
    context.moveTo(50,25);
    context.lineTo(50, 100);
    context.moveTo(50,50);
    context.lineTo(100, 50);
    context.stroke();
    
    context.lineWidth =5;
    context.strokeStyle ="Blue";
    context.beginPath();
    context.moveTo(125,100);
    context.lineTo(150, 25);
    context.moveTo(150,25);
    context.lineTo(175, 100);
    context.moveTo(130,60);
    context.lineTo(170, 60);
    context.stroke();

    context.lineWidth =5;
    context.strokeStyle ="green";
    context.beginPath();
    context.moveTo(200,25);
    context.lineTo(200, 100);
    context.moveTo(200,60);
    context.lineTo(250, 25);
    context.moveTo(200,60);
    context.lineTo(250, 100);
    context.stroke();

    context.lineWidth =5;
    context.strokeStyle ="pink";
    context.beginPath();
    context.moveTo(300,25);
    context.lineTo(350, 25);
    context.moveTo(300,25);
    context.lineTo(300, 100);
    context.moveTo(300,100);
    context.lineTo(350, 100);
    context.stroke();
}