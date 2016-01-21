describe('numeralMaker', function() {
  it("changes 1000 to m", function() {
    expect(numeralMaker(1000)).to.equal("M");
  });

  it("changes 2000 to m", function() {
    expect(numeralMaker(2000)).to.equal("MM");
  });

  it("changes 500 to d", function() {
    expect(numeralMaker(500)).to.equal("D");
  });

  it("changes 2500 to mmd", function() {
    expect(numeralMaker(2500)).to.equal("MMD");
  });

  it("changes 2594 to mmd", function() {
    expect(numeralMaker(2594)).to.equal("MMDXCIV");
  });

});
