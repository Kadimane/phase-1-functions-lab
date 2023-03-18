function distanceFromHqInBlocks(blocks) {
    // Assuming HQ is located at block 42
    const hq = 42;
    return Math.abs(blocks - hq);
  }
  function distanceFromHqInFeet(blocks) {
    // Assuming 1 block = 264 feet
    const feetPerBlock = 264;
    const distanceInBlocks = Math.abs(blocks - 42);
    return distanceInBlocks * feetPerBlock;
  }
  function distanceTravelledInFeet(startBlock, endBlock) {
    // Assuming 1 block = 264 feet
    const feetPerBlock = 264;
    const distanceInBlocks = Math.abs(endBlock - startBlock);
    return distanceInBlocks * feetPerBlock;
  }
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let fare;
  
    if (distance <= 400) {
      fare = 0;
    } else if (distance <= 2000) {
      fare = (distance - 400) * 0.02;
    } else if (distance <= 2500) {
      fare = 25;
    } else {
      fare = 'cannot travel that far';
    }
  
    return fare;
  }
  
  
  
  
  