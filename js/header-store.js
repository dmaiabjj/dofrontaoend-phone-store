const $search = document.querySelector('[type=search]');

$search.addEventListener('click',function () {
    this.classList.toggle('-active');
});