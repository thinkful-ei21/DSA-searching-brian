////week 1 monday jul 23 recursion

// function sumOf(list){

//     if(list.length === 1){
//         return list[0];
//     }
//     return list[0] + sumOf(list.slice(1));
// }

// let lst = [2,4,6,8];
// console.log("problem 1")
// console.log(sumOf(lst));

/////problem 1 recursion drills

console.log("1. Counting Sheep");

function countingSheep(sheep){
    if(sheep === 0){
        return "no more sheep";
    }
    console.log(sheep, ' - Another sheep jumped over the fence');
    let currentsheep = countingSheep(sheep - 1);
    return currentsheep;
}

console.log(countingSheep(3));

console.log('+++++++++++++++++++++++++++++++++++++++++');
console.log('2. Array Double');

function arrayDouble(arr) {
// base case 
  if (!arr.length) {
    return;
  }
  // recursion
  // for each element double the value
  return arr.map(el => el*2);
}

console.log(arrayDouble([3,4,5,6]));
console.log(arrayDouble([5,30,522,-0.26]));
