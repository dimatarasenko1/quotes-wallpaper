document.addEventListener("DOMContentLoaded", function(event){
  var h1s = document.querySelectorAll("h1");
  console.log(h1s);
  var randomH1 = h1s[Math.floor(Math.random() * h1s.length)];
  randomH1.classList.add("visible");
});
