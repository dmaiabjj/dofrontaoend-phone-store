const $button   = window.document.querySelector('.-second');
const $cart     = window.document.querySelector('.navigation a:last-child ');

$button.addEventListener("click",(event) => {
    $cart.innerHTML = "Burpe";
})