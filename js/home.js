const $button   = window.document.querySelector('.-second');
$button.addEventListener("click",(event) => {
    const $cart     = window.document.querySelector('.navigation a:last-child ');
    $cart.textContent = "Burpe";
})