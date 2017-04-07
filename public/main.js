

// Use js to animate 
// Use js to create a modal to pop up. Maybe at the end of scrolling on certain pages

// querySA to redirect all contact clicks to contact page
// querySA to record upvotes and display the right code samples

// use querySelectorAll.forEach to animate each project

// var projectVotes = []



projectGif = document.querySelectorAll(".projectGif");
// projectButtons = document.querySelectorAll(".projectButtons");

projectGif.forEach(function(btnClick){
	btnClick.addEventListener("click", function(event){
		event.preventDefault();
		var displayDesc = event.target.nextElementSibling;
		displayDesc.style.display = "block";
	})
})



