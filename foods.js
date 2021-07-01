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


var arr = [4,78,54,5,6];

for (var i=0 ; i<arr.length ; i++){
    arr[i] = arr[i] * 2;
}

for (var j=0 ; j<arr.length ; j++){
    console.log(arr[j]);
}