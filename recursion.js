////week 1 monday jul 23 recursion


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
    return [];
  }

  // recursion
  let charDouble = arr[0] * 2;
  return [charDouble, ...arrayDouble(arr.slice(1))];

  // iterative
  // return arr.map(el => el*2);
}

console.log(arrayDouble([3,4,5,6]));
console.log(arrayDouble([5,30,522,-0.26]));

console.log('+++++++++++++++++++++++++++++++++++++++++');
console.log('3. reverse string');

function stringRev(str){
    //base case 
    if (str.length < 2){
        return str;
    }
    let firststr = str[0];

    return stringRev(str.slice(1)) + firststr;

    ///stuff
    //tuffs
    //uffst
}

console.log(stringRev("stuff"));

console.log('+++++++++++++++++++++++++++++++++++++++++');
console.log('4. triangle');

function triNum(num) {
  //base case
  if (num === 1)  {
    return num;
  }
  
  // recursion
  return num + (triNum(num - 1));
}

console.log(triNum(6));

console.log('+++++++++++++++++++++++++++++++++++++++++');
console.log('5. string splitter');


function strSplitter(str){
    //base case
    if (str.length === 0){
        return;
    }
    let firstEle = str[0];
    console.log(firstEle);
    return  firstEle + strSplitter(str.slice(1)) 
      
}

console.log(strSplitter('stuff'));