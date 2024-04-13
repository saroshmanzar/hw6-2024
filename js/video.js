var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video=document.querySelector("#player1")
	video.autoplay = false;
	video.loop = false;
	console.log ('autoplay is set to ' + video.autoplay);
	console.log ('loop is set to ' + video.loop)

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	// update volume information
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.90;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.90;
	console.log("New speed is " + video.playbackRate);
});

// Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video. 

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
		console.log("Going back to the beginning");
	} else {
		video.currentTime += 10;
		console.log("Current location " + video.currentTime);
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true) {
		video.muted = false;
		console.log("Unmuted");
		document.querySelector("#mute").innerHTML = "Mute";
	} else {
		video.muted = true;
		console.log("Muted");
		document.querySelector("#mute").innerHTML = "Unmute";
	}
});

// Change the volume based on the slider and update the volume information.

document.querySelector("#slider").addEventListener("change", function() {
	video.volume = this.value / 100;
	console.log("Volume is " + video.volume);
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

// Utilize the existing oldSchool class on the video element

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});