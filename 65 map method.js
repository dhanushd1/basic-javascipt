const num=[1,2,3,4,5,6];
console.log(num);
let ans=num.map(function(value){
    return value*2;

});
console.log(ans);

//map
const people=[
    {id:1,name :"dhanush",lastname:1000},
    {id:2,name:"dilli",lastname:2000},
    {id:3,name:"ragul",lastname:100},
];

let affordable =people.map(function(value){
    let fullname=[value.name,value.lastname].join(" ");
    let obj={id:value.id,fullname};
    return obj;
});

console.log(affordable);