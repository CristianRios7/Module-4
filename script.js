
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i=0; i< names.length; i++ ) {


  if (names[i].charAt(0)=='j'||names[i].charAt(0)=='J') {
     byeSpeaker.speak(names[i]);
  } else {
     helloSpeaker.speak(names[i]);
  }
}

(function(window) {

 var helloSpeaker = {};

var speakWord = "Hello";


helloSpeaker.speak = function(name) {
  console.log(speakWord + " " + name);
}


 window.helloSpeaker = helloSpeaker;
})(window);

(function(window){

 var byeSpeaker = {};

var speakWord = "Good Bye";

byeSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
}

window.byeSpeaker = byeSpeaker;
})(window)
