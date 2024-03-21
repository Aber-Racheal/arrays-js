// Assignment

// 1.Find the last element of the following arrays.
// arr1=[3,7,34,90,12]    arr2=[true, "green", "where", 12, 56]


let arr1=[3,7,34,90,12];

let last=arr1.slice(-1)

console.log(last)



let arr2=[true, "green", "where", 12, 56]

let lastOne=arr2.slice(-1);

console.log(lastOne);



// Write a JS program that will join the following array elemnts into a string.
// myPets=["Cow","Bird","Snake","Dog"];

let myPets=["Cow","Bird","Snake","Dog"];

console.log(myPets.join(" "));


// Write a JS script to sort the following array items 
// var arr3=[-5, 9,5,3,2,-3,6,8,4,1];

// In Ascending Order

var arr3=[-5, 9,5,3,2,-3,6,8,4,1];

arr3.sort((a,b) => a-b);

console.log(arr3);

// In Descending Order

arr3.sort((a,b) => b-a);

console.log(arr3)


// // Write a program to remove duplicates from the following array.
// Console the array without duplicates, and console another array that only contains the duplicates.
// let arr = ["boy", "man", "girl",            "school", "girl", "woman"];

let arr = ["boy", "man", "girl",           "school", "girl", "woman"];
function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(arr));

console.log(arr)



// Write a JS script to search for the following word in the array.
// "food"If the word is present, return it else return "the search word was not found"
// let arr5 = ["the", "way", "x", 4];

function searchWord(arr6){
    arr6 =arr6.map(item => String (item).toLowerCase());

    if(arr6.includes("food")){
        return"food"

    }

    else{
        return"the search word was not found";
    }
}

let arr5=["the","way","x",4];
console.log(searchWord(arr5));




// Write a JS script to sort the following string:let word = "renniw"
let word = "renniw"

let sortedWord=word.split("").sort().join("");

console.log(sortedWord)




// End Of Questions



