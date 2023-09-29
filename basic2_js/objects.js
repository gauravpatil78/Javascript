//object litral
const employee={
       name:"Gaurav",
       age:22,
       sal:30000,
       gender:"male",
       degree:["diploma","engineering"]
}

console.log(employee.degree);
console.log(employee["degree"]);


employee.gre=function(){
    console.log(`hello ${this.name}`);
}
console.log(employee.gre());
console.log(employee);