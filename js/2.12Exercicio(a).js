const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e) =>{
    const Produto = frm.inProduto.value
    const preco = Number(frm.inPreco.value)

    
    const valor1 = preco * 3
    const valor2 = preco * 0.50
    const valor3 = valor1 - valor2

    
resp1.innerText = `${Produto} - Promoção: Leve 3 por R$: ${valor3.toFixed(2)}`
resp2.innerText = `O 3º produto custa apenas R$ ${valor2.toFixed(2)}`

    e.preventDefault()
})