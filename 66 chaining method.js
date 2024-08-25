const items=[
    {id:1,item:"redmi",cost:10000},
    {id:2,item:"apple",cost:2000},
    {id:3,item:"oppo",cost:1000},
];
// sort low price
let final =items.sort(function(a,b){
    return a.cost,b.cost;
}).sort(function(a,b){
    if(a.title<b.title) return -1;
    if(a.title>b.title) return 1;
    return 1;
}).filter(function(value){
    return value.cost<=8000;
}).filter(function(value){
    return value.cost<=8000;
}).map(function(value){
    return value.item+"-"+value.cost;
   
   
});




// filter products less than 8000




// map it like // $800

console.log(final);

