
const $magnifiers   = document.querySelectorAll('.magnifier');

$magnifiers.forEach($magnifier => {
    $magnifier.addEventListener('click',function () {
        const $search       = document.querySelector('.search');
        $search.classList.toggle('-active');
    });
});

