const items=[
    {id:1,name:"phones",delivered:true},
    {id:2,name:"earset",delivered:true},
    {id:3,name:"laptop",delivered:false},
];
// every

let yes=items.every(function(value)
{
return value.delivered==true;
});
// some

let yes1=items.some(function(value)
{
return value.delivered==true;
});

console.log("delivered:",yes);
console.log("delivered:",yes1);
