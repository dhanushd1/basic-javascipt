let student={
    firstname:"dhanush", //data properties
    lastname :"dilli",
    get fullname(){
         return `${student.firstname} ${student.lastname}`;
    },
    set fullname(value){
        if(typeof value !="string"){
            let err=new Error("its not a string");
            throw err;
        }
        if (value>=3) throw "name invalid";

        let values=value.split(" ");
        this.firstname=values[0];
        this.lastname=values[1] ?? "";

    },

};
try{ // defensive programming
    student.fullname=2;
} catch(ex){
    alert(ex);
}


// student.fullname="nayanthara";

console.log(student.fullname);

