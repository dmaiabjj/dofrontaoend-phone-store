const $heart = window.document.querySelector('.-heart');
$heart.addEventListener('click',handleClick)

const $stars = window.document.querySelectorAll('.item.-star .star');
$stars.forEach(($star,key,$stars)=> {
     $star.addEventListener('click',() =>{
        fillStars($star,key,$stars)
    })
});

function handleClick(){
    this.classList.toggle('-active')
}

function fillStars($star,key,$stars) {
    $star.classList.toggle('-active')
    const active = $star.classList.contains('-active');
    $stars.forEach((star,index)=> {
        if(index <= key)
        {
            if(active)
                star.classList.add('-active')
        }else
            star.classList.remove('-active')
    });
}