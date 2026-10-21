const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt(`Enter the radious of a circle`);
radius = Number(radius);

circumference = 2 * pi * radius;

document.getElementById("myH1").textContent = `ans:${circumference}`;
