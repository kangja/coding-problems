// Given 2 arrays, create a function that lets a user know (true/false) whether these 2 arays contain any common items.
// For eacmple:
// const array1 = ["a", "b", "c", "d"];
// const array2 = ["z", "y", "i"];
// should return false
// ----------
// const array1 = ["a", "b", "c", "x"];
// const array2 = ["z", "y", "x"];
// should return true.

const commonItems = (array1, array2) => {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] == array2[j]) {
        return true
      }
      else {
        return false 
      }
    }
  }
}

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "x"];

console.log(commonItems(array1, array2))

