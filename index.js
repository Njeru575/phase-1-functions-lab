// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  const hqBlock = 42;
  return Math.abs(someValue - hqBlock);
}

function distanceFromHqInFeet(someValue) {
  distanceFromHqInBlocks(someValue);
  const hqBlock = 42;
  const feetPerBlock = 264;
  const blocks = Math.abs(someValue - hqBlock);
  return blocks * feetPerBlock;
}

function distanceTravelledInFeet(start, destination) {
  const feetPerBlock = 264;
  const blocks = Math.abs(destination - start);
  return blocks * feetPerBlock;
}

function calculatesFarePrice(start, destination) {
  const feetPerBlock = 264;
  const distanceInFeet = Math.abs(destination - start) * feetPerBlock;
  if (distanceInFeet <= 400) {
    return 0;
  } else if (distanceInFeet > 400 && distanceInFeet < 2000) {
    return (distanceInFeet-400) * 0.02;
  } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
    return 25;
  } 
  else {
    return "cannot travel that far";
  }
}

