function doSomethingOnClick (){ 
  let speaknow = new SpeechSynthesisUtterance("ow");
  window.speechSynthesis.speak(speaknow); 
  alert('ow'); 
  setTimeout(function() {
      let speaknow = new SpeechSynthesisUtterance("have fun with a virus");
      window.speechSynthesis.speak(speaknow); 
  }, 2000);
  setTimeout(function() {
    window.open("/amabas.html")
    window.close()
  }, 3000);
}