const $heart = window.document.querySelector('.-heart');
$heart.addEventListener('click',(event) => {
    const $img = $heart.querySelector('img');
    $img.classList.toggle('-active')
})

const $stars = window.document.querySelectorAll('.-star > img');
$stars.forEach($star => {
    $star.addEventListener('click',(event) => {
        var img1 = "img/star-filled.png",img2 = "img/star-not-filled.png";
        console.log($star.src)
        $star.src =  ($star.src.includes(img1))? img2 : img1;
    })
});