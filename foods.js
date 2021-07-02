// var foods = []  ;

// foods.push("Pizza");
// foods.push("Burger");
// foods.push("Sandwich");
// console.log(foods);
// console.log("Length = "+foods.length);
// console.log("Popping...")
// foods.pop();
// console.log(foods);
// console.log("New Length = "+foods.length);


// console.log("UnShift")
// var foods = ["Pizza", "Burger", "Sandwich"]  ;
// console.log(foods);
// console.log("Length = "+foods.length);
// console.log("UnShifting...")
// foods.unshift("Snacks");
// console.log(foods);
// console.log("New Length = "+foods.length);

// console.log("Shift")
// var foods1 = ["Pizza", "Burger", "Sandwich"]  ;
// console.log(foods1);
// console.log("Length = "+foods1.length);
// console.log("Shifting...")
// foods1.shift("Snacks");
// console.log(foods1);
// console.log("New Length = "+foods1.length);


// var arr = [4,78,54,5,6];

// for (var i=0 ; i<arr.length ; i++){
//     arr[i] = arr[i] * 2;
// }

// for (var j=0 ; j<arr.length ; j++){
//     console.log(arr[j]);
// }


//searching
// var arr= [34,23,56,87,45,88];

// var input = parseInt(prompt("Enter the Number to find : "));

// console.log("User Input : ",input);
// var found = false;
// for (var i=0 ; i<arr.length ; i++){
//     console.log("Index " +i+ " : "+arr[i]);
    
//     if(arr[i] === input){
//         found =true;
//         console.log("Found "+input+" on index = "+i);
//         // break;
//     }
    
// }
// if (found == false){
// console.log(+input+" not found in array");  
// }


//SPLICING

// var foods = ["Pizza", "Burger", "Snacks"]  ;
// console.log(foods);
// var arr = foods.splice(1,2,"Sandwich");
// console.log(foods);
// console.log(arr);

//SLICING
// var foods = ["Pizza", "Burger", "Snacks","Fries","Sandwich"]  ;
//  console.log(foods);
//  foods.splice(1,2,"Sandwich");
//  console.log(foods);

//MATH FUNCTIONS

// var a = Math.random();
// console.log("A = "+a);

// var num1 = a * 6;
// console.log("Num1 = " +num1);

// var num2 = num1 + 1;
// console.log("Num2 = " +num2);

// var num3 = Math.floor(num2);
// console.log("Num3 = " +num3);

//DATE OBJECT

var date = new Date("2021 7 2");
console.log(date);