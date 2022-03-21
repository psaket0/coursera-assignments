(function(window) {
  var byeSpeaker = {};
  byeSpeaker.speak = function(name) {
      console.log("Bye " + name);
  var speakWord = "Bye";
  }

function speak(name) {
  console.log(speakWord + " " + name);
}

window.byeSpeaker = byeSpeaker;

}(window));

