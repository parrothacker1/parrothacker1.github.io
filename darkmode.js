var i=0;
var count=0;
var lists=document.querySelector("ul").querySelectorAll("li");
var socials=document.getElementById("social").querySelectorAll("i");
function white() {
	for (i=0;i<lists.length;i++) {
		lists[i].style.color="white";
		lists[i].querySelector("i").style.color="blue";
		lists[i].addEventListener("mouseover",(event) => {
			event.target.style.color="blue";
		});
		lists[i].addEventListener("mouseout",(event) => {
			event.target.style.color="white";
		});
		lists[i].querySelector("i").addEventListener("mouseenter",(event) => {
			event.target.parentNode.style.color="blue";
			event.target.style.color="blue";
		});
		lists[i].querySelector("i").addEventListener("mouseleave",(event) => {
			event.target.parentNode.style.color="white";
			event.target.style.color="blue";
		});
	}
	for (i=0;i<socials.length;i++) {
		socials[i].style.color="blue";
	}
}
function black() {
	for (i=0;i<lists.length;i++) {
		lists[i].style.color="black";
		lists[i].querySelector("i").style.color="red";
		lists[i].addEventListener("mouseover",(event) => {
			event.target.style.color="red";
		});
		lists[i].addEventListener("mouseout",(event) => {
			event.target.style.color="black";
		});
		lists[i].querySelector("i").addEventListener("mouseenter",(event) => {
			event.target.parentNode.style.color="red";
			event.target.style.color="red";
		});
		lists[i].querySelector("i").addEventListener("mouseleave",(event) => {
			event.target.parentNode.style.color="black";
			event.target.style.color="red";
		});
	}
	for (i=0;i<socials.length;i++) {
		//console.log("Hello");
		socials[i].style.color="red";
	}
}
document.getElementById("darkbtn").addEventListener("click",() => {
	count=count+1;
	if (count%2==0) {
		document.body.style.backgroundColor="000";
		document.body.style.fontColor="fff";
		document.getElementById("darkbtn").style.color="fff";
		document.getElementById("profile").src="photo/profile2.jpg";
		document.getElementById("typing").style.color="red";
		document.getElementById("heading1").style.color="white";
		document.getElementById("heading2").style.color="white";
		document.getElementById("datedisplay").style.color="red";
		document.getElementById("clock").style.color="red";
		document.getElementById("ipadd").style.color="red";
		try {
			document.getElementById("ipcon").style.color="red";
			document.getElementById("ipstate").style.color="red";
			document.getElementById("ipplace").style.color="red";
		} catch (error) {
			console.log("Cannot fetch IP Address");
		}
		document.getElementById("aboutme").style.color="red";
		document.getElementById("text1").style.color="white";
		document.getElementById("text2").style.color="white";
		document.getElementById("skilledin").style.color="white";
		black();
		document.getElementById("cr").querySelector("b").style.color="white";
	} else {
		document.body.style.backgroundColor="fff";
		document.body.style.fontColor="000";
		document.getElementById("darkbtn").style.color="000";
		document.getElementById("profile").src="photo/profile.jpg";
		document.getElementById("typing").style.color="blue";
		document.getElementById("heading1").style.color="black";
		document.getElementById("heading2").style.color="black";
		document.getElementById("datedisplay").style.color="blue";
		document.getElementById("clock").style.color="blue";
		document.getElementById("ipadd").style.color="blue";
		try {
			document.getElementById("ipcon").style.color="blue";
			document.getElementById("ipstate").style.color="blue";
			document.getElementById("ipplace").style.color="blue";
		} catch (error) {
			console.log("Cannot fetch IP Address");
		}
		document.getElementById("aboutme").style.color="blue";
		document.getElementById("text1").style.color="black";
		document.getElementById("text2").style.color="black";
		document.getElementById("skilledin").style.color="black";
		white();
		document.getElementById("cr").querySelector("b").style.color="black";
	}
});