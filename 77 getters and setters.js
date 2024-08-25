let student={
    firstname:"dhanush", //data properties
    lastname :"dilli",
    get fullname(){
         return `${student.firstname} ${student.lastname}`;
    },
    set fullname(value){
        let values=value.split(" ");
        this.firstname=values[0];
        this.lastname=values[1] ?? "";

    },

};

student.fullname="ragul kumar";
// student.fullname="nayanthara";

console.log(student.fullname);

