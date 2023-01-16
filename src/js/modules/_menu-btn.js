const btn = document.querySelector('.menu-btn');
const menuList = document.querySelector('.menu__list');

btn.addEventListener('click', () => {
	btn.classList.toggle('active');
	menuList.classList.toggle('active');
	document.querySelector('body').classList.toggle('no-scroll')
})