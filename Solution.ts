


// Problem: 1

// filterEvenNumbers 

function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((n) => n % 2 === 0);
}

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers); 



// 2nd Approach-- without return type

// function filterEvenNumbers(numbers: number[]) {
//   const evenNumbers = numbers.filter((n) => n % 2 === 0);
//   console.log(evenNumbers);
// }

// filterEvenNumbers([1, 2, 3, 4, 5, 6]); 


// Problem: 2

function reverseString(str: string) {
 
    let reversed:string = " ";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    console.log(reversed);
    
}

reverseString("typescript");


// Problem: 3

type StringOrNumber = string | number;

function checkType (value: StringOrNumber) {
  if (typeof value === "string") {
    console.log("String");
  } else {
    console.log("Number");
  }

}

checkType("Hello");
checkType(42);


// Problem : 4

function getProperty <T, K extends keyof T>(obj: T, key: K) {
    console.log(obj[key]);
}

// Sample Input:
const user = { id: 1, name: "John Doe", age: 21 };
getProperty(user, "name");



// Problem: 5

interface Book {
    title: string;
    author: string;
    publishedYear: number;
}


function toggleReadStatus (book:Book):Book & {isRead: boolean} {
    return {
        ...book,
        isRead: true
    };
}

const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
const updatedBook = toggleReadStatus(myBook);
console.log(updatedBook);


// Problem: 6


// Problem:7

function getIntersection (num1: number[], num2: number[]) {
    
    const final:number[] = [];
    for (let i = 0; i < num1.length; i++) {
        for (let j = 0; j < num2.length; j++) {
            if (num1[i] === num2[j]) {
                final.push(num1[i] as number);
                break;
            }
}
    
}
return final;

}

const intersection = getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
console.log(intersection); 










