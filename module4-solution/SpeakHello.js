(function(window) {
  var helloSpeaker = {};
  helloSpeaker.speak = function(name) {
      console.log("Hi " + name);
  }
  var speakWord = "Hello";
  window.helloSpeaker = helloSpeaker;

function speak(name) {
  console.log(speakWord + " " + name);
}

}(window));
