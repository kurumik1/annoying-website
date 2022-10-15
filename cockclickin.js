function penses (){ 
  const header = document.getElementById("count");
  var audio = new Audio("images/cum.wav");
  audio.loop = false;
  audio.play(); 
  header.textContent = parseInt(header.textContent) + 1;
}