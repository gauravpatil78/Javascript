//object litral
const employee={
       name:"Gaurav",
       age:22,
       sal:30000,
       gender:"male",
       degree:["diploma","engineering"]
}

// console.log(employee.degree);
// console.log(employee["degree"]);


employee.gre=function(){
    console.log(`hello ${this.name}`);
}
// console.log(employee.gre());
// console.log(employee);




//objct 2 lec

const user=new Object();

user.id=102;
user.name="gaurav";
// console.log(user)

user.Info={
    firstname:{
        name:"nikhli",
        lastname:{
            last:"thorat",
            city:{
                name:"Kalyan"
            }
        }
    }
}

console.log(user.Info.firstname.lastname.city.name)


