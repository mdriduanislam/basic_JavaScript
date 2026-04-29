// function addNumbers(x,y){
//     sum = x+y;
//     console.log(sum);
// }
// addNumbers(7,5);


// const totalMoney = 500;
// const perSpend = 75;
// let timeSpend = totalMoney/perSpend;
// let moneyLeft = totalMoney%perSpend;
// console.log(parseInt(timeSpend) + " times");
// console.log(moneyLeft + "tk");


// let total = 500;
// let count = 0;
// while(total>75){
//     total = total-75;
//     count++;
// }
// console.log(`${count} times`);
// console.log(`${total}tk`);

// let firstName = "Bangla";
// let lastName = "desh";
// let fullName = firstName+lastName;
// console.log(fullName);
// let name = firstName.concat("",lastName);
// console.log(name);
// console.log(typeof name);

// const input = '20';
// const num = parseInt(input);
// console.log(num);

// const age = parseInt('50f');
// const weight = parseInt('9twenty');
// const address = parseInt('tom60');
// console.log(age, weight, address);

// const sugar = parseFloat('1.22222');
// console.log(sugar);

// function heightConvertion(inch){
//     const heightFeet = parseInt(inch/12);
//     const heightInch = inch%12;
//     const result = `${heightFeet}ft ${heightInch}inch`;
//     console.log(result);
// }
// heightConvertion(75);

// const years = [1900,2000,1600,2003,2008,2020,2025,1700,1650];
// function isLeapYear(years){
//     if(years%400 == 0){
//         return true;
//     }
//     else if(years%4 == 0 && years%100 != 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// count = 0;
// while(isLeapYear=true){
//     count++;
// }
// console.log(count);

// let shirtPrice = 999;

// if(shirtPrice>1000){
//     shirtPrice = shirtPrice * .8;
//     console.log(`Here is 20% discount. Price is ${shirtPrice}`);
// }
// else{
//     console.log(`No discount. Price is ${shirtPrice}`)
// }


// function discount(age,price){
//     if(age<12){
//         price = price*0;
//         console.log(`You dont have to pay. Your bill is ${price}`);
//     }
//     else if(age>60){
//         price = price*.5;
//         console.log(`You have 50% discount. Your bill is ${price}`);
//     }
//     else{
//         console.log(price);
//     }
// }
// discount(11,4000);
// discount(51,4000);
// discount(61,4000);

// let isLeader = true;
// if (isLeader) {
// console.log("Government money is my money");
// }

// let i = 1;
// let sum = 0;
// while(i<51){
//    sum = i + sum;
//    console.log(sum);
//    i++;
// }

// let i = 20;
// let sum= 0;
// while(i<41){
//    sum = i+sum;
//    i++;
// }
// console.log(sum);


// let i = 1;
// let sum = 0;

// while(i<51){
//     if(i%3 == 0 && i%4 == 0){
//        sum = i + sum;
//        console.log(i);
//     }
//     i++;
// }
// console.log(sum);

// const family ={
//     father : {
//         name: 'Bahadur Alam',
//         Age: 65,
//         occupation: 'Retired'
//     },
//     mother:{
//         name: 'Farida Begum',
//         Age: 55,
//         occupation: 'Housewife'
//     }
// }
// const fatherAge = family.father.Age;
// const motherAge = family.mother.Age;
// const totalAge = fatherAge + motherAge;
// console.log(totalAge);

// const profile = {
//    name: "Rahim",
//    age: 28,
//    city: "Dhaka",
// };
// console.log(Object.keys(profile).includes("name"));

// const building = {
//     floors: 11,
//     address :{
//         street: "Main Road",
//         city: "Dhaka"
//     },
//     type: "Commercial"
// }

// for (const key in building){
//     const value = building[key];
//     console.log(key,value);
// }

// function lengthOfString(string){
//     return 'hey sinamika';
// }
// console.log(lengthOfString('Length of the String'));

// function numberOfElement(nums) {
// const len = nums.length;
// return len;
// }
// console.log(numberOfElement([12, 45, 78, 45, 121,254, 4, 5,34,56,67]));

// function firstLetter(word){
//     return word[1];
// }
// console.log(firstLetter('Hey'));

// function sumOfArray(array){
//     return array[0] + array[1];
// }
// console.log(sumOfArray([11,22,3,4,5]));

// function mulTwoNumbers(num1,num2){
//     let mul = num1*num2;
//     if(mul>100){
//         return mul/2;
//     }
//     else{
//         return mul;
//     }
// }
// console.log(mulTwoNumbers(10,11));

// const numbers =[3,4,8,6,10,12,5,7,11,23];
// let sum = 0;
// function sumOfArray(){
//     for(let i=0;i<array.length;i++){
//         sum = sum+array[i];
//     }
//     return sum;
// }
// console.log(sumOfArray(array));

// function sumArray(numbers){
//     for(const number of numbers){
//         if(number%2 == 0){
//             console.log(number);
//             sum = sum+number;
//         }
//     }
//     console.log(sum);
// }
// sumArray(numbers);

// const numbers =[-3,4,-8,-6,10,-12,5,7,11,23];
// let sum = 0;

// function sumArray(numbers){
//     for(const number of numbers){
//         if(number< 0){
//             console.log(number);
//             sum = sum+number;
//         }
//     }
//     console.log(sum);
// }
// sumArray(numbers);


// const numbers =[3,4,8,6,10,12,5,7,11,23];
// let mul = 1;

// function sumArray(numbers){
//     for(const number of numbers){
//         if(number%3 == 0){
//             console.log(number);
//             mul = mul*number;
//         }
//     }
//     console.log(mul);
// }
// sumArray(numbers);

// const years =[2022,2024,1933,1700,1800,1900,2000,1600,2008,2010];

// function leapYearCount(years){
//     let count = 0;
//     for(const year of years){
//         if(year%400==0 || (year%4==0 && year%100!=0)){
//             console.log(year)
//             count++;
//         }
//     }
//     return count;
// }
// console.log(leapYearCount(years));
// console.log(`The numner of leapyear in the array is ${numberOfleapYear}`);

// function leapYearCount(){
//     let count = 0;
//     for(let i=1000;i<3001;i++){
//         if(i%400==0 || (i%4==0 && i%100!=0)){
//             console.log(i);
//             count++;
//         }
//     }
//     return count;
// }
// console.log(leapYearCount());

// const array =[2,3,4,5,6,7,8,9,10,11];
// const oddArray =[];
// function oddCounter(){
//     for(const element of array){
//         if(element%2!==0){
//             oddArray.push(element);
//         }
//     }
//     console.log(oddArray);
//     let sum = 0;
//     let counter = 0;
//     for(const number of oddArray){
//         sum = sum +number;
//         counter++;
//     }
//     const average = sum/counter;
//     return average;
// }
// console.log(oddCounter());

// const array =[2,3,4,5,6,7,8,9,10,11];
// const oddDoubleArray = [];
// function oddCounter(){
//     for(let element of array){
//         if(element%2!==0){
//             element = 2*element;
//             oddDoubleArray.push(element);
//         }
//     }
//     return oddDoubleArray;
// }
// console.log(oddCounter());

// const array =[2,4,6,8,5,7];
// function oddFinder(){
//     let counter = 0;
//     for(const number of array){
//         if(number%2!=0){
//             counter++;
//         }
//     }
//     if(counter>0){
//         return 'Odd NUmbers Found';
//     }
//     else{
//         return 'No Odd Numbers Found';
//     }
// }
// console.log(oddFinder());

// let array = [2,3,4,4,5,6,7,7,8,8,3,2];
// function duplicateRemover(){
//     for(let i=0; i<array.length; i++){
//     for(let j=i+1; j<array.length; j++){
//         if(array[i]===array[j]){
//             array.splice(j,1);
//             j--;
//         }
//     }
// }
// return array;
// }
// console.log(duplicateRemover());

// const numbers = [2,3,4,4,5,6,7,7,8,8,3,2];

// function uniqueArray(array){
//     const unique = [];
//     for(const number of array){
//         if(unique.includes(number) === false){
//             unique.push(number);
//         }
//     }
//     return unique;
// }
// const arr = uniqueArray(numbers);
// console.log(arr);

// function returnArray(array=[5,10,15]){
//     const array2 =[];
//     for(let num of array){
//         num = num*2;
//         array2.push(num);
//     }
//     return array2;
// }
// const newArray = returnArray();
// console.log(newArray);


// function objectReturn(object={price:10,quantity:1}){
//     let totalPrice;
//     totalPrice = object.price*object.quantity;
//     return totalPrice;
// }
// const object = {};
// console.log(objectReturn());

// const person ={fName:'Amit',lName:'Hasan'};
// console.log(`Full Name: ${person.fName} ${person.lName}`);


// const array = [1,2,3,4,5];
// const getSum = (array) => array[0] + array[array.length -1];
// console.log(getSum(array));


// const numbers = [3, 5, 2, 45, 5, 43, 90, 32, 15];
// const arrayMax = Math.max(numbers);

// console.log(arrayMax);


// const young = {
//     name: 'Arif',
//     age: 22,
//     country: 'B baria'
// }

// const {country,...youngNew} = young;
// console.log(young);
//  console.log(youngNew);

//  const car ={
//     brand:'Toyota',
//     model:'corolla',
//     year:2020,
//  };
//  const newCar = {...car,year:2022};
//  console.log(newCar);
//  console.log(car);

// const snackPrice = [30,45,20,40,60];
// const mappedPrice = snackPrice.map(price => price*2);
// console.log(mappedPrice);

// const names =['Messi','Shakib','Ronaldo','Mbappe','Hamim'];
// const mappedName =names.filter(name =>name.length>5);
// const mappedletter = names.map(letter => letter[2]);
// const mappedfName = names.find(fletter => fletter[0]=='H');
// const eachName = names.forEach(n=>console.log(n));
// console.log(mappedName);
// console.log(mappedletter);
// console.log(mappedfName);
// console.log(eachName);

// const someWord = names.some(word => word== 'Messi');
// console.log(someWord);


// const products = [
//     {name:'Sampoo',price:100},
//     {name:'Soap',price:50},
//     {name:'Patse',price:75}
// ]
// const reducedProduct = products.reduce((sum,num)=>sum+num.price,0);
// console.log(reducedProduct);

// const numbers = [100,200,300,400,500];
// const numberMul = numbers.reduce((mul,num)=>mul+num,50);
// console.log(numberMul);

// const number = [10,70,30,40,50];
// const maxNum = number.reduce((max,num)=>num>max?num:max,number[0]);
// console.log(maxNum);

// const now = new Date();
// console.log(now);

// console.log(1);
// console.log(2);
// setTimeout(()=>{
// console.log(3)
// }, 10);
// console.log(4);
// console.log(5);
// console.log(6);


// let num = 131;
// setInterval(()=>{
// console.log(num);
// num=num+2
// ;
// }, 1000)


// let num =0;
// const intervalID = setInterval(()=>{
//     num++;
//     console.log("I am learning Javascrtpt");
//     if(num === 6){
//         clearInterval(intervalID);
//     }
// },2000);


// function factorail(n) {
//     let forFactorial = 1;
//     for(let i=1; i<=n; i++){
//         forFactorial = forFactorial * i;
//     }
//     return forFactorial;
// }

// console.log(factorail(5));

// function counter() {
//   let count = 0;

//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// const inc = counter();
// inc();
// inc();
// inc();

// function x() {
//   console.log("X start");
//   y();
//   console.log("X end");
// }

// function y() {
//   console.log("Y");
// }

// x();

// function one() {
//   two();
//   console.log("One");
// }

// function two() {
//   three();
//   console.log("Two");
// }

// function three() {
//   console.log("Three");
// }

// one();

// function test() {
//   console.log(a);
//   var a = 10;
// }
// test();

// console.log(a);
// var a = 5;
// function a() {}
// for (let i=1; i<=3; i++){
//  let str='';
//     let a=0;
//     for(let j=1; j<=3; j++){
//         if(i==j) a=i;
//         else a=0;
//         str = str + ` ${a}` ;
//     }
//   console.log(str);
// }
// var a = 5;
// function a() {}
// console.log(a);

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }


// function printNumbers(n) {
//       for (let i = 1; i <= n; i++) {
//        let str = '';
//         for (let j = 1; j <= i; j++) {
//          str+= (i==j ? i : 0)+" ";
//     }
//     console.log(str);
// }
// }
// printNumbers(5)



// let arr = [10,5,20,8,20,15,15,25,25];

// function secondLargest(arr) {
//     let largest = -Infinity;
//     let secondLargest = -Infinity;
//     for (let num of arr) {
//         if(num > largest){
//             secondLargest = largest;
//             largest = num;
//         }
//         else if(num > secondLargest && num < largest){
//             secondLargest = num;
//             num != largest;
//         }
//     }
//     return secondLargest;
// }
// console.log(secondLargest(arr) + ' and the index of ' + arr.indexOf(secondLargest(arr)));

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 0);
// }
// console.log(i);

// async function test() {
//   console.log('A');
//   await Promise.resolve();
//   console.log('B');
// }

// console.log('C');
// test();
// console.log('D');

// let string ="aabbcddex";

// for (let ch of string){
//     count = 0;
//     for (let i=0; i<string.length; i++){
//         if(ch === string[i]){
//             count++;
//         }
//     }
//     if(count==1){
//         console.log(ch);
//     }
// }

// let string ="aabbcddex";

// for (let ch of string){
//     let count = 0;
//     for (let i=0; i<string.length; i++){
//         if(ch === string[i]){
//             count++;
//         }
//     }
//     if(count==1){
//         console.log(ch);
//         break;
//     }
// }


// function counter() {
//   let count = 0;

//   return {
//     increment: function() {
//       count++;
//     },
//     getCount: function() {
//       return count;
//     }
//   };
// }

// const c = counter();
// c.increment();
// c.increment();
// console.log(c.getCount());

// function addUniqueNumbers(arr, num) {
//     if (!arr.includes(num)){
//         arr.push(num);
//     }
//     console.log(arr);
// }

// addUniqueNumbers([1,2,3], 2);

// function sortAddedArray(arr1, arr2){
//     let mergedArray = [...arr1, ...arr2];
//     let sortedArray = mergedArray.sort((a, b) => a - b);
//     return sortedArray;
// }
// console.log(sortAddedArray([4,2,3], [1,6,5]));


// let matrix = [];
// let a = 0;
// for(let j=0; j<3; j++){
//     for(let i=0; i<3; i++){
//         a++;
//         matrix.push(a);
//     }
// }
// console.log(matrix);

// function matrix(n){
//     let value;
//     for (let row=0; row<n; row++){
//         let line = '';
//         for(let col=0; col<n; col++){
//             value = row + col*n +1;
//             line = line + value +' ';
//         }
//         console.log(line);
//     }
// }
// matrix(3);

function zigZagMatrix(n){
    for(let row=0; row<n; row++){
        let line = '';
        let a = 0;
        for(let col=0; col<n; col++){
            line = line + a++ + ' ';
            }
            console.log(line);
        }
    }
zigZagMatrix(3);