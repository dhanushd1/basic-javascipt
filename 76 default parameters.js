// default
function calculatetax(cost,tax=10){
    taxamount=cost*(tax/100);
    console.log("cost is :",cost);
    console.log("tax is :",tax);
    console.log("total is :",cost+tax);
}

calculatetax(45);