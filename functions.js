function showMessage(){
    console.log("Hello World");
}

// showMessage();

// function multiply(num1,num2){
//     var num3 = num1 * num2;
//     console.log("Num 1 : " +num1+ "\nNum2 : "+num2);
//     console.log(num1+" * "+num2+" = "+num3);
// }

// multiply(2,3);

//Calculate

function calculateScore(sub1,sub2,sub3){
    return (sub1 + sub2 + sub3)/3;
}

function findGrade(score){
    if (score>80 && score<=100){
        console.log("Grade A");
    }

    else if (score>70 && score<=80){
        console.log("Grade B");
    }

    else if (score>60 && score<=70){
        console.log("Grade C");
    }

    else if (score<60){
        console.log("Grade F");
    }
}

var a = prompt("Enter Score of Subject 1 : ");
var b = prompt("Enter Score of Subject 2 : ");
var c = prompt("Enter Score of Subject 3 : ");

var sub1 = parseInt(a);
var sub2 = parseInt(b);
var sub3 = parseInt(c);


var score1 = calculateScore(sub1,sub2,sub3);
console.log(score1);
findGrade(score1);