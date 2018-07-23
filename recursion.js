////week 1 monday jul 23 recursion

function sumOf(list){

    if(list.length === 1){
        return list[0];
    }
    return list[0] + sumOf(list.slice(1));
}

let lst = [2,4,6,8];
console.log("problem 1")
console.log(sumOf(lst));

/////problem 1 recursion drills
console.log("problem2");
function countingSheep(sheep){
    if(sheep === 0){
        return "no more sheep"
    }
    console.log(sheep);
    let currentsheep = countingSheep(sheep - 1) 
    
    return currentsheep
}
let sheeple = 10;
let newsheepcount = countingSheep(sheeple);

console.log(`${newsheepcount} another sheep jumped over the fence `);