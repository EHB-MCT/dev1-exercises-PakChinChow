"use script";

alert("Test oefening 3");
let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

rectangles();

function rectangles(){

    context.beginPath();
    context.strokeStyle = "#FF6600";
    context.fillStyle = "white";
    context.rect(50,50,150,150);
    context.fill();
    context.stroke();

    context.beginPath();
    context.strokeStyle = "#FF6600";
    context.fillStyle = "white";
    context.rect(200,200,150,150);
    context.fill();
    context.stroke();

    context.beginPath();
    context.strokeStyle = "#FF6600";
    context.fillStyle = "black";
    context.rect(125,125,150,150);
    context.fill();
    context.stroke();

    context.beginPath();
    context.strokeStyle = "black";
    context.fillStyle = "black";
    context.rect(50,320,30,30);
    context.fill();
    context.stroke();

    context.beginPath();
    context.strokeStyle = "black";
    context.fillStyle = "black";
    context.rect(320,50,30,30);
    context.fill();
    context.stroke();

    context.beginPath();
    context.strokeStyle = "#FF6600";
    context.fillStyle = "white";
    context.rect(80,275,45,45);
    context.fill();
    context.stroke();

    context.beginPath();
    context.strokeStyle = "#FF6600";
    context.fillStyle = "white";
    context.rect(275,80,45,45);
    context.fill();
    context.stroke();
}