// 1. შექმენით 5 ელემენტიანი რიცვების მასივი, console.log-ით გამოიტანეთ ამ მასივის ელემენტების საშუალო არითმეტიკული;
let myArr = [2, 4, 6, 8, 10];
let myArrLenght = myArr.length;
let sum = myArr[0] + myArr[1] + myArr[2] + myArr[3] + myArr[4];
let average = sum / myArrLenght;

// console.log(`average is ${average}`);

// 2. შექმენით 5 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის ობიექტი, რომელსაც გააჩნია name  და age property.
let myObjArr = [
	{ name: "nino", age: 10 },
	{ name: "tea", age: 15 },
	{ name: "gio", age: 20 },
	{ name: "nika", age: 25 },
	{ name: "saba", age: 22 },
];
// console.log(myObjArr);

// 3. შექმენით ობიექტი რომელსაც გააჩნია შემდეგი ველები (properties):
// firstName - სტრინგ ტიპის მნიშვნელობა
// lastName - სტრინგ ტიპის მნიშვნელობა
// address - სტრინგების მასივი
// age - რიცხვითი მნიშვნელობა
// phoneNumbers - რიცხვითი მნიშვნელობების მასივი
let person = {
	firstName: "Nino",
	lastName: "Arveladze",
	address: ["tbilisi", "kutaisi"],
	age: 20,
	phoneNumbers: ["personal - 123456", 1234789],
	phoneNumbersObj: {
		personal: 123456,
		work: 123456,
	},
};

// console.log(person);
// 4. console.log ში გამოიტანეთ სტრინგი "My name is (#3 დავალების firstName  მნიშვნელობა)", My age is (#3 დავალების age-ის მნიშვნელობა)", "My address is (#3 დავალების address-ის პირველი ელემენტის მნიშვნელობა)"

// console.log(
// 	`My name is ${person.firstName}, My age is ${person.age}, My address is ${person.address[0]}`
// );

// lesson 15

let totalPrice = 200;
let distance = 5;
let deliveryPrice = 10;

if (distance < 10) {
	console.log(`delivery price is 20$`);
}

distance = 15;

if (distance < 10) {
	console.log(`delivery price is 20$`);
} else {
	console.log(`delivery price is 100$`);
}

if (distance < 10) {
	console.log(`delivery price is 20$`);
} else if (distance >= 10 && distance < 20) {
	console.log(`delivery price is 30$`);
} else if (distance >= 20 && distance < 50) {
	console.log(`delivery price is 40$`);
} else {
	console.log(`delivery price is 100$`);
}

console.log("example text");

console.log(distance, totalPrice);

if (distance < 10 || totalPrice > 200) {
	console.log(`delivery price is 20$`);
}

distance = 30;
switch (distance) {
	case 5:
		console.log(`delivery price is 5$`);
		break;
	case 10:
	case 20:
		console.log(`delivery price is 10$`);
		break;
	default:
		console.log(`delivery price is default`);
		break;
}

console.log("example");
let message;
// console.log(message);

if (distance < 10) {
	message = `delivery price is 20$`;
	let myMessage = message;
} else {
	message = `delivery price is else`;
}

message = distance < 10 ? `delivery price is 20$` : `delivery price is else`;

console.log(message);

for (let i = 0; i < 3; i++) {
	console.log("text", i);
}

for (let i = 10; i < 100; i *= 2) {
	if (i === 40) {
		// თუ i = 40 გამოტოვე ყველაფერი რაც ქვემოთაა და გააგრძელე i-ს ახალი მნიშვნელობიდან (80-დან)
		continue;
	} else if (i % 40 == 0) {
		// 40 იყოფა 40-ზე მაგრამ რადგან ზედა ბლოკში continue არის 40-ზე ეს ნაწილი არ შესრულდება
		console.log(" იყოფა 40-ზე", i);
	} else if (i === 80) {
		// თუ i = 80 შეწყვიტე მთლიანი for ცილკი
		break;
	} else {
		// დანარჩენ შემთხვევაში გამოვა ეს ტექსტი
		console.log("text", i);
	}
}

let i = 20;

while (i < 10) {
	i++;

	if (i == "6") {
		console.log(i, "break");
		break;
	}
}

let j = 6;
do {
	console.log("do while", j);
	j++;
} while (j < 5);

let myArrFor = [2, 4, 6, 8, 10];
let myArrForLength = myArrFor.length;
console.log(myArrFor);
let sumFor = 0;

for (let index = 0; index < myArrForLength; index++) {
	sumFor = sumFor + myArrFor[index];
	console.log(sumFor, myArrFor[index]);
}

console.log(sumFor / myArrForLength);
