// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  if (location >= 42) {
    return location - 42;
  }
  else if (location < 42) {
    return 42 - location;
  }
}
