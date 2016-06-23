/* exercise 1:
Write a function that outputs this: [1, 2, 5, 9, 10] */

// var nums = [5, 9, 10, 1, 2];
// nums.sort(function(a,b){
//   return a - b;
// });
// console.log(nums);




/* exercise 2:

var students = [
  { id: 1, name: "bruce",    age: 20 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 30 },
  { id: 4, name: "alex",     age: 22 }
];
// the ids of sorted array should be ordered [3, 4, 1, 2]

*/

var students = [
  { id: 1, name: "bruce",    age: 20 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 30 },
  { id: 4, name: "alex",     age: 22 }
];
var result = students.sort(function(a, b){
  var nameA = a.name;
  var nameB = b.name;
  if (nameA < nameB) {
    return -1;
  }
  else if (nameA > nameB) {
    return 1;
  }
  else {
    return b.age - a.age;
  }
});
console.log(result);
