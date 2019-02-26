// here we will create a "take a number" feature for a  Katz deli

var katzDeli = [];
 function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`);
  return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
 }
 
 // At the start of the day the deli is empty. So ofcourse the que is also empmty - there for we need an empty array to represent this: which is the variable "katzDeli"
 // next we build a function called "takeANumber" with two pararmeters : the line and the new name to be added to the line - The line will be repsented by the var "katzDeli" - and "name" is used for any new names added to the line.
 
 // it asked for the function to return a welcome message with the customers name as well as their place in line.
 // firstly we use the ".push" feauture to add the new customers name to the "katzDeli" array. remember this is a destrutive method. Push method also adds to the end of the list.
 // after this within the function also we ask it to return the sting "Welcome, ${name}. You are number ${katzDeli.length} in line."
 // ofcourse the ${name} is the new customers name and we use the use of the feature ".length" to tell us the length of the array which will also represent the place in the line of the new customer. 



function nowServing(katzDeli) {
  let i = 0;
  while (i < katzDeli.length) {
    i++;
  }
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else
  return (`Currently serving ${katzDeli.shift()}.`);
}	



// now to create a function called "nowServing".this function shal take the array "katzDeli" and return the first person in line. since that person is now being served. It should then remove that name from the list/array. 
// we will use a "while loop" to do this rather than a for loop since we are not sure how many times we want this loop to be executed. Since this is dependent on how many customers the deli get that day. 
// A while loop follows the format: " while ([condition]) { [loopBody]; } " 




var line = [];

 function currentLine(katzDeli) {
  let i = 0;
  while (i < katzDeli.length) {
    line.push(` `+[i+1]+`. `  + katzDeli[i])
    i++;
  }
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  } else
  return(`The line is currently:` + line);
}