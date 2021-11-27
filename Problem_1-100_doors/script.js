// There are 100 doors in a row that are all initially closed. You make 100 passes by the doors. The first time through, visit every door and 'toggle' the door (if the door is closed, open it; if it is open, close it). The second time, only visit every 2nd door (i.e., door #2, #4, #6, ...) and toggle it. The third time, visit every 3rd door (i.e., door #3, #6, #9, ...), etc., until you only visit the 100th door.

// Implement a function to determine the state of the doors after the last pass. Return the final result in an array, with only the door number included in the array if it is open.

function _100Doors() {
  const doors = [];
  const finalDoors = [];

  // create 100 "doors"
  for (let i = 0; i < 101; i++) {
    if (i === 0) {
      doors.push(undefined);
    } else {
      doors.push(0);
    }
  }

  // make 100 passes and toggle doors
  for (let i = 1; i < doors.length; i++) {
    for (let j = i; j < doors.length; j += i) {
      if (doors[j] === 1) {
        doors[j] = 0;
      } else if (doors[j] === 0) {
        doors[j] = 1;
      }
    }
  }

  // find the doors open at the end
  for (let k = 1; k < doors.length; k++) {
    if (doors[k] === 1) {
      finalDoors.push(k);
    }
  }
  return finalDoors;
}

console.log(_100Doors());
