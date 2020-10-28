/******************
 * YOUR CODE HERE *
 ******************/
const onlyOdds = function(nums) {
  return nums.filter(function(num) {
    return num % 2 == 1;
  })
}

const onlyEvens = function(nums) {
  return nums.filter(function(num) {
    return num % 2 == 0;
  })
}

const shortNamesOnly = function(names) {
  return names.filter(function(name) {
    return name.length < 7;
  })
}

const sNames = function(names) {
  return names.filter(function(name) {
    return name.startsWith('S');
  })
}

const tripleAll = function(nums) {
  return nums.map(function(num) {
    return num * 3;
    })
}

const negativeValues = function(nums) {
  return nums.map(function(num) {
    return num > 0 ? num * -1 : num;
  })
}

const questionings = function(strs) {return strs.map((str) => str + '?')} 

const changeToInitials = function(names) {return names.map(
  function(name) {return name[0] + name[name.indexOf(' ') + 1]})}

const doubleEven = function(nums) {return nums.map(
  function(num) {return num % 2 === 0 ? num * 2 : num}
)}

const titleCaseNames = function(names) {return names.map(function(name) {
  return name[0].toUpperCase() + name.slice(1).toLowerCase();
  })
}

const doubleEveryOther = function(nums) {
  return nums.map(
    function(num, i) {
      return i % 2 == 1 ? num * 2 : num
      }
  )}
  
// const nums = [2, 3, 4, 5, 6]
// const test = doubleEveryOther(nums);
// test;

/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof onlyOdds === 'undefined') {
  onlyOdds = undefined;
}

if (typeof onlyEvens === 'undefined') {
  onlyEvens = undefined;
}

if (typeof shortNamesOnly === 'undefined') {
  shortNamesOnly = undefined;
}

if (typeof sNames === 'undefined') {
  sNames = undefined;
}

if (typeof tripleAll === 'undefined') {
  tripleAll = undefined;
}

if (typeof negativeValues === 'undefined') {
  negativeValues = undefined;
}

if (typeof questionings === 'undefined') {
  questionings = undefined;
}

if (typeof changeToInitials === 'undefined') {
  changeToInitials = undefined;
}

if (typeof doubleEven === 'undefined') {
  doubleEven = undefined;
}

if (typeof titleCaseNames === 'undefined') {
  titleCaseNames = undefined;
}

if (typeof doubleEveryOther === 'undefined') {
  doubleEveryOther = undefined;
}


module.exports = {
  onlyOdds,
  onlyEvens,
  shortNamesOnly,
  sNames,
  tripleAll,
  negativeValues,
  questionings,
  changeToInitials,
  doubleEven,
  titleCaseNames,
  doubleEveryOther,
}
