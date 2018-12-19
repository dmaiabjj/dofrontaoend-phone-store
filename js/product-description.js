const $heart = window.document.querySelector('.-heart');
$heart.addEventListener('click',() => {
    $heart.classList.toggle('-active')
})

const $stars = window.document.querySelectorAll('.-star > img');
$stars.forEach((star,index,stars)=> {
    star.addEventListener('click',() => {
        fillStars(stars,index)
    })
});

function fillStars(stars,indexClicked) {
    var img1 = "img/star-filled.png",img2 = "img/star-not-filled.png";
    stars.forEach((star,index)=> {
        if(index <= indexClicked)
            star.src = img1;
        else
            star.src = img2;
    });
}