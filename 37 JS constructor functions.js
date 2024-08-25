function createperson(name){
    return{
        name,
        greeting(){
            console.log('my name is '+name);
        }
    };
}

function person (name){
    this.name=name;
    this.greeting=function(){
        console.log('my name is '+name);

    }
}
let person =new person("dhanush");
person.greeting();