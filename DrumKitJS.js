for (var i = 0; i < (document.querySelectorAll(".drum").length); i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", clickIdentity);
}
// Using "document.querySelectorAll(".drum").length" is a better way than simply writing <=6

function clickIdentity() {
    var buttonKeyword = this.innerHTML;
    // console.log(buttonKeyword); #just for checking

    switch (buttonKeyword) {
        case "w":
            var crashAudio = new Audio("/Users/kumarharsh/Documents/CODES/WebDev_codes/Drum Kit Starting Files/sounds/crash.mp3");
            crashAudio.play();
            break;

        case "a":
            var kickAudio = new Audio("/Users/kumarharsh/Documents/CODES/WebDev_codes/Drum Kit Starting Files/sounds/kick-bass.mp3");
            kickAudio.play();
            break;

        case "s":
            var snareAudio = new Audio("/Users/kumarharsh/Documents/CODES/WebDev_codes/Drum Kit Starting Files/sounds/snare.mp3");
            snareAudio.play();
            break;

        case "d":
            var tom1Audio = new Audio("/Users/kumarharsh/Documents/CODES/WebDev_codes/Drum Kit Starting Files/sounds/tom-1.mp3");
            tom1Audio.play();
            break;

        case "j":
            var tom2Audio = new Audio("/Users/kumarharsh/Documents/CODES/WebDev_codes/Drum Kit Starting Files/sounds/tom-2.mp3");
            tom2Audio.play();
            break;

        case "k":
            var tom3Audio = new Audio("/Users/kumarharsh/Documents/CODES/WebDev_codes/Drum Kit Starting Files/sounds/tom-3.mp3");
            tom3Audio.play();
            break;

        case "l":
            var tom4Audio = new Audio("/Users/kumarharsh/Documents/CODES/WebDev_codes/Drum Kit Starting Files/sounds/tom-4.mp3");
            tom4Audio.play();
            break;

        default:
            console.log("Press valid keystrokes");
    }
}

// document.addEventListener("keypress", function(keyPress) {
//     console.log(keyPress);
// });

// below written is a code that gives a prompt to input a small letter whenever a key is pressed, and then in prompt
// the key pressed out of w, a, s, d, j, k, l plays the desired sound!

// document.addEventListener("keypress", function () {
//     var keyPressed = prompt("enter a single keyword and that too in small case!");
//     switch (keyPressed) {
//         case "w":
//             var crashAudio = new Audio("/Users/kumarharsh/Documents/CODES/WebDev_codes/Drum Kit Starting Files/sounds/crash.mp3");
//             crashAudio.play();
//             break;

//         case "a":
//             var kickAudio = new Audio("/Users/kumarharsh/Documents/CODES/WebDev_codes/Drum Kit Starting Files/sounds/kick-bass.mp3");
//             kickAudio.play();
//             break;

//         case "s":
//             var snareAudio = new Audio("/Users/kumarharsh/Documents/CODES/WebDev_codes/Drum Kit Starting Files/sounds/snare.mp3");
//             snareAudio.play();
//             break;

//         case "d":
//             var tom1Audio = new Audio("/Users/kumarharsh/Documents/CODES/WebDev_codes/Drum Kit Starting Files/sounds/tom-1.mp3");
//             tom1Audio.play();
//             break;

//         case "j":
//             var tom2Audio = new Audio("/Users/kumarharsh/Documents/CODES/WebDev_codes/Drum Kit Starting Files/sounds/tom-2.mp3");
//             tom2Audio.play();
//             break;

//         case "k":
//             var tom3Audio = new Audio("/Users/kumarharsh/Documents/CODES/WebDev_codes/Drum Kit Starting Files/sounds/tom-3.mp3");
//             tom3Audio.play();
//             break;

//         case "l":
//             var tom4Audio = new Audio("/Users/kumarharsh/Documents/CODES/WebDev_codes/Drum Kit Starting Files/sounds/tom-4.mp3");
//             tom4Audio.play();
//             break;

//         default:
//             console.log("Press valid keystrokes");
//     }
// });

// the only thing I changed here is I made the browser(document) check for the key press DIRECTLY 
// and Used the PRESSED key's "key" property which essentially gives us the exact character we've pressed
// to go through the SWITCH statements!

document.addEventListener("keypress", function (keyPressed) {
    // var keyPressed = prompt("enter a single keyword and that too in small case!");
    switch (keyPressed.key) {
        case "w":
            var crashAudio = new Audio("/Users/kumarharsh/Documents/CODES/WebDev_codes/Drum Kit Starting Files/sounds/crash.mp3");
            crashAudio.play();
            break;

        case "a":
            var kickAudio = new Audio("/Users/kumarharsh/Documents/CODES/WebDev_codes/Drum Kit Starting Files/sounds/kick-bass.mp3");
            kickAudio.play();
            break;

        case "s":
            var snareAudio = new Audio("/Users/kumarharsh/Documents/CODES/WebDev_codes/Drum Kit Starting Files/sounds/snare.mp3");
            snareAudio.play();
            break;

        case "d":
            var tom1Audio = new Audio("/Users/kumarharsh/Documents/CODES/WebDev_codes/Drum Kit Starting Files/sounds/tom-1.mp3");
            tom1Audio.play();
            break;

        case "j":
            var tom2Audio = new Audio("/Users/kumarharsh/Documents/CODES/WebDev_codes/Drum Kit Starting Files/sounds/tom-2.mp3");
            tom2Audio.play();
            break;

        case "k":
            var tom3Audio = new Audio("/Users/kumarharsh/Documents/CODES/WebDev_codes/Drum Kit Starting Files/sounds/tom-3.mp3");
            tom3Audio.play();
            break;

        case "l":
            var tom4Audio = new Audio("/Users/kumarharsh/Documents/CODES/WebDev_codes/Drum Kit Starting Files/sounds/tom-4.mp3");
            tom4Audio.play();
            break;

        default:
            console.log("Press valid keystrokes");
    }
});



