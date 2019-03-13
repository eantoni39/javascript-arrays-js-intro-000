var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]
function addElementToBeginningOfArray (array,element) {
  var nouveau = [element,...array]
  return nouveau
}

function destructivelyAddElementToBeginningOfArray (array,element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray (array,element) {
  var nouveau = [...array,element]
  return nouveau
}

function destructivelyAddElementToEndOfArray (array,element) {
  array.push(element)
  return array
}


function accessElementInArray (array,index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.push()
  return array
}
