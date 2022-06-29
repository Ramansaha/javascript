// level 2
// 2. Replace all the vowels in a string with uppercase vowels.
// Input string: 'Elie'
let myString = "Elie";
let temp;
let vowelStr = "aeiouAEIOU";
for (var i = 0; i < myString.length; i++)
{
    if(vowelStr.includes(myString[i]))
    {
        if (!temp)
        {
            temp = myString.substring(0,i) + myString.charAt(i).toUpperCase();
        
        }
        else
        {
            temp = temp + myString.charAt(i).toUpperCase();
        }
         
    }
    else {
        temp = temp + myString.charAt(i);
}
}
console.log(temp);

// Write a function to remove all even numbers from an Array.
// Input array: 
// [1, 3, 4, 6, 7, 8]
// Output should be array: [1, 3, 7]


function removeEven(numbers){
return numbers.filter(n => n % 2 !== 0)
}
const oddNumbers = removeEven( [1, 3, 4, 6, 7, 8]);
console.log(oddNumbers);
 
// Write a function to find the maximum number in an array.
// Input array: [1, 3, 4, 6, 7, 8, 2, 5]
// Output should be a number: 

function maxNumber(arr){
    let i;
    let max = arr[0];
    for(i = 0; i < arr.length; i++)
    {
        if(arr[i] > max){
            max = arr[i];

        }
         
    }
return max;
}
let arr = [1, 3, 4, 6, 7, 8, 2, 5];
console.log(maxNumber(arr));
