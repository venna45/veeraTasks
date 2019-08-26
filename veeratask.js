
/*2nd Question Ans:*/
  function birthdayCakeCandles(arr){
    let count =0;
    let maxValue = 0; 
    for (let i =1 ;i<arr.length;i++) {
                if (arr[i] > maxValue) {
                    maxValue = arr[i]; }
                    }
   /*  let valMax = Math.max.apply(null, arr); */
   //console.log(maxValue)
    for(let j = 0;j < arr.length; j++)
    {
     if(arr[j] == maxValue)
      {
         count++;
        }
    }
  return count;
  } alert(birthdayCakeCandles([1,5,8,9,9,8,2,9]));

/*4th Question Ans:*/
function createPhoneNumber(numbers){
  numbers.unshift('"', "(");
  numbers.splice(5, 0, ")", " ");
  numbers.splice(10, 0, "-");
  numbers.push('"');
  return numbers.join('');
}alert(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]));

/*1st Question Ans:*/
 function beautifulNumber(i,j,k){
    var count= 0;
 while(i!=j){
    var reverse =0;
 reverse = parseFloat(i.toString().split('').reverse().join(''))*Math.sign(i);
 if(Math.abs(i-reverse)%k==0){
    count++;
    i++;
}}
return count;
}
alert(beautifulNumber(5,9,2));

/*3rd Question Ans:*/
function getIndexToIns(arr, num) {
  var items = [];
  arr.sort(function(a, b) {
    return a - b;
  });
  items.forEach(function(number, index) {
    if (num <= number) {
    return index;
    }
  });
  return arr.length;
}
alert(getIndexToIns([10, 20, 30, 40, 50], 35));