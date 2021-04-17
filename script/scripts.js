function anim1() {
	document.getElementById("animtxt1").className="anitxt";
}
function anim2() {
	document.getElementById("animtxt2").className="anitxt";
}
function anim3() {
	document.getElementById("animtxt3").className="anitxt";
}
anim1();
setTimeout(anim2,2500);
setTimeout(anim3,4500);
ScrollReveal({reset:true}).reveal(".about",{delay:500});
ScrollReveal({reset:true}).reveal(".skill",{delay:500});
ScrollReveal({reset:true}).reveal(".last",{delay:500});
