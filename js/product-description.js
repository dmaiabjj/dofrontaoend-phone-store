const $heart = window.document.querySelector('.-heart');
$heart.addEventListener('click',handleClick)

const $stars = window.document.querySelectorAll('.item.-star .star');
$stars.forEach(($star)=> {
    $star.addEventListener('click',handleClick)
});

function handleClick(){
    this.classList.toggle('-active')
}
