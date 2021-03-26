const body = document.querySelector("body");
const togglemenu = document.querySelector(".togglemenu");
document.querySelector(".togglemenu").addEventListener("click", function () {
	body.classList.toggle("open");
	if (body.classList.contains("open")) {
		body.style.overflowY = "hidden";
	} else {
		body.style.overflowY = "scroll";
	}
});

function checkform() {
	let checkindate = document.getElementById("checkIn").value;
	let checkoutdate = document.getElementById("checkOut").value;
	if (checkindate > checkoutdate) {
		alert("Check out date should be after the check in date");
	}
}

// signup validation

function validateSignup(e) {
	let username = document.getElementById("username").value;
	let abnnumber = document.getElementById("abnnumber").value;
	let password = document.getElementById("password").value;
	let confirmpassword = document.getElementById("confirmpassword").value;
	const decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,12}$/;
	if (!password.match(decimal)) {
		alert(
			"Password must be 6 to 12 characters in length and contains at least 1 lowercase letter, 1 uppercase letter, 1 number and one special characters ! @ # $ % "
		);
		window.location.href("signup.html");
	} else if (password !== confirmpassword) {
		alert("Two passwords do not match.");
		// e.preventDefault();
	}
}

let userbutton = document.querySelector(".user-button");
let accomodationbutton = document.querySelector(".accomodation-button");
let reviewbutton = document.querySelector(".review-button");
let user = document.querySelector(".users-container");
let accomodations = document.querySelector(".admin-accomodations");
let reviews = document.querySelector(".reviews");

reviewbutton.addEventListener("click", function () {
	accomodations.classList.remove("accomodationopen");
	reviews.classList.add("reviewsopen");
	user.classList.remove("useropen");
});
userbutton.addEventListener("click", function () {
	user.classList.add("useropen");
	reviews.classList.remove("reviewsopen");
	accomodations.classList.remove("accomodationopen");
});
accomodationbutton.addEventListener("click", function () {
	accomodations.classList.add("accomodationopen");
	reviews.classList.remove("reviewsopen");
	user.classList.remove("useropen");
});

// let accomodationclass = document.getElementsByClassName(".accomodationopen");
// let reviewclass = document.getElementsByClassName(".reviewsopen");
// console.log(user.classList.contains("useropen"));
// console.log(accomodations.classList.contains("accomodationopen"));
// console.log(accomodationclass);
// console.log(reviewclass);
// if (user.classList.contains("useropen")) {
// 	userbutton.style.backgroundColor = "#ffb300";
// } else {
// 	userbutton.style.backgroundColor = "none";
// }
// if (!!accomodationclass) {
// 	reviewbutton.style.backgroundColor = "#ffb300";
// } else {
// 	reviewbutton.style.backgroundColor = "none";
// }
// if (!!reviewclass) {
// 	accomodationbutton.style.backgroundColor = "#ffb300";
// } else {
// 	accomodationbutton.style.backgroundColor = "none";
// }
