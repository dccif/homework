/*

Question 1

Given the array, implement a function for generating a new array which doubles the quantity and price in each object.
Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.
Given the array, implement a function to calculate the total value of the items.

*/

const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

function question1_doubleAll(arr) {
  let outArr = arr.map((obj) => {
    return { ...obj };
  });
  outArr.map((obj) => {
    obj.quantity *= 2;
    obj.price *= 2;
  });
  return outArr;
}

function question1_filter(arr) {
  return arr.filter((obj) => obj.quantity > 2 && obj.price > 300);
}

function question1_total(arr) {
  return arr.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);
}

let outPut1 = question1_doubleAll(itemsObject);
let outPut2 = question1_filter(itemsObject);
let outPut3 = question1_total(itemsObject);

console.log(outPut1);
console.log(outPut2);
console.log(outPut3);

/*

Question 2

Given the string, implement a function to remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase.

*/

const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";

const expectedReturnString =
  "perhaps the easiest to understand case for reduce is to return the sum of all the elements in an array";

function question2_removeandlowercase(str) {
  return str
    .replace(/\s+|[^a-z ]/gi, " ")
    .toLocaleLowerCase()
    .trim();
}

let output4 = question2_removeandlowercase(string);

console.log(output4);

/*



Question 3

Implement a function to merge two arrays of objects on uuid, but first has uuid and name, second has uuid and role. With the not existing property, fill with null. Sort according to uuid after merge.

*/

const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];

const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

const expectedReturnArray = [
  { uuid: 1, role: "manager", name: null },
  { uuid: 2, role: "associate", name: "test" },
  { uuid: 3, role: null, name: "test3" },
  { uuid: 4, role: "engineer", name: null },
  { uuid: 5, role: null, name: "test5" },
  { uuid: 6, role: "pm", name: null },
];

function question3_merge(obj1, obj2) {
  let map = {};
  let arr = [obj1, obj2].reduce((acc, curr) => [...acc, ...curr], []);

  arr.forEach((ele) => {
    map[ele.uuid] = {
      ...{ uuid: null, role: null, name: null },
      ...map[ele.uuid],
      ...ele,
    };
  });
  arr = Object.values(map).sort((a, b) => a.uuid - b.uuid);

  return arr;
}

let outPut5 = question3_merge(first, second);

console.log(outPut5);
