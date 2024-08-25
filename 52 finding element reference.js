const orders=[
    {id:1,item:"phone",price:1234},
    {id:1,item:"earphones",price:1100}
]

let result=orders.find(function(order){
    return order.item ==="phone"
})

console.log(result);

let result1=orders.findIndex(function(order){
    return order.item ==="phone"
})

console.log(result1);

