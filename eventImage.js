// Get references to DOM elements
var startBtn = document.getElementById('startBtn');
var stopBtn = document.getElementById('stopBtn');
var catImg = document.getElementById('goofyCatImage');
var memeImg = document.getElementById('scienceMemeImage');
var moveInterval = null;


// This hides the meme image and shows the cat image before clicking the Start button
goofyCatImage.style.display = "block";
scienceJokeImage.style.display = "none";



// Function to move the meme image randomly
function moveCat() {
    var maxX = window.innerWidth - memeImg.width - 20;
    var maxY = window.innerHeight - memeImg.height - 20;
    var x = Math.random() * maxX;
    var y = Math.random() * maxY;
    memeImg.style.left = x + 'px';
    memeImg.style.top = y + 'px';    
}

// Function to enable/disable Start button and start moving
function enableStart(disable) {
    startBtn.disabled = disable;
    stopBtn.disabled = !disable;
    if (!disable) {
        moveInterval = setInterval(moveCat, 500);
    }
}

// Function to enable/disable Stop button and stop moving
function enableStop(disable) {
    stopBtn.disabled = disable;
    startBtn.disabled = !disable;
    if (!disable && moveInterval) {
        clearInterval(moveInterval);
        moveInterval = null;
    }
}

// Wire up buttons using onclick properties (not addEventListener) & hides cat image. It also plays the music in the background
startBtn.onclick = function() {
    enableStart(true);
    goofyCatImage.style.display = "none";
    scienceJokeImage.style.display = "block";
    document.getElementById("goofyMusic").play();
    moveInterval = setInterval(moveCat, 500);
};

//stops the meme image moving and hides it; it restores the cat image. It also stops the music.
// It also resets the music to the start.
stopBtn.onclick = function() {
    enableStop(true);
    goofyCatImage.style.display = "block";
    scienceJokeImage.style.display = "none";
    document.getElementById("goofyMusic").pause();
    document.getElementById("goofyMusic").currentTime = 0; // Reset music to start

    if (moveInterval) {
        clearInterval(moveInterval);
        moveInterval = null;
    }
}