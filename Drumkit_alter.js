// document.querySelector(".w").addEventListener("click", function () {
//     var crashAudio = new Audio("/Users/kumarharsh/Documents/CODES/WebDev_codes/Drum Kit Starting Files/sounds/crash.mp3");
//     crashAudio.play();
// })

// document.querySelector(".a").addEventListener("click", function () {
//     var kickAudio = new Audio("/Users/kumarharsh/Documents/CODES/WebDev_codes/Drum Kit Starting Files/sounds/kick-bass.mp3");
//     kickAudio.play();
// })

// document.querySelector(".s").addEventListener("click", function () {
//     var snareAudio = new Audio("/Users/kumarharsh/Documents/CODES/WebDev_codes/Drum Kit Starting Files/sounds/snare.mp3");
//     snareAudio.play();
// })

// document.querySelector(".d").addEventListener("click", function () {
//     var tom1Audio = new Audio("/Users/kumarharsh/Documents/CODES/WebDev_codes/Drum Kit Starting Files/sounds/tom-1.mp3");
//     tom1Audio.play();
// })

// document.querySelector(".j").addEventListener("click", function () {
//     var tom2Audio = new Audio("/Users/kumarharsh/Documents/CODES/WebDev_codes/Drum Kit Starting Files/sounds/tom-2.mp3");
//     tom2Audio.play();
// })

// document.querySelector(".k").addEventListener("click", function () {
//     var tom3Audio = new Audio("/Users/kumarharsh/Documents/CODES/WebDev_codes/Drum Kit Starting Files/sounds/tom-3.mp3");
//     tom3Audio.play();
// })

// document.querySelector(".l").addEventListener("click", function () {
//     var tom4Audio = new Audio("/Users/kumarharsh/Documents/CODES/WebDev_codes/Drum Kit Starting Files/sounds/tom-4.mp3");
//     tom4Audio.play();
// })

// fresh_code:-

for (var i = 0; i < (document.querySelectorAll(".drum").length); i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", clickIdentity);
}

function clickIdentity(clicks) {
    var clicks = this.innerHTML;
    makeSound(clicks);
    addAnimation(clicks);
}

document.addEventListener ("keypress", function (keyPressed) {
    makeSound(keyPressed.key);
    addAnimation(keyPressed.key);
})

function makeSound(keyStroke) {
    switch (keyStroke) {
        case "w":
            var crashAudio = new Audio("crash.mp3");
            crashAudio.play();
            break;

        case "a":
            var kickAudio = new Audio("kick-bass.mp3");
            kickAudio.play();
            break;

        case "s":
            var snareAudio = new Audio("snare.mp3");
            snareAudio.play();
            break;

        case "d":
            var tom1Audio = new Audio("tom-1.mp3");
            tom1Audio.play();
            break;

        case "j":
            var tom2Audio = new Audio("tom-2.mp3");
            tom2Audio.play();
            break;

        case "k":
            var tom3Audio = new Audio("tom-3.mp3");
            tom3Audio.play();
            break;

        case "l":
            var tom4Audio = new Audio("tom-4.mp3");
            tom4Audio.play();
            break;

        default:
            console.log("Press valid keystrokes");
    }
}

// lets also add an animation to the pressed drum!

function addAnimation (pressedKey) {
    var selectPressedKeyButton = document.querySelector("." + pressedKey);
    selectPressedKeyButton.classList.add("pressed"); 

    setTimeout(function() {
        selectPressedKeyButton.classList.remove("pressed");
    }, 100);
}