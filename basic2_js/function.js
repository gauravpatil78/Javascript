function addNum(num1,num2){
    
    console.log(num1+num2);
    return num1+num2;
}

const res=addNum(20,30);

console.log(res);

const myObj={
    username :"gaurav",
    id:1,
    password:"12345678"
}

function callObj(obj){

    return `${obj.username} is my name and ${obj.id} is my id ${obj.password} is may password`;
}

console.log(callObj(myObj));



function details(obj){
console.log(obj.id);
    if(obj.id===1){
        return obj.name;
    }else{
        return "user not available";
    }
}

console.log(details({
    id:1,
    name:"Nikhil"
}))