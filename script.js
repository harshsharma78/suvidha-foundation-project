'use strict';

let menuBtn = document.querySelector('#menu-btn');
let sidebar = document.querySelector('.sidebar');
let searchBar = document.querySelector('.bx-search-alt');

menuBtn.addEventListener('click', e => {
	sidebar.classList.toggle('active');
});
