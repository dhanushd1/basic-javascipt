// finding bw find and filter
const items=[
    {id:1,item:"redmi",cost:1000},
    {id:2,item:"redmi",cost:2000},
    {id:3,item:"redmi",cost:100},
];

let affordable =items.filter(function(value){
    return value.cost<1000;
});

console.log(affordable);


// find


let affordable1 =items.filter(function(value){
    return value.cost<1000;
});

console.log(affordable1);