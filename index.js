document.onmousemove = animateCircles;
  
  var colors = ["#f0a181", "#f0de81", "#d4f081", "#a1e3d9", "#c7bcd1", "#fa7070", "#ff8f4a", "#ffef42", "#b3e366", "#c5d7f0", "#cbc1d6", "#f0c5e5"];


function animateCircles(event){
  var circle = document.createElement('div');
  circle.setAttribute("class", "circle");
  document.body.appendChild(circle);
  
  
  circle.style.left = event.clientX + "px";
  circle.style.top = event.clientY + "px"; 
  
  var color = colors[Math.floor(Math.random() * colors.length)];
  circle.style.backgroundColor = color;
  
  circle.style.transition = "all 15s linear 0s"
  circle.style.transitionDelay = "5s"
  
  circle.style.left = circle.offsetLeft + 200 + "px";
  circle.style.top = circle.offsetTop - 100 + "px";
  
  circle.style.width = '0px';
  circle.style.height = '0px';
  circle.style.opacity = 100;

}