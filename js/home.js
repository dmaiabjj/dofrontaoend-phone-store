const $button   = window.document.querySelector('.-second');
let initialValue = 10;
$button.addEventListener("click",(event) => {
    const $cart     = window.document.querySelector('.navigation a:last-child ');
    $cart.textContent = `Carrinho (${++initialValue})`;
})