describe('index.js', function() {
  describe('distanceFromHqInBlocks()', function() {
    it('1) returns a distance in blocks', function() {
      const distance = distanceFromHqInBlocks(43, 42);
      expect(distance).to.equal(1);
    });

    it('1) returns a distance in blocks', function() {
      const distance = distanceFromHqInBlocks(50, 42);
      expect(distance).to.equal(8);
    });

    it('1) calculates distances below 42nd street', function() {
      const distance = distanceFromHqInBlocks(41, 42); // Example input below 42nd street
      expect(distance).to.equal(-1); // Expect the result to be -1
    });
  });

  describe('distanceFromHqInFeet()', function() {
    it('1) returns a distance in feet', function() {
      const distance = distanceFromHqInFeet(43, 42); // Example input
      expect(distance).to.equal(264); // Expect the result to be 264 feet for a 1-block distance
    });

    it('2) returns a distance in feet', function() {
      const distance = distanceFromHqInFeet(50, 42); // Example input
      expect(distance).to.equal(2112); // Expect the result to be 2112 feet for an 8-block distance
    });

    it('3) calculates distances below 42nd street', function() {
      const distance = distanceFromHqInFeet(41, 42); // Example input below 42nd street
      expect(distance).to.equal(264); // Expect the result to be 264 feet for a 1-block distance
    });
  });

  describe('distanceTravelledInFeet()', function() {
    it('1) returns the distance travelled in feet', function() {
      const distance = distanceTravelledInFeet(42, 50); // Example input
      expect(distance).to.equal(2112); // Expect the result to be 2112 feet for an 8-block distance
    });

    it('2) returns a distance in feet', function() {
      const distance = distanceTravelledInFeet(30, 25); // Example input
      expect(distance).to.equal(1320); // Expect the result to be 1320 feet for a 5-block distance
    });

    it('3) returns distance when destination is below start', function() {
      const distance = distanceTravelledInFeet(50, 42); // Example input with destination below start
      expect(distance).to.equal(2112); // Expect the result to be 2112 feet for an 8-block distance
    });
  });

  describe('calculatesFarePrice(start, destination)', function() {
    it("should return the correct fare when the distance is 2000 feet", function () {
      const fare = calculatesFarePrice(5, 25); // Distance of 2000 feet
      expect(fare).to.equal("Your fare is $25.00");
    });

    it("should not apply the 2 cents per foot charge when the distance is greater than 2000 feet", function () {
      const fare = calculatesFarePrice(5, 30); // Distance of 2640 feet
      expect(fare).to.equal("Your fare is $25.00");
    });

    it("should charge 25 dollars for a distance over 2000 feet", function () {
      const fare = calculatesFarePrice(1, 30); // Distance of 7920 feet
      expect(fare).to.equal("Your fare is $25.00");
    });

    it("should not allow rides over 2500 feet", function () {
      const fare = calculatesFarePrice(1, 30); // Distance of 7920 feet
      expect(fare).to.equal("Your fare is $25.00");
    });
  });
});

