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
  distance = (stop - start) * 264;
  distance > 0 ? distance : distance * -1;
}
