let sayHello=(name) => console.log(`Hi, ${name}!`);

let getOlder=(age) => age+50;

let multiply = (num1, num2) => console.log(num1 * num2); 

let subtractFive = num => {
	let diff = 5 - num; 
	console.log(diff);
}

let printName = function(name) {
    console.log(name)
}

module.exports={
    sayHello:sayHello,
    getOlder:getOlder,
    multiply:multiply,
    subtractFive:subtractFive,
    printName:printName
}