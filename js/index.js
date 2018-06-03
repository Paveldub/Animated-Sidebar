let toggle = document.querySelector('#toggle-btn');
let sidebar = document.querySelector('#sidebar');

toggle.addEventListener('click', () => {

    sidebar.classList.toggle('sidebar--active');
    toggle.classList.toggle('toggle-btn--active');
});