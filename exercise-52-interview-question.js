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

// Confirm with the interviewer that we have 2 inputs, which are arrays. We could also ask that if they are always to be arrays. Is it possible that the input might not be an array? Maybe an object, or string? Confirm with the intereviewer what those cases are!

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

// The important thing is that you let the interviewer know that this is the brute force or the easy naive solution that may not be the most efficient. At least this way, you have the right answer, then running out of time and not even having an answer. 

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

// Is there a way to turn this O(a*b), the time complexity, into something faster? Because we're doing a bit of unncessary work where we are just keep looping a z, a y, a a and then we go b z, b y, b a and so on. We're doing this comparision in the same work over and over. 

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
// ^ this is a common pattern you will see alot when it comes to improving time complexity.  

// If I am able to convert the first array into an object, now, instead of having to loop over both arrays, I can just loop through the second array and just simply check if the property "z" exist in the object that we created. No it doesn't. Then, does the property "y" exist on this array? No it doesn't. Does a property "a" exist on this array? Yes it does. Then, it means we have a common item.

// 8. We're going to create a new function and this function is going to say, 
// const array1 = ["a", "b", "c", "x"];
// const array2 = ["z", "y", "a"];
function containsCommonItem2(arr1, arr2) {
  // I want you to loop through first array and create object where properties equal items in the array.

  // The second thing will be to loop through second array and check if item in second array exists on created object. 
  // Now before we even start coding this, I can right away sense that we're going to have a better performance than the first solution that was O(a*b) because we're going to have 2 loops, but these 2 loops AREN'T going to be nested. 

  // Remember in the first solution, we had nested for loops. In the second solution, we will have 2 separate for loops. And if you remember our Big O analysis, when we have steps one after another, instead of nested, the big o becomes a + b. We have a potential solution here and have a time complexity of a + b instead of a * b. Thoese are big savings. 

  // Although we haven't given a clear solution, we've been talking about how we solve the problem. The interviewer sees how we think, sees what steps we take, sees that were making smart critical decisions to go from understanding the problem to solving the problem in a naive way. Understanding why this might not be the best way and then start to think about possible solutions. 

  // The beauty of this approach is that no matter whether we get this part correct and maybe our assumption is wrong, we are showing the interviewer that were thinking through a problem and we're making small logical steps towards a solution. And this is a lot better than just coding right away trying a solution and to if you get it right or wrong. An interviewer is going to have a good understanding of your abilities and your thought process this way. And these are tye type of people that they want to hire.
  
  // we will come back to #9 since it is easier to demonstrate once we see the finished code. 

  // let's code the first array. We will loop through the first array, create an object where properties are going to match the items in the array. 


  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    // if there no property(so we want to check whether a map.a exists, map.b exists, map.c exists, and map.x exists, if they don't exist, we're going to add it. 

    // if (!map[i]) { the way it is right now is checking i which is 0,1,2,3. But instead, we want to check a,b,c, and x. Intead of i, it should be arr1[i].
    if (!map[arr1[i]]) {
      // what did we do here? We said that if map.a doesn't exist, in that case let's make array1[i], which is a, equal to item. 
      const item = arr1[i];
      map[item] = true;
      // we will have a property 
      // map
      // {
        // a:true
      // }

      // we will keep looping through it until we have an object called map that has all the array1 items(map a, map b, map c, map x) equals to true. 
    }
  }
  // console.log(map)
  // { a: true, b: true, c: true, x: true }


  // loop through the second array and check if item in second array exists on created object. 
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) { //if map contains the first, seond, and 3rd item in the second array that is "z", "y", and "a" as part of its property. If it's true/if it does contain them, return true.
      return true;
      }
  } 
return false
}
// now we have 2 for loops(one after another), which is always a+b versus what we had  nested for loops, which are O(a*b).  
// console.log(containsCommonItem2(array1, null));


// #11. How should I break the code? 
// What if we had a number instead of a string? Since the beginning, we just assumed that the arrays are going to contain strings.
// We want to tell the interviewer how we might be able to break this code. 

// what if the function is called with only one array?
// console.log(containsCommonItem2(array1)); 
// we get an error.

// we want to start thinking about how errors might arise because we want to make these functions as error free as possible. If you find ways to break the code, tell the interviewer possible solutions/ways to go around it such as can we assume always 2 params? What if I pass 0 or null in the second parameter?
// console.log(containsCommonItem2(array1, 0));
// false

// console.log(containsCommonItem2(array1, null));
// typeerror

// discuss with the interviewer how you may break this function and how you may improve it such as doing checks such as doing if statement. It's good to tell the interviewer what you would do. This is why you would do versus coding it and they will essentially give you full marks for it. 

// #12. using i and j for for loops is okay becuse it's a standard in javascript. However, if parameters had meanings, such as if the array1 was user array and the array2 was items array, use more useful variables/parameters might be better. Use something specific for the code. 

// #13. we kind of covered it in the #11, but you want to just check with an interviewer that we're making some assumptions here, but let them know that you're thinking about the fact that the function might not always be run with 2 arrays. How can we test this function and how would you test the function to make sure that it gives the expected result?

// This is where you might say that you're goig to test your code and run some unit tests. 

// #14. Looking at this code, I can start telling the interviewer that "the downside to this solution is that only numbers and strings and bolleans can be used correctly because we're using an object especially in javascript and adding properties a,b,c,x next to the object. However, object properties, especially the way we're using a javascript object, may not work if we are using non-literal values." I could also say, "this code can be a little bit more readable. Although this code is better in terms of time complexity, when it comes to javascript, there's actually a more readable and cleaner way of doing it." Let me show you and this is something that is language specific. That means depending on how much you know about the language that you're working with, you might be able to use methods to simplify this process. So you can tell the interviewer, I would google specific methods on let's say arrays to see if I can just clean up the code and make it readable. 

// For example, I could do the exact same function as below. I can just return arr1.some(which is a new feature) and I can use item using arrow function and I can say loop through arr2.include and check if it includes the item. 

// What did we do just here? We're using some built in javascript methods to do essentially what we've done above, which is check the first array, iterate through each item in the array and if some of them include the items in array2, just return true or false. 
const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "z"];

function containsCommonItem3(arr1, arr2) {
  return arr1.some(item => arr2.includes(item));
}

console.log(containsCommonItem3(array1, array2));
// This is what we talk about when we say there's different solutions to a problem. We now have a way to measure different solutions to a problem. 

// We can say that there's actually another solution using some of the built-in methods that comes with javascript that is some would say more readable and concise. 

// If youre working on a team that really knows their javascript, this is a lot easier to read than the previous soutions. Maybe, readability is more important. 

// We have talked about time complexity, but we haven't really talked about space complexity and this goes into a final point. 

// #15. If we talk about space complexity here, we can see that in the FIRST solution we had, we have a space complexity of O(1)/contant because we're not creating any new variables and we're just using the inputs. 
function containsCommonItem(arr1, arr2,) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true
      }
    }
  }
  return false 
}


// But if we look at the second solution, we're creating a new object. We're adding the first array in to an object(map), which takes up memory. Therefore this solution has a space complexity of O(a), which is first array. 
function containsCommonItem2(arr1, arr2) {
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) { 
      return true;
      }
  } 
return false
}

// So if an interviewer says if there's a limited memory or memory is expensive, you can tell the interviewer that although solution 2 is faster in terms of time complexity, it is more heavy in terms of space complexity. 

//# 9. As code gets more and more complex, it becomes increasingly important to write in a modular way that is small bits and pieces that read in English. A long and really hard to read code costs companies a lot of money because it's not just you working on a codebase. It's more likely tens or hundred if not thousands of developers and engineers so companies want to hire somebody that is able to write clean code that is readable that is easy for anyone to pick up code along with.

// For example, in this solution, what we might want to do is separate these out into different functions.
function containsCommonItem2(arr1, arr2) {

  // maybe creating a function here that says 
  mapArrayToObject(arr1)
  // let map = {};
  // for (let i = 0; i < arr1.length; i++) {
  //   if (!map[arr1[i]]) {
  //     const item = arr1[i];
  //     map[item] = true;
  //   }
  // }

  // and maybe another function that says compare array to object.
//   for (let j = 0; j < arr2.length; j++) {
//     if (map[arr2[j]]) { 
//       return true;
//       }
//   } 
// return false
}
// You don't really have to do this during an interview, but it's good to mention it and talk about the idea of modularizing your code. If a function is doing too many things, that's not idea. 

// When we say modular, we want to build small pieces of code that do one thing and one thing really well. Ideally a function takes in an input and returns an output and inside of that block does just one thing. If it has to do any extra actions, perhaps you have a function that lives on the outside and this function also does one thing really well. And this code creates really testable clean code that is modular. Again, this is something really good to mention and talk about in your interview.  