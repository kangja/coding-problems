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

// So in our case, if we look at this during an interview with a time limit, you might say this looks like a nested loop where we're comparing a with z, a with y, then a with i. And then we go b with z, by with y, b with i and etc. So immediately this looks like we're comparing 2 different arrays and we're going to have 2 for loops. One nested on top of each other and right away, we know that's a Big O of O(n^2). 

// Most likely, during an interview, nested for loops is something that we want to avoid. Just telling the interviewer this solution even though it's not the best solution already shows that you're thinking clearly about the problem. And it also gives you a point from where to improve from now. You don't necesssarily have to code this part and it's usually enough just to describe how it works. But depending on your time, you may or may not want to code this as well. 

// The important thing is that you let the interviewer know that this is the brute force or the easy naive solution that may not be the most efficient. At least this way, yo have the right answer, then running out of time and not even having an answer. 

// #6. Tell why this approach is not the best. In our case, we said that the code might not be efficient or we might not have a readable code or code might be really complicated and hard to read for other developers. 

// solution for brute force to show why it is O(n^2). I'm going to just code and most likely you wonldn't do this in an interview. 

// const array1 = ["a", "b", "c", "x"];
// const array2 = ["z", "y", "a"];

// function containsCommonItem(arr1, arr2,) {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         return true
//       }
//     }
//   }
//   return false 
// }

// console.log(containsCommonItem(array1, array2))
// we have 2 for loops. 1 nested after another. When it comes to time complexity here, it is O(a*b) because we have 2 different arrays(array 1 and array2). These 2 arrays can be different sizes. We can't just say O(n^2). Instead of O(n^2), it's more like O(a*b). The time will be slow. 

// #7. One of the most common patterns when it comes to nested for loops is that you might be able to use something called Hash Tables. In JavaScript, they're called objects in order to speed things up. 

// Is there a way to turn this O(a*b), the time complexitiy, into something faster? Because we're doing a bit of unncessary work where we are just keep looping a z, a y, a a and then we go b z, b y, b a and so on. We're doing this comparision in the same work over and over. 

// What if we have a better solution?


// const array1 = ["a", "b", "c", "x"];
// const array2 = ["z", "y", "a"];

// What if we had a function that takes the 1st array? Array 1 is going to be converted to an obejct.
// array 1 ==> obj {
// a: true,
// b: true,
// c: true, 
// x: true
// }

// can we check each item in array 2 to this object and see if a property exists? Ideally, we can do something like 
// array2[index] === obj.properties.
// ^ this is a commpn pattern you will see alot when it comes to improving time complexity.  

// If I am able to convert the first array into an object, now, instead of having to loop over both arrays, I can just loop through the second array and just simply check if the property "z" exist in the object that we created. No it doesn't. Then, does the property "y" exist on this array? No it doesn't. Does a property "a" exist on this array? Yes it does. Then, it means we have a common item.

// 8. We're going to create a new function and this function is going to say, 
function containsCommonItem2(arr1, arr2) {
  // I want you to loop through first array and create object where properties equal items in the array.
  // The second thing will be to loop through second array and check if item in second array exists on created object. 
  // Now before we even start coding this, I can right away sense that we're going to have a better performance that the first solution that was O(a*b) because we're going to have 2 loops, but these 2 loops AREN'T going to be nested. 

  // Remember in the first solution, we had nested for loops. In the second solution, we will have 2 separate for loops. And if you remember our Big O analysis, when we have steps one after another, instead of nested, the big o becomes a + b. We have a potential solution here and have a time complexity of a + b instead of a * b. Thoese are big savings. 

  // Although we haven't given a clear solution, we've been talking about how we solve the problem. The interviewer sees how we think, sees what steps we take, sees that were making smart critical decisions to go from understanding the problem to solving the problem in a naive way. Understanding why this might not be the best way and then start to think about possible solutions. 

  // The beauty of this approach is that no matter whether we get this part correct and maybe our assumption is wrong, we are showing the interviewer that were thinking through a problem and we're making small logical steps towards a solution. And this is a lot better than just coding right away trying a solution and to if you get it right or wrong. An interviewer is going to have a good understanding of your abilities and your thought process this way. And these are tye type of people that they want to hire. 

}