// global variable, pas sur que ça passe
print('give me the array size: 20');
// TODO: prompt('give me the array size: ', '20')
var SIZE = 20;

print('give me the array max number: 100');
// TODO: prompt('give me the array max number: ', '100')
var MAX = 100;

var arr = [];

for (var i = 1; i <= SIZE; i++) {
  arr.push(-1);
}

// MAIN (je ne sais pas où le foutre)
var flag = 1;

while(flag) {
  print('give me your choice (1. alea 2. user): ');
  // TODO: prompt('give me your choice (1. alea 2. user): ', '1')
  var choice = 1;

  flag = 0;

  switch(choice) {
    case 1:
      arr = alea_create_array(arr);
      break;
    case 2:
      arr = user_create_array(arr);
      break;
    default:
      flag = 1;
  }
}

print_array(arr);
print('quicksort, please wait...');
arr = quickSort(arr, 0, SIZE-1);
print_array(arr);


// functions
function print_array(arr){
  for (var i = 0; i < arr.length; i++) {
    print(arr[i]);
  }
}

function quickSort(arr, left, right){
   var len = arr.length, 
   pivot,
   partitionIndex;


  if(left < right){
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);
    
   //sort left and right
   quickSort(arr, left, partitionIndex - 1);
   quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

function partition(arr, pivot, left, right){
   var pivotValue = arr[pivot],
       partitionIndex = left;

   for(var i = left; i < right; i++){
    if(arr[i] < pivotValue){
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
}

function swap(arr, i, j){
   var temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function alea_create_array(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    arr[i] = getRandomInt(MAX);
  }
  return arr;
}

function user_create_array(arr) {
  var number = MAX;

  for (var i = arr.length - 1; i >= 0; i--) {
    // TODO : verify number that the user gives (it must be integer)
    while(number == MAX || number < 0){
      print('give me a number: ');
      // TODO: prompt('give me a number: ', '5')
      number = i;
      arr[i] = number;
    }
  }
  return arr;
}