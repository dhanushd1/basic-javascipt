function createperson(name){
    return{
        name,
        greeting(){
            let msg='my name is  '+name;
            console.log(msg);
        }
    };
}

let dhanush = createperson("dhanush");
let ds= createperson("ds");
dhanush.greeting();
ds.greeting();
