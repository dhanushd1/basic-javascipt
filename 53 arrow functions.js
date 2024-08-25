const orders=[
    {id:1,item:"phone",price:1234},
    {id:1,item:"earphones",price:1100}
]
// arrow function


let result=orders.find((order)=>order.item==="phone")
console.log(result);