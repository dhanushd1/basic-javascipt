let dailyRoutine=["walkup","eat","sleep"];
// for of

for(let rountine of dailyRoutine)
console.log(rountine);

// for in
for(let rountine in dailyRoutine)
    console.log(rountine);

for(let rountine in dailyRoutine)
    console.log(rountine,dailyRoutine[rountine]);

// for each
dailyRoutine.forEach(function(rountine){
    console.log(rountine);
})

dailyRoutine.forEach(function(rountine,Rountineindex){
    console.log(Rountineindex,rountine);
})
  
dailyRoutine.forEach(rountine => console.log(rountine)
);