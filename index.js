function distanceFromHqInBlocks(current_location, hq_location) {
    return Math.abs(current_location - hq_location);
  }
  function distanceFromHqInBlocks(current_location, hq_location) {
    return Math.abs(current_location - hq_location);
  }

  function distanceFromHqInBlocks(current_location, hq_location) {
    if (current_location < 42) {
      return -1; 
    }
    return Math.abs(current_location - hq_location);
  }
  
  module.exports = { distanceFromHqInBlocks };

  function distanceFromHqInFeet(current_location, hq_location) {
    const feetInBlock = 264; // Assuming there are 264 feet in one block
    const blocks = Math.abs(current_location - hq_location);
    const distanceInFeet = blocks * feetInBlock;
    return distanceInFeet;
  }
  
  module.exports = { distanceFromHqInFeet };

  function distanceTravelledInFeet(start, destination) {
    const feetInBlock = 264; // Assuming there are 264 feet in one block
    const blocks = Math.abs(destination - start);
    const distanceInFeet = blocks * feetInBlock;
    return distanceInFeet;
  }
  
  module.exports = { distanceTravelledInFeet };

  function calculatesFarePrice(start, destination) {
    const distanceInFeet = Math.abs(start - destination) * 264; 
    if (distanceInFeet === 0) {
      return "You get a free sample!";
    }
  }
  
  module.exports = calculatesFarePrice;
  
  function calculatesFarePrice(start, destination) {
    // Calculate the distance in feet
    const distanceInFeet = Math.abs(start - destination) * 264; // 1 block is approximately 264 feet
  
    // Case 1: Gives customers a free sample
    if (distanceInFeet === 0) {
      return "You get a free sample!";
    }
  
    // Case 2: Charges 2 cents per foot when total feet traveled is between 400 and 2000
    if (distanceInFeet >= 400 && distanceInFeet <= 2000) {
      const fare = distanceInFeet * 0.02; // 2 cents per foot
      return `Your fare is $${fare.toFixed(2)}`;
    }
  
    // Case 3: Charges 25 dollars for a distance over 2000 feet
    if (distanceInFeet > 2000) {
      return "Your fare is $25.00";
    }
  
    // Case 4: Does not allow rides over 2500 feet
    if (distanceInFeet > 2500) {
      return "Rides over 2500 feet are not allowed.";
    }
  }
  
  module.exports = calculatesFarePrice;
 







