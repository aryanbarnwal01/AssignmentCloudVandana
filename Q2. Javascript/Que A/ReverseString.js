const size = prompt("Enter the size of Array");
const numbers=[];
var i=0;
while(i<size)
{
    numbers[i]=prompt("Enter the element");
    i++;
}
numbers.sort((a, b) => b - a);
alert("Number After Sorted "+numbers);
console.log(numbers);