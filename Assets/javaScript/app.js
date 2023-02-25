const body = document.body;
const menuBtn = document.querySelector(".menu");
const closeBtn = document.querySelector(".close");
const navMenu = document.querySelector(".navigations");

menuBtn.addEventListener("click", () => {
	body.classList.add("no-scroll");
	navMenu.classList.add("show-nav");
	closeBtn.style.display = "block";
	menuBtn.style.display = "none";
});

closeBtn.addEventListener("click", () => {
	body.classList.remove("no-scroll");
	navMenu.classList.remove("show-nav");
	closeBtn.style.display = "none";
	menuBtn.style.display = "block";
});
