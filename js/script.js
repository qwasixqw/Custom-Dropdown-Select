'use strict';

const selectMenu = document.querySelector('.select-menu');
const selectMenuText = document.querySelector('.select-menu__text');
const selectButton = document.querySelector('.select-menu__button');
const optionsMenu = document.querySelector('.options');
const optionsItem = document.querySelectorAll('.options__item');


selectMenu.addEventListener('click', () => {
	optionsMenu.classList.toggle('active');
	selectButton.classList.toggle('active');
});

optionsItem.forEach((option) => {
	option.addEventListener('click', () => {
		const text = option.querySelector('.options__text').textContent;
		selectMenuText.textContent = text;

		optionsMenu.classList.remove('active');
		selectButton.classList.remove('active');
	});
});
