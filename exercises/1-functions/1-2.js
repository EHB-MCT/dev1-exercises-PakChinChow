"use script";

alert("Test oefening 2");
let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

coloredBox();

function coloredBox(){


    context.beginPath();
    context.moveTo(50,50);
    context.lineTo(200,50);
    context.moveTo(50,200);
    context.lineTo(50,50);
    context.moveTo(200,200);
    context.lineTo(200,50);
    context.moveTo(50,200);
    context.lineTo(200,200);
    context.stroke();


    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(50,50);
    context.lineTo(200,200);
    context.moveTo(200,50);
    context.lineTo(50,200);
    context.stroke();
    


}