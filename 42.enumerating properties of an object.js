const user={
    Name:"dhanush",
    getfullname(){
        console.log('my name is'+name);
    }
}







 for ( let key in user)
     console.log(key,user[key]);

  for ( let key in user)
 console.log(key,user[key]);

 for(let entry of Object.entries(user))
 console.log(entry);

if ('Name' in user){
console.log("yes");
}

if ('age' in user){
    console.log("yes");
}