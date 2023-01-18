const tabsBtnList = document.querySelectorAll('.tabs__btn');
const tabsContentList = document.querySelectorAll('.tabs__list');

tabsBtnList.forEach((btn) => {

	btn.addEventListener('click', () => {
		tabsBtnList.forEach((btn) => {
			btn.classList.remove('active');
		});
		btn.classList.add('active');
		let tabId = btn.dataset.tab;

		tabsContentList.forEach((content) => {
			content.classList.remove('active');
			let currentContent = document.querySelector('#' + tabId);
			currentContent.classList.add('active')
		})
	})
})