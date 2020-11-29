// [1,2,3,9] sum = 8;
// [1,2,4,4] sum = 8;

// #1. So if I had these two examples, the first one should return false since no pairs equal to 8 and the second one should return true since 4+4=8.

// 2. We have 2 things we want to do with our function. One is we have 2 parameters, which is an array and an integer respectively. And this function is going to return booleon, whether it's true or false. 

// Can I assume that we have 2 inputs, which is an array and in integer? And is it always going to be an array and integer? Or is it possible that the input might not be an array and integer? Maybe an object or string or negative numbers? 

// 3. How large is this array going to get? Is our goal here to be as efficient as possible with  our function? What's more important to us? Is time complexity more important or is space compexity more important?

// 5. My brute force approach would have a nested loop where we're comparing (1,2), (1,3), (1,9), (2,1) (2,3), (2,9), (3,1), (3,2) (3,9) and see if the pairs equal to the sum. So nce we're making a pair by creating a nested loop, we're going to have a BIG O of O(n^2). 

// This is just my easy naive solution that may not be the most efficient.

// 6. We have 2 for loops. 1 nested after another. When it comes to time complexity here, it is O(n^2) because we have 2 arrays. The time will be slow. 

// Naive
function hasPairWithSum(arr, sum){
  var len = arr.length;
  for(var i =0; i<len-1; i++){
     for(var j = i+1; j<len; j++){ //second loop starting from the second number after the first and it's why we do 1+1. 
        if (arr[i] + arr[j] === sum)
            return true;
     }
  }

  return false;
}
// 7. One of the most common patterns when it comes to nested for loops is that we might be able to use something called sets. The Set object lets you store unique values of any type, whether primitive values or object references.

// example: let mySet = new Set()

// mySet.add(1)           // Set [ 1 ]
// mySet.add(5)           // Set [ 1, 5 ]
// mySet.add(5)           // Set [ 1, 5 ]
// mySet.add('some text') // Set [ 1, 5, 'some text' ]

// is there a way to turn this O(n^2), the time complexity, into something faster? Because we're doing a bit of unnecessary work where we are just keep looping (1,2), (1,3), (1,9), (2,1) (2,3), (2,9), (3,1), (3,2) and (3,9). We're doing this comparison in the same work over and over. 

// what if I had a function that takes the 1st input and it gets converted into a set and we could check each item in the set to see if the sum exists? 

// If I am able to convert the first array into a set, now, instead of having a nested loop, I can just loop through the set and just simply check if sum exists in the set. 

// 8. We're going to create a new function and we will only through the set and check if the sum-arr[i], exists in the set and if it does, we will return true and if not return false. Now before we even start coding this, I can right away sense that we're going to have a better performance than the first solution because we're goin to have only 1 for loop. 

// Remember in the first solution, we had nested for loops. In the second solution, we wil lhave 1 for loop. Therefore, the BIG O for the second solution will be O(n). This is a big saving. 

// #10. 
// Better
function hasPairWithSum2(arr, sum){
  const mySet = new Set(); //defining a new set. 
  const len = arr.length;
  for (let i = 0; i < len; i++){
    if (mySet.has(arr[i])) { //if set includes arr[i], return true and 
      return true;
    }
    // console.log("the first mySet includes: " + mySet)
    mySet.add(sum - arr[i]); //adding the value of sum-arr[i] into the set and check if that value is included in the array. 
    // console.log("the second mySet includes: " + mySet)
  }
  return false;
}

console.log(hasPairWithSum2([6, 4, 3, 2, 1, 7], 9))
// true




// #11. How should I break the code? What if the first array is a string instead of a number? Since the beginning, we just assumed that the array is going to be a number. It will give us an error by giving us false when it should be giving us true. Therefore, I also switched the second parameter into string, but still it gave me a false value. In order to make this error free, we have to convert strings into numbers/integers first. 

// console.log(hasPairWithSum2(["6", "4", "3", "2", "1", "7"], 9))
// false


// console.log(hasPairWithSum2(["6", "4", "3", "2", "1", "7"], "9"))
// false


// Can we always assume 2 params? What if I pass 0 or null in the second parameter?
// console.log(hasPairWithSum2([6, 4, 3, 2, 1, 7], 0))
// false

// console.log(hasPairWithSum2([6, 4, 3, 2, 1, 7], null))
// false

// In order to make the error free, I will make an if statement by saying that if the second param equals to 0 or null, return false. 


// 13. I'm just making some assumptions here that the function might not always be run with 2 parameters. I will test my code by running some unit tests.

// 14. looking at the code, the downside of this solution might by that this code can be a little bit more readable. Although this code is better in terms of time complexity than the first solution, when it comes ot javascript, there's actually a more readable and clearner way of doing it. I might be able to use javascript methods to simplify the process. I would google specific methods on let's say arrays to see if I can just clean up the code and make it readable. 

// maybe loop up how to use .includes function and make it more readable and concise. 

// 15. If we talk about space complexity here, we can see that in the first solution we had, we have a space complexity of O(1)/constant because we're only defining a new variable and we're just using the inputs. 

// And if we look at the second solution, we're creating a new set and we're adding the first array into the set, which takes up memory. Therefore this solution has a space complexity of O(n), which is first array. 

// If there is a limited memory or memory is expensive, although solution 2 is faster in terms of time complexity, it is more heavy in terms of space complexity.


// 9.  As code gets more and more complex, it becomes increasingly important to write in a modular way that is small bits and pieces that read in English. 

// For instance, in the second solution, what we might want to do is separate them out into different functions. Because, if a function is doing too many things, that's not a good idea. 

// When we say modular, we want to build small pieces of code that do one thing and one thing really well. Ideally a function takes in an input and returns an output and inside of that block does just one thing. If it has to do any extra actions, perhaps you have a function that lives on the outside and this function also does one thing really well. And this code creates really testable clean code that is modular.