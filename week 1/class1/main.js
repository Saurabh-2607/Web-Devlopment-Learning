// // if else statment

// let firstname = "sauarbh";
// let age = 18;
// let married = true;

// if(married == true) {console.log(firstname + " is married" )}

// if(married == false) {console.log(firstname + " is not married")}






// // for loop

// let answer = 0;

// for(let i = 0; i<=100; i = i+1){
//     answer = answer + i;
// }

// console.log(answer);






// // arreys

// const person = ["saurabh","prince","kanika"];
// const age = [21,22,26,24];

// console.log("age of " + person[0] + " is " + age[0])
// console.log("age of " + person[1] + " is " + age[1])
// console.log("age of " + person[2] + " is " + age[2])

// console.log('this is the second output')

// // const age = [21,22,26,24];

// const numberofPeople = age.length;

// for (let i = 0; i < numberofPeople; i++){
//     if (age[i] % 2 == 0)
//         {console.log(age[i]);
//     }
// }

// // array problem

// const personarrey = ["saurabh" , "prince" , "kanika"];
// const genderarrey = ["male" , "male" , "female"];

// for(let i = 0; i<personarrey.length; i++) {
//     if(genderarrey[i] == "male")
//         console.log(personarrey[i])
    
// }

// // objects

// const user1 = {
//     firstname: "saurbh",
//     gender: "male"
// };

// const user2 = {
//     firstname: "prince",
//     gender: "male"
// };

// const user3 = {
//     firstname: "kanika",
//     gender: "female"
// };

// const user4 = {
//     firstname: "mukti",
//     gender: "female"
// };

// console.log(user3["gender"]);

// functions

// function sum(a,b){
//     // do things with the input and return an output
//     const sumvalue = a + b ;
//     return sumvalue

// }

// const value = sum(1,2)
// console.log(value);


// function sum(num1, num2 , fnTOCall) {
//     let result = num1 + num2;
//     fnTOCall(result);

// function displayResult(data) {
//     console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data) {
//     console.log("Sum's result is : " + data);
// }

// // You are only allowed to call one function after this
// // How will you displayResult of a sum

// const ans = sum(1,2,displayResult);


// //calbacks


// function calculator(a, b, type) {
//     if (type == "minus") {
//         const value = sub(a, b);
//         return value;
//     }

//     if (type == "sum") {
//         const value = sum(a, b);
//         return value;
//     }
// }

// function sum(a, b) {
//     return a + b;
// }

// function sub(a, b) {
//     return a - b;
// }

// const result = calculator(21, 3, "sum");
// console.log(result);


// //calbacks


// function calculate(a, b, operation) {
//    const ans = operation(a,b)
//    return ans;
// }

// function sum(a, b) {
//     return a + b;
// }

// function sub(a, b) {
//     return a - b;
// }

// const finalans = calculate(1, 2, sub);
// console.log(finalans);

// // claback and set timeout

// function greet(){
//     console.log("hello world")
// }



// setTimeout(greet,3*1000)