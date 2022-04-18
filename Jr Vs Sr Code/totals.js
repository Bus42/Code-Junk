function calculateTotal(items, options) {
    function subtotal(price, quan){
        return price * quan
    }
items.reduce(subtotal)
}