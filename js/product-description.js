const $heart = window.document.querySelector('.-heart');
$heart.addEventListener('click',(event) => {
    const $img = $heart.querySelector('img');
    $img.classList.toggle('-active')
})