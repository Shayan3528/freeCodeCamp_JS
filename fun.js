// let userInput ;

// if(userInput || "Guest"){
//     console.log("A user is present");
// }else{
//     console.log("No user detected");
// }

// const result = null ?? "default";
// console.log(result);

// const userSettings = {
//     theme :null,
//     volume:0,
//     notification:false,
// };

// let theme = userSettings.theme ?? "light";

// console.log(theme);

// let value = true && 100;

// console.log(value);

// const randomNumber = Math.round(Math.random()*(5-1)+1);

// console.log(randomNumber);
// console.log(isNaN(undefined));

// let a = 0,  b=0;

// let result = null;
// if(Number.isNaN(result)){
//     result = "Error: Division resulted is NaN";
// }

// console.log(result);

// let a  = parseFloat("  3.5.15 abc");
// let b = parseInt(" aa123abd");
// console.log( a );
// console.log(parseInt("10.99"));

// class Node{
//     constructor(value){
//         this.value = value ;
//         this.next = null;
//     }
// }

//  const person ={
//     name:"Alice",
//     age:30,
//     city:"New York",
//     job:"Designer",
//     nid:"123546",
//     contact:{
//         email:"alice@gmail.com",
//         phone:{
//             home:"123-456-7890",
//             work:"098-765-4321"
//         }
//     },
//     address:[
//         {type:"Home",street:"123 Main St",city:"Anytown"},
//         { type:"work",street:"456 Market St",city:"Workville"}
//     ],
//     greet: function() {
//         console.log("Hello, I'm " + this.name);
//     }

//  };

// console.log(person.greet());

// const questions = [
//   {
//     category: "Math",
//     question: "What is 5 + 7?",
//     choices: ["10", "12", "14"],
//     answer: "12",
//   },
//   {
//     category: "Science",
//     question: "What planet is known as the Red Planet?",
//     choices: ["Mars", "Venus", "Jupiter"],
//     answer: "Mars",
//   },
//   {
//     category: "Geography",
//     question: "Which country has the Great Wall?",
//     choices: ["China", "India", "Japan"],
//     answer: "China",
//   },
//   {
//     category: "History",
//     question: "Who was the first President of the USA?",
//     choices: ["George Washington", "Abraham Lincoln", "Thomas Jefferson"],
//     answer: "George Washington",
//   },
//   {
//     category: "Technology",
//     question: "What does CPU stand for?",
//     choices: [
//       "Central Processing Unit",
//       "Computer Personal Unit",
//       "Central Peripheral Unit",
//     ],
//     answer: "Central Processing Unit",
//   },
// ];

// function getRandomQuestion(questionsArray) {
//   let randomIndex = Math.floor(Math.random() * questionsArray.length);
//   return questionsArray[randomIndex];
// }

// function getRandomComputerChoice(CA) {
//   let randomIndex = Math.floor(Math.random() * CA.length);
//   return CA[randomIndex];
// }

// function getResults(question, computerChoice) {
//   if (question.answer === computerChoice) {
//     return "The computer's choice is correct!";
//   } else {
//     return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
//   }
// }

// let availableObject = getRandomQuestion(questions);
// let computerChoice = getRandomComputerChoice(availableObject.choices);
// let result = getResults(availableObject, computerChoice);

// console.log(availableObject);
// console.log(computerChoice);
// console.log(result);

// const person = {
//   name: "Bob",
//   age: 30,
//   address: {
//     Street: "123 Main st",
//     city: "AnyTown",
//     state: "CA",
//     permanent: {
//       Street: " 4546 Main St",
//       city: "LA",
//     },
//   },
// };

// function isObject(obj){
//     return typeof obj ==='object' && !Array.isArray(obj) && obj !==null;
// }

// for(const prop in person){
//     if(isObject(person[prop])){
//         for(const nestedProp in person[prop]){
//             console.log(person[prop][nestedProp]);
//         }
//     }else{
//         console.log(person[prop]);
//     }
// }

// const getVowelCount = (sentence)=>{
//   let vowel =["a","e","i","o","u"];
//   let count = 0;
//   let length = sentence.length;
//   for(let i =0;i<length;i++){
//     if(vowel.includes(sentence[i].toLowerCase())){
//       count++;
//     }
//   }

//   return count;
// }
// console.log(`vowels are: ${getVowelCount("Apples are tasty fruits")}`);

// const getWordCount =(sentence)=>{
//    let count = 0;
//    let arr = sentence.split(/\s+/);
//    count = arr.length;
//    return arr;
// }
// console.log(getWordCount("This a new Bang").length);

// const mutation = (arr) => {
//    const str1 = arr[0].toLowerCase();
//   const str2 = arr[1].toLowerCase();
//   for(let char of str2){
//     if(!str1.includes(char)){
//         return false;
//     }
//   }
//   return true;
// };

// console.log(mutation(["Alien", "line"]));

// const chunkArrayInGroups =(arr,num)=>{
//     const result  = [];
//     for(let i =0;i<arr.length;i+=num){
//         result.push(arr.slice(i,i+num));
//     }
//     return result;
// }

// console.log(chunkArrayInGroups(['a','b','c','d'],2));

// let contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// const lookUpProfile = (name,prop)=>{
//     for(let i =0;i<contacts.length;i++){
//         if(name ===contacts[i].firstName){
//             if(contacts[i].hasOwnProperty(prop)){
//                 return contacts[i][prop];
//             }
//             return " No such Property";
//         }
//     }
//     return "No such contact";
// }
// console.log(lookUpProfile("Sherlock", "likes"));

// Build a String Repeating Function

// const repeatStringNumTimes = (str,num)=>{
//     let repeatString="";
//     if(num<=0){
//         return "";
//     }
//     for(let i = 0;i<num;i++){
//         repeatString +=str;
//     }
//     return repeatString;
// }

// console.log(repeatStringNumTimes("abc",3));

/// Build a Missing Letter Detector 

const fearNotLetter = (str) => {
  for(let i=1;i<str.length;i++){
    if(str.charCodeAt(i) !==str.charCodeAt(i-1)+1){
        return String.fromCharCode(str.charCodeAt(i-1)+1);
    }
  }
};

console.log(fearNotLetter('abce'));

