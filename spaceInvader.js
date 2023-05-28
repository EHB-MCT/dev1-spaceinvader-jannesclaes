"use strict";
let context;

setup();
drawBack();
drawInvader();

function setup() {
	let canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	context = canvas.getContext("2d");
}

function drawBack() {
	context.fillStyle = "black";
	context.beginPath();
	context.rect(0, 0, 300, 300);
	context.fill();
}

function drawInvader() {
	context.fillStyle = "lightgreen";
	context.beginPath();
	context.rect(25, 25, 50, 200);

	context.rect(75, 175, 150, 100);

	context.rect(225, 25, 50, 200);

	context.rect(125, 25, 50, 50);

	context.rect(125, 125, 50, 50);

	context.rect(75, 75, 50, 50);

	context.rect(175, 75, 50, 50);

	context.fill();
}
