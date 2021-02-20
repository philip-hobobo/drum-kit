// Dectecting button press

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() { //going through document to look for elements with class drum and add an event listener to each one

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML)

    //what to do when click detected
  });

}

// Decting Keyboard press

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});



function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3"); // creating a variable for audio and gives it the source file from our sounds folder.
      tom1.play(); //
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3"); // creating a variable for audio and gives it the source file from our sounds folder.
      tom2.play(); //
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3"); // creating a variable for audio and gives it the source file from our sounds folder.
      tom3.play(); //
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3"); // creating a variable for audio and gives it the source file from our sounds folder.
      tom4.play(); //
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3"); // creating a variable for audio and gives it the source file from our sounds folder.
      snare.play(); //
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3"); // creating a variable for audio and gives it the source file from our sounds folder.
      crash.play(); //
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3"); // creating a variable for audio and gives it the source file from our sounds folder.
      kick.play(); //
      break;

    default:
      console.log(buttonInnerHTML)

  }
}



function buttonAnimation(currentKey) {

var activeButton = document.querySelector("." + currentKey);

activeButton.classList.add("pressed");

setTimeout(function() {
  activeButton.classList.remove("pressed");
}, 100);

}
