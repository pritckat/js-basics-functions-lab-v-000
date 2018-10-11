// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  if (location >= 42) {
    return location - 42;
  }
  else if (location < 42) {
    return 42 - location;
  }
}

function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264
}

function distanceTravelledInFeet(start, stop) {
  let distance = (stop - start) * 264;
  let feet = (distance > 0) ? distance : distance * -1;
  return feet
}

function calculatesFarePrice(start, destination) {

  if (distanceTravelledInFeet(start, destination) < 400) {
    return 0
  }
}
