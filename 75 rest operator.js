function sumexpenxe(loan,...expenses){
    let total=expenses.reduce((a,b)=>a+b);
    return total-loan;
  
}

let result=sumexpenxe(100,2,3,4,5,6,78,90);
 console.log("total cost is :",result);