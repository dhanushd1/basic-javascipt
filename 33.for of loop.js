// for -in
const person={ 
    name:"'dhanush",
    age:12,
    sex:'male'
};

for (let key in person){
    console.log(key + ":" ,person[key]);
}


//array
let colours=['red','blue','greem'];
for (let index in colours){

    console.log(colours[index]);
}

for (colour of colours){
    console.log('colours :' + colour);

}   