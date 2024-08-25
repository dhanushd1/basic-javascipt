let num1=100;
let num2=200;

// immediately invoked function expression (iife)
// it will execute after entering the code
(function sumnumber(n01,n02){
    let res=n01+n02;
    console.log(res);
})(num1,num2);


// another method
(()=>{
    let nu1=100;
    let nu2=200;

    let result=nu1+nu2;
(function displaynumber(){
    console.log(result);
})();
// display number
})();   


