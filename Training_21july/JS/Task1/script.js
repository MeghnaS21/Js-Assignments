// console.log("This is Meghna");

//------LEVEL-1----------

/*
1. Declare two variables: admin and name.
Assign the value "John" to fname.
Copy the value from fname to admin.
Show the value of admin using alert (must output “John”). */

            // var admin;
            // var fname;
            // var fname="John";
            // admin = fname;
            // alert(admin);

/* 
2. Create constants for colors 
in web (hexadecimal) format. */

            // const colors={
            //     'Red': 'FF0000',
            //     'Green': '00FF00',
            //     'Blue': '0000FF',
            //     'White': 'FFFFFF'
            // }
            // console.log(colors);

/* 
3. Write a program, using the variable declarations above,
 that displays the data type for
each variable.*/

console.log(typeof admin);
console.log(typeof fname);
console.log(typeof colors);

/*
4. What will be the result for these expressions?
5 > 4
"apple" > "pineapple"
"2" > "12"
undefined == null
undefined === null
 */

console.log(5 > 4)
console.log("apple" > "pineapple")
console.log("2" > "12")
console.log(undefined == null)
console.log(undefined === null)

/*------------------------------------------level 2:--------------

1. Write a loop which prompts for a number greater than 100. If the visitor
 enters another
number – ask them to input again.
The loop must ask for a number until either the visitor enters a number 
greater than
100 or cancels the input/enters an empty line.
Here we can assume that the visitor only inputs numbers. There’s no need to
implement a special handling for a non-numeric input in this task. */

        // let num;
        // num=0;

        // while(num<=100){
        //     num = prompt("Enter a number greater than 100");
        //     if(num==" ")
        //       break;
        // }

// while(true){
//     let num=prompt("Enter a number greater than 100");
//     if(num<100){
//         continue;
//     }
//     if(num>=100)
//     {
//         break;
//     }
    
// }

/*
 2. Using if..else, write the code which gets a number via prompt and then
  shows in alert:
1, if the value is greater than zero,
-1, if less than zero,
0, if equals zero.
In this task we assume that the input is always a number.
*/

// let num;
// num=prompt("Please enter a number");
// if(num>0){
//     alert("1");
// }
// if(num<0){
//     alert("-1");
// }
// if(num==0){
//     alert("0");
// }

/*
3. Write a function min(a,b) which returns the least of two numbers a and b.
For instance:
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1 */

// function min(a, b){
//     if(a<=b)
//       return a;
//     else
//       return b;
// }

// console.log(min(3, -1));


/*
level 3:
1.2. Write a function filterRange(arr, a, b) that gets an array arr, looks 
for elements with
values higher or equal to a and lower or equal to b and return a result as 
an array.

For instance:
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered ); // 3,1 (matching values)
 */
/*
let arr=[2, 4, 7, 1, 8];

function filteredRange(arr, a, b)
{
    for(it=0; it<arr.length;it++){
        if(arr[it] >= a && arr[it]<=b){
            return(arr[it])
        }
    }
}
let filtered=filteredRange(arr, 1, 4);
alert(filtered); */

                        // function filterRange(arr, a, b) {
                        //     // added brackets around the expression for better readability
                        //     return arr.filter(item => (a <= item && item <= b));
                        //   }
                        
                        //   let arr = [2, 3, 7, 6, 9, 1];
                        
                        //   let filtered = filterRange(arr, 1, 4);
                        
                        //   alert( filtered ); 
                        
                        //   alert( arr ); 
                        
                        

  /*---------------------------------------- level 4:----------------------------||


1.Write the function camelize(str) that changes dash-separated words like “my-shortstring”
 into camel-cased “myShortString”.
That is: removes all dashes, each word after dash becomes uppercased.
Examples:
camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Hint: use split to split the string into an array, transform it and join back.

 */

//  let sentence=prompt("Please enter a string with hyphen in between words. 
//For testing purpose");


/* 
2.Create a function unique_elements(arr) that should return an array with unique items
of arr.
For instance:
function unique_elements(arr) {
 /* your code */
// }
// let strings = ["React Js", "JavaScript", "React Js", "JavaScript",
//  "JavaScript", "JavaScript", "React Js", "React Js"
// ];
// alert( unique(strings) ); 
// React Js, JavaScript


function unique_elements(strings){
    for(it=1; it<strings.length();it++){
        if(strings[it] == strings[it-1]){
            strings.remove(strings[it]);
        }
    }
}
let strings = ["React Js", "JavaScript", "React Js", "JavaScript",
    "JavaScript", "JavaScript", "React Js", "React Js" ];
alert(strings);










