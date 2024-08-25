function sumexpenxe(){
    total=0;
    for(let value of arguments ){
        total+=value;
    }

return total;
}

let result=sumexpenxe(2,3,4,5,6,78,90);
console.log("total cost is :",result);