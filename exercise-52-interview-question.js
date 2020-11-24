// Given 2 arrays, create a function that lets a user know (true/false) whether these 2 arays contain any common items.
// For eacmple:
// const array1 = ["a", "b", "c", "d"];
// const array2 = ["z", "y", "i"];
// should return false
// ----------
// const array1 = ["a", "b", "c", "x"];
// const array2 = ["z", "y", "x"];
// should return true.

// REFER to the Checklist.pdf.
// 1. Show the interviewer, if I had this example, it should return false. If I had this example, it should return true.
// // For eacmple:
// const array1 = ["a", "b", "c", "d"];
// const array2 = ["z", "y", "i"];
// should return false
// ----------
// const array1 = ["a", "b", "c", "x"];
// const array2 = ["z", "y", "x"];
// should return true.



// 2. We have 2 things we want to do with our function. One is we have 2 parameters and this function is going to return true or false. 

// Confirm with the interviewer that we have 2 inputs, which are arrays. We could also ask that if they are always to be arrays. Is it possible that the input might nobe an array? Maybe an object, or string? Confirm with the intereviewer what those cases are!

// Don't ever jump straight into coding! First explain the approach. Talk it out!

// 3. How large is this array going to get? Because if the interviewer says the array is never going to be more than 5 items, we don't have to worry about BIG-O or time complexity or space complexity. 

// We could also ask is our goal here to be as efficient as possible with our function? What's more important to us? Is time complexity more important or is space complexity more important? 

// Maybe the interviewer might tell you that we just want the most efficient function you can come up with assuming that the array can get very very large. 
// therefore here, we will have 
// 2 parameters - array - no size limit(these arrays can get really really big)
// return true or false. (we just want a boolean return)

// 4. Don't be annoying and ask too many questions. Keep time in mind. At this point, we have an information that we can move on with our assumption to start solving the problem. 

// #5. Start with the naive brute force approach. This is ALWAYS a case when an interviewer asks you a question.   

// Brute force approach = an easy solution which is not the most efficient but usually is the easiest one or the first one that comes up in mind. 

// So in our case, if we look at this during an interview with a time limit, you might say this looks like a nested loop where we're comparing a with z, a with y, then a with i. And then we go b with z, by with y, b with i and etc. So immediately this looks like we're comparing 2 different arrays and we're going to have 2 for loops. One nested on top of each other and right away, we know thae 
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

