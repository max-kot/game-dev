const btn = document.querySelector('.menu-btn');
const menuList = document.querySelector('.menu__list');
const menuLinks = document.querySelectorAll('.menu__link');

btn.addEventListener('click', () => {
	btn.classList.toggle('active');
	menuList.classList.toggle('active');
	document.querySelector('body').classList.toggle('no-scroll');

	menuLinks.forEach((link) => {
		link.addEventListener('click', () => {
			btn.classList.remove('active');
			menuList.classList.remove('active');
			document.querySelector('body').classList.remove('no-scroll');
		})
	})
})