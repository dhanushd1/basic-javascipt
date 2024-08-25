function person(name,age){
    this.name=name;
    greeting=function(){
        console.log(`my name is ${this.name}`);

    }
}

person.call({},"trisha","37")
person.apply({},["trisha","37"])
person = new person("trisha");
