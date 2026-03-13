
// // let num1 = prompt("enter the number1");
// // let num2 = prompt("enter the number2");
// // let num3 = prompt("enter the number3");
// // let num4 = prompt("enter the number4");
// // let num5 = prompt("enter the number5");
// let total =0 ;
// for( i =0 ;i<=5;i++){
//     total += number(prompt("enter the number"+i));
// }

// // let total = num1+num2+num3+num4+num5;
// if(total %5==0){
//     console.log("it is divisible ");
// }
// else{
//     console.log("not divisible");
// }


let total = 0;

for (let i = 1; i <= 5; i++) {
    total += Number(prompt("Enter number " + i));
}
console.log(total);

if (total % 5 === 0) {
    console.log("It is divisible");
} else {
    console.log("Not divisible");
}