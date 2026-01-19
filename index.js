// push - מוסיפה איבר לסוף המערך
let fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits);

// unshift - מוסיפה איבר לתחילת המערך
fruits.unshift();

//pop -   -מסירה ומחזירה את האיבר האחרון
console.log(fruits);
fruits.pop();

// shift - מסירה ומחזירה את האיבר הראשון במערך
fruits.shift();

//slice
//start -is include
//last - is not include
let colors = ["red", "green", "blue", "yellow", "black"];
let newColor = colors.slice(1, 3);
console.log(newColor);

//splice - משנה את המערך המקורי ע״י הוספה, מחיקה או החלפה של איברים
//start - included
//end  - how much to remove
let days = ["Sun", "Mon", "Wed", "Thu"];
days.splice(2, 3, "Thu", "Wed");

//splice
let scores = [100, 90, 80, 70];
let score = scores.splice(2, 1);
console.log(score);

//  includes  בודקת אם ערך קיים במערך או במחרוזת ומחזירה true או false
let users = ["alice", "bob", "charlie"];
console.log(users.includes("orange")); //false
console.log(users.includes("bob")); //true

//split - מפרקת מחרוזת למערך לפי מפריד
let sentence = "JavaScript is very fun";
let newSentence = sentence.split(" ").length;
console.log(newSentence);

// join - מחברת מערך למחרוזת עם מפריד
let letters = ["H", "e", "l", "l", "o"];
let newLetters = letters.join("");
console.log(newLetters);

let text = "I love programming so much";
let words = text.split(" ");
words.splice(3, 1);
let result = words.join(" ");

console.log(result);

let shoppingList = [];
shoppingList.push("milk", "bread", "eggs");
shoppingList.shift();
console.log(shoppingList);
console.log(shoppingList.indexOf("milk")); // -1);
console.log(shoppingList.indexOf("bread")); // 0);
