/*first of all we run all commands that needed. these should run only an one time*/
/* 1st command is: node -v for confirm node js downloading */
/* 2nd command is: npm i -g typescript for download TS */
/* 3rd command is: tsc -v for confirm TS downloading */

/* these should run in our all folders */
/* 1st command is: tsc --init for creating tsconfig.json file */
/* 2nd command is: tsc -w for watch mode on for compile our TS file in JS */
/* 3rd now all commands are for install packages:
i. npm i inquirer
ii. npm i @types/inquirer
iii. npm init --y
iv. npm i --save-dev @types/inquirer */

/*now we learn TS coding */

/*core types: */
/*let fullName : string = `My name is: Javeria`;
let age : number = 20;
let isDev : boolean = true
console.log(`${fullName}. I am ${age} years old. Is I am a developer? ${isDev}`)*/

/*operators */
/*let a : number = -1
let b : number = 3

// arithemetic operator:
console.log(` a + b = ${a + b}`)
console.log(` a - b = ${a - b}`)
console.log(` a x b = ${a * b}`)
console.log(` a / b = ${a / b}`)
console.log(` a % b = ${a % b}`)*/

// assignment operator:
// =
/*let z : number = 10
console.log(`before asigning z = ${z}`)
console.log(z = 20)
console.log(`after asigning z = ${z}`)*/
// +=
/*let num1:number = 2
let num2: number = 4
console.log(`num1 = ${num1}, and num2 = ${num2}`)
console.log(`num1 += num2 = ${num1 += num2}`)
console.log(`num1 -= num2 = ${num1 -= num2}`)
console.log(`num1 x= num2 = ${num1 *= num2}`)
console.log(`num1 /= num2 = ${num1 /= num2}`)*/

// comparison operator
/*let num1:number = 4
let num2:number = 8
console.log(`num1 = ${num1}, num2 = ${num2}`)
console.log(`num1 > num2 = ${num1 > num2}`)
console.log(`num1 < num2 = ${num1 < num2}`)
console.log(`num1 >= num2 = ${num1 >= num2}`)
console.log(`num1 <= num2 = ${num1 <= num2}`)
console.log(`num1 == num2 = ${num1 == num2}`)
console.log(`num1 === num2 = ${num1 === num2}`)
console.log(`num1 != num2 = ${num1 != num2}`)
console.log(`num1 !== num2 = ${num1 !== num2}`)*/

// if else(conditional statements) with marksheet:
/*let marks : number = -5
if(marks >= 80 && marks <= 100) {
    console.log(`A+ grade`)
}

else if(marks > 70 && marks <= 100) {
    console.log(`A`)
}

else if(marks > 60 && marks <= 100) {
    console.log(`B`)
}

else if(marks > 50 && marks <= 100) {
    console.log(`C`)
}

else if(marks > 40 && marks <= 100) {
    console.log(`D`)
}

else if(marks < 40 && marks >= 0) {
    console.log(`F`)
}

else if(marks > 100 || marks < 0){
    console.log(`Invalid marks`);
}*/

/*function */

// name function:
/*function nameFunc() : void {
    console.log("this is my first TS function")
}
nameFunc()*/

// using return keyword
/*function sumFunc(a:number, b:number) : number {
    return a + b
}
let sum:number = sumFunc(2, 3)
console.log(sum)*/

// arrow function
/*let arrFunc = () : void => {
    console.log(`javeria`)
}
arrFunc()

// nested function
let nestedFunc = (): void => {
    arrFunc()
}
nestedFunc()*/

/*let's we define type of our func */

/*function nameFunc():string {
   let fullName:string = "Javeria"
   return fullName
}

let funcVar = nameFunc()
console.log(`my name is: ${funcVar}`)

let arrFunc = ():number => {
    let marks = 74
    return marks
}

let arrFuncVar = arrFunc()
console.log(`marks = ${arrFuncVar}`)*/

/*function sum():number {
    let total:number = 2+2
    return total
}

let sumVar = sum()
console.log(sumVar)*/

/*array */

/*let nameArr : string[] = [" javeria ", " aliza ", " afnan ", " yasmeen ", " farooq"]
console.log(`my array is: ${nameArr}`);
let marks : number[] = [80 , 50 , 60 , 90.5 , 75]
console.log(`our marks array is : ${marks}`)*/

/*array methods */
/*nameArr.pop()
console.log(`after remove an element from last : ${nameArr}`)
nameArr.push('farooq')
console.log(`again add an element at last : ${nameArr}`)
nameArr.shift()
console.log(`after removing an element from start : ${nameArr}`)
nameArr.unshift("developer")
console.log(`add an element at start : ${nameArr}`);*/