// primitive strings values
let firstname="dhanush";
let secondname='dilli';
let lastname='ragul';

// another way to create string

const firstname1=new String("dhanush");
// poperties
console.log(firstname1.length);

// methods
console.log(firstname1.charAt(3));
console.log(firstname1.charAt(4));

// concat
console.log(firstname1.concat('',lastname));
// includes
console.log(firstname1.includes("d"));
console.log(firstname1.includes("D"));
console.log(firstname1.includes("ds"));
// start with
console.log(firstname1.startsWith("d"));
console.log(firstname1.startsWith("a"));
// end with
console.log(firstname1.endsWith("h"));
// indexof
console.log(firstname1.indexOf("a"));

// repeat
console.log(firstname.repeat(10));
// replace
console.log(firstname1.replace("dhanush","dilliraj"));
console.log(firstname1);
// slice
console.log(firstname.slice(3));
// split
let para="iam dhanush from vellore";
console.log(para.split(' ',2));
console.log(para.split(' ',3));
console.log(para.split(' ',4));

// sub string
console.log(para.substring(1));
console.log(para.substring(3));
console.log(para.substring(7));
console.log(para.substring(11));
// lowercase
console.log(firstname1.toLocaleLowerCase());
// uppercase
console.log(firstname1.toLocaleUpperCase());
// trim = removes space after double kolan
let string1="hello this is me  ";
console.log(string1.trim());
console.log(string1.trimStart());
console.log(string1.trimEnd());

// escape notation
let hello_message="this is last vedio \"i won't see it again";
console.log(hello_message);









