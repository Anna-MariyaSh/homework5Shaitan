 //Task1//
 let user = {
   name: "John",
   surname: "Smith"
 };

 user.name = "Pete";
 console.log(user.name);
 delete user.name;
 console.log(user.name);

//Task2//
const user = {
  name: "John"
};

user.name = "Pete";  //Будет работать//
console.log(user.name);

//Task3//

let salaries = {
  "John": 100,
  "Ann": 160,
  "Pete": 130
}

function sumSalaries(salaries) {
  let sum1 = 0;
  for (let salary of Object.values(salaries)) {
    sum1 += salary;
  }
  return sum1;
}

let sum = sumSalaries(salaries);
alert(sum);
